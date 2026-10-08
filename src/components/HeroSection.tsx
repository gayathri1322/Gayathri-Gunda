"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowDown, FileText, Mail, Linkedin, Github, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { personal } = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  const focusPoints = [
    "Trained 1.5B model with REINFORCE + LoRA to 34% held-out task success (vs 0% 3B baseline).",
    "Engineered adversarial MCP tool catalog RL environments (MCPArena).",
    "Built prompt-injection defense environment with composite scoring (PromptGuard).",
    "Shipped production-style services with FastAPI, Docker, and full-stack tooling.",
  ];

  return (
    <section className="bg-grid py-12 md:py-20 border-b border-border bg-transparent">
      <div className="max-w-grid mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
          {/* Left Column: Details & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex-1 w-full space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 label mb-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{personal.location}</span>
                <span className="text-border">|</span>
                <span className="label-accent">AI & Systems Researcher</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text">
                {personal.name}
              </h1>
              <p className="text-base sm:text-lg text-accent font-medium mt-1">
                {personal.role}
              </p>
            </div>

            <p className="text-base text-text leading-[1.65]">
              {personal.summary}
            </p>

            {/* Structured Highlights List */}
            <div className="space-y-2.5 pt-1">
              {focusPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a href="#projects" className="btn btn-primary">
                <ArrowDown className="w-4 h-4" />
                <span>View projects</span>
              </a>

              <a
                href={personal.resumeUrl}
                download="Gayathri_Gunda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FileText className="w-4 h-4 text-muted" />
                <span>Download resume</span>
              </a>

              <a href="#contact" className="btn">
                <Mail className="w-4 h-4 text-muted" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Row */}
            <div className="flex items-center gap-6 pt-4 border-t border-border text-sm">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prominent Photo with enhanced luminous glow matching reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="shrink-0 flex justify-center lg:justify-end items-center w-full lg:w-auto"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full border-2 border-accent bg-card overflow-hidden shadow-[0_0_35px_rgba(79,70,229,0.25)] dark:shadow-[0_0_45px_rgba(129,140,248,0.35)] ring-4 ring-accent/25 dark:ring-accent/35 hover:ring-accent/50 hover:shadow-[0_0_50px_rgba(79,70,229,0.4)] transition-all duration-300">
              {!imgError ? (
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 340px"
                  className="object-cover object-[center_15%]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-3xl font-semibold text-accent">
                  GG
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
