import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip } from './tooltip';

export interface CopyButtonProps {
  onClick: () => void;
  isCopied: boolean;
  tooltipText: string;
  className?: string;
}

export const CopyButton = React.memo(function CopyButton({
  onClick,
  isCopied,
  tooltipText,
  className
}: CopyButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isUserInteracting = useRef(false);

  const handleMouseEnter = useCallback(() => {
    isUserInteracting.current = true;
    setShowTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isUserInteracting.current = false;
    setShowTooltip(false);
  }, []);

  const handleFocus = useCallback(() => {
    // Only show tooltip on focus if user is actively interacting (not just returning to window)
    if (isUserInteracting.current) {
      setShowTooltip(true);
    }
  }, []);

  const handleBlur = useCallback(() => {
    setShowTooltip(false);
  }, []);

  const handleClick = useCallback(() => {
    onClick();
    // Auto-blur the button after copying to prevent focus persistence
    setTimeout(() => {
      buttonRef.current?.blur();
    }, 100);
  }, [onClick]);

  // Handle visibility changes and window blur to prevent tooltip persistence
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShowTooltip(false);
        isUserInteracting.current = false;
      }
    };

    const handleWindowBlur = () => {
      setShowTooltip(false);
      isUserInteracting.current = false;
    };

    const handleWindowFocus = () => {
      // Reset interaction state on window focus to prevent unwanted tooltips
      isUserInteracting.current = false;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-md transition-colors",
          "text-gray-700 dark:text-gray-400",
          "bg-transparent hover:bg-[#FFE0D0] dark:hover:bg-[#424242]",
          "hover:text-gray-700 dark:hover:text-gray-200",
          isCopied && "text-green-600 dark:text-green-400",
          className
        )}
        aria-label={isCopied ? "Copied!" : "Copy"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      
      <Tooltip
        content={tooltipText}
        show={showTooltip}
        anchorElement={buttonRef.current}
        position="bottom"
      />
    </>
  );
});

CopyButton.displayName = 'CopyButton';