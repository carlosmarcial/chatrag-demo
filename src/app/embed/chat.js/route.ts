import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/lib/env';

export async function GET(request: NextRequest) {
  // Check if embed is enabled
  if (env.NEXT_PUBLIC_EMBED_ENABLED !== 'true') {
    return new NextResponse('Embed functionality is disabled', { status: 403 });
  }

  // Get configuration from environment
  const config = {
    title: env.NEXT_PUBLIC_EMBED_TITLE || 'ChatRAG Assistant',
    primaryColor: env.NEXT_PUBLIC_EMBED_PRIMARY_COLOR || '#FF6417',
    position: env.NEXT_PUBLIC_EMBED_POSITION || 'bottom-right',
    autoOpen: env.NEXT_PUBLIC_EMBED_AUTO_OPEN === 'true',
    greeting: env.NEXT_PUBLIC_EMBED_GREETING || 'Hello! How can I help you today?',
    allowedDomains: env.NEXT_PUBLIC_EMBED_ALLOWED_DOMAINS || '*',
    requireAuth: env.EMBED_REQUIRE_AUTH === 'true',
    model: env.NEXT_PUBLIC_EMBED_MODEL || 'openai/gpt-4o-mini',
    suggestionsEnabled: env.NEXT_PUBLIC_EMBED_SUGGESTIONS_ENABLED === 'true',
    suggestions: (() => {
      try {
        const suggestionsStr = env.NEXT_PUBLIC_EMBED_SUGGESTIONS;
        return suggestionsStr ? JSON.parse(suggestionsStr) : [
          'What can you help me with?',
          'How does this work?',
          'Tell me about your features',
          'Get started guide'
        ];
      } catch (e) {
        return [
          'What can you help me with?',
          'How does this work?',
          'Tell me about your features',
          'Get started guide'
        ];
      }
    })()
  };

  // Get the origin for API calls
  // Always use this server's origin so API requests go to the ChatRAG demo domain
  const origin = request.nextUrl.origin;

  // Domain validation
  if (config.allowedDomains !== '*') {
    const allowedDomains = config.allowedDomains.split(',').map((d: string) => d.trim());
    const requestOrigin = request.headers.get('origin');
    
    if (requestOrigin) {
      const isAllowed = allowedDomains.some((domain: string) => {
        if (domain.startsWith('*.')) {
          // Wildcard subdomain matching
          const baseDomain = domain.substring(2);
          return requestOrigin.endsWith(baseDomain);
        }
        return requestOrigin.includes(domain);
      });
      
      if (!isAllowed) {
        return new NextResponse('Domain not allowed', { status: 403 });
      }
    }
  }

  // Generate the widget JavaScript
  const widgetScript = `
(function() {
  'use strict';
  
  // Minimal-safe renderer (no regex to avoid parsing issues)
  function escapeHtml(s){
    return s
      .replaceAll('&','&amp;')
      .replaceAll('<','&lt;')
      .replaceAll('>','&gt;')
      .replaceAll('"','&quot;')
      .replaceAll("'",'&#39;');
  }
  function linkify(s){
    // No regex usage to avoid any parser issues; simple space-based tokenization
    const parts = s.split(' ');
    for (let i=0;i<parts.length;i++){
      const p = parts[i];
      if (p.startsWith('http://') || p.startsWith('https://')){
        parts[i] = '<a href="'+p+'" target="_blank" rel="noopener noreferrer" style="color:#1e40af;text-decoration:underline;">'+p+'<\/a>';
      }
    }
    return parts.join(' ');
  }
  function renderText(t){
    // Avoid regex; replace newline chars manually; MUST double-escape backslash inside template literal
    return linkify(escapeHtml(t)).split('\\n').join('<br>');
  }
  
  // Configuration
  const config = ${JSON.stringify(config)};
  const apiOrigin = '${origin}';
  
  // Read data attributes from script tag
  const currentScript = document.currentScript || document.querySelector('script[src*="/embed/chat.js"]');
  if (currentScript) {
    // Override config with data attributes if present
    const dataColor = currentScript.getAttribute('data-primary-color');
    const dataTitle = currentScript.getAttribute('data-title');
    const dataPosition = currentScript.getAttribute('data-position');
    const dataAutoOpen = currentScript.getAttribute('data-auto-open');
    const dataGreeting = currentScript.getAttribute('data-greeting');
    const dataModel = currentScript.getAttribute('data-model');
    const dataSuggestionsEnabled = currentScript.getAttribute('data-suggestions-enabled');
    const dataSuggestions = currentScript.getAttribute('data-suggestions');
    
    if (dataColor) config.primaryColor = dataColor;
    if (dataTitle) config.title = decodeURIComponent(dataTitle);
    if (dataPosition) config.position = dataPosition;
    if (dataAutoOpen) config.autoOpen = dataAutoOpen === 'true';
    if (dataGreeting) config.greeting = decodeURIComponent(dataGreeting);
    if (dataModel) config.model = dataModel;
    if (dataSuggestionsEnabled) config.suggestionsEnabled = dataSuggestionsEnabled === 'true';
    if (dataSuggestions) {
      try {
        config.suggestions = JSON.parse(decodeURIComponent(dataSuggestions));
      } catch (e) {
        console.warn('Failed to parse data-suggestions:', e);
      }
    }
  }
  
  // Prevent multiple instances
  if (window.ChatRAGWidget) {
    console.warn('ChatRAG Widget already loaded');
    return;
  }
  
  // Widget state
  let isOpen = false;
  let isMinimized = false;
  let messages = [];
  let isLoading = false;
  
  // Create widget container
  function createWidget() {
    // Check if widget already exists
    if (document.getElementById('chatrag-widget-container')) {
      console.warn('ChatRAG Widget already exists');
      return;
    }
    
    const container = document.createElement('div');
    container.id = 'chatrag-widget-container';
    container.setAttribute('data-chatrag-widget', 'true');
    container.style.cssText = \`
      position: fixed;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      \${getPositionStyles()}
    \`;
    
    // Create chat button
    const button = document.createElement('button');
    button.id = 'chatrag-widget-button';
    button.innerHTML = '💬';
    button.style.cssText = \`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: \${config.primaryColor};
      color: white;
      border: none;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    \`;
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('click', toggleChat);
    
    // Create chat window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'chatrag-widget-window';
    chatWindow.style.cssText = \`
      position: absolute;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      display: none;
      flex-direction: column;
      overflow: hidden;
      \${getChatWindowPosition()}
    \`;
    
    // Create chat header
    const header = document.createElement('div');
    header.style.cssText = \`
      background: \${config.primaryColor};
      color: white;
      padding: 16px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    \`;
    header.innerHTML = \`
      <span>\${config.title}</span>
      <button id="chatrag-close-btn" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer; padding: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">×</button>
    \`;
    
    // Create messages container
    const messagesContainer = document.createElement('div');
    messagesContainer.id = 'chatrag-messages';
    messagesContainer.style.cssText = \`
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: #f9f9f9;
      display: flex;
      flex-direction: column;
      gap: 12px;
    \`;

    // Top group (greeting + suggestions) rendered as part of the scrollable chat content
    const topGroup = document.createElement('div');
    topGroup.id = 'chatrag-top-group';
    topGroup.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 8px;
    \`;
    messagesContainer.appendChild(topGroup);

    // Add initial greeting into the top group (so suggestions appear below)
    if (config.greeting) {
      const greetWrap = document.createElement('div');
      greetWrap.style.cssText = \`margin-bottom: 0;\`;
      const label = document.createElement('div');
      label.style.cssText = \`color:#666;font-size:12px;margin-bottom:4px;\`;
      label.textContent = 'Assistant';
      const bubble = document.createElement('div');
      bubble.style.cssText = \`
        display:inline-block;max-width:80%;padding:12px 16px;border-radius:18px;
        font-size:14px;line-height:1.4;background:#fff;color:#333;border:1px solid #eee;
        border-bottom-left-radius:4px;
      \`;
      bubble.innerHTML = renderText(config.greeting);
      greetWrap.appendChild(label);
      greetWrap.appendChild(bubble);
      topGroup.appendChild(greetWrap);
    }

    // Create suggestions row wrapper (right-aligned like user messages)
    const suggestionsRow = document.createElement('div');
    suggestionsRow.className = 'suggestions-row';
    suggestionsRow.style.cssText = \`
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 4px 0 8px;
    \`;
    topGroup.appendChild(suggestionsRow);

    // Create suggestions container inside the row
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.id = 'chatrag-suggestions';
    suggestionsContainer.style.cssText = \`
      width: fit-content;
      max-width: 80%;
      display: \${config.suggestionsEnabled ? 'flex' : 'none'};
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
      background: transparent;
    \`;
    suggestionsRow.appendChild(suggestionsContainer);

    // Add suggestion pills
    config.suggestions.forEach((suggestion) => {
      const pill = document.createElement('button');
      pill.className = 'chatrag-suggestion-pill';
      pill.textContent = suggestion;
      pill.style.cssText = \`
        padding: 8px 14px;
        border-radius: 20px;
        border: 1px solid #ddd;
        background: white;
        color: #333;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        font-family: inherit;
      \`;
      
      // Hover effects
      pill.addEventListener('mouseenter', () => {
        pill.style.background = config.primaryColor;
        pill.style.color = 'white';
        pill.style.borderColor = config.primaryColor;
      });
      
      pill.addEventListener('mouseleave', () => {
        pill.style.background = 'white';
        pill.style.color = '#333';
        pill.style.borderColor = '#ddd';
      });
      
      // Click handler - auto-fill and send (keep suggestions visible)
      pill.addEventListener('click', () => {
        const input = document.getElementById('chatrag-input');
        if (input && !isLoading) {
          input.value = suggestion;
          // Auto-send the message
          sendMessage();
        }
      });
      
      suggestionsContainer.appendChild(pill);
    });
    
    // Create input container
    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = \`
      padding: 16px;
      border-top: 1px solid #eee;
      background: white;
    \`;
    
    const inputWrapper = document.createElement('div');
    inputWrapper.style.cssText = \`
      display: flex;
      gap: 8px;
      align-items: flex-end;
    \`;
    
    const input = document.createElement('textarea');
    input.id = 'chatrag-input';
    input.placeholder = 'Type your message...';
    input.style.cssText = \`
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 12px 16px;
      resize: none;
      font-family: inherit;
      font-size: 14px;
      max-height: 100px;
      min-height: 40px;
    \`;
    
    const sendButton = document.createElement('button');
    sendButton.id = 'chatrag-send-btn';
    sendButton.innerHTML = '→';
    sendButton.style.cssText = \`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: \${config.primaryColor};
      color: white;
      border: none;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
    \`;
    
    // Event listeners
    header.querySelector('#chatrag-close-btn').addEventListener('click', toggleChat);
    sendButton.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    
    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
    
    // Assemble the widget
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(sendButton);
    inputContainer.appendChild(inputWrapper);
    
    chatWindow.appendChild(header);
    chatWindow.appendChild(messagesContainer);
    chatWindow.appendChild(inputContainer);
    
    container.appendChild(button);
    container.appendChild(chatWindow);
    
    document.body.appendChild(container);
    

    
    // Auto-open if configured
    if (config.autoOpen) {
      setTimeout(() => {
        if (!isOpen) toggleChat();
      }, 2000);
    }
  }
  
  function getPositionStyles() {
    const positions = {
      'bottom-right': 'bottom: 20px; right: 20px;',
      'bottom-left': 'bottom: 20px; left: 20px;',
      'top-right': 'top: 20px; right: 20px;',
      'top-left': 'top: 20px; left: 20px;'
    };
    return positions[config.position] || positions['bottom-right'];
  }
  
  function getChatWindowPosition() {
    const positions = {
      'bottom-right': 'bottom: 80px; right: 0;',
      'bottom-left': 'bottom: 80px; left: 0;',
      'top-right': 'top: 80px; right: 0;',
      'top-left': 'top: 80px; left: 0;'
    };
    return positions[config.position] || positions['bottom-right'];
  }
  
  function toggleChat() {
    const chatWindow = document.getElementById('chatrag-widget-window');
    const button = document.getElementById('chatrag-widget-button');
    
    isOpen = !isOpen;
    
    if (isOpen) {
      chatWindow.style.display = 'flex';
      button.innerHTML = '−';
      scrollToBottom();
    } else {
      chatWindow.style.display = 'none';
      button.innerHTML = '💬';
    }
  }
  
  function addMessage(role, content) {
    const messagesContainer = document.getElementById('chatrag-messages');
    const messageDiv = document.createElement('div');
    
    const isUser = role === 'user';
    messageDiv.style.cssText = \`
      margin-bottom: 12px;
      \${isUser ? 'text-align: right;' : 'text-align: left;'}
    \`;
    
    // Add label
    const label = document.createElement('div');
    label.style.cssText = \`
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
    \`;
    label.textContent = isUser ? 'You' : 'Assistant';
    
    const bubble = document.createElement('div');
    bubble.style.cssText = \`
      display: inline-block;
      max-width: 80%;
      padding: 12px 16px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
      \${isUser 
        ? \`background: \${config.primaryColor}; color: white; border-bottom-right-radius: 4px;\`
        : 'background: white; color: #333; border: 1px solid #eee; border-bottom-left-radius: 4px;'
      }
    \`;
    bubble.innerHTML = renderText(content);
    
    messageDiv.appendChild(label);
    messageDiv.appendChild(bubble);
    messagesContainer.appendChild(messageDiv);
    
    messages.push({ role, content });
    scrollToBottom();
  }
  
  function scrollToBottom() {
    const messagesContainer = document.getElementById('chatrag-messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
  
  function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatrag-messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'chatrag-typing';
    typingDiv.style.cssText = \`
      margin-bottom: 12px;
      display: flex;
      justify-content: flex-start;
    \`;
    
    const bubble = document.createElement('div');
    bubble.style.cssText = \`
      padding: 12px 16px;
      border-radius: 18px;
      background: white;
      border: 1px solid #eee;
      border-bottom-left-radius: 4px;
      font-size: 14px;
      color: #666;
    \`;
    bubble.innerHTML = 'Typing<span style="animation: blink 1.4s infinite;">...</span>';
    
    // Add blinking animation
    const style = document.createElement('style');
    style.textContent = \`
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    \`;
    document.head.appendChild(style);
    
    typingDiv.appendChild(bubble);
    messagesContainer.appendChild(typingDiv);
    scrollToBottom();
  }
  
  function hideTypingIndicator() {
    const typing = document.getElementById('chatrag-typing');
    if (typing) {
      typing.remove();
    }
  }
  
  async function sendMessage() {
    const input = document.getElementById('chatrag-input');
    const sendButton = document.getElementById('chatrag-send-btn');
    const message = input.value.trim();
    if (!message || isLoading) return;
    
    // Add user message
    addMessage('user', message);
    input.value = '';
    input.style.height = 'auto';
    
    // Show loading state
    isLoading = true;
    sendButton.style.opacity = '0.5';
    showTypingIndicator();
    
    try {
      // Prepare messages for API
      const apiMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      const response = await fetch(\`\${apiOrigin}/api/embed/chat\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          model: config.model
        })
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      // Handle streaming response (AI SDK format)
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      
      hideTypingIndicator();
      
      // Add assistant message bubble
      const messagesContainer = document.getElementById('chatrag-messages');
      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = \`
        margin-bottom: 12px;
      \`;
      
      // Add label
      const label = document.createElement('div');
      label.style.cssText = \`
        color: #666;
        font-size: 12px;
        margin-bottom: 4px;
      \`;
      label.textContent = 'Assistant';
      
      const bubble = document.createElement('div');
      bubble.style.cssText = \`
        display: inline-block;
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 18px;
        font-size: 14px;
        line-height: 1.4;
        background: white;
        color: #333;
        border: 1px solid #eee;
        border-bottom-left-radius: 4px;
      \`;
      
      messageDiv.appendChild(label);
      messageDiv.appendChild(bubble);
      messagesContainer.appendChild(messageDiv);
      
      console.log('Starting to read streaming response...');
      
      // Read the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('Stream finished');
          break;
        }
        
        const chunk = decoder.decode(value, { stream: true });
        console.log('Received chunk:', chunk);
        
        // Split by lines and process each line
        const lines = chunk.split(/\r?\n/);
        console.log('Split into lines:', lines);
        
        for (let rawLine of lines) {
          const line = rawLine.trim();
          if (!line) continue;
          
          console.log('Processing line:', line);
          
          try {
            // Handle AI SDK streaming format
            if (line.startsWith('0:')) {
              // Text content: 0:"content" - extract the quoted string
              const jsonPart = line.slice(2); // Remove "0:"
              console.log('Parsing JSON part:', jsonPart);
              const content = JSON.parse(jsonPart);
              console.log('Extracted content:', content);
              assistantMessage += content;
              bubble.innerHTML = renderText(assistantMessage);
              scrollToBottom();
              console.log('Added content:', content);
            } else if (line.startsWith('3:')) {
              // Error message: 3:"error message"
              const jsonPart = line.slice(2); // Remove "3:"
              console.log('Error received:', jsonPart);
              try {
                const errorMessage = JSON.parse(jsonPart);
                console.error('API Error:', errorMessage);
                bubble.textContent = errorMessage;
                assistantMessage = errorMessage;
                // Don't continue processing after an error
                return;
              } catch (e) {
                console.error('Could not parse error:', e);
              }
            } else if (line.startsWith('data:')) {
              // Server-sent events format
              const data = line.slice(5).trimStart();
              if (data === '[DONE]') {
                console.log('Stream completed with [DONE]');
                break;
              }
              
              try {
                const parsed = JSON.parse(data);
                // Handle Vercel AI SDK event stream
                if (parsed && parsed.type === 'text-delta' && typeof parsed.delta === 'string') {
                  const content = parsed.delta;
                  assistantMessage += content;
                  bubble.innerHTML = renderText(assistantMessage);
                  scrollToBottom();
                  console.log('Added AI SDK text-delta:', content);
                // Fallback to OpenAI Chat Completions delta shape
                } else if (parsed && parsed.choices && parsed.choices[0] && parsed.choices[0].delta && parsed.choices[0].delta.content) {
                  const content = parsed.choices[0].delta.content;
                  assistantMessage += content;
                  bubble.innerHTML = renderText(assistantMessage);
                  scrollToBottom();
                  console.log('Added OpenAI delta:', content);
                }
              } catch (e) {
                console.debug('Could not parse SSE data:', data);
              }
            } else {
              // Try other formats
              try {
              const parsed = JSON.parse(line);
              if (typeof parsed === 'string') {
                assistantMessage += parsed;
                bubble.innerHTML = renderText(assistantMessage);
                scrollToBottom();
                }
              } catch (e) {
                console.debug('Could not parse line as JSON:', line);
              }
            }
          } catch (e) {
            console.debug('Error parsing line:', line, e);
          }
        }
      }
      
      console.log('Final message:', assistantMessage);
      
      // Ensure message is displayed even if stream parsing had issues
      if (!assistantMessage.trim()) {
        bubble.textContent = 'Sorry, I received an empty response. Please try again.';
        console.warn('No content was extracted from the stream');
      }
      
      // Store the complete message
      if (assistantMessage.trim()) {
        messages.push({ role: 'assistant', content: assistantMessage });
      } else {
        // If no content was received, show error
        bubble.textContent = 'Sorry, I encountered an error. Please try again.';
        messages.push({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' });
      }
      
    } catch (error) {
      hideTypingIndicator();
      console.error('=== CHAT ERROR DETAILS ===');
      console.error('Error object:', error);
      console.error('Error message:', error.message);
      console.error('Error type:', error.constructor.name);
      console.error('Error stack:', error.stack);
      
      // Show more specific error messages based on the actual error
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      let debugInfo = '';
      
      if (error.message.includes('403')) {
        errorMessage = 'Access denied. Please check if the embed is properly configured.';
        debugInfo = 'HTTP 403 - Forbidden';
      } else if (error.message.includes('429')) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
        debugInfo = 'HTTP 429 - Rate Limited';
      } else if (error.message.includes('500')) {
        errorMessage = 'Server error. Please try again later.';
        debugInfo = 'HTTP 500 - Internal Server Error';
      } else if (error.message.includes('Network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
        debugInfo = 'Network Error';
      } else if (error.message.includes('fetch')) {
        errorMessage = 'Failed to connect to the server. Please try again.';
        debugInfo = 'Fetch Error';
      } else {
        debugInfo = \`Unknown Error: \${error.message}\`;
      }
      
      console.log('=== ERROR SUMMARY ===');
      console.log('User-facing message:', errorMessage);
      console.log('Debug info:', debugInfo);
      console.log('========================');
      
      addMessage('assistant', errorMessage);
    } finally {
      isLoading = false;
      sendButton.style.opacity = '1';
    }
  }
  
  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
  
  // Expose widget API
  window.ChatRAGWidget = {
    open: () => {
      if (!isOpen) toggleChat();
    },
    close: () => {
      if (isOpen) toggleChat();
    },
    toggle: toggleChat,
    isOpen: () => isOpen,
    version: 'v2-fixed-parsing'
  };
  
  // Log version for debugging
  console.log('ChatRAG Widget loaded:', window.ChatRAGWidget.version);
})();
`;

  return new NextResponse(widgetScript, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 