"use client";

import React from "react";
import { ArrowRight, ChevronRight, Layers, Workflow, Network, Cloud, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function Hero() {
  const pillars = [
    { name: "Custom Web Apps", desc: "Full-Stack Web Engineering", icon: Layers },
    { name: "Business Systems", desc: "Workflow & Process Scaling", icon: Workflow },
    { name: "API Development", desc: "REST & Scalable Architectures", icon: Network },
    { name: "Cloud Deployment", desc: "Managed Hosting & Scaling", icon: Cloud },
    { name: "DevOps & Security", desc: "Infrastructure & Security", icon: ShieldCheck },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Authentic Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{siteConfig.companyName} — {siteConfig.tagline}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Technology That Moves Your{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Business Forward.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <a
              href={siteConfig.hero.primaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white text-gray-950 hover:bg-gray-100 transition-all shadow-xl shadow-white/5 active:scale-98"
            >
              <span>{siteConfig.hero.primaryCTA.text}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.hero.secondaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:bg-gray-900 hover:border-white/20 transition-all active:scale-98 backdrop-blur-sm"
            >
              <span>{siteConfig.hero.secondaryCTA.text}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Secondary Trust Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xs font-medium tracking-wide uppercase text-gray-400"
          >
            {siteConfig.secondaryTagline}
          </motion.div>
        </div>

        {/* Five Engineering Pillars Preview Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 w-full"
        >
          <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/8 gap-2 mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Core Engineering Disciplines
              </div>
              <div className="text-xs text-gray-400 font-medium">
                Production-grade architecture tailored for commercial requirements
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <a
                    key={pillar.name}
                    href="#services"
                    className="flex flex-col p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-white/5 text-violet-400 group-hover:text-emerald-400 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-300">
                        Explore →
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">
                      {pillar.name}
                    </span>
                    <span className="mt-1 text-[11px] text-gray-400 leading-snug">
                      {pillar.desc}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
