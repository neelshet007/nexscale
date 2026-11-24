"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
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

  // Listen to hash changes and custom autofill events without triggering set-state-in-effect
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("service=")) {
        const query = hash.split("service=")[1];
        if (query) {
          const decoded = decodeURIComponent(query);
          if (siteConfig.contactFormSettings.serviceOptions.includes(decoded)) {
            setFormData((prev) => ({ ...prev, service: decoded }));
          }
        }
      }
    };

    const handleAutofill = (e: Event) => {
      const ce = e as CustomEvent<{ service?: string; requirements?: string }>;
      if (ce.detail) {
        setFormData((prev) => ({
          ...prev,
          service: ce.detail.service || prev.service,
          requirements: ce.detail.requirements || prev.requirements,
        }));
        setTimeout(() => {
          const nameInput = document.getElementById("name") as HTMLInputElement | null;
          if (nameInput) {
            nameInput.focus();
          }
        }, 150);
      }
    };

    const frameId = requestAnimationFrame(handleHashChange);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("nexscale:autofill-service", handleAutofill);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("nexscale:autofill-service", handleAutofill);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid business email address.");
      return;
    }
    if (!formData.service) {
      setStatus("error");
      setErrorMessage("Please select the required service.");
      return;
    }
    if (!formData.requirements.trim()) {
      setStatus("error");
      setErrorMessage("Please share your project or operational requirements.");
      return;
    }

    setStatus("loading");

    // Construct structured WhatsApp consultation brief
    const targetPhone = siteConfig.contact.whatsappNumber;
    const messageText = `CONSULTATION INQUIRY — NexScale

Client Details:
• Name: ${formData.name.trim()}
• Business: ${formData.businessName.trim() || "Independent / Startup"}
• Email: ${formData.email.trim()}
• Phone: ${formData.phone.trim() || "Not provided"}

Selected Service:
• ${formData.service}

Project Requirements & Context:
${formData.requirements.trim()}

---
Sent via NexScale consultation portal (teamnexscale.com).`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    setStatus("success");
    try {
      const win = window.open(whatsappUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      service: "",
      requirements: "",
    });
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-950/40 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Panel */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Contact NexScale
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {siteConfig.contact.heading}
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              {siteConfig.contact.subheading}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-white mt-0.5 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white mt-0.5 hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Office Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400 leading-relaxed">
              We usually respond within 24 business hours to evaluate technical scope and schedule an architecture consultation.
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel relative overflow-hidden">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Consultation Request Form
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the form below and we will prepare technical and operational notes ahead of our call.
              </p>

              {status === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Created</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Your consultation brief is ready. If WhatsApp didn&apos;t open automatically, click the button below to start the conversation directly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat Directly</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@business.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Service Required <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-white/8 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                    >
                      <option value="" disabled className="text-gray-400">
                        Select an engineering discipline
                      </option>
                      {siteConfig.contactFormSettings.serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-gray-950 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Project Requirements <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      required
                      rows={4}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Describe your operational bottleneck, desired custom software, or infrastructure needs..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-colors leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-950 font-semibold text-xs uppercase tracking-wider hover:bg-gray-100 disabled:opacity-60 transition-all shadow-xl shadow-white/5 active:scale-98"
                    >
                      {status === "loading" ? (
                        <span>Submitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
