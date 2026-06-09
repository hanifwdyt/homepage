export type Access = "public" | "protected" | "private";

export interface Project {
  name: string;
  description: string;
  url: string;
  stack: string[];
  slug: string;
  access: Access;
}

export const projects: Project[] = [
  // ── PUBLIC ──────────────────────────────────────────────────────────────
  {
    name: "ai.hanif.app",
    description:
      "Multi-model AI chat. Streaming, message editing, system prompts, conversation pinning, tags, share links, and ⌘K command palette.",
    url: "https://ai.hanif.app",
    stack: ["Next.js", "IndexedDB", "SSE"],
    slug: "ai-chat",
    access: "public",
  },
  {
    name: "mangan",
    description:
      "Find restaurants from YouTube food reviews near you. Syncs video data and maps locations — just pick a radius and discover places to eat.",
    url: "https://mangan.hanif.app",
    stack: ["Next.js", "Prisma", "Leaflet", "yt-dlp"],
    slug: "mangan",
    access: "public",
  },
  {
    name: "bagirata",
    description:
      "Split bills fairly with friends. No sign-up, no fuss — just enter what everyone paid and who owes whom.",
    url: "https://bagirata.hanif.app",
    stack: ["Next.js", "Tailwind"],
    slug: "bagirata",
    access: "public",
  },
  {
    name: "kana quiz",
    description:
      "Practice reading hiragana and katakana with timed quizzes. Pick a level, type the romaji, and track your progress.",
    url: "https://kana.hanif.app",
    stack: ["Astro", "Tailwind"],
    slug: "kana-quiz",
    access: "public",
  },
  {
    name: "nihongo",
    description:
      "JLPT N5 vocabulary flashcards. Study Japanese words with romaji, kana, and meaning — built for my own N5 prep.",
    url: "https://nihongo.hanif.app",
    stack: ["Next.js", "Tailwind"],
    slug: "nihongo",
    access: "public",
  },
  {
    name: "pomodo",
    description:
      "A pomodoro timer + to-do list combo. Simple focus tool — set a timer, check off tasks, repeat.",
    url: "https://pomodo.hanif.app",
    stack: ["Astro", "Tailwind"],
    slug: "pomodo",
    access: "public",
  },
  {
    name: "miniboard",
    description:
      "A minimal kanban board I built because every task manager out there has too many features. This one just has columns and cards — that's it.",
    url: "https://task.hanif.app",
    stack: ["Next.js", "Prisma", "DnD"],
    slug: "miniboard",
    access: "public",
  },
  {
    name: "nulis",
    description:
      "Distraction-free writing tool with a canvas view. Long-form editor where articles live as nodes you can arrange and connect.",
    url: "https://nulis.hanif.app",
    stack: ["Next.js", "Tiptap", "SQLite"],
    slug: "nulis",
    access: "public",
  },
  {
    name: "rupiah",
    description:
      "Real-time USD to IDR converter. Live rates, clean interface, nothing else.",
    url: "https://usd-to-idr.hanif.app",
    stack: ["Astro", "Tailwind"],
    slug: "rupiah",
    access: "public",
  },
  {
    name: "artifacts",
    description:
      "Push architecture diagrams as Mermaid code and instantly get a shareable URL. Used by Punakawan agents to visualize systems.",
    url: "https://artifacts.hanif.app",
    stack: ["Next.js", "Mermaid"],
    slug: "artifacts",
    access: "public",
  },
  {
    name: "maivez",
    description:
      "Email marketing tool for small teams. Build campaigns, manage lists, and send without the enterprise pricing.",
    url: "https://maivez.hanif.app",
    stack: ["Next.js", "Prisma", "Resend"],
    slug: "maivez",
    access: "public",
  },
  {
    name: "netflix forwarder",
    description:
      "Forwards Netflix household confirmation emails so my family can verify without bugging me. Set it up once, never think about it again.",
    url: "https://ijin-masuk-netflix.hanif.app",
    stack: ["Go", "IMAP", "SQLite"],
    slug: "netflix-forwarder",
    access: "public",
  },
  {
    name: "markdown",
    description:
      "Render markdown with themes and share it via a short link. Write or paste, pick a theme, and get a clean shareable page.",
    url: "https://markdown.hanif.app",
    stack: ["Express", "marked", "SQLite"],
    slug: "markdown",
    access: "public",
  },
  {
    name: "chart",
    description:
      "Chart image generation API. Send data, get back a rendered chart image — no browser needed.",
    url: "https://chart.hanif.app",
    stack: ["Express", "Chart.js", "node-canvas"],
    slug: "chart",
    access: "public",
  },

  // ── PROTECTED ────────────────────────────────────────────────────────────
  {
    name: "calendar",
    description:
      "My weekly schedule — WFO/WFH days, gym, swim, run, and client work. Managed by Punakawan agents.",
    url: "https://cal.hanif.app",
    stack: ["Next.js", "SQLite"],
    slug: "calendar",
    access: "protected",
  },
  {
    name: "finance",
    description:
      "Personal finance tracker. Expenses, income, debts, and cash flow — all logged via Punakawan.",
    url: "https://finance.hanif.app",
    stack: ["Next.js", "SQLite"],
    slug: "finance",
    access: "protected",
  },
  {
    name: "garmin dashboard",
    description:
      "Training dashboard synced from Garmin. Runs, swims, HRV, sleep, and race prep metrics — Intervals.icu-style.",
    url: "https://garmin.hanif.app",
    stack: ["Next.js", "Garmin API", "Intervals.icu"],
    slug: "garmin",
    access: "protected",
  },
  {
    name: "airdrop tracker",
    description:
      "Track active crypto airdrops, daily tasks, deadlines, and modal invested. Managed by Punakawan agents.",
    url: "https://airdrop.hanif.app",
    stack: ["Next.js", "SQLite"],
    slug: "airdrop",
    access: "protected",
  },
  {
    name: "aturuang",
    description:
      "Daily expense tracker via Telegram. Text what I spent — AI parses it and shows me where my money goes.",
    url: "https://aturuang.hanif.app",
    stack: ["Hono", "Prisma", "Grammy", "OpenAI"],
    slug: "aturuang",
    access: "protected",
  },
  {
    name: "diary punakawan",
    description:
      "Daily reflections and logs written by Punakawan AI agents. Raw thoughts, decisions, and observations.",
    url: "https://diary-punakawan.hanif.app",
    stack: ["Next.js", "SQLite"],
    slug: "diary",
    access: "protected",
  },
  {
    name: "context",
    description:
      "Context storage for AI workflows. Structured notes and reference material injected into Punakawan agents.",
    url: "https://context.hanif.app",
    stack: ["Next.js", "SQLite"],
    slug: "context",
    access: "protected",
  },

  // ── PRIVATE ──────────────────────────────────────────────────────────────
  {
    name: "punakawan",
    description:
      "Autonomous AI agent system — Semar, Gareng, Petruk, Bagong. Handles GitLab ops, DevOps, coding, and daily routines.",
    url: "https://punakawan.hanif.app",
    stack: ["Node.js", "Claude API", "Telegram"],
    slug: "punakawan",
    access: "private",
  },
  {
    name: "ai router",
    description:
      "LLM API router. Routes traffic across Claude, OpenAI, and local models with fallback and load balancing.",
    url: "https://router.hanif.app",
    stack: ["Node.js", "Hono"],
    slug: "router",
    access: "private",
  },
  {
    name: "uptime",
    description:
      "Service uptime monitoring for all hanif.app projects. Alerts via WhatsApp when something goes down.",
    url: "https://uptime.hanif.app",
    stack: ["Hono", "Prisma", "Baileys"],
    slug: "uptime",
    access: "private",
  },
  {
    name: "review",
    description:
      "Internal code and project review tool. Tracks MRs, review comments, and feedback across GitLab projects.",
    url: "https://review.hanif.app",
    stack: ["Next.js", "GitLab API"],
    slug: "review",
    access: "private",
  },
  {
    name: "status",
    description:
      "Public status page for all hanif.app services. Checks every site from the Cloudflare edge every 2 minutes and emails alerts on downtime.",
    url: "https://status.hanif.app",
    stack: ["Cloudflare Workers", "KV", "Resend"],
    slug: "status",
    access: "public",
  },
];

export const publicProjects = projects.filter((p) => p.access === "public");
export const protectedProjects = projects.filter((p) => p.access === "protected");
export const privateProjects = projects.filter((p) => p.access === "private");
