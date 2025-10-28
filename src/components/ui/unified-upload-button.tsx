import { Plus, FileText, ImageUp } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useFileUploadStore } from '@/lib/file-upload-store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { ProcessedDocument } from './permanent-doc-upload-button';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/components/providers/language-provider';

export interface UnifiedUploadButtonProps {
  disabled?: boolean;
  demoMode?: boolean;
  onTempDocUpload?: (doc: ProcessedDocument) => void;
  onProcessingStateChange?: (state: { isProcessing: boolean, name?: string, error?: string }) => void;
}

const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const SUPPORTED_DOC_TYPES = ['.pdf', '.doc', '.docx', '.txt'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function UnifiedUploadButton({ disabled, demoMode = false, onTempDocUpload, onProcessingStateChange }: UnifiedUploadButtonProps) {
  const { setFile } = useFileUploadStore();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  
  // Debug logging
  console.log('[UnifiedUploadButton] demoMode:', demoMode);
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';
  const { t } = useLanguage();
  
  const dropdownBgColor = isDarkMode ? '#2F2F2F' : '#EFE1D5';
  const hoverColor = isDarkMode ? '#424242' : '#E5D6C9';
  const textColor = isDarkMode ? '#E6E6E6' : '#444';
  const iconColor = isDarkMode ? '#9E9E9E' : '#444';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setIsOpen(false); // Close dropdown after file selection
    }
    e.target.value = '';
  };

  const handleTempDocUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsOpen(false); // Close dropdown after file selection
      
      // Set a safety timeout to clear processing state if it takes too long
      const safetyTimeout = setTimeout(() => {
        console.log('Document processing timeout reached, clearing processing state');
        onProcessingStateChange?.({ isProcessing: false });
      }, 30000); // 30 seconds timeout
      
      try {
        console.log(`Starting to process file: ${file.name}`);
        // Set processing state to true when starting
        onProcessingStateChange?.({ isProcessing: true, name: file.name });
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('isTemporary', 'true');
        
        console.log('Sending request to process document...');
        const response = await fetch('/api/process-document', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          throw new Error('Failed to process document');
        }
        
        console.log('Response received, parsing JSON...');
        const processedDoc = await response.json();
        if (processedDoc.error) {
          throw new Error(processedDoc.error);
        }
        
        console.log('Document processed successfully, calling onTempDocUpload');
        onTempDocUpload?.(processedDoc);
        
        console.log('Setting processing state to false');
        // Set processing state to false when done
        onProcessingStateChange?.({ isProcessing: false });
        
        console.log('Document processing complete');
      } catch (error) {
        console.error('Error processing temporary document:', error);
        // Also set processing state to false on error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error processing document';
        onProcessingStateChange?.({ isProcessing: false, error: errorMessage });
      } finally {
        // Clear the safety timeout
        clearTimeout(safetyTimeout);
      }
    }
    e.target.value = '';
  };

  return (
    <>
      <input
        type="file"
        ref={imageInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept={SUPPORTED_IMAGE_TYPES.join(',')}
        disabled={disabled}
      />
      <input
        type="file"
        ref={docInputRef}
        onChange={handleTempDocUpload}
        className="hidden"
        accept={SUPPORTED_DOC_TYPES.join(',')}
        disabled={disabled}
      />
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className={cn(
              "dropdown-trigger inline-flex h-9 w-9 items-center justify-center rounded-tl-xl rounded-tr-xl rounded-bl-3xl rounded-br-xl bg-transparent border-[0.5px] border-[#D4C0B6] dark:border-gray-600 p-2 hover:bg-[#FFE0D0] dark:hover:bg-[#424242] transition-colors group relative mr-0.5",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <Plus className="h-5 w-5 text-gray-700 dark:text-gray-300 transform translate-x-[1px] -translate-y-[1px]" />
            <div className="pointer-events-none absolute 
              sm:left-1/2 sm:-translate-x-1/2
              max-[639px]:left-0 max-[639px]:translate-x-0
              sm:top-[calc(100%+4px)] 
              max-[639px]:bottom-[calc(100%+4px)] max-[639px]:top-auto
              px-2 py-1 text-xs font-medium text-white dark:text-[#E6E6E6] 
              bg-[#FF6417] dark:bg-[#1A1A1A] rounded-md opacity-0 
              group-hover:opacity-100 whitespace-nowrap desktop-narrow-tooltip">
              {t('uploadFiles')}
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-64 rounded-xl z-[70]"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: 0,
            overflow: 'hidden',
            borderRadius: '12px'
          }}
        >
          <div style={{ 
            padding: '8px',
            backgroundColor: dropdownBgColor
          }}>
            <div
              onClick={() => {
                console.log('[Upload Image Click] demoMode:', demoMode);
                if (demoMode) {
                  console.log('[Upload Image] Showing demo modal');
                  setIsOpen(false);
                  setShowDemoModal(true);
                } else {
                  console.log('[Upload Image] Opening file picker');
                  imageInputRef.current?.click();
                }
              }}
              onMouseEnter={() => setHoveredItem('image')}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-center gap-2 cursor-pointer text-sm w-full"
              style={{
                backgroundColor: hoveredItem === 'image' ? hoverColor : 'transparent',
                padding: '12px 16px',
                margin: '2px 0',
                borderRadius: '8px',
                color: textColor
              }}
            >
              <ImageUp className="h-[18px] w-[18px] flex-shrink-0" style={{ color: iconColor }} />
              <span>{t('uploadImage')}</span>
            </div>
            
            <div
              onClick={() => {
                console.log('[Upload Document Click] demoMode:', demoMode);
                if (demoMode) {
                  console.log('[Upload Document] Showing demo modal');
                  setIsOpen(false);
                  setShowDemoModal(true);
                } else {
                  console.log('[Upload Document] Opening file picker');
                  docInputRef.current?.click();
                }
              }}
              onMouseEnter={() => setHoveredItem('document')}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-center gap-2 cursor-pointer text-sm w-full"
              style={{
                backgroundColor: hoveredItem === 'document' ? hoverColor : 'transparent',
                padding: '12px 16px',
                margin: '2px 0',
                borderRadius: '8px',
                color: textColor
              }}
            >
              <FileText className="h-[18px] w-[18px] flex-shrink-0" style={{ color: iconColor }} />
              <span>{t('uploadTemporaryDocument')}</span>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Demo restriction modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Document Upload Restricted</DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="space-y-3">
              <div>This feature is only available in the full version of ChatRAG.</div>
              <div className="text-sm text-muted-foreground">
                Upload and chat with any document using advanced RAG technology. Process PDFs, Word docs, images, and more. Extract insights, get answers, and interact with your documents like never before with the full version of ChatRAG.
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
