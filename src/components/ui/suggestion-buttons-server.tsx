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
    label: "ChatRAG Basics",
    icon: "FileText",
    items: [
      { text: "what ChatRAG includes out of the box and who it's for" },
      { text: "the pricing difference between Starter and Complete" },
      { text: "how ChatRAG compares to Chatbase on cost and features" },
      { text: "which GPT-4.1, Claude Sonnet 4.5, and other models are supported" }
    ]
  },
  {
    label: "Launch Checklist",
    icon: "ListTodo",
    items: [
      { text: "the quick start steps after cloning the repository" },
      { text: "how to run Supabase complete_setup.sql and capture the keys" },
      { text: "what to configure in the visual dashboard before launch" },
      { text: "how to confirm RAG answers upload-based questions correctly" }
    ]
  },
  {
    label: "Integrations",
    icon: "Globe",
    items: [
      { text: "connect WhatsApp via Baileys on Koyeb or Fly.io with webhooks" },
      { text: "enable Exa web search for live answers in chat and WhatsApp" },
      { text: "toggle image, video, and 3D generation providers in the dashboard" },
      { text: "add Zapier MCP and custom tool servers for automation" }
    ]
  },
  {
    label: "Monetize & Scale",
    icon: "Paintbrush",
    items: [
      { text: "set up Stripe and Polar so I can monetize chatbot access" },
      { text: "best practices for system prompts and retrieval tuning" },
      { text: "manage admin users, tenants, and saved chat titles" },
      { text: "keep up with updates, support channels, and roadmap info" }
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
