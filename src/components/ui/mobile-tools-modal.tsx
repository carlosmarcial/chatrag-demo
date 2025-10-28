'use client';

import React from 'react';
import { X, Globe, Palette, Video, Box, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobileTools } from '@/contexts/mobile-tools-context';
import { useLanguage } from '@/components/providers/language-provider';
import { motion, AnimatePresence } from 'framer-motion';

// Tool definitions with their display information
interface ToolItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  requiresConfig?: boolean;
  enabled?: boolean;
}

interface MobileToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToolSelect: (toolId: string) => void;
  // Props for checking which tools are enabled
  isWebSearchEnabled?: boolean;
  isImageGenerationEnabled?: boolean;
  isVideoGenerationEnabled?: boolean;
  is3DGenerationEnabled?: boolean;
  isMCPToolsEnabled?: boolean;
}

export function MobileToolsModal({
  isOpen,
  onClose,
  onToolSelect,
  isWebSearchEnabled = true,
  isImageGenerationEnabled = true,
  isVideoGenerationEnabled = true,
  is3DGenerationEnabled = true,
  isMCPToolsEnabled = true,
}: MobileToolsModalProps) {
  const { t } = useLanguage();

  // Define available tools based on environment variables and props
  const tools: ToolItem[] = [
    {
      id: 'web-search',
      name: t('searchWeb') || 'Web Search',
      description: 'Search the internet for current information',
      icon: <Globe className="h-6 w-6" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
      enabled: isWebSearchEnabled,
    },
    {
      id: 'image-generation',
      name: t('imageGenerate') || 'Create Image',
      description: 'Generate images with AI',
      icon: <Palette className="h-6 w-6" />,
      bgColor: 'bg-yellow-500',
      textColor: 'text-white',
      requiresConfig: true,
      enabled: isImageGenerationEnabled,
    },
    {
      id: 'video-generation',
      name: t('videoGenerate') || 'Create Video',
      description: 'Generate videos with AI',
      icon: <Video className="h-6 w-6" />,
      bgColor: 'bg-orange-600',
      textColor: 'text-white',
      requiresConfig: true,
      enabled: isVideoGenerationEnabled,
    },
    {
      id: '3d-generation',
      name: t('threeDModel') || '3D Model',
      description: 'Create 3D models from images',
      icon: <Box className="h-6 w-6" />,
      bgColor: 'bg-red-500',
      textColor: 'text-white',
      requiresConfig: true,
      enabled: is3DGenerationEnabled,
    },
    {
      id: 'mcp-tools',
      name: t('mcpToolsButton') || 'MCP Tools',
      description: 'Access specialized tools and integrations',
      icon: <Hammer className="h-6 w-6" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-white',
      enabled: isMCPToolsEnabled,
    },
  ].filter(tool => tool.enabled);

  const handleToolClick = (toolId: string) => {
    // Tools that require configuration should open secondary modal
    const toolsRequiringConfig = ['image-generation', 'video-generation'];
    
    if (toolsRequiringConfig.includes(toolId)) {
      // For tools requiring config, just call onToolSelect which will handle opening config modal
      onToolSelect(toolId);
    } else {
      // For simple tools and 3D generation, directly handle them
      onToolSelect(toolId);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[100]"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, type: "spring", damping: 25, stiffness: 400 }}
          className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#1A1A1A] rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {'Tools'}
            </h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label={t('closeSidebar') || 'Close'}
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Tools Grid */}
          <div className="p-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => handleToolClick(tool.id)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-200",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    "shadow-sm hover:shadow-md",
                    "flex flex-col h-[120px]",
                    tool.bgColor
                  )}
                >
                  {/* Tool Icon */}
                  <div className={cn("mb-2", tool.textColor)}>
                    {tool.icon}
                  </div>

                  {/* Tool Name */}
                  <h3 className={cn("font-medium text-sm mb-1", tool.textColor)}>
                    {tool.name}
                  </h3>

                  {/* Tool Description */}
                  <p className={cn("text-xs opacity-90", tool.textColor)}>
                    {tool.description}
                  </p>

                </motion.button>
              ))}
            </div>

            {/* Empty state if no tools */}
            {tools.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-400 dark:text-gray-600 mb-2">
                  <Hammer className="h-8 w-8 mx-auto" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {t('noToolsAvailable') || 'No tools available'}
                </p>
              </div>
            )}
          </div>

          {/* Safe area padding for mobile devices */}
          <div className="h-[env(safe-area-inset-bottom)] bg-white dark:bg-[#1A1A1A]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 