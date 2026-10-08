"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg">
      <div className="max-w-grid mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
        >
          Gayathri Gunda
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-text transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-[8px] border border-border bg-card text-text focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-text py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
