// Keep track of the current audio element and state
let currentAudio: HTMLAudioElement | null = null;
let currentMediaSource: MediaSource | null = null;
let currentSourceBuffer: SourceBuffer | null = null;

// Global shared AudioContext
let sharedAudioContext: AudioContext | null = null;
let audioContextInitialized = false;

// State management
interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
}

const state: AudioState = {
  isPlaying: false,
  isLoading: false
};

let stateChangeCallback: ((state: AudioState) => void) | null = null;

// Function to update state and notify listeners
function updateState(newState: Partial<AudioState>) {
  Object.assign(state, newState);
  if (stateChangeCallback) {
    stateChangeCallback({ ...state });
  }
}

// Export function to initialize audio context on user interaction
export function initializeAudioContext(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    if (!sharedAudioContext) {
      // Only create AudioContext after user gesture to avoid browser warnings
      sharedAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      // Debug: Shared AudioContext created after user gesture
    }
    
    // Check if context is suspended (common in Safari and sometimes Chrome)
    if (sharedAudioContext.state === 'suspended') {
      // Debug: AudioContext is suspended, attempting to resume
      
      // Get user agent to check for Safari
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      if (isSafari) {
        // Debug: Detected Safari browser, waiting for resume promise
        // For Safari, we need to handle resume differently
        // The promise might be pending until user interaction
        sharedAudioContext.resume().then(() => {
          // Debug: Safari AudioContext resumed successfully
          audioContextInitialized = true;
        }).catch(err => {
          console.error('Failed to resume Safari AudioContext:', err);
        });
      } else {
        // For other browsers, we can try to resume immediately
        try {
          sharedAudioContext.resume();
          // Debug: AudioContext resumed successfully
          audioContextInitialized = true;
        } catch (err) {
          console.error('Error resuming AudioContext:', err);
          return false;
        }
      }
    } else {
      audioContextInitialized = true;
    }
    
    // Play a silent sound to fully activate the audio context
    try {
      const oscillator = sharedAudioContext.createOscillator();
      const gainNode = sharedAudioContext.createGain();
      gainNode.gain.value = 0; // Silent
      oscillator.connect(gainNode);
      gainNode.connect(sharedAudioContext.destination);
      oscillator.start();
      oscillator.stop(sharedAudioContext.currentTime + 0.001);
      // Debug: Successfully played silent sound to activate AudioContext
    } catch (error) {
      console.warn('Error playing silent sound:', error);
      // Continue anyway, as this is just an extra step
    }
    
    return true;
  } catch (error) {
    console.error('Error initializing shared AudioContext:', error);
    return false;
  }
}

// Check if audio context is ready
export function isAudioContextReady(): boolean {
  return !!sharedAudioContext && audioContextInitialized && 
    (sharedAudioContext.state === 'running' || sharedAudioContext.state === 'closed');
}

// Export function to register state change listener
export function onAudioStateChange(callback: (state: AudioState) => void) {
  stateChangeCallback = callback;
  // Initial state notification
  callback({ ...state });
  return () => {
    if (stateChangeCallback === callback) {
      stateChangeCallback = null;
    }
  };
}

// Cache for audio data during session
const audioCache = new Map<string, ArrayBuffer>();

// Callback for when audio finishes
let onAudioComplete: (() => void) | null = null;

// Function to get cached audio as blob
export function getCachedAudioBlob(text: string): Blob | null {
  const cached = audioCache.get(text);
  if (!cached) return null;
  return new Blob([cached], { type: 'audio/mpeg' });
}

// Function to check if audio is cached
export function isAudioCached(text: string): boolean {
  return audioCache.has(text);
}

// Function to generate a filename for the audio
export function generateAudioFilename(text: string): string {
  // Get first 30 characters of the text, remove special characters
  const textSnippet = text.slice(0, 30)
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  
  // Add timestamp for uniqueness
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  
  return `ChatRAG-${textSnippet}-${timestamp}.mp3`;
}

/**
 * Plays a notification sound using the Web Audio API.
 * This is meant to be used when the AI finishes streaming a response.
 * All sounds use a two-tone bell pattern with different characteristics.
 * 
 * @param volume - Optional volume level between 0 and 1 (default 0.7)
 * @param soundType - Type of notification sound to play ('bell', 'soft', 'low', 'subtle') (default 'soft')
 * @returns Promise that resolves when the sound has finished playing
 */
