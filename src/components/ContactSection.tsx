"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { Mail, Linkedin, Github, MapPin, Copy, Check } from "lucide-react";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border bg-bg/30 backdrop-blur-[1px]">
      <div className="max-w-content mx-auto px-6 text-left">
        <div className="mb-8">
          <div className="label mb-1">
            <span className="label-accent">05</span> / Connect
          </div>
          <h2 className="text-xl font-semibold text-text mt-1">
            Get in Touch
          </h2>
          <p className="text-sm text-muted mt-2">
            Interested in collaboration, agentic RL research, or engineering opportunities.
          </p>
        </div>

        <div className="card p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="label mb-1">
                Direct Email
              </div>
              <div className="text-base font-semibold text-text mt-0.5">
                {personal.email}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="btn text-xs h-9"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="btn btn-primary text-xs h-9"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-6">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 label text-muted">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
