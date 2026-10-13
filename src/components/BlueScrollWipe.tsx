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

  // Compute 3-Phase Choreography
  let translateY = 100; // Start below screen

  if (progress <= 0.45) {
    // Phase 1: Wipe up from bottom to cover screen (100% -> 0%)
    const phaseProgress = progress / 0.45;
    translateY = (1 - phaseProgress) * 100;
  } else if (progress <= 0.75) {
    // Phase 2: Stay pinned full screen (0%)
    translateY = 0;
  } else {
    // Phase 3: Wipe up and exit (0% -> -100%)
    const phaseProgress = (progress - 0.75) / 0.25;
    translateY = -phaseProgress * 100;
  }

  // Text letter reveal & line expansion
  const textScale = Math.min(Math.max((progress - 0.2) / 0.35, 0), 1);
  const lineScale = Math.min(Math.max((progress - 0.35) / 0.25, 0), 1);

  return (
    <section ref={containerRef} className="relative h-[240vh] select-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-Screen Blue Wipe Layer */}
        <div
          className="absolute inset-0 bg-[var(--color-accent)] z-20 flex flex-col justify-between p-[var(--spacing-gutter)] text-[#111010] will-change-transform shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
          style={{
            transform: `translate3d(0, ${translateY.toFixed(2)}%, 0)`,
          }}
        >
          {/* Top Wipe Meta */}
          <div className="flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> (Section Transition)
            </span>
            <span>{siteConfig.eyebrow}</span>
            <span>05 / CAPABILITIES</span>
          </div>

          {/* Central Contact Information on Electric Blue */}
          <div className="my-auto">
            <div className="font-['Geist_Mono',monospace] text-[13px] uppercase tracking-[0.08em] font-bold text-[#111010]/80 mb-3">
              Direct Contact &amp; Resume
            </div>

            <div
              className="text-[clamp(44px,9vw,140px)] font-bold uppercase tracking-[-0.02em] leading-[0.88] origin-left transition-transform duration-150"
              style={{
                fontVariationSettings: "'wdth' 70, 'wght' 800",
                transform: `scale(${0.94 + textScale * 0.06})`,
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
                className="font-['Geist_Mono',monospace] text-[clamp(16px,2vw,24px)] font-bold text-[#111010] hover:underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.resumeUrl || "/resume.pdf"}
                download="Kishor_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111010] text-[var(--color-accent)] font-['Geist_Mono',monospace] text-[13px] uppercase font-bold tracking-wider hover:bg-white hover:text-[#111010] transition-colors shadow-lg"
              >
                <span>Download My CV</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Bottom Wipe Prompt */}
          <div className="flex justify-between items-end font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em]">
            <span className="max-w-[42ch] leading-relaxed">
              Available for AI/ML engineering, full-stack architectures, and IoT hardware collaborations.
            </span>
            <div className="flex items-center gap-2">
              <span>Continue scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
