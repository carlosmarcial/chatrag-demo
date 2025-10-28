import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { env } from '@/lib/env';
import { 
  elevenLabsTextToSpeech, 
  elevenLabsSpeechToText,
  isElevenLabsConfigured 
} from '@/lib/elevenlabs-utils';

export const runtime = 'nodejs'; // Force Node.js runtime

// Add debugging to help identify environment variable issues
if (!process.env.OPENAI_API_KEY && env.NEXT_PUBLIC_VOICE_PROVIDER === 'openai') {
  console.error('OpenAI API key is not configured in environment variables');
}

// Initialize OpenAI with API key from environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const action = formData.get('action') as string;
    const provider = (formData.get('provider') as string) || env.NEXT_PUBLIC_VOICE_PROVIDER || 'openai';
    
    // Validate provider availability
    if (provider === 'openai' && !process.env.OPENAI_API_KEY) {
      return new NextResponse(
        'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.', 
        { status: 500 }
      );
    }
    
    if (provider === 'elevenlabs' && !isElevenLabsConfigured()) {
      // Fallback to OpenAI if ElevenLabs is not configured
      if (process.env.OPENAI_API_KEY) {
        console.warn('ElevenLabs not configured, falling back to OpenAI');
      } else {
        return new NextResponse(
          'Neither ElevenLabs nor OpenAI API keys are configured.', 
          { status: 500 }
        );
      }
    }
    
    if (action === 'speech') {
      const text = formData.get('text') as string;
      if (!text) {
        return new NextResponse('Text is required', { status: 400 });
      }

      // Use ElevenLabs if selected and configured
      if (provider === 'elevenlabs' && isElevenLabsConfigured()) {
        try {
          const voiceId = formData.get('voiceId') as string | null;
          const ttsOptions: Parameters<typeof elevenLabsTextToSpeech>[0] = { text };
          
          // Only include voice_id if it's provided
          if (voiceId) {
            ttsOptions.voice_id = voiceId;
          }
          
          const stream = await elevenLabsTextToSpeech(ttsOptions);

          // Convert ReadableStream to Response
          return new Response(stream, {
            headers: {
              'Content-Type': 'audio/mpeg',
              'Cache-Control': 'no-cache',
            },
          });
        } catch (elevenLabsError) {
          console.error('ElevenLabs TTS error, falling back to OpenAI:', elevenLabsError);
          // Fall through to OpenAI
        }
      }

      // Use OpenAI (default or fallback)
      if (!process.env.OPENAI_API_KEY) {
        return new NextResponse('No TTS provider available', { status: 500 });
      }

      const response = await openai.audio.speech.create({
        model: "tts-1",
        voice: "onyx",
        input: text,
      });

      return new Response(response.body, {
        headers: {
          'Content-Type': 'audio/mpeg',
        },
      });
    } 
    
    else if (action === 'transcribe') {
      const audioFile = formData.get('file') as File;
      if (!audioFile) {
        return new NextResponse('Audio file is required', { status: 400 });
      }

      // Use ElevenLabs if selected and configured
      if (provider === 'elevenlabs' && isElevenLabsConfigured()) {
        try {
          const audioBlob = new Blob([await audioFile.arrayBuffer()], { type: audioFile.type });
          const transcription = await elevenLabsSpeechToText({
            audio: audioBlob,
          });

          return NextResponse.json({ text: transcription });
        } catch (elevenLabsError) {
          console.error('ElevenLabs STT error, falling back to OpenAI:', elevenLabsError);
          // Fall through to OpenAI
        }
      }

      // Use OpenAI (default or fallback)
      if (!process.env.OPENAI_API_KEY) {
        return new NextResponse('No STT provider available', { status: 500 });
      }

      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: "whisper-1",
      });

      return NextResponse.json({ text: transcription.text });
    }
    
    else {
      return new NextResponse('Invalid action', { status: 400 });
    }
  } catch (error) {
    console.error('Audio API error:', error);
    if (error instanceof Error) {
      return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 