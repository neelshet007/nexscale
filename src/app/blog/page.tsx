"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogPostsData } from "../../data/blog";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogArchive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Website Development",
    "Business Automation",
    "AI for Businesses",
    "Trading Technology",
  ];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-950 pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">NexScale Blog</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Insights & Engineering Articles
            </h1>
            <p className="mt-4 text-base text-gray-400">
              Technical breakdowns, case studies, and strategic guides on custom software engineering, business automation, and trading systems.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 pb-6 border-b border-white/5">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                      : "bg-gray-900 border border-white/5 text-gray-400 hover:text-white hover:bg-gray-900/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-900 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col justify-between p-8 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-violet-500/20 hover:bg-gray-900/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-violet-400 bg-violet-950/35 border border-violet-500/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-violet-300 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-gray-500 font-mono">
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-mono text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-gray-300 group-hover:text-violet-300 transition-colors gap-1"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-white/5 bg-gray-900/10">
              <p className="text-sm text-gray-500">No articles matched your search query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-xs font-bold text-violet-400 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
