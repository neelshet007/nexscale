"use client";

import React from "react";
import { testimonialsData } from "../data/testimonials";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-950/20">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Client Feedback</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Trusted by Growing Enterprises
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Read how we have helped business owners automate manual labor, launch digital platforms, and build automated trading solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-white/5 relative flex flex-col justify-between hover:border-violet-500/20 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-white/5 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                {/* Mock avatar or initial letter */}
                <div className="w-10 h-10 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-sm font-bold text-violet-300">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
