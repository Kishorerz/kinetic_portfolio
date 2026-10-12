"use client";

import React, { useState } from "react";
import { siteConfig } from "@/site.config";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [selectedChips, setSelectedChips] = useState<string[]>(["Full-Stack App"]);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const projectNeeds = [
    "Full-Stack App",
    "AI / ML Solution",
    "IoT / Hardware",
    "API & Backend",
    "Code Audit",
    "Other",
  ];

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-[clamp(80px,12vh,150px)] px-[var(--spacing-gutter)] border-t border-[var(--color-hairline)]">
      {/* Eyebrow */}
      <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-accent)] mb-8">
        (Contact & Collab)
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,96px)] items-start">
        {/* Left Column: Direct Info */}
        <div>
          <h2
            className="text-[clamp(44px,7vw,110px)] font-bold tracking-tight text-[var(--color-text)] uppercase leading-[0.9] mb-8"
            style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
          >
            Let&apos;s build together.
          </h2>

          <p className="text-[clamp(18px,1.8vw,24px)] leading-relaxed text-[var(--color-muted)] max-w-[32ch] mb-10">
            Have a project in mind, an AI challenge to solve, or just want to discuss software architecture? Drop a note.
          </p>

          {/* Email Card with Copy Action */}
          <div className="mb-10">
            <span className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)] block mb-2">
              Direct Inquiries
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[clamp(20px,2.2vw,30px)] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors underline underline-offset-4 decoration-1 decoration-[var(--color-hairline)] hover:decoration-[var(--color-accent)]"
              >
                {siteConfig.contact.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                data-cursor="Copy"
                className="p-2.5 rounded-full border border-[var(--color-chip-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[var(--color-positive)]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="font-['Geist_Mono',monospace] text-[11px] text-[var(--color-positive)] mt-1 block">
                ✓ Copied to clipboard
              </span>
            )}
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-6 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em]">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="flex items-center gap-2 text-[var(--color-label)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="flex items-center gap-2 text-[var(--color-label)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-card)] p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-3.5 h-3.5 bg-[var(--color-accent)] rotate-45 mb-6" />
              <h3 className="text-[28px] font-bold text-white mb-2">Message Received</h3>
              <p className="text-[var(--color-muted)] max-w-[34ch] text-[15px] mb-6">
                Thanks for reaching out! I typically respond within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-accent)] underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Requirement Chips */}
              <div>
                <span className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)] block mb-3">
                  What do you need help with?
                </span>
                <div className="flex flex-wrap gap-2">
                  {projectNeeds.map((need) => {
                    const active = selectedChips.includes(need);
                    return (
                      <button
                        type="button"
                        key={need}
                        onClick={() => toggleChip(need)}
                        className={`font-['Geist_Mono',monospace] text-[12px] uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                          active
                            ? "bg-[var(--color-accent)] text-[#111010] border-[var(--color-accent)] font-semibold shadow-sm"
                            : "border-[var(--color-chip-border)] text-[var(--color-text)] hover:border-white/40"
                        }`}
                      >
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input: Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-[var(--color-chip-border)] py-3 text-[18px] text-[var(--color-text)] placeholder:text-[var(--color-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              {/* Input: Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="ada@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-[var(--color-chip-border)] py-3 text-[18px] text-[var(--color-text)] placeholder:text-[var(--color-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              {/* Input: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
                  Project Brief
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your goals, timelines, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-b border-[var(--color-chip-border)] py-3 text-[18px] text-[var(--color-text)] placeholder:text-[var(--color-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-cursor="Send"
                className="w-full mt-2 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] py-4 font-['Geist_Mono',monospace] text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-[var(--color-text)] transition-colors flex items-center justify-center gap-2"
              >
                Send message <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
