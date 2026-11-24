"use client";

import React from "react";
import { PhoneCall, FileText, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function Process() {
  const { heading, subheading, steps } = siteConfig.process;

  const icons = [PhoneCall, FileText, Code2, Rocket];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gray-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Our Method
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-base text-gray-400">
            {subheading}
          </p>
        </div>

        {/* 4-Step Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-transparent -translate-y-10 z-0 pointer-events-none" />

          {steps.map((item, index) => {
            const Icon = icons[index] || PhoneCall;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group z-10"
              >
                {/* Circle Icon Badge */}
                <div className="relative w-16 h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/20 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gray-950 border border-white/10 text-[10px] font-bold flex items-center justify-center text-gray-300 group-hover:text-emerald-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
