"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border bg-bg/30 backdrop-blur-[1px]">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-10 text-left">
          <div className="label mb-1">
            <span className="label-accent">03</span> / Expertise
          </div>
          <h2 className="text-xl font-semibold text-text mt-1">
            Technical Skills
          </h2>
          <p className="text-sm text-muted mt-1">
            Core toolsets, ML architectures, and systems infrastructure.
          </p>
        </div>

        {/* Grouped lists as plain text rows with a mono-font label column */}
        <div className="divide-y divide-border border-y border-border">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.18, delay: idx * 0.04, ease: "easeOut" }}
              className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
            >
              {/* Mono-font label column */}
              <div className="sm:col-span-4 label font-semibold">
                {skillGroup.category}
              </div>

              {/* Plain text items */}
              <div className="sm:col-span-8 text-sm text-text leading-[1.65]">
                {skillGroup.items.join(" · ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
