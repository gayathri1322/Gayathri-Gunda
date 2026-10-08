"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/content";
import { X, CheckCircle2, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-none"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-content max-h-[90vh] overflow-y-auto card p-6 sm:p-8 z-10"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-border">
              <div>
                <div className="label text-accent font-semibold mb-1">
                  Engineering Deep Dive
                </div>
                <h3 id="modal-title" className="text-xl font-semibold text-text mt-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-[8px] border border-border text-muted hover:text-text hover:border-accent transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tech Stack */}
            <div className="py-5 border-b border-border">
              <div className="label mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Validated Results */}
            <div className="py-5 border-b border-border">
              <div className="label mb-2">
                Validated Results
              </div>
              <div className="divide-y divide-border">
                {project.keyMetrics.map((metric, i) => (
                  <div key={i} className="eval-row text-sm">
                    <span className="text-muted">{metric.label}</span>
                    <span className="tabular font-semibold text-accent">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Architectural Specifications */}
            <div className="pt-5 space-y-4">
              <div className="label">
                Implementation Details
              </div>
              <ul className="space-y-3.5">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-[1.65] text-text">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action */}
            <div className="pt-6 mt-6 border-t border-border flex justify-end">
              <button onClick={onClose} className="btn">
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
