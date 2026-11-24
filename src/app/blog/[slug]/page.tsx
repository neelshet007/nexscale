import React from "react";
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { blogPostsData } from "../../../data/blog";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO metadata for each article when indexed by Google and shared on social
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | NexScale`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.teamnexscale.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.teamnexscale.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: "https://www.teamnexscale.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://www.teamnexscale.com/og-image.png"],
    },
  };
}

// Statically generate parameters at build time for optimal Vercel deployment performance
export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-950 pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        {/* Glow background accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="text-xs font-bold text-violet-400 bg-violet-950/35 border border-violet-500/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 border-y border-white/5 py-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-gray-600" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-600" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article 
            className="text-gray-300 leading-relaxed text-base sm:text-lg space-y-6 max-w-none border-b border-white/5 pb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 mb-16">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400 font-mono">
                #{tag}
              </span>
            ))}
          </div>

          {/* Contact CTA card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-gray-900 via-violet-950/10 to-gray-900 border border-violet-500/25 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">Need a customized version of this technology?</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                We design and build customized websites, process automations, and quantitative algorithmic systems tailored to unique business parameters.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white text-gray-950 hover:bg-gray-100 transition-all shadow-lg active:scale-98"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
