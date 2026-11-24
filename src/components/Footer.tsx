import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Why NexScale", href: "#why-nexscale" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedinIcon, href: siteConfig.socialLinks.linkedin },
    { name: "Instagram", icon: InstagramIcon, href: siteConfig.socialLinks.instagram },
    { name: "Facebook", icon: FacebookIcon, href: siteConfig.socialLinks.facebook },
    { name: "YouTube", icon: YoutubeIcon, href: siteConfig.socialLinks.youtube },
    { name: "WhatsApp", icon: MessageSquare, href: siteConfig.socialLinks.whatsapp },
  ];

  return (
    <footer className="bg-gray-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/5">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col group mb-3 focus:outline-none">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center leading-none">
                {siteConfig.logo.prefix}
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-emerald-300 transition-colors">
                  {siteConfig.logo.suffix}
                </span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide mt-1.5">
                {siteConfig.secondaryTagline}
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mt-2">
              We build custom software, connect business operations, automate workflows, and engineer reliable digital infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-gray-400">Phone:</span>{" "}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-gray-400">Location:</span>{" "}
                <span className="text-gray-300">{siteConfig.contact.location}</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-gray-900 border border-white/5 text-gray-400 hover:text-white hover:border-violet-500/30 transition-all"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <p>Copyright © {currentYear} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dadar, Mumbai</span>
            <span>•</span>
            <span>{siteConfig.secondaryTagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
