"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import { ArrowDown, Sparkles } from "lucide-react";

export function BlueScrollWipe() {
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

  // Tightened 3-Phase Choreography: Wipe in fast, hold comfortably, wipe out smoothly
  let translateY = 100; // Start below screen
  let contentOpacity = 0;
  let contentScale = 0.92;
  let contentY = 40;

  if (progress <= 0.35) {
    // Phase 1: Rapid entrance wipe (0 -> 0.35)
    const phaseProgress = progress / 0.35;
    translateY = (1 - phaseProgress) * 100;
    contentOpacity = Math.min(phaseProgress * 1.5, 1);
    contentScale = 0.92 + phaseProgress * 0.08;
    contentY = (1 - phaseProgress) * 40;
  } else if (progress <= 0.70) {
    // Phase 2: Pinned & fully revealed (0.35 -> 0.70)
    translateY = 0;
    contentOpacity = 1;
    contentScale = 1;
    contentY = 0;
  } else {
    // Phase 3: Fluid exit wipe up (0.70 -> 1.0)
    const phaseProgress = (progress - 0.70) / 0.30;
    translateY = -phaseProgress * 100;
    contentOpacity = Math.max(1 - phaseProgress * 1.2, 0);
    contentScale = 1 + phaseProgress * 0.05;
    contentY = -phaseProgress * 30;
  }

  // Expanding divider line in sync with entrance
  const lineScale = Math.min(Math.max((progress - 0.15) / 0.3, 0), 1);

  return (
    <section ref={containerRef} className="relative h-[135vh] select-none -my-1">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-Screen Blue Wipe Layer */}
        <div
          className="absolute inset-0 bg-[var(--color-accent)] z-20 flex flex-col justify-between p-[var(--spacing-gutter)] text-[#111010] will-change-transform shadow-[0_-25px_60px_rgba(0,0,0,0.6)]"
          style={{
            transform: `translate3d(0, ${translateY.toFixed(2)}%, 0)`,
          }}
        >
          {/* Top Wipe Meta */}
          <div
            className="flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] transition-opacity duration-200"
            style={{ opacity: contentOpacity }}
          >
            <span className="flex items-center gap-2 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> (Section Transition)
            </span>
            <span className="hidden sm:inline font-semibold">{siteConfig.eyebrow}</span>
            <span className="font-bold">05 / DIRECT ACCESS</span>
          </div>

          {/* Central Contact Information on Electric Blue */}
          <div
            className="my-auto transition-transform duration-100 ease-out will-change-transform"
            style={{
              opacity: contentOpacity,
              transform: `translate3d(0, ${contentY.toFixed(1)}px, 0) scale(${contentScale.toFixed(3)})`,
            }}
          >
            <div className="font-['Geist_Mono',monospace] text-[13px] uppercase tracking-[0.08em] font-extrabold text-[#111010]/80 mb-3">
              Direct Contact &amp; Credentials
            </div>

            <div
              className="text-[clamp(44px,9vw,140px)] font-bold uppercase tracking-[-0.02em] leading-[0.88]"
              style={{
                fontVariationSettings: "'wdth' 70, 'wght' 800",
              }}
            >
              Get In Touch
            </div>

            {/* Expanding Divider Line */}
            <div
              className="h-[3px] bg-[#111010] mt-6 origin-left transition-transform duration-100 ease-out"
              style={{
                transform: `scaleX(${lineScale.toFixed(3)})`,
              }}
            />

            {/* Direct Contact & Download CV Details on Blue Layer */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-['Geist_Mono',monospace] text-[clamp(16px,2.2vw,26px)] font-bold text-[#111010] hover:underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.resumeUrl || "/resume.pdf"}
                download="Kishor_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111010] text-[var(--color-accent)] font-['Geist_Mono',monospace] text-[13px] uppercase font-bold tracking-wider hover:bg-white hover:text-[#111010] transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Download My CV</span>
                <span className="animate-pulse">↓</span>
              </a>
            </div>
          </div>

          {/* Bottom Wipe Prompt */}
          <div
            className="flex justify-between items-end font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] transition-opacity duration-200"
            style={{ opacity: contentOpacity }}
          >
            <span className="max-w-[42ch] leading-relaxed font-semibold">
              Available for AI/ML engineering, full-stack architectures, and IoT hardware collaborations.
            </span>
            <div className="flex items-center gap-2 font-bold">
              <span>Scroll down</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
