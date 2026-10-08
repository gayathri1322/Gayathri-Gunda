"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border bg-bg/30 backdrop-blur-[1px]">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-10 text-left">
          <div className="label mb-1">
            <span className="label-accent">04</span> / Background
          </div>
          <h2 className="text-xl font-semibold text-text mt-1">
            Experience & Education
          </h2>
          <p className="text-sm text-muted mt-1">
            Leadership initiatives, academic focus, and credentials.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 border-l border-border space-y-12">
          {/* Leadership Experience Item */}
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base font-semibold text-text">
                  {exp.role}
                </h3>
                <span className="tabular text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              <div className="text-sm text-accent font-medium mb-3">
                {exp.organization}
              </div>

              {exp.bullets && (
                <ul className="space-y-2 text-sm text-text">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-[1.65]">
                      <span className="text-muted select-none mt-1">
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Education Item */}
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-border border-2 border-bg" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base font-semibold text-text">
                  {edu.degree}
                </h3>
                <span className="tabular text-xs text-muted">
                  {edu.period}
                </span>
              </div>

              <div className="text-sm text-muted mb-2">
                {edu.institution} · {edu.location}
              </div>

              <div className="inline-block px-2.5 py-1 text-xs tabular card text-accent font-semibold">
                {edu.gpa}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications: plain list */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <h3 className="text-base font-semibold text-text">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-text">
                  {cert.name}
                </span>
                <span className="tabular text-xs text-muted">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
