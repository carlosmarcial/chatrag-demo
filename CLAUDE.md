# Claude Code Project Rules & Agent Guide

This file provides project rules and operational guidance for Claude Code’s AI Agents working on ChatRAG. It mirrors AGENTS.md and highlights performance guardrails and conventions proven stable on Next.js 16 + React 19 + AI SDK 5.

---

## 1. Mission & Responsibilities
- Ship and maintain a production-grade AI chat experience with RAG, multi-model orchestration, and multi-modal creation (text, images, video, 3D).
- Preserve stability, performance, and developer ergonomics across the Next.js 16.0.0 + React 19 stack (React Compiler enabled).
- Safeguard user data, adhere to Supabase Row Level Security, and prevent secret leakage.

---

## 2. Platform Snapshot
| Layer | Details |
| --- | --- |
| Frontend | Next.js 16 App Router (React Compiler enabled), React 19, TypeScript, Tailwind CSS, Framer Motion, Zustand |
| Backend | Next.js API routes, Supabase (PostgreSQL + pgvector HNSW, storage, auth, realtime) |
| AI Stack | Vercel AI SDK 5 (OpenRouter, OpenAI, Anthropic, DeepSeek, Gemini, MCP integrations) |
| Integrations | WhatsApp (Baileys on Fly.io/Koyeb), Stripe & Polar payments, Meshy/Luma/Runway for generation |

---

## 3. Prerequisites & Core Commands
- Node.js 18+, npm, Supabase project, API keys for embeddings and preferred models.
- `npm run dev` – boots the app, auto-creates `.env.local` if missing, enables fast refresh.
- `npm run config` – opens the visual configuration dashboard at `http://localhost:3333` for env management, admin users, and RAG prompt tuning.

---

## 4. Development Guidelines (Claude Code–focused)
1. Match existing patterns (functional React, strict TS, Tailwind classes, Zustand stores, streaming chat APIs).
2. Prefer Zustand selectors + `useShallow` (from `zustand/react/shallow`) over subscribing to entire stores.
3. Validate all API inputs, return structured JSON errors, prefer streaming responses.
4. Keep comments minimal; only touch documentation by explicit request.
5. Mirror any `.env.local` change in `scripts/init-env.js` and other config defaults.
6. Run lint, type-checks, and relevant scripts before handing off work.
7. Commits must append `Co-authored-by: factory-droid[bot] <138933559+factory-droid[bot]@users.noreply.github.com>` and avoid secrets.

Claude Code guardrails:
- Avoid log spam; scope effects to streaming; gate high-frequency intervals to active states only.
- Prefer minimal file diffs; adhere to repository idioms and existing utilities.
- Do not auto-commit; create changes only and let maintainers handle VCS unless explicitly instructed.

---

## 5. Repository Orientation
- `/src/app/api/` – chat, documents, MCP approval, auth, WhatsApp endpoints.
- `/src/components/` – UI components and providers.
- `/src/lib/` – AI providers, RAG pipeline, MCP router, Zustand stores, utilities.
- `/scripts/` – environment bootstrap, config UI/server, RAG diagnostics.

---

## 6. RAG & Data Pipeline
- Keep `RAG_SYSTEM_PROMPT` strings intact with the `{{context}}` placeholder.
- Diagnostics: `node scripts/rag/decode-rag-prompt.js`, `node scripts/rag/check-rag-flow.js`, `node scripts/rag/test-rag-system.js`.
- Supabase stores chats, documents, embeddings, subscriptions, WhatsApp sessions—respect RLS policies.
- Vector search: 1536‑dim embeddings + HNSW indexes (`m=64`, `ef_construction=200`). Align chunking/processing scripts accordingly.

---

## 7. AI Model Management
Models must stay synchronized across five locations:
1. `.env.local`
2. `scripts/init-env.js`
3. `src/lib/env.ts`
4. `scripts/config-server.js`
5. `scripts/config-ui/index.html` (three fallback arrays)

`Model` schema:
```ts
interface Model {
  id: string;
  displayName: string;
  isFree?: boolean;
  isOpenSource?: boolean;
  supportsReasoning?: boolean;
  reasoningMethod?: 'effort' | 'max_tokens' | 'both' | 'none';
  contextLength?: number;
  description?: string;
}
```

UI icon cues:
- 🧠 Reasoning/thinking (`supportsReasoning`)
- 🎁 Free model (`isFree`)
- 🔓 Open source (`isOpenSource`)

Troubleshooting:
- Missing model → verify JSON syntax, restart dev server, clear `localStorage`, ensure all five files match.
- Icons missing → confirm boolean flags and selector styles in `src/components/ui/model-selector.tsx`.

---

## 8. MCP & Tooling
- Intent & tool detection: `src/lib/mcp/query-classifier.ts`, patterns under `src/lib/mcp/query-patterns`.
- Approval & execution pipeline: `src/app/api/chat/approve/route.ts` plus the Universal MCP router/client.
- Cache and approval metadata live on the server—keep tool IDs, schemas, and approval prompts consistent.

---

## 9. WhatsApp Integration
- Provider factory selects Fly.io or Koyeb Baileys deployment via `WHATSAPP_PROVIDER`.
- Client implementations reside in `src/lib/whatsapp/`. Maintain webhook readiness, session persistence, and provider health checks.

---

## 10. Payments & Auth
- Authentication uses Supabase (GitHub OAuth, email/password, magic links); respect multi-tenant RLS.
- Stripe and Polar enable subscriptions and one-off sales—configure secrets only through environment scripts.

---

## 11. Multi-Modal Generation
- Image/video/3D pipelines span `src/lib/` and API routes (Meshy, Luma, Runway, Flux, etc.).
- Preserve status polling, placeholder UI, and Supabase storage URLs when modifying generators.

---

## 12. Quality Checklist
- Code follows repository style and reuses existing utilities.
- Linting, type-checks, and domain scripts succeed prior to hand-off.
- No sensitive data introduced; configuration arrays remain synchronized.
- Task summaries stay concise and focused.
- Performance guardrails: avoid log spam; scope effects to streaming; prefer `useShallow`.

---

## 13. Handy Scripts
- `npm run dev` – primary app server
- `npm run config` – configuration dashboard
- `node scripts/rag/*` – RAG health checks
- `scripts/init-env.js` – default environment template

Use this CLAUDE.md as a Project Rule in Claude Code to keep agents aligned with the repo’s conventions and performance practices.
