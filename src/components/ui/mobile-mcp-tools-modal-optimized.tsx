'use client';

import dynamic from 'next/dynamic';
import { RefreshCw } from 'lucide-react';

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

// Preload function moved outside component for proper export
export const preloadModal = () => {
  import('./mcp-tools/MCPToolsModal');
};

interface MobileMCPToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMCPToolsModal({ isOpen, onClose }: MobileMCPToolsModalProps) {
  return <MCPToolsModal isOpen={isOpen} onClose={onClose} />;
}