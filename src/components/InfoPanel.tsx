import React from "react";
import { Shield, CheckCircle, MapPin, Building, Sparkles } from "lucide-react";

export default function InfoPanel() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950/40 border-t border-white/5">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* H2 Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Enterprise Technology Consulting</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Next-Generation Custom Software Development & Business Growth Technology
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            NexScale is a premium website development company and automation agency helping organizations build reliable digital systems. We architect customized software solutions engineered to eliminate manual inefficiencies and scale technical operations.
          </p>
        </div>

        {/* Detailed Grid Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: What We Do */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/5 text-violet-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">What We Do</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We specialize in custom software development, high-performance website development, WhatsApp automation services, process automation services, and algorithmic trading software development. We bridge the gap between complex system architecture and user-friendly web interfaces.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-violet-400/80 flex-shrink-0 mt-0.5" />
                <span>Responsive website development in India and globally using Next.js.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-violet-400/80 flex-shrink-0 mt-0.5" />
                <span>Custom CRM integrations and automated customer retention solutions.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-violet-400/80 flex-shrink-0 mt-0.5" />
                <span>Docker-backed algo trading systems and VPS setup.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Who We Help & Industries */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/5 text-violet-400">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Who We Help & Industries</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We support ambitious businesses seeking comprehensive digital transformation. Our core clients include financial trading groups, scale-up e-commerce brands, local manufacturing firms, and service agencies.
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Primary Sectors Served:</h4>
              <div className="flex flex-wrap gap-2">
                {["Proprietary Trading", "E-Commerce & Retail", "Logistics & Supply Chain", "Professional Services", "Local SME Commerce"].map((sec) => (
                  <span key={sec} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400 font-medium">
                    {sec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Geographic Targeting */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/5 text-violet-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Regional Digital Transformation</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              While we serve international enterprise clients, we focus heavily on driving tech adoption across economic clusters. We provide local and remote technology consulting to support local businesses across regions.
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">Key Target Hubs:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-violet-400" /> Dadar, Mumbai</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-violet-400" /> Mumbai City</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-violet-400" /> Maharashtra State</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-violet-400" /> Pan-India Operations</span>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits Panel */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-900/20 border border-white/5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Automated Operational Efficiencies</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Transition away from spreadsheet workflows. Our custom WhatsApp automation and process automations decrease manual effort and human error.</p>
            </div>
            <div className="border-t border-white/5 md:border-t-0 md:border-x md:border-white/5 md:px-6 pt-6 md:pt-0">
              <h4 className="text-sm font-bold text-white mb-2">Robust Infrastructure & Cloud solutions</h4>
              <p className="text-xs text-gray-400 leading-relaxed">We build with Docker containers and deploy with CI/CD automation on leading cloud architectures, ensuring 99.9% uptime for business critical software.</p>
            </div>
            <div className="border-t border-white/5 md:border-t-0 pt-6 md:pt-0">
              <h4 className="text-sm font-bold text-white mb-2">Enterprise Customer Retention</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Retain customers via automated loyalty campaigns. Celebrate customer milestones automatically using targeted workflows that improve brand affinity.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
