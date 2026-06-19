"use client";

import React from "react";
import { Mail, Briefcase, TrendingUp, Zap, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, getDirectImageUrl } from "../config/siteConfig";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function MeetTeam() {
  const { team, whyWorkWithUs } = siteConfig;

  // Map icon strings or index to Lucide icons for the feature cards
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case "business-first":
        return Briefcase;
      case "modern-tech":
        return TrendingUp;
      case "long-term":
        return HelpCircle;
      default:
        return Zap;
    }
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-gray-950/20">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-wider text-emerald-400"
          >
            Meet the Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            The people behind NexScale, helping businesses scale through technology with practical, modern digital solutions.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-28">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 sm:p-10 rounded-2xl bg-gray-900/30 border border-white/5 shadow-2xl glass-panel relative group overflow-hidden transition-all duration-300 hover:border-violet-500/20"
            >
              {/* Subtle top light reflection */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Profile Image & Glow */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getDirectImageUrl(member.photoUrl)}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10 group-hover:border-violet-400/30 transition-all duration-300"
                  />
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-400 mt-1 uppercase tracking-wider">{member.title}</p>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex justify-center sm:justify-start gap-3 mt-4">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/30 transition-all duration-200"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-emerald-600/20 hover:border-emerald-500/30 transition-all duration-200"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Expertise List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Core Expertise:</h4>
                <ul className="space-y-2">
                  {member.expertise.map((exp) => (
                    <li key={exp} className="flex items-center text-xs text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2.5 flex-shrink-0" />
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Badges */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Skills & Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skillBadges.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-300 font-mono tracking-wide hover:border-violet-500/20 hover:bg-violet-950/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Why Work With NexScale Sub-section */}
        <div className="pt-12 border-t border-white/5 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {whyWorkWithUs.title}
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyWorkWithUs.cards.map((card, index) => {
              const IconComponent = getFeatureIcon(card.id);
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-900/30 border border-white/5 hover:border-emerald-500/20 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400 inline-block mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.description}
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
