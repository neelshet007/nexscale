"use client";

import React from "react";
import { PhoneCall, FileText, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Discovery Call",
    description: "Initial consultation to explore your workflows, goals, and technical requirements."
  },
  {
    icon: FileText,
    step: "02",
    title: "Planning & Architecture",
    description: "Engineering high-level system architecture blueprints, detailing specific API boundaries and integration requirements."
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & Testing",
    description: "Creating type-safe code architectures, conducting performance tests, and iteratively building capabilities."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "Safe rollout, performance monitoring, and ongoing post-launch operational support."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Our Method</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            How We Partner With You
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A structured, engineering-first approach from early consultation to production launch and support.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-emerald-500/10 via-violet-500/10 to-transparent -translate-y-8 z-0 pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group z-10"
              >
                {/* Circle Icon Badge */}
                <div className="relative w-16 h-16 rounded-full bg-gray-900 border border-white/5 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 group-hover:shadow-lg group-hover:shadow-emerald-500/5 transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gray-950 border border-white/8 text-[10px] font-bold flex items-center justify-center text-gray-400 group-hover:text-emerald-300">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
