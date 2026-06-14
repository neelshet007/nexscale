"use client";

import React from "react";
import { Laptop, Cpu, RotateCcw, Award, Sparkles, LineChart, Cloud, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Laptop,
    title: "Website Development",
    items: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "Custom web applications"
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    glow: "shadow-blue-500/5",
    border: "group-hover:border-blue-500/40"
  },
  {
    icon: Cpu,
    title: "Business Automation",
    items: [
      "WhatsApp automation",
      "Customer follow-ups",
      "Lead management",
      "Process & workflow automation"
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    glow: "shadow-emerald-500/5",
    border: "group-hover:border-emerald-500/40"
  },
  {
    icon: RotateCcw,
    title: "Customer Retention Systems",
    items: [
      "Customer engagement",
      "Re-engagement campaigns",
      "Loyalty & referral workflows",
      "Festival & birthday campaigns"
    ],
    color: "from-violet-500/10 to-fuchsia-500/10",
    glow: "shadow-violet-500/5",
    border: "group-hover:border-violet-500/40"
  },
  {
    icon: Award,
    title: "Review & Referral Systems",
    items: [
      "Google review collection",
      "Review automation tools",
      "Referral program structures",
      "Customer recommendations"
    ],
    color: "from-amber-500/10 to-orange-500/10",
    glow: "shadow-amber-500/5",
    border: "group-hover:border-amber-500/40"
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    items: [
      "AI system integrations",
      "Custom AI assistants",
      "Business AI workflows",
      "Decision & agent automation"
    ],
    color: "from-pink-500/10 to-rose-500/10",
    glow: "shadow-pink-500/5",
    border: "group-hover:border-pink-500/40"
  },
  {
    icon: LineChart,
    title: "Trading Technology Solutions",
    items: [
      "Algo trading solutions",
      "Custom trading dashboards",
      "Trading automation",
      "Data visualization dashboards"
    ],
    color: "from-cyan-500/10 to-sky-500/10",
    glow: "shadow-cyan-500/5",
    border: "group-hover:border-cyan-500/40"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Solutions",
    comingSoon: true,
    items: [
      "Cloud Infrastructure",
      "CI/CD Pipelines",
      "Docker Deployments",
      "Monitoring & VPS Management"
    ],
    color: "from-gray-500/10 to-slate-500/10",
    glow: "shadow-gray-500/5",
    border: "group-hover:border-gray-500/30"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-950/20">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400">Our Services</h2>
          <p className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            High-Performance Technology Solutions For Enterprise Growth
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            From modern responsive websites to automated algorithmic workflows, we build software designed for commercial results.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-gray-900/40 border border-white/5 shadow-xl ${service.glow} glass-panel-hover overflow-hidden transition-all duration-300`}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl -mr-4 -mt-4 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-violet-500/20 group-hover:bg-violet-950/20 transition-all text-violet-400 duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.comingSoon && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-violet-950/40 text-violet-300 border border-violet-500/30 uppercase tracking-widest">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-4 group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/10 mr-2.5 group-hover:bg-violet-400/50 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {!service.comingSoon && (
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <a href="#contact" className="inline-flex items-center text-xs font-semibold text-gray-400 group-hover:text-white transition-colors gap-1.5">
                      Request Solution
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
