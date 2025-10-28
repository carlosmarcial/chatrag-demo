'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Image as ImageIcon, Video, Box, Settings, ArrowLeft, Upload, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobileTools, MobileToolType } from '@/contexts/mobile-tools-context';
import { useLanguage } from '@/components/providers/language-provider';
import { motion, AnimatePresence } from 'framer-motion';
import { useMultiFileUploadStore } from '@/lib/multi-file-upload-store';

interface MobileToolConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyConfig: (config: any) => void;
  toolType: MobileToolType;
}

export function MobileToolConfigModal({
  isOpen,
  onClose,
  onApplyConfig,
  toolType,
}: MobileToolConfigModalProps) {
  const { t } = useLanguage();
  const [config, setConfig] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const multiFileStore = useMultiFileUploadStore();

  // Memoize the tool configuration to prevent recreating on every render
  const toolConfig = React.useMemo(() => {
    switch (toolType) {
      case 'image-generation':
        const sizeOptions = [
          { value: 'auto', label: 'Auto' },
          { value: '1024x1024', label: 'Square (1024x1024)' },
          { value: '1536x1024', label: 'Landscape (1536x1024)' },
          { value: '1024x1536', label: 'Portrait (1024x1536)' },
        ];
        
        const qualityOptions = [
          { value: 'auto', label: 'Auto' },
          { value: 'high', label: 'High' },
          { value: 'medium', label: 'Medium' },
          { value: 'low', label: 'Low' },
        ];
        
        const backgroundOptions = [
          { value: 'auto', label: 'Auto' },
          { value: 'transparent', label: 'Clear' },
          { value: 'opaque', label: 'Solid' },
        ];
        
        const formatOptions = [
          { value: 'png', label: 'PNG' },
          { value: 'jpeg', label: 'JPEG' },
          { value: 'webp', label: 'WEBP' },
        ];
        
        const moderationOptions = [
          { value: 'auto', label: 'Auto' },
          { value: 'low', label: 'Low' },
        ];
        
        return {
          title: t('imageGenerate') || 'Image Generation',
          icon: <ImageIcon className="h-6 w-6" aria-hidden="true" />,
          color: 'bg-yellow-500',
          options: [
            {
              key: 'size',
              label: 'Size',
              type: 'select',
              options: sizeOptions,
              default: 'auto',
            },
            {
              key: 'quality',
              label: 'Quality',
              type: 'select',
              options: qualityOptions,
              default: 'auto',
            },
            {
              key: 'numOutputs',
              label: 'Number of Images',
              type: 'select',
              options: Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: `${i + 1} Image${i > 0 ? 's' : ''}` })),
              default: 1,
            },
            {
              key: 'sourceImages',
              label: 'Source Images (up to 16 images < 50MB each)',
              type: 'file',
              accept: 'image/*',
              default: null,
              multiple: true,
            },
            {
              key: 'useContext',
              label: 'Use document context',
              type: 'toggle',
              default: false,
            },
            {
              key: 'showAdvanced',
              label: 'Advanced Settings',
              type: 'toggle',
              default: false,
            },
            {
              key: 'background',
              label: 'Background',
              type: 'select',
              options: backgroundOptions,
              default: 'auto',
              showIf: 'showAdvanced',
            },
            {
              key: 'outputFormat',
              label: 'Output Format',
              type: 'select',
              options: formatOptions,
              default: 'png',
              showIf: 'showAdvanced',
            },
            {
              key: 'compression',
              label: 'Compression',
              type: 'slider',
              min: 0,
              max: 100,
              default: 100,
              showIf: 'showAdvanced',
              showFor: ['jpeg', 'webp'],
            },
            {
              key: 'moderation',
              label: 'Moderation',
              type: 'select',
              options: moderationOptions,
              default: 'auto',
              showIf: 'showAdvanced',
            },
          ],
        };
      case 'video-generation':
        const aspectRatioOptionsPro = [
          { value: '21:9', label: 'Ultra Wide (21:9)' },
          { value: '16:9', label: 'Landscape (16:9)' },
          { value: '4:3', label: 'Standard (4:3)' },
          { value: '1:1', label: 'Square (1:1)' },
          { value: '3:4', label: 'Portrait (3:4)' },
          { value: '9:16', label: 'Tall (9:16)' },
        ];
        
        const aspectRatioOptionsLite = [
          { value: '16:9', label: 'Landscape (16:9)' },
          { value: '4:3', label: 'Standard (4:3)' },
          { value: '1:1', label: 'Square (1:1)' },
          { value: '9:21', label: 'Ultra Tall (9:21)' },
        ];
        
        const resolutionOptionsPro = [
          { value: 'default', label: 'Default (1080p)' },
          { value: '480p', label: '480p' },
          { value: '1080p', label: '1080p' },
        ];
        
        const resolutionOptionsLite = [
          { value: 'default', label: 'Default (720p)' },
          { value: '480p', label: '480p' },
          { value: '720p', label: '720p' },
        ];
        
        return {
          title: t('videoGenerate') || 'Video Generation',
          icon: <Video className="h-6 w-6" />,
          color: 'bg-orange-600',
          options: [
            {
              key: 'model',
              label: 'Model',
              type: 'select',
              options: [
                { value: 'pro-text', label: 'Pro Text' },
                { value: 'lite-text', label: 'Lite Text' },
                { value: 'pro-image', label: 'Pro Image' },
                { value: 'lite-image', label: 'Lite Image' },
              ],
              default: 'pro-text',
            },
            {
              key: 'aspectRatio',
              label: 'Aspect Ratio',
              type: 'select',
              options: aspectRatioOptionsPro, // Will be dynamic based on model
              default: '16:9',
              hideFor: ['pro-image', 'lite-image'], // Hide for image-to-video models
              dynamicOptions: {
                'pro-text': aspectRatioOptionsPro,
                'lite-text': aspectRatioOptionsLite,
                'pro-image': [],
                'lite-image': []
              }
            },
            {
              key: 'resolution',
              label: 'Resolution',
              type: 'select',
              options: resolutionOptionsPro, // Will be dynamic based on model
              default: 'default',
              dynamicOptions: {
                'pro-text': resolutionOptionsPro,
                'lite-text': resolutionOptionsLite,
                'pro-image': resolutionOptionsPro,
                'lite-image': resolutionOptionsLite
              }
            },
            {
              key: 'duration',
              label: 'Duration',
              type: 'select',
              options: [
                { value: 5, label: '5 seconds' },
                { value: 10, label: '10 seconds' },
              ],
              default: 5,
            },
            {
              key: 'cameraFixed',
              label: 'Camera Fixed',
              type: 'toggle',
              default: false,
            },
            {
              key: 'sourceImage',
              label: 'Source Image',
              type: 'file',
              accept: 'image/*',
              default: null,
              showFor: ['pro-image', 'lite-image'], // Only show for image-to-video models
            },
            {
              key: 'useContext',
              label: 'Use document context',
              type: 'toggle',
              default: false,
            },
          ],
        };
      case '3d-generation':
        // 3D generation doesn't need a config modal - it should open file picker directly
        return null;
      default:
        return null;
    }
  }, [toolType, t]);

  // Initialize config with defaults when modal opens or tool type changes
  React.useEffect(() => {
    if (toolConfig && isOpen) {
      const defaultConfig = toolConfig.options.reduce((acc, option) => {
        acc[option.key] = option.default;
        return acc;
      }, {} as any);
      setConfig(defaultConfig);
      // Don't clear multiFileStore here - we want to preserve images
    }
  }, [toolType, isOpen, toolConfig]);

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev: any) => {
      const newConfig = { ...prev, [key]: value };
      
      
      return newConfig;
    });
  };

  const handleApply = () => {
    // Include sourceImages in config when applying
    const finalConfig = { ...config };
    if (toolType === 'image-generation' && multiFileStore.files.length > 0) {
      finalConfig.sourceImages = multiFileStore.getFilesArray();
    }
    onApplyConfig(finalConfig);
    onClose();
  };

  const handleAddImages = (files: File[]) => {
    // Use multiFileStore directly for immediate sync
    multiFileStore.addFiles(files);
  };

  const handleRemoveImage = (index: number) => {
    // Use multiFileStore directly for immediate sync
    multiFileStore.removeFile(index);
  };

  const handleClearAll = () => {
    // Use multiFileStore directly for immediate sync
    multiFileStore.clearAllFiles();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !toolConfig) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-[110]"
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
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-xl text-white", toolConfig.color)}>
                {toolConfig.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {toolConfig.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Configuration Options */}
          <div className="p-6 overflow-y-auto">
            <div className="space-y-6">
              {toolConfig.options
                .filter((option: any) => {
                  // If option has showIf property, only show if the condition is met
                  if (option.showIf && !config[option.showIf]) {
                    return false;
                  }
                  // If option has showFor property, only show if current value is in the list
                  if (option.showFor) {
                    // For compression, check outputFormat
                    if (option.key === 'compression' && config.outputFormat) {
                      return option.showFor.includes(config.outputFormat);
                    }
                    // For other options, check model
                    if (config.model) {
                      return option.showFor.includes(config.model);
                    }
                  }
                  // If option has hideFor property, hide if current value is in the list
                  if (option.hideFor && config.model) {
                    return !option.hideFor.includes(config.model);
                  }
                  return true; // Show all other options
                })
                .map((option: any) => (
                <div key={option.key} className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {option.label}
                  </label>
                  
                  {option.type === 'select' && (
                    <select
                      value={config[option.key] || option.default}
                      onChange={(e) => handleConfigChange(option.key, option.key === 'numOutputs' || option.key === 'duration' || option.key === 'textureSize' ? Number(e.target.value) : e.target.value)}
                      disabled={option.disabled}
                      className={cn(
                        "w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100",
                        option.disabled && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {(() => {
                        // Check if this option has dynamic options based on another field
                        let optionsToRender = option.options;
                        if (option.dynamicOptions && config.model) {
                          const dynamicOpts = option.dynamicOptions[config.model];
                          if (dynamicOpts && dynamicOpts.length > 0) {
                            optionsToRender = dynamicOpts;
                          }
                        }
                        return optionsToRender.map((opt: any) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ));
                      })()}
                    </select>
                  )}

                  {option.type === 'file' && toolType === 'image-generation' && option.key === 'sourceImages' ? (
                    <div className="space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple={true}
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          if (files.length > 0) {
                            handleAddImages(files);
                          }
                        }}
                        className="hidden"
                      />
                      {multiFileStore.files.length > 0 ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <Upload className="h-4 w-4" />
                              <span className="text-sm">Add Images</span>
                            </button>
                            <button
                              onClick={handleClearAll}
                              className="px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400"
                            >
                              Clear All
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {multiFileStore.files.map((uploadedFile, idx) => (
                              <div key={idx} className="relative p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <button
                                  onClick={() => handleRemoveImage(idx)}
                                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors z-10"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                                <div className="text-xs text-gray-600 dark:text-gray-400 truncate pr-4">
                                  {idx + 1}. {uploadedFile.file.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                  {Math.round(uploadedFile.file.size / 1024)} KB
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <Upload className="h-4 w-4" />
                          <span className="text-sm">Upload Images</span>
                        </button>
                      )}
                    </div>
                  ) : option.type === 'file' ? (
                    <div className="space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={option.accept}
                        multiple={option.multiple}
                        onChange={(e) => {
                          if (option.multiple) {
                            const files = Array.from(e.target.files || []);
                            handleConfigChange(option.key, files.length > 0 ? files : null);
                          } else {
                            const file = e.target.files?.[0];
                            handleConfigChange(option.key, file || null);
                          }
                        }}
                        className="hidden"
                      />
                      {config[option.key] ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <Upload className="h-4 w-4" />
                              <span className="text-sm">
                                {option.multiple && Array.isArray(config[option.key]) ? 'Add Images' : 'Change Image'}
                              </span>
                            </button>
                            <button
                              onClick={() => {
                                handleConfigChange(option.key, null);
                                if (fileInputRef.current) {
                                  fileInputRef.current.value = '';
                                }
                              }}
                              className="px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400"
                            >
                              Clear All
                            </button>
                          </div>
                          {option.multiple && Array.isArray(config[option.key]) ? (
                            <div className="space-y-1">
                              {config[option.key].map((file: File, idx: number) => (
                                <div key={idx} className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                    {idx + 1}. {file.name}
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-500">
                                    {Math.round(file.size / 1024)} KB
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                              <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                {(config[option.key] as File).name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-500">
                                {Math.round((config[option.key] as File).size / 1024)} KB
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <Upload className="h-4 w-4" />
                          <span className="text-sm">Upload {option.multiple ? 'Images' : 'Image'}</span>
                        </button>
                      )}
                    </div>
                  ) : null}

                  {option.type === 'toggle' && option.key === 'showAdvanced' && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleConfigChange(option.key, !config[option.key]);
                      }}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {option.label}
                      </span>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform",
                        config[option.key] && "transform rotate-90"
                      )} />
                    </button>
                  )}
                  
                  {option.type === 'toggle' && option.key !== 'showAdvanced' && (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        {config[option.key] ? 'Enabled' : 'Disabled'}
                      </span>
                      <button
                        onClick={() => handleConfigChange(option.key, !config[option.key])}
                        className={cn(
                          "relative inline-flex h-[31px] w-[51px] items-center rounded-full transition-colors duration-200",
                          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
                          config[option.key] 
                            ? toolConfig.color.replace('bg-', 'bg-') + " focus:ring-" + toolConfig.color.replace('bg-', '')
                            : "bg-gray-600 dark:bg-gray-700"
                        )}
                      >
                        <span className="sr-only">Toggle {option.label}</span>
                        <span
                          className={cn(
                            "pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out",
                            config[option.key] ? "translate-x-[22px]" : "translate-x-[2px]"
                          )}
                        />
                      </button>
                    </div>
                  )}
                  
                  {option.type === 'slider' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {option.label}: {config[option.key]}%
                      </label>
                      <input
                        type="range"
                        min={option.min}
                        max={option.max}
                        value={config[option.key] || option.default}
                        onChange={(e) => handleConfigChange(option.key, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {t('cancelTool') || 'Cancel'}
              </button>
              <button
                onClick={handleApply}
                className={cn(
                  "flex-1 px-4 py-2 text-white rounded-xl transition-colors",
                  toolConfig.color,
                  "hover:opacity-90"
                )}
              >
                Apply Settings
              </button>
            </div>
          </div>

          {/* Safe area padding for mobile devices */}
          <div className="h-[env(safe-area-inset-bottom)] bg-gray-50 dark:bg-gray-900/50" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 
