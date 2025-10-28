'use client';

import { lazy, Suspense, useRef, useMemo, useCallback, useEffect, memo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Settings, Shield, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/components/providers/language-provider';
import { useSettingsModal } from './hooks/useSettingsModal';
import { usePerformanceMonitor, usePerformanceObserver } from './hooks/usePerformanceMonitor';
import styles from './styles/settings.module.css';
import './styles/select-overrides.css';

// Optimized lazy loading with preloading
const GeneralTab = lazy(() => import('./tabs/GeneralTab').then(m => ({ default: m.GeneralTab })));
const AdminTab = lazy(() => import('./tabs/AdminTab').then(m => ({ default: m.AdminTab })));

// Preload function for tabs
const preloadTabs = () => {
  // Use dynamic imports to preload tab components
  import('./tabs/GeneralTab');
  import('./tabs/AdminTab');
};

// Optimized Tab skeleton loader with memo
const TabSkeleton = memo(() => (
  <div className="space-y-6 animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
    <div className="space-y-4">
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
));
TabSkeleton.displayName = 'TabSkeleton';

interface SettingsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

// Memoized tabs configuration
const tabs = [
  { id: 'general', label: 'general', icon: Settings, Component: GeneralTab },
  { id: 'admin', label: 'admin', icon: Shield, Component: AdminTab },
];

export const SettingsModal = memo(function SettingsModal({ isOpen, onOpenChange }: SettingsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);
  const { t } = useLanguage();
  
  // Enable performance monitoring in development
  const { trackInteraction } = usePerformanceMonitor(
    'SettingsModal',
    process.env.NODE_ENV === 'development'
  );
  usePerformanceObserver(process.env.NODE_ENV === 'development');
  
  // Preload tabs when modal opens
  useEffect(() => {
    if (isOpen) {
      preloadTabs();
    }
  }, [isOpen]);
  
  const {
    activeTab,
    isSelectingOption,
    isInteractingWithSelect,
    setActiveTab,
    handleDialogOpenChange,
    handlePointerDownOutside,
    handleInteractOutside,
    handleEscapeKeyDown,
  } = useSettingsModal(isOpen, onOpenChange);

  // Optimized tab component selection
  const TabComponent = useMemo(() => {
    const tab = tabs.find(t => t.id === activeTab);
    return tab?.Component || GeneralTab;
  }, [activeTab]);

  // Optimized tab change handler with requestAnimationFrame and performance tracking
  const handleTabChange = useCallback((tabId: string) => {
    const endTracking = trackInteraction(`tab-change-${tabId}`);
    requestAnimationFrame(() => {
      setActiveTab(tabId);
      endTracking?.();
    });
  }, [setActiveTab, trackInteraction]);
  
  // Memoize dialog classes with proper centering
  const dialogClasses = useMemo(() => cn(
    'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
    'p-0 gap-0 max-w-3xl w-[95vw] lg:w-[90vw] bg-[#FFF1E5] dark:bg-[#212121]',
    'overflow-hidden h-[95vh] lg:h-auto max-h-[95vh] lg:max-h-[80vh]',
    'border shadow-lg rounded-lg',
    styles.settingsDialog,
    styles.accelerated
  ), []);
  
  // Memoize close button classes
  const closeButtonClasses = useMemo(() => cn(
    'absolute right-4 top-4 rounded-full p-2',
    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100',
    'hover:bg-[#FF6417] dark:hover:bg-[#FF8A4D]',
    'hover:text-white dark:hover:text-white',
    'shadow-md transition-all duration-200 focus:outline-none cursor-pointer',
    'z-[100] w-8 h-8 flex items-center justify-center lg:w-7 lg:h-7',
    styles.closeButton
  ), []);

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={handleDialogOpenChange}
    >
      <DialogContent 
        ref={dialogRef}
        className={dialogClasses}
        onPointerDownOutside={handlePointerDownOutside}
        onInteractOutside={handleInteractOutside}
        onEscapeKeyDown={handleEscapeKeyDown}
      >
        {/* Optimized close button */}
        <DialogPrimitive.Close 
          className={closeButtonClasses}
          onClick={() => onOpenChange(false)}
        >
          <X className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
          <span className="sr-only">{t('closeSidebar')}</span>
        </DialogPrimitive.Close>
        
        <DialogTitle className="sr-only">{t('settings')}</DialogTitle>
        
        <div className="flex flex-col lg:flex-row h-full lg:h-[650px]">
          {/* Optimized sidebar */}
          <div className={cn('w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[#FFE0D0] dark:border-[#2A2A2A] p-4', styles.sidebar)}>
            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 px-2 text-gray-800 dark:text-gray-100">{t('settings')}</h2>
            
            <nav className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1 overflow-x-auto lg:overflow-x-visible">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-left rounded-xl whitespace-nowrap lg:w-full min-h-[44px]",
                      styles.tabButton,
                      activeTab === tab.id 
                        ? "bg-[#FFE0D0] dark:bg-[#2A2A2A] text-gray-900 dark:text-white" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-[#FFE0D0] dark:hover:bg-[#2A2A2A]"
                    )}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{t(tab.label)}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Optimized content area */}
          <div className={cn('flex-1 p-4 lg:p-6', styles.contentArea, styles.tabContent)}>
            <Suspense fallback={<TabSkeleton />}>
              <TabComponent />
            </Suspense>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

SettingsModal.displayName = 'SettingsModal';