export async function playNotificationSound(volume: number = 0.7, soundType: 'bell' | 'soft' | 'low' | 'subtle' = 'soft'): Promise<void> {
  // Debug: playNotificationSound called
  
  // Safety check for non-browser environments
  if (typeof window === 'undefined') {
    // Debug: Web Audio API not supported in this environment
    return;
  }
  
  try {
    // Use the shared AudioContext instead of creating a new one
    if (!sharedAudioContext || !audioContextInitialized) {
      // Debug: Shared AudioContext not initialized, attempting to initialize now
      const success = initializeAudioContext();
      if (!success) {
        console.error('Failed to initialize AudioContext, cannot play sound');
        return;
      }
    }
    
    // Resume audio context if it's suspended
    if (sharedAudioContext!.state === 'suspended') {
      // Debug: AudioContext is suspended, attempting to resume
      try {
        await sharedAudioContext!.resume();
        // Debug: AudioContext resumed successfully for sound playback
      } catch (error) {
        console.error('Failed to resume AudioContext:', error);
        return;
      }
    }
    
    // Define the tone pairs for each sound type (first tone, second tone)
    const tonePairs = {
      'bell': [780, 880],     // Higher pitched bell tones
      'soft': [520, 580],     // Medium pitched, softer tones
      'low': [350, 380],      // Low pitched tones
      'subtle': [450, 490]    // Subtle, closer together tones
    };
    
    // Define durations for each sound type (first tone, gap, second tone)
    const durations = {
      'bell': [0.2, 0.05, 0.3],
      'soft': [0.15, 0.05, 0.25],
      'low': [0.25, 0.1, 0.4],
      'subtle': [0.1, 0.05, 0.15]
    };
    
    // Get the selected tone pair and durations
    const tones = tonePairs[soundType] || tonePairs.soft;
    const timing = durations[soundType] || durations.soft;
    const totalDuration = (timing[0] + timing[1] + timing[2]) * 1000;
    
    // Debug: Using two-tone notification sound
    
    // Create gain node for volume control
    const gainNode = sharedAudioContext!.createGain();
    gainNode.connect(sharedAudioContext!.destination);
    gainNode.gain.value = Math.min(1, Math.max(0, volume));
    // Debug: Audio gain set
    
    // First tone
    const oscillator1 = sharedAudioContext!.createOscillator();
    oscillator1.type = 'sine';
    oscillator1.frequency.value = tones[0];
    oscillator1.connect(gainNode);
    
    // Schedule the first tone
    const startTime = sharedAudioContext!.currentTime;
    oscillator1.start(startTime);
    oscillator1.stop(startTime + timing[0]);
    
    // Second tone (after delay)
    const oscillator2 = sharedAudioContext!.createOscillator();
    oscillator2.type = 'sine';
    oscillator2.frequency.value = tones[1];
    oscillator2.connect(gainNode);
    
    // Schedule the second tone
    const secondToneStart = startTime + timing[0] + timing[1]; 
    oscillator2.start(secondToneStart);
    oscillator2.stop(secondToneStart + timing[2]);
    
    // Set envelope for each oscillator
    // First tone fade out
    gainNode.gain.setValueAtTime(gainNode.gain.value, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + timing[0]);
    
    // Second tone fade in and out
    gainNode.gain.setValueAtTime(gainNode.gain.value, secondToneStart);
    gainNode.gain.exponentialRampToValueAtTime(0.001, secondToneStart + timing[2]);
    
    // Return a promise that resolves after the sound is finished
    return new Promise((resolve) => {
      setTimeout(() => {
        // Debug: Notification sound completed
        resolve();
      }, totalDuration + 100); // Add a small buffer
    });
  } catch (error) {
    console.error('Error playing notification sound:', error);
    // Don't throw, just log and continue
  }
}

