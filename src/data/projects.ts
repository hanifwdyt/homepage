export interface Project {
  name: string;
  description: string;
  url: string;
  stack: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    name: "mangan",
    description:
      "Find restaurants from YouTube food reviews near you. Syncs video data and maps locations — just pick a radius and discover places to eat.",
    url: "https://mangan.hanif.app",
    stack: ["Next.js", "Prisma", "Leaflet", "yt-dlp"],
    slug: "mangan",
  },
  {
    name: "miniboard",
    description:
      "A minimal kanban board I built because every task manager out there has too many features. This one just has columns and cards — that's it.",
    url: "https://task.hanif.app",
    stack: ["Next.js", "Prisma", "DnD"],
    slug: "miniboard",
  },
  {
    name: "netflix-forwarder",
    description:
      "Forwards Netflix household confirmation emails so my family can verify without bugging me. Set it up once, never think about it again.",
    url: "https://ijin-masuk-netflix.hanif.app",
    stack: ["Go", "IMAP", "SQLite"],
    slug: "netflix-forwarder",
  },
  {
    name: "pomodo",
    description:
      "A pomodoro timer + to-do list combo. Simple focus tool — set a timer, check off tasks, repeat.",
    url: "https://pomodo.hanif.app",
    stack: ["Astro", "Tailwind"],
    slug: "pomodo",
  },
  {
    name: "kana-quiz",
    description:
      "Practice reading hiragana and katakana with timed quizzes. Pick a level, type the romaji, and track your progress.",
    url: "https://kana.hanif.app",
    stack: ["Astro", "Tailwind"],
    slug: "kana-quiz",
  },
  {
    name: "bagirata",
    description:
      "Split bills fairly with friends. No sign-up, no fuss — just enter what everyone paid and who owes whom.",
    url: "https://bagirata.hanif.app",
    stack: ["Next.js", "Tailwind"],
    slug: "bagirata",
  },
  {
    name: "aturuang",
    description:
      "Track daily expenses via Telegram. Just text what you spent — AI parses it, saves it, and shows you where your money goes.",
    url: "https://aturuang.hanif.app",
    stack: ["Hono", "Prisma", "Grammy", "OpenAI"],
    slug: "aturuang",
  },
  {
    name: "uptime",
    description:
      "Monitor your services and get WhatsApp alerts when something goes down. Simple uptime checker with real-time notifications.",
    url: "https://uptime.hanif.app",
    stack: ["Hono", "Prisma", "Baileys"],
    slug: "uptime",
  },
];
