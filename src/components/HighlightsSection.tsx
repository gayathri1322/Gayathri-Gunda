"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { motion } from "framer-motion";

export function HighlightsSection() {
  return (
    <section className="py-16 md:py-24 border-b border-border bg-bg/30 backdrop-blur-[1px]">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-8">
          <div className="label mb-1">
            <span className="label-accent">01</span> / Key Impact
          </div>
          <h2 className="text-xl font-semibold text-text mt-1">
            Research & Systems Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.2, delay: idx * 0.05, ease: "easeOut" }}
              className="card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="tabular text-2xl font-semibold tracking-tight text-accent">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-text mt-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
