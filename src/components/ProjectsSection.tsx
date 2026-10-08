"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/content";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border bg-bg/30 backdrop-blur-[1px]">
      <div className="max-w-grid mx-auto px-6">
        <div className="max-w-content mx-auto mb-10 text-left">
          <div className="label mb-1">
            <span className="label-accent">02</span> / Systems & RL
          </div>
          <h2 className="text-xl font-semibold text-text mt-1">
            Featured Projects
          </h2>
          <p className="text-sm text-muted mt-1.5">
            Production-grade environments and agentic reinforcement learning systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.2, delay: idx * 0.05, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="card group cursor-pointer p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-accent/60 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-[8px] border border-border text-muted group-hover:text-accent group-hover:border-accent transition-colors duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-text mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Model Card style Eval rows */}
                <div className="mt-5 py-1 border-t border-border">
                  {project.keyMetrics.map((metric, i) => (
                    <div key={i} className="eval-row text-xs">
                      <span className="text-muted">{metric.label}</span>
                      <span className="tabular font-semibold text-accent">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