// Helper function to safely append chunk to source buffer
async function appendChunkToSourceBuffer(chunk: Uint8Array): Promise<void> {
  if (!currentSourceBuffer || !currentMediaSource) return;

  // Check if MediaSource is still open
  if (currentMediaSource.readyState !== 'open') {
    // Debug: MediaSource is not open, cannot append chunk
    return;
  }

  return new Promise((resolve, reject) => {
    const appendChunk = () => {
      try {
        if (!currentSourceBuffer || !currentMediaSource) {
          reject(new Error('SourceBuffer or MediaSource was cleared'));
          return;
        }

        if (currentMediaSource.readyState !== 'open') {
          reject(new Error('MediaSource is not open'));
          return;
        }

        if (currentSourceBuffer.updating) {
          currentSourceBuffer.addEventListener('updateend', appendChunk, { once: true });
          return;
        }

        currentSourceBuffer.appendBuffer(chunk);
        resolve();
      } catch (error) {
        console.error('Error appending chunk:', error);
        reject(error);
      }
    };
    appendChunk();
  });
}

export async function textToSpeech(text: string, onComplete?: () => void, options?: { provider?: string; voiceId?: string }): Promise<Blob> {
  // Debug: Starting Text-to-Speech
  
  // Set completion callback
  onAudioComplete = onComplete || null;
  
  // Set initial loading state
  updateState({ isLoading: true, isPlaying: false });
  
  // Stop any currently playing audio
  await stopAudioPlayback();

  try {
    // Check cache first (include provider in cache key)
    const cacheKey = `${options?.provider || 'default'}-${text}`;
    const cached = audioCache.get(cacheKey);
    if (cached) {
      // Debug: Using cached audio
      const blob = new Blob([cached], { type: 'audio/mpeg' });
      await playAudio(blob);
      return blob;
    }

    // Debug: No cached audio found, making API request
    
    // Create FormData for the request
    const formData = new FormData();
    formData.append('action', 'speech');
    formData.append('text', text);
    
    // Add provider if specified
    if (options?.provider) {
      formData.append('provider', options.provider);
    }
    
    // Add voice ID if specified (for ElevenLabs)
    if (options?.voiceId) {
      formData.append('voiceId', options.voiceId);
    }

    // Fetch the streaming response
    const response = await fetch('/api/audio', {
      method: 'POST',
      body: formData
    });

    if (!response.ok || !response.body) {
      throw new Error('Failed to convert text to speech');
    }

    // Initialize MediaSource
    currentMediaSource = new MediaSource();
    currentAudio = new Audio();
    const mediaSourceUrl = URL.createObjectURL(currentMediaSource);
    currentAudio.src = mediaSourceUrl;

    // Set up audio event handlers early
    let playbackStarted = false;
    currentAudio.oncanplay = () => {
      if (!playbackStarted && currentAudio) {
        // Debug: Starting playback
        currentAudio.play().catch(error => {
          console.error('Error starting playback:', error);
        });
        playbackStarted = true;
        updateState({ isLoading: false, isPlaying: true });
      }
    };

    currentAudio.onended = () => {
      // Debug: Playback ended naturally
      handlePlaybackEnd();
    };

    currentAudio.onerror = () => {
      const error = currentAudio?.error;
      console.error('Audio playback error:', error ? {
        code: error.code,
        message: error.message
      } : 'Unknown error');
      handlePlaybackEnd();
    };

    // Wait for MediaSource to open
    await new Promise<void>((resolve, reject) => {
      const onSourceOpen = () => {
        try {
          // Debug: MediaSource opened
          if (!currentMediaSource || currentMediaSource.readyState !== 'open') {
            reject(new Error('MediaSource is not in open state'));
            return;
          }
          
          const sourceBuffer = currentMediaSource.addSourceBuffer('audio/mpeg');
          currentSourceBuffer = sourceBuffer;
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      currentMediaSource!.addEventListener('sourceopen', onSourceOpen, { once: true });
    });

    // Process the stream
    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let totalLength = 0;

    while (true) {
      const { value: chunk, done } = await reader.read();
      
      if (done) {
        // Debug: Stream complete
        if (currentSourceBuffer && currentMediaSource?.readyState === 'open') {
          await new Promise<void>((resolve) => {
            const endStream = () => {
              if (currentMediaSource?.readyState === 'open') {
                currentMediaSource.endOfStream();
              }
              resolve();
            };

            // Check if SourceBuffer exists and is updating
            const sourceBuffer = currentSourceBuffer;
            if (sourceBuffer && sourceBuffer.updating) {
              sourceBuffer.addEventListener('updateend', endStream, { once: true });
            } else {
              endStream();
            }
          });
        }
        break;
      }

      // Debug: Received chunk
      chunks.push(chunk);
      totalLength += chunk.length;

      // Append chunk to source buffer
      try {
        await appendChunkToSourceBuffer(chunk);
      } catch (error) {
        console.error('Error appending chunk:', error);
        handlePlaybackEnd();
        throw error;
      }
    }

    // Combine chunks for caching
    const completeBuffer = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      completeBuffer.set(chunk, offset);
      offset += chunk.length;
    }

    // Cache the complete audio with provider-specific key
    audioCache.set(cacheKey, completeBuffer.buffer);
    // Debug: Audio cached successfully

    // Return the complete audio blob
    return new Blob([completeBuffer], { type: 'audio/mpeg' });
  } catch (error) {
    console.error('Error in textToSpeech:', error);
    handlePlaybackEnd();
    throw error;
  }
}

// Helper function to play audio and manage state
async function playAudio(blob: Blob): Promise<void> {
  // Debug: Starting audio playback
  try {
    if (currentAudio) {
      await stopAudioPlayback();
    }

    const audioUrl = URL.createObjectURL(blob);
    currentAudio = new Audio();
    
    return new Promise((resolve, reject) => {
      if (!currentAudio) return reject(new Error('No audio element'));
      
      currentAudio.oncanplaythrough = () => {
        // Debug: Audio loaded and can play through
        if (currentAudio) {
          currentAudio.play()
            .then(() => {
              // Debug: Playback started successfully
              updateState({ isLoading: false, isPlaying: true });
            })
            .catch(err => {
              console.error('Error starting playback:', err);
              handlePlaybackEnd();
              reject(err);
            });
        }
      };

      currentAudio.onended = () => {
        // Debug: Audio playback ended
        handlePlaybackEnd();
        resolve();
      };

      currentAudio.onerror = () => {
        const error = currentAudio?.error;
        const errorDetails = error ? {
          code: error.code,
          message: error.message
        } : 'Unknown error';
        console.error('Audio playback error:', errorDetails);
        handlePlaybackEnd();
        reject(new Error(`Playback failed: ${error?.message || 'Unknown error'}`));
      };

      currentAudio.src = audioUrl;
      currentAudio.load();
    });
  } catch (error) {
    console.error('Error in playAudio:', error);
    handlePlaybackEnd();
    throw error;
  }
}

// Helper function to handle playback end in all scenarios
function handlePlaybackEnd() {
  // Debug: Handling playback end
  updateState({ isPlaying: false, isLoading: false });
  
  // Clean up SourceBuffer only if MediaSource is still open
  if (currentSourceBuffer && currentMediaSource?.readyState === 'open') {
    try {
      currentSourceBuffer.abort();
    } catch (e) {
      console.error('Error aborting source buffer:', e);
    }
  }
  currentSourceBuffer = null;

  // Clean up MediaSource
  if (currentMediaSource) {
    try {
      if (currentMediaSource.readyState === 'open') {
        currentMediaSource.endOfStream();
      }
    } catch (e) {
      console.error('Error ending media source:', e);
    }
  }
  currentMediaSource = null;

  // Clean up Audio element
  if (currentAudio) {
    try {
      const srcUrl = currentAudio.src;
      currentAudio.pause();
      currentAudio.removeAttribute('src');
      currentAudio.load(); // Force release of resources
      if (srcUrl.startsWith('blob:')) {
        URL.revokeObjectURL(srcUrl);
      }
    } catch (e) {
      console.error('Error cleaning up audio element:', e);
    }
    currentAudio = null;
  }
  
  // Call completion callback if exists
  if (onAudioComplete) {
    // Debug: Calling completion callback
    onAudioComplete();
    onAudioComplete = null;
  }
}

// Function to stop current playback
export async function stopAudioPlayback() {
  // Debug: Stopping audio playback
  return new Promise<void>(resolve => {
    // Ensure handlePlaybackEnd is called only once
    const cleanup = () => {
      handlePlaybackEnd();
      resolve();
    };

    if (!currentAudio || currentAudio.paused) {
      cleanup();
      return;
    }

    // Set up one-time event listener for ended event
    currentAudio.addEventListener('ended', cleanup, { once: true });
    
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      cleanup();
    } catch (e) {
      console.error('Error stopping audio:', e);
      cleanup();
    }
  });
}

