# Gayathri Gunda — AI/ML Engineer Portfolio

A production-ready, minimal, editorial portfolio website for **Gayathri Gunda**, an AI/ML engineer and researcher specializing in agentic RL environments, Model Context Protocol (MCP), and LLM systems.

> **Zero API Keys Required**: The portfolio is completely self-contained, lightning-fast, and static. No third-party AI keys or external API services are needed.

---

## 1. Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design Tokens**:
  - Light theme: Background `#FAFAF9`, Text `#18181B`, Muted `#71717A`, Borders `#E4E4E7`
  - Dark theme: Background `#0B0B0C`, Text `#F4F4F5`, Muted `#A1A1AA`, Borders `#27272A`
  - Accent Color: Deep Indigo (`#4F46E5`)
- **Typography**: Inter for body copy, JetBrains Mono for metrics and tags
- **Animations**: Framer Motion (subtle 150–250ms transitions, honoring `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Hosting & Deployment**: Vercel (zero environment variables required)

---

## 2. Folder Structure

```text
Gayathri Gunda/
├── .env.example
├── .gitignore
├── README.md
├── next.config.mjs
├── package.json
├── postcss.config.js
├── setup-assets.ps1
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── icon.svg
│   ├── gayathri.png           <-- Authentic portrait photo
│   └── resume.pdf             <-- Resume PDF
└── src/
    ├── app/
    │   ├── globals.css        <-- Design tokens & typography
    │   ├── icon.svg
    │   ├── layout.tsx         <-- Typography, SEO, ThemeProvider
    │   ├── page.tsx           <-- Assembled single-page application
    │   ├── robots.ts          <-- SEO robots file
    │   └── sitemap.ts         <-- Dynamic XML sitemap
    ├── components/
    │   ├── ContactSection.tsx <-- Direct email copy, social links, location
    │   ├── ExperienceSection.tsx <-- Vertical timeline & certifications
    │   ├── Footer.tsx         <-- Minimal year + name footer
    │   ├── Header.tsx         <-- Sticky navigation & theme toggle
    │   ├── HeroSection.tsx    <-- Portrait photo, summary, action buttons
    │   ├── HighlightsSection.tsx <-- 3 core impact metrics
    │   ├── ProjectModal.tsx   <-- In-depth engineering detail modal
    │   ├── ProjectsSection.tsx <-- 2-column project cards
    │   ├── SkillsSection.tsx  <-- Grouped mono rows (no meters)
    │   └── ThemeToggle.tsx    <-- Accessible light/dark toggle
    ├── context/
    │   └── ThemeContext.tsx   <-- Theme state provider
    └── data/
        └── content.ts         <-- Factual portfolio data from resume
```

---

## 3. Quickstart & Commands to Run

### Step 1: Copy Your Real Photo and Resume to the Project
Run this single PowerShell command in your terminal:

```powershell
.\setup-assets.ps1
```

*(Or manually copy the files with PowerShell:)*
```powershell
Copy-Item "C:\Users\sivas\.gemini\antigravity-ide\brain\86b85ea1-9ec6-4cd8-9e1e-5f8306b47e7e\.user_uploaded\media_1791445271143.png" "public\gayathri.png"
Copy-Item "C:\Users\sivas\Downloads\Gayathri_Gunda.pdf" "public\resume.pdf"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Deployment to Vercel

Because this site requires **no API keys** and **no environment variables**, deployment is instant:

1. Push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete editorial portfolio for Gayathri Gunda"
   git remote add origin https://github.com/Gayathri132/portfolio.git
   git push -u origin main
   ```
2. Import the project on [Vercel](https://vercel.com).
3. Click **Deploy**. Done!
