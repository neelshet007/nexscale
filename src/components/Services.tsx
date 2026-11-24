"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Network, 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Users, 
  Package, 
  UserCheck, 
  TrendingUp,
  ArrowRightCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function Services() {
  const [activeSubsystem, setActiveSubsystem] = useState<number>(0);

  const pillars = siteConfig.services;
  const businessPillar = pillars.find((p) => p.id === "business-systems-automation");
  const otherPillars = pillars.filter((p) => p.id !== "business-systems-automation");

  const subsystemIcons = [TrendingUp, Users, Package, UserCheck];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-950/40 border-t border-white/5">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            High-Performance Technology Solutions For Business Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            We engineer custom software, unified business systems, APIs, and scalable infrastructure designed around real commercial requirements.
          </p>
        </div>

        {/* 1. Custom Web Applications (Pillar 01) */}
        {otherPillars.slice(0, 1).map((pillar) => (
          <div
            key={pillar.id}
            className="mb-16 p-8 sm:p-10 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-blue-950/50 text-blue-300 border border-blue-500/30">
                    Pillar {pillar.number}
                  </span>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <a
                  href={`#contact?service=${encodeURIComponent(pillar.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-violet-300 transition-colors"
                >
                  <span>Discuss Web Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 rounded-xl bg-gray-900/40 border border-white/5">
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4 pb-2 border-b border-white/5">
                    Engineering Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillar.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-gray-300 leading-relaxed">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2. Business Systems & Automation (Pillar 02 — Featured Deep-Dive) */}
        {businessPillar && (
          <div className="mb-16 p-8 sm:p-10 rounded-2xl glass-panel relative overflow-hidden border-emerald-500/20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                    Pillar {businessPillar.number}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    {businessPillar.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {businessPillar.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 max-w-2xl leading-relaxed">
                  {businessPillar.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 max-w-md">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                  Connected Architecture Message
                </div>
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  &ldquo;Connect your sales, customers, operations, inventory, and workforce through intelligent business systems.&rdquo;
                </p>
              </div>
            </div>

            {/* Interconnected Flow Selector */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <span>Interconnected Business Pipeline</span>
                <span className="text-gray-400">• Click to inspect each solution</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {businessPillar.subsystems?.map((sub, idx) => {
                  const Icon = subsystemIcons[idx] || Cpu;
                  const isActive = activeSubsystem === idx;
                  return (
                    <button
                      key={sub.letter}
                      onClick={() => setActiveSubsystem(idx)}
                      className={`text-left p-4 rounded-xl border transition-all relative ${
                        isActive
                          ? "bg-emerald-950/40 border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                          : "bg-gray-900/30 border-white/5 hover:border-white/15 hover:bg-gray-900/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`p-1.5 rounded-lg text-xs font-bold ${
                            isActive
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-white/5 text-gray-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          Solution {sub.letter}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white tracking-tight">
                        {sub.shortTitle}
                      </div>
                      <div className="mt-1 text-[11px] text-gray-400 line-clamp-1">
                        {sub.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Subsystem Detail View */}
            <AnimatePresence mode="wait">
              {businessPillar.subsystems && (
                <motion.div
                  key={activeSubsystem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 rounded-xl bg-gray-900/50 border border-white/8"
                >
                  {(() => {
                    const current = businessPillar.subsystems[activeSubsystem];
                    const Icon = subsystemIcons[activeSubsystem] || Cpu;
                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
                            <Icon className="w-3.5 h-3.5" />
                            <span>System Solution {current.letter}</span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                            {current.title}
                          </h4>
                          <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            {current.description}
                          </p>
                          <a
                            href={`#contact?service=${encodeURIComponent(businessPillar.title)}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
                          >
                            <span>Request This Implementation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        <div className="lg:col-span-7">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                            Key Solution Deliverables & Automations
                          </div>
                          <div className="space-y-2.5">
                            {current.points.map((pt) => (
                              <div key={pt} className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                                <ArrowRightCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-300 leading-relaxed">
                                  {pt}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-gray-400">
              * Note: Solutions are custom engineered to integrate with your existing infrastructure and business data.
            </div>
          </div>
        )}

        {/* 3, 4, 5. API Development, Cloud Deployment, DevOps & Cybersecurity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPillars.slice(1).map((pillar) => {
            const isDevOps = pillar.id === "devops-cybersecurity";
            const isCloud = pillar.id === "cloud-deployment";
            const Icon = isDevOps ? ShieldCheck : isCloud ? Cloud : Network;
            const accentColor = isDevOps
              ? "text-emerald-400 border-emerald-500/30 bg-emerald-950/40"
              : isCloud
              ? "text-cyan-400 border-cyan-500/30 bg-cyan-950/40"
              : "text-violet-400 border-violet-500/30 bg-violet-950/40";

            return (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase border ${accentColor}`}>
                      Pillar {pillar.number}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-gray-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pillar.capabilities.slice(0, 5).map((cap) => (
                      <div key={cap} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={`#contact?service=${encodeURIComponent(pillar.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 group-hover:text-white transition-colors"
                  >
                    <span>Inquire About {pillar.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
