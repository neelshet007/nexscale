"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const projectsData = siteConfig.projects;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-950/20">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Our Portfolio</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Enterprise Technology in Action
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-xl">
              Explore custom systems engineered to address complex business requirements, optimize performance, and scale reliably.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                suppressHydrationWarning
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
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isFeatured = project.isFeatured;

              if (isFeatured && activeCategory === "All") {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl border border-violet-500/20 bg-gradient-to-r from-gray-900/60 via-violet-950/10 to-gray-900/60 p-8 lg:p-12 overflow-hidden shadow-2xl"
                  >
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                      <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-400/25 bg-violet-950/45 text-[10px] font-extrabold uppercase tracking-widest text-violet-300 mb-6">
                          ★ Featured Project
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                          Category: {project.category}
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feat) => (
                              <li key={feat} className="flex items-center text-xs text-gray-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 mr-2.5" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400 font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-gray-950 hover:bg-gray-100 transition-all"
                            >
                              Live Demo
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-900 border border-white/5 text-gray-300 hover:text-white transition-all"
                            >
                              View Code
                              <GithubIcon />
                            </a>
                          )}
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-transparent text-gray-400 hover:text-white transition-all"
                          >
                            Inquire for Similar Project
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Right Visual Panel (Placeholder simulation) */}
                      <div className="lg:col-span-5 h-72 lg:h-96 rounded-xl border border-white/5 bg-gray-950/60 flex flex-col justify-center items-center p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-emerald-500/5" />
                        <Code className="w-12 h-12 text-violet-400/40 group-hover:scale-110 transition-transform duration-300 mb-4" />
                        <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">{project.name}</span>
                        <span className="text-xs text-gray-500 mt-2">Enterprise Algo Architecture</span>
                        <span className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-600">STATUS: {project.status}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Normal Project Cards
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-white/5 bg-gray-900/30 p-6 sm:p-8 hover:bg-gray-900/50 hover:border-violet-500/20 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">{project.category}</span>
                        {project.status === "Under Development" && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-950/45 text-amber-300 border border-amber-500/30 uppercase tracking-widest">
                            Under Development
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-3">{project.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-violet-400 transition-colors"
                          >
                            Live Demo
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-violet-400 transition-colors"
                          >
                            GitHub Repository
                            <GithubIcon />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-4 h-48 rounded-lg bg-gray-950/40 border border-white/5 flex flex-col justify-center items-center p-4">
                      <Code className="w-8 h-8 text-gray-600 mb-2" />
                      <span className="text-xs font-semibold text-gray-400">{project.name}</span>
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-2">{project.status}</span>
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