export async function speechToText(audioBlob: Blob, options?: { provider?: string }): Promise<string> {
  const formData = new FormData();
  formData.append('action', 'transcribe');
  formData.append('file', new File([audioBlob], 'audio.webm', { type: 'audio/webm' }));
  
  // Add provider if specified
  if (options?.provider) {
    formData.append('provider', options.provider);
  }

  const response = await fetch('/api/audio', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error('Failed to convert speech to text');
  }

  const data = await response.json();
  return data.text;
}

export function startRecording(): Promise<MediaRecorder> {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'audio/webm'
        });
        resolve(mediaRecorder);
      })
      .catch(reject);
  });
}

export function stopRecording(mediaRecorder: MediaRecorder): Promise<Blob> {
  return new Promise((resolve) => {
    const chunks: Blob[] = [];
    
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      resolve(blob);
    };

    mediaRecorder.stop();
  });
}

// Test function to play a simple sound to verify audio is working
export async function testAudioSystem(): Promise<boolean> {
  // Debug: Testing audio system
  
  if (!isAudioContextReady()) {
    // Debug: AudioContext not ready, attempting to initialize
    const success = initializeAudioContext();
    if (!success) {
      console.error('Failed to initialize AudioContext for test');
      return false;
    }
  }
  
  try {
    // Play a very short test sound
    await playNotificationSound(0.3, 'subtle');
    // Debug: Audio test successful
    return true;
  } catch (error) {
    console.error('Audio test failed:', error);
    return false;
  }
}

