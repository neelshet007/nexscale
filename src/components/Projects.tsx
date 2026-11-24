"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowRight, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projectsData = siteConfig.projects;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-950/20 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
              Our Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Engineering Solutions in Practice
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-xl">
              Explore software systems and algorithmic architectures engineered to solve practical operational and technical challenges.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                    : "bg-gray-900 border border-white/5 text-gray-400 hover:text-white hover:bg-gray-900/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isCompleted = project.status === "Completed";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-10 rounded-2xl glass-panel relative overflow-hidden group hover:border-violet-500/30 transition-all"
                >
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/8 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-violet-400 uppercase tracking-wide">
                          {project.category}
                        </span>
                        {project.completionDate && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-xs text-gray-500 font-mono">
                              Completed {project.completionDate}
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        {project.tagline}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                          isCompleted
                            ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                            : "bg-amber-950/40 border-amber-500/30 text-amber-300"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                          }`}
                        />
                        <span>{project.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Approach */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 pb-6 border-b border-white/5">
                    <div className="lg:col-span-6">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        The Operational Challenge
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Engineering Approach
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Capabilities & Tech Stack */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                        Key Engineering Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {project.outcome && (
                        <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 leading-relaxed">
                          <span className="font-semibold text-emerald-300 block mb-0.5">Outcome:</span>
                          {project.outcome}
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-5 p-5 rounded-xl bg-gray-900/40 border border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pb-2 border-b border-white/5">
                        <Terminal className="w-3.5 h-3.5 text-gray-400" />
                        <span>Technology Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                      >
                        <span>Discuss A Similar Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
