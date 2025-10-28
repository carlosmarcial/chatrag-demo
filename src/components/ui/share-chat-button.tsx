'use client';

import { Link } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';
import { useChatStore } from '@/lib/chat-store';
import { useShallow } from 'zustand/react/shallow';
import { useGhostModeStore } from '@/lib/ghost-mode-store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { createClient as createBrowserClient } from '@/lib/supabase/client';
import { useLanguage } from '@/components/providers/language-provider';
import { PortalTooltip } from './portal-tooltip';

interface ShareChatButtonProps {
  className?: string;
  demoMode?: boolean;
}

export function ShareChatButton({ className, demoMode = false }: ShareChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const { theme } = useTheme();
  const { currentChatId, chats } = useChatStore(
    useShallow((s) => ({ currentChatId: s.currentChatId, chats: s.chats }))
  );
  const { isGhostMode } = useGhostModeStore();
  const isDarkMode = theme === 'dark';
  const { t } = useLanguage();

  // Add useEffect to reset state when currentChatId changes
  useEffect(() => {
    // Reset state whenever the current chat ID changes
    // This ensures the modal is fresh when opened for a different chat
    // Debug: currentChatId changed, resetting state
    setShareUrl(null);
    setIsLoading(false);
    setError(null);
    // Optionally close the dialog if it was open for the previous chat
    // setIsOpen(false); // Uncomment if you want the dialog to close on chat switch
  }, [currentChatId]);

  // In demo mode, always show the button (regardless of chat state)
  // In normal mode, only show when there's a valid saved chat
  const currentChat = currentChatId ? chats.find(chat => chat.id === currentChatId) : null;
  const isGhostChat = currentChatId?.startsWith('ghost-');
  const isSavedChat = Boolean(currentChat && !isGhostChat);
  
  // Don't render in ghost mode
  if (isGhostMode) {
    return null;
  }

  const handleShare = async () => {
    if (!currentChatId) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Create a Supabase client instance
      const supabase = createBrowserClient(); 
      
      // Get the current session using the created client
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Not authenticated');
      }

      const response = await fetch('/api/chats/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({ chatId: currentChatId }),
      });

      if (!response.ok) {
        throw new Error('Failed to share chat');
      }

      const { shareId } = await response.json();
      const shareUrl = `${window.location.origin}/shared/${shareId}`;
      setShareUrl(shareUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to share chat');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shareUrl) return;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You might want to add a toast notification here
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  return (
    <>
      <PortalTooltip content={t('shareChat')}>
        <button
          onClick={() => {
            if (demoMode) {
              setShowDemoModal(true);
            } else {
              setIsOpen(true);
            }
          }}
          disabled={!demoMode && !currentChatId}
          className={cn(
            "flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-200 bg-transparent hover:bg-[#FFE0D0] dark:bg-transparent dark:hover:bg-[#424242] transition-colors backdrop-blur-md rounded-lg",
            className
          )}
        >
          <Link className="h-5 w-5" />
          <span className="sr-only">Share chat</span>
        </button>
      </PortalTooltip>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-[#FFFAF5] dark:bg-[#212121]">
          <DialogHeader>
            <DialogTitle>{t('shareChatTitle')}</DialogTitle>
            <DialogDescription>
              {shareUrl 
                ? t('shareChatDescription')
                : t('generateShareLinkDescription')}
            </DialogDescription>
          </DialogHeader>
          
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {!shareUrl ? (
            <Button
              onClick={handleShare}
              disabled={isLoading}
              className="bg-[#FF6417] hover:bg-[#E05A15] text-white dark:bg-[#2A2A2A] dark:hover:bg-[#1A1A1A]"
            >
              {isLoading ? t('generatingLink') : t('generateShareLink')}
            </Button>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="flex-1 p-2 rounded-md bg-[#FFF0E8] dark:bg-[#1A1A1A] border border-[#E0D5C9] dark:border-[#3A3A3A] text-gray-900 dark:text-white"
                />
                <Button
                  onClick={handleCopy}
                  className="bg-[#FF6417] hover:bg-[#E05A15] text-white dark:bg-[#2A2A2A] dark:hover:bg-[#1A1A1A]"
                >
                  {t('copy')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Demo restriction modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="sm:max-w-md bg-[#FFFAF5] dark:bg-[#212121]">
          <DialogHeader>
            <DialogTitle>Share Chat Restricted</DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="space-y-3">
              <div>This feature is only available in the full version of ChatRAG.</div>
              <div className="text-sm text-muted-foreground">
                Share your conversations via public links with the full version of ChatRAG. This feature requires user authentication and saved chats, which are included in the complete ChatRAG package.
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
