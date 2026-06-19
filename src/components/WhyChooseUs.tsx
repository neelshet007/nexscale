"use client";

import React from "react";
import { Briefcase, TrendingUp, Zap, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const reasons = [
  {
    icon: Briefcase,
    title: "Business Focused",
    description: "We focus on solving business problems, not just building software."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Technology designed to grow with your business."
  },
  {
    icon: Zap,
    title: "Automation First",
    description: "Reduce manual work and improve operational efficiency."
  },
  {
    icon: HelpCircle,
    title: "Long-Term Partnership",
    description: "We aim to become your technology partner, not just a service provider."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Header Area */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Why {siteConfig.companyName}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              A Software Partner Designed For Your Success
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              We look beyond syntax and server deployments. We study your processes, analyze operational constraints, and engineer architectures configured specifically to drive commercial growth.
            </p>
            <div className="mt-8 flex">
              <a
                href={siteConfig.ctas.primary.href}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all"
              >
                {siteConfig.ctas.primary.text}
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-emerald-500/20 hover:bg-gray-900/60 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400 inline-block mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.description}
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
