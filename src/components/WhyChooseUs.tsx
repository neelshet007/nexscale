"use client";

import React from "react";
import { Briefcase, TrendingUp, Layers, Users } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function WhyChooseUs() {
  const { whyNexScale } = siteConfig;

  const icons = [Briefcase, TrendingUp, Layers, Users];

  return (
    <section id="why-nexscale" className="py-24 relative overflow-hidden bg-gray-950/60 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header Area */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Why NexScale
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {whyNexScale.heading}
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              {whyNexScale.subheading}
            </p>
            <div className="mt-8 flex">
              <a
                href={siteConfig.ctas.primary.href}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all shadow-lg shadow-emerald-950/30"
              >
                Schedule an Initial Consultation
              </a>
            </div>
          </div>

          {/* Differentiators Grid (Single Merged Section) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyNexScale.differentiators.map((diff, index) => {
              const Icon = icons[index] || Briefcase;
              return (
                <motion.div
                  key={diff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400/80">
                      {diff.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
