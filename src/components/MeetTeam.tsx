"use client";

import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, getDirectImageUrl } from "../config/siteConfig";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function MeetTeam() {
  const { team } = siteConfig;

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-gray-950/20 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

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
            Leadership & Engineering
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
          >
            People Behind NexScale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            Direct access to dedicated engineering and business consulting specialists committed to your technology outcomes.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-2xl glass-panel relative group overflow-hidden transition-all duration-300 hover:border-violet-500/20"
            >
              {/* Subtle Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Profile Image & Role Header */}
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mt-1">
                    {member.title}
                  </p>
                  
                  {/* Social Quick Links */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 text-center sm:text-left">
                {member.description}
              </p>

              {/* Primary Focus Areas */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Core Responsibilities & Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills and Technologies Cloud */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Proficiencies & Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
