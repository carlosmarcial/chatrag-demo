'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SuggestionItem {
  id?: string;
  text: string;
}

interface SuggestionGroup {
  id?: string;
  label: string;
  iconComponent: React.ReactNode;
  items: SuggestionItem[];
}

interface SuggestionButtonsClientProps {
  suggestionGroups: SuggestionGroup[];
  onSuggestionClick: (category: string, item: string) => void;
}

export function SuggestionButtonsClient({ suggestionGroups, onSuggestionClick }: SuggestionButtonsClientProps) {
  // Initialize activeCategory from sessionStorage if available (client-side only)
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (typeof window === 'undefined') return "";
    return sessionStorage.getItem('activeSuggestionCategory') || "";
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isMobileDropdownActive, setIsMobileDropdownActive] = useState(false);
  const [isSafariDesktop, setIsSafariDesktop] = useState(false);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  
  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Check if Safari desktop
    const checkSafariDesktop = () => {
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isDesktop = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
      const isSmallScreen = window.innerWidth < 640;
      setIsSafariDesktop(isSafari && isDesktop && isSmallScreen);
    };
    
    checkMobile();
    checkSafariDesktop();
    window.addEventListener('resize', () => {
      checkMobile();
      checkSafariDesktop();
    });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', checkSafariDesktop);
    };
  }, []);
  
  // Add keyboard detection for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const handleResize = () => {
      // On mobile, if the window height decreases significantly, keyboard is likely open
      const windowHeight = window.innerHeight;
      const screenHeight = window.screen.height;
      const keyboardThreshold = screenHeight * 0.75; // If viewport is less than 75% of screen, keyboard is open
      
      const keyboardIsOpen = windowHeight < keyboardThreshold;
      setIsKeyboardOpen(keyboardIsOpen);
      
      // Add/remove keyboard class for CSS targeting
      if (keyboardIsOpen) {
        document.body.classList.add('keyboard-open');
      } else {
        document.body.classList.remove('keyboard-open');
      }
    };
    
    // Check initial state
    handleResize();
    
    // Listen for viewport changes
    window.addEventListener('resize', handleResize);
    
    // For iOS Safari, also listen to visual viewport API if available
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      document.body.classList.remove('keyboard-open');
    };
  }, [isMobile]);
  
  // Handle hydration and restore saved category
  useEffect(() => {
    document.body.classList.add('suggestions-are-visible');
    // Try to restore active category from sessionStorage
    // Listen for form-submitting class on body to hide dropdowns when submitting
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const body = document.body;
          if (body.classList.contains('form-submitting')) {
            setActiveCategory("");
            setIsMobileDropdownActive(false);
          }
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      observer.disconnect();
      document.body.classList.remove('suggestions-are-visible');
    };
  }, []);
  
  // Add Safari desktop class to body
  useEffect(() => {
    if (isSafariDesktop) {
      document.body.classList.add('safari-desktop');
    } else {
      document.body.classList.remove('safari-desktop');
    }
    
    return () => {
      document.body.classList.remove('safari-desktop');
    };
  }, [isSafariDesktop]);
  
  // Save active category to sessionStorage when it changes
  useEffect(() => {
    if (activeCategory) {
      sessionStorage.setItem('activeSuggestionCategory', activeCategory);
    } else {
      sessionStorage.removeItem('activeSuggestionCategory');
    }
  }, [activeCategory]);

  // Mobile dropdown state management
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMobileDropdownActive(isMobile ? !!activeCategory : false);
    });

    return () => cancelAnimationFrame(frame);
  }, [activeCategory, isMobile]);

  // Handle category button click
  const handleCategoryClick = (category: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    
    // Toggle between active or inactive if clicking the same category
    if (activeCategory === category) {
      setActiveCategory("");
    } else {
      setActiveCategory(category);
      
      // On desktop, scroll to center the active button
      if (!isMobile && scrollContainerRef.current) {
        const button = buttonRefs.current[category];
        if (button) {
          const container = scrollContainerRef.current;
          const buttonRect = button.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          const scrollPosition = button.offsetLeft - (containerRect.width / 2) + (buttonRect.width / 2);
          container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  // Handle selecting a suggestion item
  const handleItemClick = (category: string, item: string) => {
    // Combine category + item to form full suggestion sentence
    const fullSuggestion = `${category} ${item}`;
    onSuggestionClick(category, fullSuggestion);
    
    // Close dropdown after selection
    setActiveCategory("");
    setIsMobileDropdownActive(false);
  };

  // Handle mobile backdrop click - improved to work reliably
  const handleMobileBackdropClick = (event: React.MouseEvent) => {
    // Close the dropdown if clicking on the backdrop or overlay
    const target = event.target as HTMLElement;
    const isBackdrop = target.classList.contains('mobile-suggestion-backdrop');
    const isOverlay = target.classList.contains('mobile-suggestion-overlay');
    
    if (isBackdrop || isOverlay) {
      setActiveCategory("");
      setIsMobileDropdownActive(false);
    }
  };

  // Handle close button click
  const handleCloseClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveCategory("");
    setIsMobileDropdownActive(false);
  };

  // Add an effect to handle clicks outside the dropdown (desktop only)
  useEffect(() => {
    if (!activeCategory || isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking on a suggestion button or dropdown
      const target = event.target as Node;
      const isInsideSuggestionUI = Array.from(document.querySelectorAll('.suggestion-button, .suggestion-dropdown-menu')).some(el => 
        el.contains(target)
      );
      
      if (!isInsideSuggestionUI) {
        setActiveCategory("");
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategory, isMobile]);

  // Handle escape key to close mobile dropdown
  useEffect(() => {
    if (!isMobileDropdownActive) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCategory("");
        setIsMobileDropdownActive(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileDropdownActive]);

  const activeGroup = suggestionGroups.find(group => group.label === activeCategory);

  return (
    <>
      <div className={cn(
        "suggestion-buttons-container",
        // Removed keyboard hiding as it was too aggressive
        // isMobile && isKeyboardOpen && "hidden",
        isMobile && isMobileDropdownActive && "mobile-buttons-hidden",
        isSafariDesktop && "safari-desktop"
      )}>
        <div 
          ref={scrollContainerRef}
          className="suggestion-buttons-list"
        >
          {suggestionGroups.map((group) => (
            <div 
              key={group.label} 
              className={`suggestion-group-container ${activeCategory === group.label ? 'active-group' : ''}`}
              style={{ transform: activeCategory === group.label ? (isMobile ? 'translateY(-6px)' : 'translateY(6px)') : 'none', transition: 'transform 0.15s ease' }}
            >
              <button
                ref={(el) => { buttonRefs.current[group.label] = el; }}
                type="button"
                className={`suggestion-button ${activeCategory === group.label ? 'active' : ''}`}
                onClick={(e) => handleCategoryClick(group.label, e)}
              >
                <span className="suggestion-button-icon">{group.iconComponent}</span>
                <span className="suggestion-button-label">{group.label}</span>
              </button>
              
              {/* Desktop dropdown */}
              {!isMobile && activeCategory === group.label && (
                <div 
                  className="suggestion-dropdown-menu"
                  style={{
                    opacity: 1,
                    transform: 'translateX(-50%) translateY(0) scale(1)',
                    transformOrigin: 'top center',
                    willChange: 'opacity, transform'
                  }}
                >
                  {group.items.map((item, index) => (
                    <button
                      key={`${group.label}-${item.text}`}
                      type="button"
                      className={`suggestion-dropdown-item ${index === 0 ? 'first-item' : ''}`}
                      onClick={() => handleItemClick(activeCategory, item.text)}
                    >
                      <span className="suggestion-prefix">{group.label}</span>
                      <span className="suggestion-suffix"> {item.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Overlay - Positioned Just Above Chat Input */}
      {isMobile && isMobileDropdownActive && activeGroup && (
        <div 
          ref={mobileOverlayRef}
          className="mobile-suggestion-overlay"
          onClick={handleMobileBackdropClick}
          style={{ background: 'transparent' }}
        >
          <div 
            className="mobile-suggestion-backdrop" 
            onClick={handleMobileBackdropClick}
          />
          <div className="mobile-suggestion-dropdown">
            <button 
              className="mobile-dropdown-close"
              onClick={handleCloseClick}
              aria-label="Close suggestions"
            >
              ×
            </button>
            <div className="mobile-dropdown-items">
              {activeGroup.items.map((item, index) => (
                <button
                  key={`mobile-${activeGroup.label}-${item.text}`}
                  type="button"
                  className="mobile-suggestion-item"
                  onClick={() => handleItemClick(activeCategory, item.text)}
                  style={{
                    animationDelay: `${(activeGroup.items.length - 1 - index) * 0.05}s`
                  }}
                >
                  <span className="mobile-suggestion-text">
                    <span className="mobile-suggestion-prefix">{activeGroup.label}</span>
                    <span className="mobile-suggestion-suffix"> {item.text}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .suggestion-buttons-container {
          margin-top: -2px;
          width: 100%;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding-bottom: 0px;
          will-change: transform;
          pointer-events: auto;
          transition: opacity 0.3s ease, transform 0.3s ease;
          background: transparent;
        }
        
        .suggestion-buttons-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          overflow-x: visible;
          padding: 0px 16px;
          gap: 10px;
        }
        

        /* Mobile specific styling */
        @media (max-width: 639px) {
          .suggestion-buttons-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0;
            padding: 2px 0 calc(var(--mobile-chat-input-height, 60px) + 30px + env(safe-area-inset-bottom, 0px)) 0;
            background: transparent;
            max-width: 100%;
            z-index: 40;
          }
          
          /* Safari iOS specific - account for extra padding plus additional space */
          @supports (-webkit-touch-callout: none) {
            .suggestion-buttons-container {
              padding: 2px 0 calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + env(safe-area-inset-bottom, 0px) + 80px) 0;
            }
          }
          
          /* Chrome desktop resized to mobile - negative offset to bring buttons down */
          @media (max-width: 639px) and (pointer: fine) {
            .suggestion-buttons-container {
              padding: 2px 0 calc(var(--mobile-chat-input-height, 60px) + 15px) 0 !important;
            }
          }
          
          /* Safari desktop specific - negative offset to bring buttons down */
          .safari-desktop .suggestion-buttons-container {
            padding: 2px 0 calc(var(--mobile-chat-input-height, 60px) + 10px) 0 !important;
          }
          
          /* Chrome iOS specific - move suggestion buttons higher */
          .chrome-ios .suggestion-buttons-container {
            padding: 2px 0 calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + env(safe-area-inset-bottom, 0px) + 153px) 0 !important;
          }
          
          .dark .suggestion-buttons-container {
            background: transparent;
          }
          
          .suggestion-buttons-list {
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            overflow-y: visible;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 0 16px 8px 16px;
            gap: 6px;
            background: transparent;
          }
          
          .dark .suggestion-buttons-list {
            background: none;
          }
          
          .suggestion-buttons-list::-webkit-scrollbar {
            display: none;
          }
          
          .suggestion-group-container {
            flex-shrink: 0;
            min-width: max-content;
          }
          
          .suggestion-button {
            min-width: max-content;
            height: 42px !important;
            padding: 0 16px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            border-radius: 22px !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
            background: linear-gradient(135deg, rgba(239, 225, 213, 0.25), rgba(239, 225, 213, 0.15)) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border: 1px solid rgba(212, 192, 182, 0.3) !important;
            color: #444444 !important;
          }
          
          .dark .suggestion-button {
            background: linear-gradient(135deg, rgba(47, 47, 47, 0.25), rgba(47, 47, 47, 0.15)) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
            border: 1px solid rgba(96, 96, 96, 0.3) !important;
            color: #e0e0e0 !important;
          }
          
          /* Hide buttons when mobile dropdown is active */
          .mobile-buttons-hidden {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
          }
          
          /* Removed keyboard hiding as it was too aggressive */
          /* .keyboard-open .suggestion-buttons-container {
            display: none !important;
          } */
          
          /* Smooth slide-in animation for mobile */
          .suggestion-buttons-container {
            animation: slideInFromBottom 0.3s ease-out;
          }
          
          @keyframes slideInFromBottom {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
        
        /* Mobile Dropdown Overlay */
        .mobile-suggestion-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0;
          pointer-events: auto;
          animation: mobileOverlayFadeIn 0.3s ease-out;
          z-index: 200;
          background: transparent !important;
        }
        
        .mobile-suggestion-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          pointer-events: auto;
          cursor: pointer;
        }
        
        .mobile-suggestion-dropdown {
          position: relative;
          width: 100%;
          max-width: 100vw;
          max-height: 60vh;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px 16px 0 0;
          border: none;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          pointer-events: auto;
          animation: mobileDropdownSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin: 0;
          margin-bottom: calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + env(safe-area-inset-bottom, 0px));
        }
        
        /* Safari iOS specific - account for extra padding plus additional space */
        @supports (-webkit-touch-callout: none) {
          .mobile-suggestion-dropdown {
            margin-bottom: calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + env(safe-area-inset-bottom, 0px) + 70px);
          }
        }
        
        /* Chrome desktop resized to mobile - add extra margin */
        @media (max-width: 639px) and (pointer: fine) {
          .mobile-suggestion-dropdown {
            margin-bottom: calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + 40px);
          }
        }
        
        /* Safari desktop specific - adjusted margin for dropdown to match Chrome */
        body.safari-desktop .mobile-suggestion-dropdown {
          margin-bottom: calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + 40px) !important;
        }
        
        /* Chrome iOS specific - move suggestion buttons higher */
        .chrome-ios .mobile-suggestion-dropdown {
          margin-bottom: calc(var(--mobile-chat-input-height, 60px) + var(--mobile-suggestion-gap, 4px) + env(safe-area-inset-bottom, 0px) + 143px) !important;
        }
        
        .dark .mobile-suggestion-dropdown,
        [data-theme="dark"] .mobile-suggestion-dropdown {
          background: #212121 !important;
          border: none !important;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2) !important;
        }
        
        .mobile-dropdown-close {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 36px;
          height: 36px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #e0e0e0;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .dark .mobile-dropdown-close {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ddd;
        }
        
        .mobile-dropdown-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
        
        .dark .mobile-dropdown-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .mobile-dropdown-items {
          padding: 60px 16px 16px 16px;
          max-height: calc(60vh - 64px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          background: #ffffff;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-radius: 0;
        }
        
        .dark .mobile-dropdown-items,
        [data-theme="dark"] .mobile-dropdown-items {
          background: #212121 !important;
        }
        
        .mobile-suggestion-item {
          width: 100%;
          padding: 16px 20px;
          color: #333333;
          font-size: 15px;
          text-align: left;
          background: rgba(0, 0, 0, 0.04);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 12px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          min-height: 52px;
          opacity: 0;
          transform: translateY(20px);
          animation: mobileItemSlideUp 0.4s ease-out forwards;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .dark .mobile-suggestion-item,
        [data-theme="dark"] .mobile-suggestion-item {
          color: #e0e0e0 !important;
          background: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        }
        
        .mobile-suggestion-item:hover,
        .mobile-suggestion-item:active {
          background-color: rgba(0, 0, 0, 0.08);
          transform: translateY(18px) scale(0.98);
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        }
        
        .dark .mobile-suggestion-item:hover,
        .dark .mobile-suggestion-item:active,
        [data-theme="dark"] .mobile-suggestion-item:hover,
        [data-theme="dark"] .mobile-suggestion-item:active {
          background-color: rgba(255, 255, 255, 0.12) !important;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2) !important;
        }
        
        .mobile-suggestion-text {
          display: block;
          line-height: 1.5;
          word-wrap: break-word;
        }
        
        .mobile-suggestion-prefix {
          color: #000000;
          font-weight: 500;
        }
        
        .dark .mobile-suggestion-prefix {
          color: #ffffff;
          font-weight: 600;
        }
        
        .mobile-suggestion-suffix {
          color: inherit;
        }
        
        /* Mobile Animations */
        @keyframes mobileOverlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes mobileDropdownSlideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes mobileItemSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .suggestion-group-container {
          position: relative;
          display: inline-block;
        }
        
        /* Light mode styles */
        .suggestion-button {
          background: linear-gradient(135deg, rgba(239, 225, 213, 0.25), rgba(239, 225, 213, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          color: #444444;
          border: 1px solid rgba(212, 192, 182, 0.3);
          height: 42px;
          padding: 0 18px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          transition: all 0.15s ease;
          cursor: pointer;
          white-space: nowrap;
          z-index: 20;
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .suggestion-button:hover {
          background: linear-gradient(135deg, rgba(239, 225, 213, 0.35), rgba(239, 225, 213, 0.25));
          border-color: rgba(212, 192, 182, 0.4);
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .suggestion-button.active {
          background: linear-gradient(135deg, rgba(239, 225, 213, 0.45), rgba(239, 225, 213, 0.35));
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-color: transparent;
          z-index: 30;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        /* Intermediate screen size - smaller buttons to prevent overlap */
        @media (min-width: 640px) and (max-width: 767px) {
          .suggestion-button {
            height: 38px !important;
            padding: 0 12px !important;
            font-size: 13px !important;
          }
        }

        /* Mobile button hover - no transform */
        @media (max-width: 639px) {
          .suggestion-button:hover {
            transform: none !important;
          }
        }
        
        /* Mobile active state - button moves UP instead of down */
        @media (max-width: 639px) {
          .suggestion-button.active {
            border-radius: 8px !important;
            border-bottom-color: rgba(0,0,0,0.05) !important;
            transform: translateY(-2px) !important;
          }
          
          .active-group {
            transform: translateY(-2px) !important;
          }
        }
        
        /* Dark mode styles */
        html.dark .suggestion-button {
          background: linear-gradient(135deg, rgba(47, 47, 47, 0.25), rgba(47, 47, 47, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          color: #9e9e9e;
          border: 1px solid rgba(96, 96, 96, 0.3);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        html.dark .suggestion-button:hover {
          background: linear-gradient(135deg, rgba(47, 47, 47, 0.35), rgba(47, 47, 47, 0.25));
          border-color: rgba(96, 96, 96, 0.4);
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        html.dark .suggestion-button.active {
          background: linear-gradient(135deg, rgba(47, 47, 47, 0.45), rgba(47, 47, 47, 0.35));
          border-bottom-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        /* Intermediate screen size - smaller buttons for dark mode */
        @media (min-width: 640px) and (max-width: 767px) {
          html.dark .suggestion-button {
            height: 38px !important;
            padding: 0 12px !important;
            font-size: 13px !important;
          }
        }
        
        /* Mobile dark mode active state */
        @media (max-width: 639px) {
          .dark .suggestion-button.active {
            border-bottom-color: rgba(255, 255, 255, 0.08) !important;
            transform: translateY(-2px) !important;
          }
        }
                
        .suggestion-button-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          opacity: 0.8;
          color: inherit;
        }
        
        html.dark .suggestion-button-icon {
          opacity: 0.7;
        }
        
        .suggestion-button-label {
          white-space: nowrap;
        }
        
        /* Light mode dropdown */
        .suggestion-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          width: auto;
          min-width: 260px;
          max-width: none;
          background-color: transparent;
          border-radius: 0 0 8px 8px;
          border: none;
          border-top: none;
          overflow: hidden;
          box-shadow: none;
          z-index: 25;
          margin-top: -1px;
          transform: translateX(-50%);
        }
        
        /* Dark mode dropdown */
        html.dark .suggestion-dropdown-menu {
          background-color: transparent;
          border: none;
          border-top: none;
          box-shadow: none;
        }
        
        /* Light mode dropdown items */
        .suggestion-dropdown-item {
          width: 100%;
          padding: 16px 18px;
          color: #000000;
          font-size: 14.5px;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s ease;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(-8px);
          animation: cascadeIn 0.3s ease-out forwards;
        }
        
        /* Staggered animation delays for cascading effect */
        .suggestion-dropdown-item:nth-child(1) {
          animation-delay: 0.05s;
        }
        
        .suggestion-dropdown-item:nth-child(2) {
          animation-delay: 0.1s;
        }
        
        .suggestion-dropdown-item:nth-child(3) {
          animation-delay: 0.15s;
        }
        
        .suggestion-dropdown-item:nth-child(4) {
          animation-delay: 0.2s;
        }
        
        .suggestion-dropdown-item:nth-child(5) {
          animation-delay: 0.25s;
        }
        
        .suggestion-dropdown-item:nth-child(6) {
          animation-delay: 0.3s;
        }
        
        /* Keyframes for the cascading animation */
        @keyframes cascadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Dark mode dropdown items */
        html.dark .suggestion-dropdown-item {
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .suggestion-dropdown-item.first-item {
          border-top: none;
        }
        
        html.dark .suggestion-dropdown-item.first-item {
          border-top: none;
        }
        
        .suggestion-dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
        
        html.dark .suggestion-dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .suggestion-dropdown-item:active {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        html.dark .suggestion-dropdown-item:active {
          background-color: rgba(255, 255, 255, 0.08);
        }
        
        .suggestion-group-container.active-group .suggestion-button {
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        }

        /* Prefix/suffix styling */
        .suggestion-prefix {
          color: #000000;
          font-weight: 500;
        }

        html.dark .suggestion-prefix {
          color: #ffffff;
          font-weight: 600;
        }
        
        .suggestion-suffix {
          color: inherit;
        }

        /* Make sure dark mode is properly applied when using data-theme */
        [data-theme="dark"] .suggestion-button {
          background: linear-gradient(135deg, rgba(47, 47, 47, 0.25), rgba(47, 47, 47, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          color: #9e9e9e;
          border: 1px solid rgba(96, 96, 96, 0.3);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        [data-theme="dark"] .suggestion-button:hover {
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        
        [data-theme="dark"] .suggestion-button.active {
          background-color: rgba(255, 255, 255, 0.05);
          border-bottom-color: transparent;
        }

        /* Intermediate screen size - smaller buttons for data-theme dark */
        @media (min-width: 640px) and (max-width: 767px) {
          [data-theme="dark"] .suggestion-button {
            height: 38px !important;
            padding: 0 12px !important;
            font-size: 13px !important;
          }
        }
        
        [data-theme="dark"] .suggestion-dropdown-menu {
          background-color: transparent;
          border: none;
          border-top: none;
          box-shadow: none;
        }
        
        [data-theme="dark"] .suggestion-dropdown-item {
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        [data-theme="dark"] .suggestion-dropdown-item.first-item {
          border-top: none;
        }
        
        [data-theme="dark"] .suggestion-dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        [data-theme="dark"] .suggestion-dropdown-item:active {
          background-color: rgba(255, 255, 255, 0.08);
        }
        
        [data-theme="dark"] .suggestion-prefix {
          color: #ffffff;
          font-weight: 600;
        }
        
        /* Additional support for .dark class */
        .dark .suggestion-button {
          background: linear-gradient(135deg, rgba(47, 47, 47, 0.25), rgba(47, 47, 47, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          color: #9e9e9e;
          border: 1px solid rgba(96, 96, 96, 0.3);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .dark .suggestion-button:hover {
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        
        .dark .suggestion-button.active {
          background-color: rgba(255, 255, 255, 0.05);
          border-bottom-color: transparent;
        }

        /* Intermediate screen size - smaller buttons for .dark class */
        @media (min-width: 640px) and (max-width: 767px) {
          .dark .suggestion-button {
            height: 38px !important;
            padding: 0 12px !important;
            font-size: 13px !important;
          }
        }
        
        /* Mobile dark mode active state */
        @media (max-width: 639px) {
          .dark .suggestion-button.active {
            border-bottom-color: rgba(255, 255, 255, 0.08) !important;
            transform: translateY(-2px) !important;
          }
        }
        
        .dark .suggestion-dropdown-menu {
          background-color: transparent;
          border: none;
          border-top: none;
          box-shadow: none;
        }
        
        .dark .suggestion-dropdown-item {
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .dark .suggestion-dropdown-item.first-item {
          border-top: none;
        }
        
        .dark .suggestion-dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .dark .suggestion-dropdown-item:active {
          background-color: rgba(255, 255, 255, 0.08);
        }
        
        .dark .suggestion-prefix {
          color: #ffffff;
          font-weight: 600;
        }
        
        /* For compatibility with other dark mode implementations */
        @media (prefers-color-scheme: dark) {
          :root:not(.light) .suggestion-button {
            background: linear-gradient(135deg, rgba(47, 47, 47, 0.25), rgba(47, 47, 47, 0.15));
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            color: #9e9e9e;
            border: 1px solid rgba(96, 96, 96, 0.3);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          
          :root:not(.light) .suggestion-button:hover {
            background-color: rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
          }
          
          :root:not(.light) .suggestion-button.active {
            background-color: rgba(255, 255, 255, 0.05);
            border-bottom-color: transparent;
          }
          
          :root:not(.light) .suggestion-dropdown-menu {
            background-color: transparent;
            border: none;
            border-top: none;
            box-shadow: none;
          }
          
          :root:not(.light) .suggestion-dropdown-item {
            color: #ffffff;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          :root:not(.light) .suggestion-dropdown-item.first-item {
            border-top: none;
          }
          
          :root:not(.light) .suggestion-dropdown-item:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
          
          :root:not(.light) .suggestion-dropdown-item:active {
            background-color: rgba(255, 255, 255, 0.08);
          }
          
          :root:not(.light) .suggestion-prefix {
            color: #ffffff;
            font-weight: 600;
          }
        }

        /* Mobile dark mode button hover - no transform */
        @media (max-width: 639px) {
          html.dark .suggestion-button:hover,
          .dark .suggestion-button:hover {
            transform: none !important;
          }
        }

      `}</style>
    </>
  );
}
