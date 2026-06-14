"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Configurable core technologies
const techStack = [
  { name: "Next.js", desc: "Web Development" },
  { name: "Python", desc: "Algo Engineering" },
  { name: "FastAPI", desc: "REST Architectures" },
  { name: "Docker", desc: "Container Deployments" },
  { name: "MongoDB", desc: "Data Storage" },
  { name: "VPS Cloud", desc: "Hosting & Scaling" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Absolute background gradient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            NexScale — Helping Businesses Scale Through Technology
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]"
          >
            Scale Your Business With{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            We help businesses build websites, automate operations, improve customer retention, and implement scalable technology solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white text-gray-950 hover:bg-gray-100 transition-all shadow-xl shadow-white/5 active:scale-98"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-gray-900 border border-white/8 text-gray-300 hover:text-white hover:bg-gray-900/60 hover:border-white/15 transition-all active:scale-98"
            >
              View Services
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Technology Showcase Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 lg:mt-28 w-full"
          >
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-emerald-500/5 pointer-events-none" />
              <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-6">Our Core Technology Competencies</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <span className="text-lg font-bold text-white tracking-tight">
                      {tech.name}
                    </span>
                    <span className="mt-1.5 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
