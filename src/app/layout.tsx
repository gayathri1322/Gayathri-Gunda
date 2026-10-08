import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gayathri Gunda | AI/ML Engineer & Systems Researcher",
  description:
    "AI/ML-focused engineer building agentic RL environments, MCP tools, and production LLM systems. Trained 1.5B model to 34% held-out task success with REINFORCE + LoRA.",
  authors: [{ name: "Gayathri Gunda", url: "https://github.com/Gayathri132" }],
  creator: "Gayathri Gunda",
  keywords: [
    "Gayathri Gunda",
    "AI Engineer",
    "Machine Learning",
    "Reinforcement Learning",
    "Model Context Protocol",
    "MCP",
    "LLM Systems",
    "FastAPI",
    "PyTorch",
    "LoRA",
    "Hyderabad",
  ],
  metadataBase: new URL("https://gayathrigunda.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gayathrigunda.dev",
    title: "Gayathri Gunda | AI/ML Engineer & Systems Researcher",
    description:
      "AI/ML-focused engineer building agentic RL environments and LLM systems with REINFORCE, LoRA, and FastAPI.",
    siteName: "Gayathri Gunda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayathri Gunda | AI/ML Engineer",
    description:
      "AI/ML-focused engineer building agentic RL environments and LLM systems.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
