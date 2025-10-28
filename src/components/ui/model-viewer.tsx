'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

interface ModelViewerProps {
  modelUrl: string;
  className?: string;
  showDownloadButton?: boolean;
  isLoading?: boolean;
}

export function ModelViewer({ 
  modelUrl, 
  className, 
  showDownloadButton = true,
  isLoading = false
}: ModelViewerProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [modelState, setModelState] = useState<'loading' | 'interactive' | 'error'>('loading');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const checkVisibilityRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get the current theme
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Detect theme on mount and when it changes
  useEffect(() => {
    // Initial theme detection
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setTheme(isDarkMode ? 'dark' : 'light');
          
          // Notify iframe of theme change
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
              type: 'theme-change',
              theme: isDarkMode ? 'dark' : 'light'
            }, '*');
          }
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Load the 3D model using model-viewer web component
  useEffect(() => {
    if (!modelUrl) return;

    // Reset state when URL changes
    setModelState('loading');

    // Set up event listener for iframe communication
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'model-loaded' || event.data === 'model-interactive') {
        console.log('Model loaded/interactive event received');
        setModelState('interactive');
        
        // Clear any pending timeouts
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (checkVisibilityRef.current) {
          clearTimeout(checkVisibilityRef.current);
          checkVisibilityRef.current = null;
        }
      } else if (event.data === 'model-error' && modelState !== 'interactive') {
        console.error('Model error event received');
        setModelState('error');
      }
    };
    
    window.addEventListener('message', handleMessage);

    // Create a timeout to detect loading issues - shorter time
    timeoutRef.current = setTimeout(() => {
      if (modelState === 'loading') {
        console.log('Model load timeout triggered');
        
        // Check if iframe is visible first
        if (iframeRef.current?.contentWindow && iframeRef.current?.contentDocument) {
          // If we have iframe content, assume it's working and set to interactive
          console.log('Iframe is visible, setting to interactive despite timeout');
          setModelState('interactive');
        } else {
          // Only set error if iframe isn't even visible
          setModelState('error');
        }
      }
    }, 8000); // 8 second timeout

    // Create a backup check for visible model
    checkVisibilityRef.current = setTimeout(() => {
      if (modelState !== 'interactive' && iframeRef.current) {
        console.log('Backup visibility check triggered - assuming model is interactive');
        setModelState('interactive');
      }
    }, 15000); // After 15 seconds, assume it's interactive if we haven't errored

    return () => {
      // Clean up event listeners and timeouts
      window.removeEventListener('message', handleMessage);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (checkVisibilityRef.current) {
        clearTimeout(checkVisibilityRef.current);
      }
    };
  }, [modelUrl, modelState]);

  // Check if the iframe is interactive by observing mouse events
  useEffect(() => {
    if (modelState === 'loading' && iframeRef.current) {
      const checkIfInteractive = () => {
        try {
          if (iframeRef.current?.contentWindow && iframeRef.current?.contentDocument) {
            // We have iframe content, try to interact with it
            console.log('Iframe content is available, checking if interactive');
            setModelState('interactive');
          }
        } catch (e) {
          console.error('Error checking iframe interactivity:', e);
        }
      };

      // Check after a short delay
      const interactiveTimer = setTimeout(checkIfInteractive, 5000);
      
      return () => clearTimeout(interactiveTimer);
    }
  }, [modelState]);

  // Handle download button click
  const handleDownload = async () => {
    try {
      const response = await fetch(modelUrl);
      if (!response.ok) throw new Error('Failed to download model');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      
      // Extract filename from URL or use a default name
      const filename = modelUrl.split('/').pop() || 'model.glb';
      a.download = filename;
      
      document.body.appendChild(a);
      a.click();
      
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading model:', error);
    }
  };

  // Force the model to be treated as interactive
  const forceInteractive = () => {
    console.log('User forced model to interactive state');
    setModelState('interactive');
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-transparent",
        className
      )}
    >
      {/* Model Viewer iframe - ALWAYS rendered */}
      {modelUrl && (
        <iframe
          ref={iframeRef}
          srcDoc={`
            <!DOCTYPE html>
            <html data-theme="${theme}">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <style>
                  html[data-theme="light"] {
                    --bg-color: transparent;
                  }
                  
                  html[data-theme="dark"] {
                    --bg-color: transparent;
                  }
                  
                  body { 
                    margin: 0; 
                    padding: 0; 
                    overflow: hidden; 
                    background-color: transparent;
                  }
                  
                  model-viewer {
                    width: 100%;
                    height: 100vh;
                    --poster-color: transparent;
                    --progress-bar-height: 0px;
                    cursor: grab;
                    background-color: transparent;
                  }
                  
                  model-viewer:active {
                    cursor: grabbing;
                  }
                  
                  /* Hide default progress bar */
                  model-viewer::part(default-progress-bar) {
                    display: none;
                  }
                  
                  .interaction-prompt {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background-color: rgba(0,0,0,0.7);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 8px;
                    font-family: sans-serif;
                    font-size: 14px;
                    pointer-events: none;
                    animation: fadeInOut 5s forwards;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    z-index: 100;
                  }
                  
                  .interaction-icon {
                    width: 18px;
                    height: 18px;
                    fill: white;
                    animation: pulse 2s infinite;
                  }
                  
                  @keyframes fadeInOut {
                    0% { opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { opacity: 0; }
                  }
                  
                  @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                </style>
                <script>
                  // Function to notify parent window when model is loaded/interactive
                  function notifyParent(event) {
                    if (event === 'load') {
                      console.log('Model loaded - notifying parent');
                      window.parent.postMessage('model-loaded', '*');
                      
                      // Add interaction prompt after model is loaded
                      setTimeout(() => {
                        const prompt = document.createElement('div');
                        prompt.className = 'interaction-prompt';
                        
                        // Add icon
                        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        icon.setAttribute('class', 'interaction-icon');
                        icon.setAttribute('viewBox', '0 0 24 24');
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', 'M21 16V8l-8-5L5 8v8l8 5 8-5zM6.5 9.5L12 6l5.5 3.5L12 13 6.5 9.5zM7 11l4 2.5V19l-4-2.5V11zm10 0v5.5L13 19v-5.5L17 11z');
                        icon.appendChild(path);
                        
                        const text = document.createElement('span');
                        text.innerText = '${t('clickDragRotateModel')}';
                        
                        prompt.appendChild(icon);
                        prompt.appendChild(text);
                        document.body.appendChild(prompt);
                        
                        // Remove prompt after 8 seconds
                        setTimeout(() => {
                          if (prompt.parentNode) {
                            prompt.parentNode.removeChild(prompt);
                          }
                        }, 8000);
                      }, 1000);
                    } else if (event === 'error') {
                      console.error('Model error - notifying parent');
                      window.parent.postMessage('model-error', '*');
                    }
                  }
                  
                  // Listen for theme changes from parent
                  window.addEventListener('message', (event) => {
                    if (event.data && event.data.type === 'theme-change') {
                      document.documentElement.setAttribute('data-theme', event.data.theme);
                    }
                  });
                  
                  // Wait for the DOM to be ready
                  document.addEventListener('DOMContentLoaded', function() {
                    const modelViewer = document.querySelector('model-viewer');
                    
                    // Make extra sure we notify the parent as soon as possible
                    const sendInteractiveMessages = () => {
                      if (modelViewer.modelIsVisible) {
                        window.parent.postMessage('model-interactive', '*');
                      }
                    };
                    
                    // Keep trying to notify parent of visibility
                    const visibilityInterval = setInterval(sendInteractiveMessages, 500);
                    
                    // Ensure we stop checking after 15 seconds
                    setTimeout(() => {
                      clearInterval(visibilityInterval);
                    }, 15000);
                    
                    // Listen for first interaction to know it's definitely ready
                    let firstInteraction = false;
                    modelViewer.addEventListener('mousedown', () => {
                      if (!firstInteraction) {
                        firstInteraction = true;
                        window.parent.postMessage('model-interactive', '*');
                      }
                    });
                    
                    // Also detect visibility
                    const observer = new IntersectionObserver((entries) => {
                      if (entries[0].isIntersecting) {
                        window.parent.postMessage('model-interactive', '*');
                      }
                    });
                    observer.observe(modelViewer);
                    
                    // Add standard load/error handlers
                    modelViewer.addEventListener('load', () => {
                      notifyParent('load');
                      // Try to fit model to view after it's loaded
                      setTimeout(() => {
                        try {
                          // Reset camera to same orientation but ensure units are in degrees
                          if (modelViewer.getCameraOrbit) {
                            const orbit = modelViewer.getCameraOrbit();
                            const toDeg = (rad) => rad * (180 / Math.PI);
                            modelViewer.cameraOrbit = \`\${toDeg(orbit.theta)}deg \${toDeg(orbit.phi)}deg auto\`;
                          }
                        } catch (e) {
                          console.error('Error adjusting camera:', e);
                        }
                      }, 100);
                    });
                    modelViewer.addEventListener('error', () => notifyParent('error'));
                    
                    // Prevent default touch actions for better interaction
                    modelViewer.addEventListener('touchstart', (e) => {
                      e.preventDefault();
                    }, {passive: false});
                  });
                </script>
              </head>
              <body>
                <model-viewer
                  src="${modelUrl}"
                  camera-controls
                  auto-rotate
                  interaction-prompt="auto"
                  interaction-prompt-threshold="0"
                  bounds="tight"
                  min-camera-orbit="auto auto auto"
                  max-camera-orbit="auto auto auto"
                  camera-orbit="auto auto 110%"
                  shadow-intensity="1.0"
                  exposure="1.0"
                  environment-image="neutral"
                  auto-rotate-delay="0"
                  rotation-per-second="30deg"
                  interaction-prompt-style="basic">
                </model-viewer>
              </body>
            </html>
          `}
          className="w-full h-full border-0 z-0"
          sandbox="allow-scripts allow-same-origin"
          allow="camera *; geolocation *; microphone *; accelerometer; magnetometer; gyroscope; xr-spatial-tracking"
          loading="lazy"
          title="3D Model Viewer"
        />
      )}

      {/* Loading indicator - Update to match theme colors from parent */}
      {(isLoading || (modelState === 'loading')) && (
        <div 
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center z-10",
            theme === 'light' ? "bg-[#FFF1E5]/60" : "bg-[#212121]/60"
          )}
          onClick={forceInteractive} // Allow clicking through to force interactive
        >
          <Loader2 className="h-8 w-8 animate-spin text-[#FF6417] dark:text-[#FF6417] mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {isLoading ? 'Generating 3D model...' : 'Loading 3D model...'}
          </p>
          <button 
            className="mt-4 text-[#FF6417] hover:text-[#E55000] cursor-pointer px-3 py-1.5 border border-[#FF6417] rounded-lg text-sm font-medium transition-colors hover:bg-[#FF6417]/5"
            onClick={(e) => {
              e.stopPropagation();
              forceInteractive();
            }}
          >
            Skip waiting - Model appears ready
          </button>
        </div>
      )}

      {/* Error message with option to continue anyway */}
      {modelState === 'error' && !isLoading && (
        <div
          className="absolute bottom-4 left-4 right-4 bg-gray-900/30 backdrop-blur-sm p-4 rounded-lg z-20 text-center"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={forceInteractive}
              className="text-white bg-[#FF6417] hover:bg-[#E55000] dark:bg-[#FF6417] dark:hover:bg-[#E55000] rounded-lg px-4 py-2 font-medium text-sm flex items-center transition-colors"
            >
              Dismiss message and continue
            </button>
            <p className="text-xs text-gray-200">
              The model is visible but taking longer than expected to fully load
            </p>
          </div>
        </div>
      )}

      {/* Show download button when model is likely interactive */}
      {showDownloadButton && (modelState === 'interactive' || (modelState === 'error')) && (
        <button
          onClick={handleDownload}
          className="absolute bottom-12 right-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black text-gray-800 dark:text-white text-sm shadow-md transition z-30"
        >
          <Download className="h-4 w-4" />
          {t('download')}
        </button>
      )}
    </div>
  );
}

// Listen for messages from the iframe
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    if (event.data === 'model-loaded') {
      const loadedEvent = new Event('model-loaded');
      window.dispatchEvent(loadedEvent);
    } else if (event.data === 'model-error') {
      const errorEvent = new Event('model-error');
      window.dispatchEvent(errorEvent);
    }
  });
} 
