"use client";

import React from "react";
import { siteConfig } from "@/site.config";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-[clamp(80px,14vh,160px)] pb-10 px-[var(--spacing-gutter)] border-t border-[var(--color-hairline)] select-none">
      <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] mb-4">
        (Portfolio / ©2026)
      </div>

      {/* Massive Kinetic Wordmark */}
      <div
        onClick={scrollToTop}
        data-cursor="Top"
        className="w-full overflow-hidden cursor-pointer group py-2"
      >
        <span
          className="text-[min(17vw,220px)] leading-[0.84] tracking-[-0.03em] font-bold uppercase block text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-400"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          {siteConfig.name}
        </span>
      </div>

      {/* Footer Bottom Row */}
      <div className="mt-14 pt-8 border-t border-[var(--color-hairline)] flex flex-wrap justify-between items-center gap-6 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
        <div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-[var(--color-text)] lowercase text-[14px] hover:text-[var(--color-accent)] transition-colors block mb-1"
          >
            {siteConfig.contact.email}
          </a>
          <span>{siteConfig.location} — Open for remote & on-site collaboration</span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="Top"
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors cursor-pointer"
          >
            Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
