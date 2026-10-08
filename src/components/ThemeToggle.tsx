"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="p-2 rounded-[8px] border border-border bg-card text-text hover:border-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-text" />
      ) : (
        <Moon className="w-4 h-4 text-text" />
      )}
    </button>
  );
}
