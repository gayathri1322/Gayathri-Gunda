export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  bullets: string[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  bullets?: string[];
  details?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Gayathri Gunda",
    role: "AI/ML Engineer & Systems Researcher",
    headline: "AI/ML-focused B.Tech student building agentic RL environments and LLM systems.",
    summary:
      "AI/ML-focused B.Tech student building agentic RL environments and LLM systems. Trained a 1.5B model with REINFORCE + LoRA to 34% held-out task success where a frozen 3B baseline scored 0%, and ship production-style services with FastAPI, Docker, and full-stack tooling.",
    location: "Hyderabad, India",
    email: "gayathri.official111@gmail.com",
    phone: "+91-8688964319",
    linkedin: "https://www.linkedin.com/in/gayathri-gunda-31323b338/",
    github: "https://github.com/Gayathri132",
    resumeUrl: "/resume.pdf",
    avatarUrl: "/gayathri.png",
  },

  highlights: [
    {
      metric: "34%",
      label: "Held-out task success",
      detail: "vs 0% for frozen 3B baseline on unseen tools at 3x adversarial density",
    },
    {
      metric: "83%",
      label: "Fewer malformed tool calls",
      detail: "broke no-commit failure mode through principled reward-shaping design",
    },
    {
      metric: "100+",
      label: "Hackathon participants managed",
      detail: "end-to-end execution across 15+ student teams and faculty judges",
    },
  ],

  projects: [
    {
      slug: "mcp-arena",
      title: "MCPArena",
      subtitle: "Adversarial MCP RL Environment",
      stack: ["Python", "PyTorch", "REINFORCE", "LoRA", "Unsloth", "FastAPI", "Docker"],
      description:
        "An OpenEnv environment placing LLM agents in hostile MCP tool catalogs to enforce authentic tool reasoning over memorization.",
      keyMetrics: [
        { label: "Task Success", value: "34% vs 0% baseline" },
        { label: "Tool Error Cut", value: "-83% malformed calls" },
      ],
      bullets: [
        "Engineered an OpenEnv environment that places an LLM agent in a hostile MCP tool catalog (misleading docstrings, prompt injection in tool outputs, decoy leak-sink tools, hard cost budget), rotating the catalog every episode to force genuine tool reading over name memorization.",
        "Trained Qwen2.5-1.5B with REINFORCE + LoRA and reward shaping to reach 34% held-out task success on unseen tools at 3× adversarial training density, versus 0% for a frozen 3B baseline; cut malformed tool-call errors by 83% and broke a no-commit failure mode through reward-shaping design.",
        "Designed a five-rubric reward (task success, cost, adversarial avoidance, calibration, well-formedness); deployed on HF Spaces via FastAPI + Docker with a validator-passing OpenEnv API and published run logs as a public HF dataset.",
      ],
    },
    {
      slug: "prompt-guard",
      title: "PromptGuard",
      subtitle: "Prompt-Injection Defense Environment",
      stack: ["Python", "FastAPI", "Pydantic", "Docker"],
      description:
        "An RL environment where agents engineer robust system prompts to counter adversarial injections across six attack vectors.",
      keyMetrics: [
        { label: "Attack Coverage", value: "6 categories" },
        { label: "Difficulty Tiers", value: "3 balanced tiers" },
      ],
      bullets: [
        "Built an OpenEnv-compatible RL environment where agents craft system prompts to defend against prompt-injection attacks spanning six categories (including override, role-play, obfuscation, indirect injection, and social engineering) across three difficulty tiers.",
        "Implemented composite scoring that balances defense rate against task utility, so agents cannot win by refusing everything; served through an OpenAI-compatible LLM interface with FastAPI, Pydantic, and Docker.",
      ],
    },
  ] as Project[],

  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Java", "Go"],
    },
    {
      category: "ML & RL",
      items: [
        "PyTorch",
        "Hugging Face (Transformers, Datasets, Spaces)",
        "LoRA / Unsloth",
        "REINFORCE and policy-gradient methods",
        "Reward shaping",
        "OpenEnv",
      ],
    },
    {
      category: "LLM Systems",
      items: [
        "Model Context Protocol (MCP)",
        "Agent loops",
        "RAG (pgvector, cosine similarity)",
        "Structured extraction (Zod)",
        "Prompt-injection defense",
        "OpenAI",
        "Fireworks AI",
        "Azure OpenAI",
        "Google Cloud STT/TTS",
      ],
    },
    {
      category: "Backend & Frameworks",
      items: ["FastAPI", "Pydantic", "Express", "tRPC", "Spring Boot", "Streamlit"],
    },
    {
      category: "Data & Infrastructure",
      items: [
        "PostgreSQL (pgvector)",
        "MongoDB",
        "Redis",
        "SQLite",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "AWS (EC2, S3, Elastic Beanstalk)",
        "Cloudflare R2",
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      role: "Event Manager Lead",
      organization: "Technical Club, GRIET",
      period: "2024 – 2026",
      location: "Hyderabad, India",
      bullets: [
        "Led end-to-end execution of 2 college hackathons with 100+ participants: timelines, registrations, resource allocation, and day-of scheduling.",
        "Coordinated project evaluations and presentations between 15+ student teams and faculty judges.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
      period: "2023 – 2027 (Expected)",
      location: "Hyderabad, India",
      gpa: "CGPA: 7.98 / 10",
    },
  ],

  certifications: [
    {
      name: "AWS Educate Machine Learning Certificate",
      issuer: "Amazon Web Services",
    },
    {
      name: "Introduction to Data Analytics",
      issuer: "IBM / Coursera",
    },
    {
      name: "IEEE AI & Big Data Certificate",
      issuer: "IEEE",
    },
  ],

  suggestedQuestions: [
    "What did you build in MCPArena?",
    "What are your strongest skills?",
    "Are you open to internships?",
    "How can I contact you?",
  ],
};
