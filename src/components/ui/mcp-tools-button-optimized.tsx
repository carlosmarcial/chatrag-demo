'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Hammer, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/providers/language-provider';
import { CollapsibleButton } from './collapsible-button';

// Lazy load the optimized modal with loading state
const MCPToolsModal = dynamic(
  () => import('./mcp-tools/MCPToolsModal').then(mod => ({ default: mod.MCPToolsModal })),
  {
    loading: () => (
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 shadow-xl">
          <RefreshCw className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-spin mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">Loading MCP Tools...</p>
        </div>
      </div>
    ),
    ssr: false // Modal doesn't need SSR
  }
);

interface MCPToolsButtonProps {
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
}

export function MCPToolsButton({ 
  disabled = false, 
  isActive = false,
  className
}: MCPToolsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Preload modal on hover for instant opening
  const handleMouseEnter = useCallback(() => {
    import('./mcp-tools/MCPToolsModal');
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className="relative">
        <CollapsibleButton
          icon={<Hammer className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          text={t('mcpToolsButton')}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          isActive={isOpen || isActive}
          disabled={disabled}
          className={className}
        />
      </div>

      {/* Only render modal when open (lazy loading) */}
      {isOpen && <MCPToolsModal isOpen={isOpen} onClose={handleClose} />}
    </>
  );
}