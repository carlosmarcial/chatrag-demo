import { DollarSign, Database, BarChart, Rocket, FileText, Globe, ListTodo, Paintbrush } from 'lucide-react';
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
  DollarSign,
  Database,
  BarChart,
  Rocket,
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
    label: "Pricing & Ownership",
    icon: "DollarSign",
    items: [
      { text: "how much does ChatRAG cost and what's included in each plan?" },
      { text: "is it really unlimited chatbots or are there hidden usage limits?" },
      { text: "do I own the code forever or is this a subscription model?" },
      { text: "can I use ChatRAG for client projects without extra licensing fees?" }
    ]
  },
  {
    label: "Technical Foundation",
    icon: "Database",
    items: [
      { text: "what vector database does ChatRAG use and how fast is retrieval?" },
      { text: "what does it use for document parsing and embedding generation?" },
      { text: "which AI models are supported: GPT-4, Claude, Gemini, open-source?" },
      { text: "does it use HNSW or IVFFLAT indexing for vector search?" }
    ]
  },
  {
    label: "ChatRAG vs Others",
    icon: "BarChart",
    items: [
      { text: "how does ChatRAG compare to Chatbase on pricing and features?" },
      { text: "why choose ChatRAG instead of building a RAG system from scratch?" },
      { text: "who created ChatRAG and is it actively maintained with updates?" },
      { text: "what does ChatRAG include that competitors like Chatbase don't offer?" }
    ]
  },
  {
    label: "Key Features",
    icon: "Rocket",
    items: [
      { text: "does ChatRAG support WhatsApp without requiring a business account?" },
      { text: "can I monetize chatbots I build using Stripe or Polar payments?" },
      { text: "does it include image generation, video creation, and 3D features?" },
      { text: "how hard is the initial setup and do I need coding experience?" }
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
