"use client"

import * as React from "react"
import { X, Download } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
  showDownload?: boolean
}

export function ImageModal({ 
  src, 
  alt, 
  isOpen, 
  onClose, 
  showDownload = true 
}: ImageModalProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    if (isDownloading) return; // Prevent multiple downloads
    
    setIsDownloading(true);
    try {
      // Fetch the image as a blob
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      // Create object URL and download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Generate filename from alt text or URL
      const filename = alt 
        ? `${alt.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${getImageExtension(src)}`
        : `image_${Date.now()}.${getImageExtension(src)}`;
      
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Fallback to simple download attempt
      const link = document.createElement('a');
      link.href = src;
      link.download = alt || 'image';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
    }
  };

  // Helper function to get image extension from URL
  const getImageExtension = (url: string): string => {
    const match = url.match(/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i);
    return match ? match[1].toLowerCase() : 'png';
  };

  // Simple VisuallyHidden component for accessibility
  const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
    <span
      className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
      style={{
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
      }}
    >
      {children}
    </span>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        ref={dialogRef}
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none shadow-none"
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
      >
        <VisuallyHidden>
          <DialogTitle>{alt || 'Image viewer'}</DialogTitle>
        </VisuallyHidden>
        
        <div className="relative flex items-center justify-center">
          {/* Button container positioned in top-right corner of the modal */}
          <div className="absolute top-4 right-4 z-[100] flex gap-2">
            {/* Download button */}
            {showDownload && (
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDownload();
                }}
                disabled={isDownloading}
                className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white border-none disabled:opacity-50 disabled:cursor-not-allowed"
                title={isDownloading ? "Downloading..." : "Download image"}
              >
                {isDownloading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                <span className="sr-only">{isDownloading ? "Downloading..." : "Download"}</span>
              </Button>
            )}
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white border-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Image */}
          <Image
            src={src}
            alt={alt}
            width={2048}
            height={2048}
            unoptimized
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 
