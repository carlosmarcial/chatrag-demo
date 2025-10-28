import { FileText, Globe, ListTodo, Paintbrush } from 'lucide-react';
import { SuggestionButtonsClient } from './suggestion-buttons-client';

interface SuggestionItem {
  id?: string;
  text: string;
}

interface SuggestionGroup {
  id?: string;
  label: string;
  icon: string;
  items: SuggestionItem[];
}

interface SuggestionButtonsProps {
  onSuggestionClick: (category: string, item: string) => void;
}

// Icon mapping for dynamic icon loading
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Globe,
  ListTodo,
  Paintbrush,
  Search: FileText, // Fallback
  Heart: FileText, // Fallback
  Star: FileText, // Fallback
  MessageCircle: FileText // Fallback
};

// Default suggestion groups as fallback
const defaultSuggestionGroups: SuggestionGroup[] = [
  {
    label: "Tell me about",
    icon: "FileText",
    items: [
      { text: "the unified RAG pipeline and why it retrieves faster" },
      { text: "the AI providers and reasoning models I can use" },
      { text: "how Supabase handles auth, storage, and real-time data" },
      { text: "what the admin dashboard lets me configure" }
    ]
  },
  {
    label: "Help me deploy",
    icon: "ListTodo",
    items: [
      { text: "ChatRAG to Vercel with the required setup steps" },
      { text: "the Supabase configuration and environment variables I need" },
      { text: "how to prepare production-ready Postgres and pgvector" },
      { text: "how to onboard teammates and admin users" }
    ]
  },
  {
    label: "Show me how to",
    icon: "Paintbrush",
    items: [
      { text: "customize the chat UI branding and themes" },
      { text: "tune the RAG system prompt and retrieval settings" },
      { text: "add custom AI tools or MCP integrations" },
      { text: "manage pricing with Stripe and Polar" }
    ]
  },
  {
    label: "Guide me through",
    icon: "Globe",
    items: [
      { text: "enabling WhatsApp messaging with the Baileys providers" },
      { text: "uploading documents so RAG can answer questions" },
      { text: "connecting additional AI models via OpenRouter" },
      { text: "monitoring usage, subscriptions, and real-time analytics" }
    ]
  }
];

export function SuggestionButtonsServer({ onSuggestionClick }: SuggestionButtonsProps) {
  // Load configuration from environment variable at build/request time
  let suggestionGroups = defaultSuggestionGroups;
  
  try {
    const suggestionGroupsJson = process.env.NEXT_PUBLIC_SUGGESTION_GROUPS || '';
    if (suggestionGroupsJson) {
      const config = JSON.parse(suggestionGroupsJson);
      if (config.groups && Array.isArray(config.groups)) {
        suggestionGroups = config.groups;
      }
    }
  } catch (error) {
    console.error('Error parsing suggestion groups:', error);
    // Fall back to default groups
  }

  // Transform icon strings to components
  const groupsWithIcons = suggestionGroups.map((group) => {
    const IconComponent = iconMap[group.icon] || FileText;
    return {
      ...group,
      iconComponent: <IconComponent className="h-5 w-5" />
    };
  });

  return (
    <SuggestionButtonsClient 
      suggestionGroups={groupsWithIcons} 
      onSuggestionClick={onSuggestionClick}
    />
  );
}