// Helper function to manually trigger the AI stream completed event
// This is useful for testing the notification sound system
export function triggerStreamCompletedEvent(): void {
  // Debug: Manually triggering ai-stream-completed event
  const event = new Event('ai-stream-completed');
  window.dispatchEvent(event);
  // Debug: Event dispatched
}

// Helper function to ensure the event system is properly set up
export function ensureEventSystem(): void {
  if (typeof window !== 'undefined') {
    // Check if we have added the global event handler
    // We'll add a small script to the window that will help debug events
    if (!(window as any).__eventSystemPatched) {
      // Debug: Patching event system to ensure reliable custom events
      
      // This will catch any custom events and log them to help with debugging
      const originalDispatchEvent = window.dispatchEvent.bind(window);
      (window as any).dispatchEvent = function patchedDispatchEvent(event: Event) {
        if (event.type === 'ai-stream-completed') {
          // Debug: Dispatching ai-stream-completed event
          
          // Debug: Check for event listeners
          const listeners = (window as any).__customEventListeners?.['ai-stream-completed'] || [];
          // Debug: Found event listeners for ai-stream-completed
        }
        return originalDispatchEvent(event);
      };
      
      // Keep track of all custom event listeners
      (window as any).__customEventListeners = {};
      
      // Patch addEventListener to track custom event listeners
      const originalAddEventListener = window.addEventListener.bind(window);
      // Use any types to avoid TypeScript errors with overriding native methods
      (window as any).addEventListener = function(
        type: string, 
        listener: EventListenerOrEventListenerObject, 
        options?: boolean | AddEventListenerOptions
      ) {
        if (type === 'ai-stream-completed') {
          // Debug: Adding ai-stream-completed listener
          if (!(window as any).__customEventListeners[type]) {
            (window as any).__customEventListeners[type] = [];
          }
          (window as any).__customEventListeners[type].push(listener);
        }
        return originalAddEventListener(type, listener, options);
      };
      
      // Patch removeEventListener to track custom event listeners
      const originalRemoveEventListener = window.removeEventListener.bind(window);
      // Use any types to avoid TypeScript errors with overriding native methods
      (window as any).removeEventListener = function(
        type: string, 
        listener: EventListenerOrEventListenerObject, 
        options?: boolean | EventListenerOptions
      ) {
        if (type === 'ai-stream-completed') {
          // Debug: Removing ai-stream-completed listener
          if ((window as any).__customEventListeners[type]) {
            (window as any).__customEventListeners[type] = (window as any).__customEventListeners[type]
              .filter((l: any) => l !== listener);
          }
        }
        return originalRemoveEventListener(type, listener, options);
      };
      
      // Mark as patched
      (window as any).__eventSystemPatched = true;
    }
  }
} 