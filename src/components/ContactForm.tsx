"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    requirements: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.service || !formData.requirements) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");

    // Construct WhatsApp pre-filled message
    const targetPhone = siteConfig.contact.whatsappNumber;
    const messageText = `Hello Neel,

I would like to discuss a project.

Name: ${formData.name}
Business: ${formData.businessName || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}

Service Interested In:
${formData.service}

Project Requirements:
${formData.requirements}

Please contact me regarding this project.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    // Redirect user to WhatsApp
    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        service: "",
        requirements: "",
      });
      setStatus("idle");
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text/Info Panel */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Contact Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s Build Something Scalable
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              Ready to automate operations or launch your custom technology platform? Complete the form to coordinate a detailed consultation.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-900 border border-white/5 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-white mt-0.5 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-900 border border-white/5 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Direct Call / WhatsApp</h4>
                  <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white mt-0.5 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-900 border border-white/5 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</h4>
                  <a href={siteConfig.contact.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white mt-0.5 hover:underline">
                    {siteConfig.contact.address}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gray-900/40 border border-white/5 shadow-2xl glass-panel relative">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-2">{siteConfig.contactFormSettings.successMessage}</h3>
                  <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                    {siteConfig.contactFormSettings.redirectDescription}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        suppressHydrationWarning
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        suppressHydrationWarning
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        suppressHydrationWarning
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        suppressHydrationWarning
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Selected Service <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      suppressHydrationWarning
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    >
                      <option value="" disabled className="text-gray-600">Choose service option...</option>
                      {siteConfig.contactFormSettings.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Project Requirements <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      required
                      suppressHydrationWarning
                      rows={4}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Please outline the specific goals, constraints, and details of the technology you need."
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    suppressHydrationWarning
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white text-gray-950 hover:bg-gray-100 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all active:scale-98"
                  >
                    {status === "loading" ? "Preparing..." : "Get Started"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
