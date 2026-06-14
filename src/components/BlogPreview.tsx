"use client";

import React from "react";
import { blogPostsData } from "../data/blog";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gray-950/20">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Insights & Resources</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Technology Growth & Optimization Strategies
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-xl">
              Learn how to leverage modern web frameworks, operational automation, and algorithmic infrastructure to scale your operations.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-gray-900 border border-white/5 text-gray-300 hover:text-white hover:bg-gray-900/60 transition-all"
            >
              Subscribe to Insights
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogPostsData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-emerald-500/20 hover:bg-gray-900/50 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/35 border border-emerald-500/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-mono text-gray-500">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-bold text-gray-300 group-hover:text-emerald-300 transition-colors gap-1"
                >
                  Read Article
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
