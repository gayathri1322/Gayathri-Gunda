import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
        editorial: {
          bg: "var(--bg)",
          text: "var(--text)",
          muted: "var(--muted)",
          border: "var(--border)",
          card: "var(--card)",
        },
        editorialDark: {
          bg: "var(--bg)",
          text: "var(--text)",
          muted: "var(--muted)",
          border: "var(--border)",
          card: "var(--card)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.6" }],
        sm: ["14px", { lineHeight: "1.65" }],
        base: ["16px", { lineHeight: "1.65" }],
        lg: ["20px", { lineHeight: "1.4" }],
        xl: ["28px", { lineHeight: "1.3" }],
        "2xl": ["48px", { lineHeight: "1.15" }],
      },
      maxWidth: {
        content: "720px",
        grid: "960px",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
