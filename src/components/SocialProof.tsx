"use client";

import React from "react";

const capabilities = [
  "Website Development",
  "Automation Solutions",
  "AI Integrations",
  "Trading Technology",
  "Business Consulting",
  "Customer Retention",
  "Workflow Automation",
  "Algorithmic Trading",
];

export default function SocialProof() {
  // Double the list to support seamless infinite loop scrolling
  const loopList = [...capabilities, ...capabilities];

  return (
    <section className="bg-gray-950/40 border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center animate-infinite-scroll">
        {loopList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center mx-8 md:mx-12"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-4" />
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-400 uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
