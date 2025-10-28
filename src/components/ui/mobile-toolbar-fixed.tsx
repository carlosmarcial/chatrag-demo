'use client';

import React from 'react';
import { MoreHorizontal, Sun, Moon, Type, Link, HardDriveUpload, MessageCircle, Ghost } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';
import { useChatStore } from '@/lib/chat-store';
import { useShallow } from 'zustand/react/shallow';
import { useLanguage } from '@/components/providers/language-provider';
import type { ProcessedDocument } from './document-dashboard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { MobileTextSizeModal } from './mobile-text-size-modal';
import { ShareChatButton } from './share-chat-button';
import { DocumentDashboard } from './document-dashboard';
import { useAdminStore } from '@/lib/admin-store';
import { WhatsAppConnectionButton } from './whatsapp-connection-button';
import { env } from '@/lib/env';
import { useGhostModeStore } from '@/lib/ghost-mode-store';

interface MobileToolbarProps {
  className?: string;
}

export function MobileToolbarFixed({ className }: MobileToolbarProps) {
  const [isPermanentDocProcessing, setIsPermanentDocProcessing] = React.useState(false);
  const [permanentDoc, setPermanentDoc] = React.useState<ProcessedDocument | null>(null);
  const { theme, setTheme } = useTheme();
  const { currentChatId, chats } = useChatStore(
    useShallow((s) => ({ currentChatId: s.currentChatId, chats: s.chats }))
  );
  const { t } = useLanguage();
  const { isAdmin } = useAdminStore();
  const { isGhostMode, toggleGhostMode, hasUnsavedGhostMessages } = useGhostModeStore();
  
  // Check if document dashboard should be hidden
  const hideDocumentDashboard = process.env.NEXT_PUBLIC_HIDE_DOCUMENT_DASHBOARD === 'true';
  const readOnlyDocDashboardEnabled = process.env.NEXT_PUBLIC_READ_ONLY_DOCUMENTS_ENABLED === 'true';
  const showDocuments = !hideDocumentDashboard && (isAdmin || readOnlyDocDashboardEnabled);
  const isDarkMode = theme === 'dark';
  const [open, setOpen] = React.useState(false);
  const [textSizeModalOpen, setTextSizeModalOpen] = React.useState(false);
  
  // Define colors to match other dropdown menus
  const dropdownBgColor = isDarkMode ? '#2F2F2F' : '#EFE1D5';
  const hoverBgColor = isDarkMode ? '#424242' : '#E5D6C9';
  const textColor = isDarkMode ? '#E6E6E6' : '#444';
  
  // Show TextSizeSlider whenever there's a current chat (saved or ghost)
  const hasActiveChat = Boolean(currentChatId);

  const handlePermanentDocProcessingStart = (fileName: string) => {
    setIsPermanentDocProcessing(true);
    setPermanentDoc(null);
  };

  const handlePermanentDocProcessingComplete = (processedDoc: ProcessedDocument) => {
    setPermanentDoc(processedDoc);
    setIsPermanentDocProcessing(false);
  };

  const handlePermanentDocProcessingError = (error: Error) => {
    console.error('Permanent document processing error:', error);
    setPermanentDoc(null);
    setIsPermanentDocProcessing(false);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleTextSizeClick = () => {
    setOpen(false);
    // Open text size modal after menu closes
    setTimeout(() => {
      setTextSizeModalOpen(true);
    }, 150);
  };

  const handleShareClick = () => {
    setOpen(false);
    // Trigger share button click after menu closes
    setTimeout(() => {
      const shareButton = document.querySelector('[data-mobile-share-trigger] button') as HTMLButtonElement;
      if (shareButton) {
        shareButton.click();
      }
    }, 150);
  };

  const handleDocumentsClick = () => {
    setOpen(false);
    // Trigger documents button click after menu closes
    setTimeout(() => {
      const documentsButton = document.querySelector('[data-mobile-documents-trigger] button') as HTMLButtonElement;
      if (documentsButton) {
        documentsButton.click();
      }
    }, 150);
  };

  const handleGhostModeToggle = () => {
    setOpen(false);
    // Toggle without confirmation when enabling
    setTimeout(() => {
      if (!isGhostMode) {
        // Enabling ghost mode - no confirmation needed
        toggleGhostMode();
      } else if (hasUnsavedGhostMessages) {
        // Disabling with unsaved messages - confirm only in this case
        const confirmDisable = window.confirm(
          'Exit Ghost Mode? Current conversation will be cleared and not saved.'
        );
        if (confirmDisable) {
          toggleGhostMode();
        }
      } else {
        // Disabling without messages - no confirmation needed
        toggleGhostMode();
      }
    }, 150);
  };

  const handleWhatsAppClick = () => {
    setOpen(false);
    // Trigger WhatsApp button click after menu closes
    setTimeout(() => {
      const whatsappButton = document.querySelector('[data-mobile-whatsapp-trigger] button') as HTMLButtonElement;
      if (whatsappButton) {
        whatsappButton.click();
      }
    }, 150);
  };

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg transition-colors group relative",
              "bg-[#FFE0D0]/30 hover:bg-[#FFE0D0] dark:bg-[#2F2F2F]/30 dark:hover:bg-[#424242]",
              "text-gray-700 dark:text-gray-200 backdrop-blur-md",
              className
            )}
          >
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">Open toolbar</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-80 p-0"
          style={{
            backgroundColor: dropdownBgColor,
            border: `1px solid ${isDarkMode ? '#3A3A3A' : '#D0C5B9'}`,
            zIndex: 10000
          }}
        >
          <DropdownMenuLabel className="px-4 py-3" style={{ color: textColor }}>
            {t('tools')}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="mx-0" />
          
          {/* Theme Toggle - Always visible */}
          <button
            onClick={handleThemeToggle}
            className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
            style={{ 
              backgroundColor: 'transparent',
              color: textColor 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span className="text-sm font-medium">{t('themeLabel')}</span>
            <div className="w-10 h-10 flex items-center justify-center">
              {theme === 'light' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </div>
          </button>

          {/* Text Size - Only show when there's an active chat */}
          {hasActiveChat && (
            <button
              onClick={handleTextSizeClick}
              className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
              style={{ 
                backgroundColor: 'transparent',
                color: textColor 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="text-sm font-medium">{t('textSizeLabel')}</span>
              <div className="w-10 h-10 flex items-center justify-center">
                <Type className="h-5 w-5" />
              </div>
            </button>
          )}

          {/* Share Chat - Only show when there's an active chat and not in ghost mode */}
          {currentChatId && !isGhostMode && (
            <button
              onClick={handleShareClick}
              className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
              style={{
                backgroundColor: 'transparent',
                color: textColor
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="text-sm font-medium">{t('shareLabel')}</span>
              <div className="w-10 h-10 flex items-center justify-center">
                <Link className="h-5 w-5" />
              </div>
            </button>
          )}

          {/* Ghost Mode Toggle */}
          <button
            onClick={handleGhostModeToggle}
            className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
            style={{
              backgroundColor: isGhostMode ? (isDarkMode ? '#6B46C1' : '#9333EA') + '20' : 'transparent',
              color: isGhostMode ? (isDarkMode ? '#A78BFA' : '#7C3AED') : textColor
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isGhostMode ? (isDarkMode ? '#6B46C1' : '#9333EA') + '30' : hoverBgColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isGhostMode ? (isDarkMode ? '#6B46C1' : '#9333EA') + '20' : 'transparent'}
          >
            <span className="text-sm font-medium">
              {isGhostMode ? 'Ghost Mode Active' : 'Ghost Mode'}
            </span>
            <div className="w-10 h-10 flex items-center justify-center">
              <Ghost className="h-5 w-5" />
            </div>
          </button>

          {/* Documents - Only show if not hidden and user has access */}
          {showDocuments && (
            <button
              onClick={handleDocumentsClick}
              className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
              style={{ 
                backgroundColor: 'transparent',
                color: textColor 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="text-sm font-medium">{t('documentsLabel')}</span>
              <div className="w-10 h-10 flex items-center justify-center">
                <HardDriveUpload className="h-5 w-5" />
              </div>
            </button>
          )}

          {/* WhatsApp - Only show if enabled */}
          {env.NEXT_PUBLIC_WHATSAPP_ENABLED === 'true' && (
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-between px-4 py-3 transition-colors outline-none"
              style={{ 
                backgroundColor: 'transparent',
                color: textColor 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="text-sm font-medium">WhatsApp</span>
              <div className="w-10 h-10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
            </button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Text Size Modal */}
      <MobileTextSizeModal 
        open={textSizeModalOpen} 
        onOpenChange={setTextSizeModalOpen} 
      />

      {/* Hidden buttons that get triggered by the menu items */}
      <div style={{ position: 'fixed', top: '-9999px', left: '-9999px' }}>
        <div data-mobile-share-trigger>
          <ShareChatButton />
        </div>
        <div data-mobile-documents-trigger>
          <DocumentDashboard
            disabled={isPermanentDocProcessing}
            isActive={Boolean(permanentDoc)}
            readOnly={!isAdmin && readOnlyDocDashboardEnabled}
            onProcessingStart={handlePermanentDocProcessingStart}
            onProcessingComplete={handlePermanentDocProcessingComplete}
            onProcessingError={handlePermanentDocProcessingError}
          />
        </div>
        <div data-mobile-whatsapp-trigger>
          <WhatsAppConnectionButton />
        </div>
      </div>
    </>
  );
}