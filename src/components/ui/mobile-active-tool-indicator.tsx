'use client';

import React from 'react';
import { X, Globe, Palette, Video, Box, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileActiveToolIndicatorProps {
  isVisible: boolean;
  toolType: 'web-search' | 'image-generation' | 'video-generation' | '3d-generation' | 'mcp-tools' | null;
  onCancel: () => void;
  className?: string;
}

// Tool configuration with EXACT same icons as desktop
const TOOL_CONFIG = {
  'web-search': {
    icon: Globe,
    color: 'text-blue-500',
  },
  'image-generation': {
    icon: Palette,
    color: 'text-yellow-500',
  },
  'video-generation': {
    icon: Video,
    color: 'text-orange-600',
  },
  '3d-generation': {
    icon: Box,
    color: 'text-red-500',
  },
  'mcp-tools': {
    icon: Hammer,
    color: 'text-purple-500',
  },
} as const;

export function MobileActiveToolIndicator({ 
  isVisible, 
  toolType, 
  onCancel, 
  className 
}: MobileActiveToolIndicatorProps) {
  if (!isVisible || !toolType) return null;

  const config = TOOL_CONFIG[toolType];
  if (!config) return null;

  const IconComponent = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.15 }}
        className={cn(
          "group flex items-center gap-0 h-11 pl-2 pr-0 rounded-xl transition-colors",
          "hover:bg-gray-800/70 dark:hover:bg-gray-700/70",
          className
        )}
      >
        {/* Tool Icon */}
        <div className="antialiased">
          <IconComponent className={cn("w-[21px] h-[21px]", config.color)} strokeWidth={1.5} />
        </div>

        {/* Cancel Button */}
        <button
          onClick={onCancel}
          className={cn(
            "flex items-center justify-center -ml-1 -mr-1",
            "focus:outline-none"
          )}
          aria-label="Cancel active tool"
        >
          <X className="w-4 h-4 text-gray-400 dark:text-gray-400" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
} 