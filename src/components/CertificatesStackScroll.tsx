"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig, Certificate } from "@/site.config";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, Building2, Hash } from "lucide-react";

export function CertificatesStackScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const certs: Certificate[] = siteConfig.certificates || [];
  const linkedInCertUrl =
    siteConfig.certificationsLinkedInUrl ||
    "https://www.linkedin.com/in/kishorkumarbaskaran/details/certifications/";

  // Dynamic Card Activation Windows across 0.0 -> 0.95 progress for N certificates
  const count = certs.length;
  // Card 0 is the base card
  // Remaining (count - 1) cards enter progressively
  const step = count > 1 ? 0.92 / (count - 1) : 1;
  const windows = certs.map((_, i) => {
    if (i === 0) return { start: 0, end: step * 0.5 };
    const start = (i - 1) * step + step * 0.15;
    const end = Math.min(start + step * 0.85, 0.98);
    return { start, end };
  });

  // Active top card index
  let activeIndex = 0;
  for (let i = count - 1; i >= 0; i--) {
    if (progress >= windows[i].start) {
      activeIndex = i;
      break;
    }
  }

  // Cubic easing function
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };

  return (
    <section ref={containerRef} className="relative h-[480vh] select-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-[clamp(24px,4vh,48px)] px-[var(--spacing-gutter)]">
        {/* Top Eyebrow Meta */}
        <div className="flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] border-b border-[var(--color-hairline)] pb-4">
          <span className="flex items-center gap-2 text-[var(--color-accent)]">
            <Award className="w-3.5 h-3.5" /> (Licenses &amp; Certifications)
          </span>
          <span className="hidden md:inline">Continuous Scroll · Stacking Deck</span>
          <span>Verified ({count.toString().padStart(2, "0")})</span>
        </div>

        {/* Section Headline */}
        <div className="pt-4 pb-2">
          <h2
            className="text-[clamp(36px,5.5vw,78px)] font-bold uppercase tracking-[-0.02em] leading-none text-[var(--color-text)]"
            style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
          >
            Certificates &amp; Credentials
          </h2>
          <p className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-muted)] uppercase tracking-[0.06em] mt-2">
            Scroll to reveal and stack verified licenses and certifications one by one
          </p>
        </div>

        {/* Center Stacking Cards Deck */}
        <div className="relative w-full max-w-3xl h-[410px] sm:h-[390px] my-auto mx-auto flex items-center justify-center">
          {certs.map((cert, index) => {
            // Determine transformation based on progress
            let translateY = 0;
            let opacity = 1;
            let scale = 1;
            let rotate = 0;
            let pointerEvents: "auto" | "none" = "auto";

            if (index === 0) {
              // Card 0 is always base
              const cardsAbove =
                (progress >= 0.2 ? 1 : 0) +
                (progress >= 0.45 ? 1 : 0) +
                (progress >= 0.7 ? 1 : 0);
              scale = 1 - cardsAbove * 0.04;
              translateY = -cardsAbove * 14;
              opacity = 1 - cardsAbove * 0.12;
              rotate = -1.5;
            } else {
              const win = windows[index];
              if (progress < win.start) {
                // Not yet entered: sits below screen
                translateY = 130;
                opacity = 0;
                scale = 0.95;
                rotate = index % 2 === 0 ? -2 : 2;
                pointerEvents = "none";
              } else if (progress >= win.start && progress < win.end) {
                // Entering phase: animate in from bottom
                const rawT = (progress - win.start) / (win.end - win.start);
                const t = easeOutCubic(Math.min(Math.max(rawT, 0), 1));
                translateY = (1 - t) * 130;
                opacity = t;
                scale = 0.95 + t * 0.05;
                rotate = (index % 2 === 0 ? -1.5 : 1.5) * (1 - t * 0.5);
              } else {
                // Fully entered. Check if higher cards are stacked above it
                const cardsAbove = certs
                  .slice(index + 1)
                  .filter((_, higherIdx) => progress >= windows[index + 1 + higherIdx].start).length;

                scale = 1 - cardsAbove * 0.04;
                translateY = -cardsAbove * 14;
                opacity = 1 - cardsAbove * 0.12;
                rotate = index % 2 === 0 ? -1 : 1;
              }
            }

            return (
              <div
                key={cert.num}
                className="absolute inset-0 bg-[#1a1918] rounded-[var(--radius-card)] border border-white/15 p-7 sm:p-9 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] will-change-transform transition-[filter] duration-200"
                style={{
                  transform: `translate3d(0, ${translateY.toFixed(2)}%, 0) scale(${scale.toFixed(3)}) rotate(${rotate.toFixed(2)}deg)`,
                  opacity: opacity.toFixed(3),
                  zIndex: index + 10,
                  pointerEvents,
                }}
              >
                {/* Top Card Row: Badge, Issuer, Issue Date */}
                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-positive)] animate-pulse" />
                    <span className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      {cert.badgeText || "OFFICIAL CERTIFICATE"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 font-['Geist_Mono',monospace] text-[12px] text-[var(--color-label)]">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {cert.issuer}
                    </span>
                    <span className="opacity-40">/</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[var(--color-muted)]" />
                      {cert.issueDate}
                    </span>
                  </div>
                </div>

                {/* Card Center: Title & Description/Skills */}
                <div className="my-auto py-2">
                  <div className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-label)] mb-1">
                    CREDENTIAL #{cert.num}
                  </div>
                  <h3
                    className="text-[clamp(22px,2.8vw,36px)] font-bold tracking-tight text-white leading-tight mb-2"
                    style={{ fontVariationSettings: "'wdth' 85, 'wght' 700" }}
                  >
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-[14px] leading-relaxed text-[var(--color-subtle)] max-w-[58ch] mb-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Credential ID badge (if available) */}
                  {cert.credentialId ? (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 font-['Geist_Mono',monospace] text-[11px] text-[var(--color-muted)]">
                      <Hash className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>ID: <strong className="text-white font-medium">{cert.credentialId}</strong></span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 font-['Geist_Mono',monospace] text-[11px] text-[var(--color-label)]">
                      <ShieldCheck className="w-3 h-3 text-[var(--color-label)]" />
                      <span>Accredited Certification</span>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Skills & Official Verification Link */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center gap-3 font-['Geist_Mono',monospace] text-[11px]">
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills &&
                      cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded border border-white/10 text-[var(--color-subtle)] bg-white/5"
                        >
                          {s}
                        </span>
                      ))}
                  </div>

                  {/* Verification Link: Official URL if verified, otherwise LinkedIn */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[var(--color-positive)] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>

                    <a
                      href={cert.credentialUrl ? cert.credentialUrl : linkedInCertUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all font-semibold uppercase tracking-wider text-[11px]"
                      title={cert.credentialUrl ? "Verify Certificate via official issuer" : "View certification on LinkedIn"}
                    >
                      <span>{cert.credentialUrl ? "Verify Certificate" : "View on LinkedIn"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Progress & Stack Controller */}
        <div className="pt-4 border-t border-[var(--color-hairline)] flex flex-wrap justify-between items-end gap-4 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
          {/* Left Stack Status */}
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-accent)] font-semibold">
              Card 0{activeIndex + 1} of {count.toString().padStart(2, "0")}
            </span>
            <span className="opacity-40">/</span>
            <span className="text-white truncate max-w-[240px] sm:max-w-none">
              {certs[activeIndex]?.title}
            </span>
          </div>

          {/* Right Progress Meter */}
          <div className="flex items-center gap-4">
            <div className="w-28 sm:w-44 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-accent)] transition-all duration-75 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="text-white tabular-nums w-12 text-right">
              {Math.round(progress * 100)}%
            </span>
            {progress >= 0.98 && (
              <span className="hidden sm:inline text-[var(--color-positive)] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Stacked
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
