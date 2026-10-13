"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";

export function PinnedStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = siteConfig.statement;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wordElements = Array.from(
      container.querySelectorAll<HTMLSpanElement>("[data-word]")
    );

    // If reduced motion is requested, show all words fully lit
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordElements.forEach((el) => {
        el.style.opacity = "1";
      });
      return;
    }

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      const totalWords = wordElements.length;
      const activeIndex = Math.floor(progress * (totalWords + 2));

      wordElements.forEach((el, index) => {
        if (index <= activeIndex) {
          el.style.opacity = "1";
        } else {
          el.style.opacity = "0.14";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accentKeywords = [
    "intelligent",
    "meaningful",
    "ai-powered",
    "full-stack",
    "curiosity",
    "code,",
    "difference.",
  ];

  const pillars = [
    {
      num: "01",
      title: "Full-Stack & Cloud",
      desc: "React, Next.js, Java & REST pipelines built for latency under 50ms and seamless UX.",
    },
    {
      num: "02",
      title: "Applied AI / ML",
      desc: "Deep learning models, computer vision classifiers, and quantitative data intelligence.",
    },
    {
      num: "03",
      title: "Hardware & IoT",
      desc: "Embedded Raspberry Pi nodes, tamper-proof audit trails, and physical-to-cloud bridges.",
    },
  ];

  return (
    <section id="about" ref={containerRef} className="relative h-[180vh] select-none border-t border-[var(--color-hairline)]">
      <div className="sticky top-0 flex h-screen flex-col justify-between py-[clamp(28px,4vh,48px)] px-[var(--spacing-gutter)]">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] border-b border-[var(--color-hairline)] pb-4">
          <span className="text-[var(--color-accent)] font-semibold">(Statement &amp; Mission)</span>
          <span className="hidden sm:inline">Kishor Kumar · Technical Manifesto</span>
          <span>03 Pillars</span>
        </div>

        {/* Central Lit Paragraph */}
        <div className="my-auto py-4">
          <p className="flex flex-wrap gap-x-[0.25em] gap-y-[0.08em] text-[clamp(24px,4.2vw,62px)] font-semibold leading-[1.08] tracking-[-0.02em] max-w-[1280px]">
            {text.split(" ").map((word, i) => {
              const cleanWord = word.toLowerCase().replace(/[^a-z,-]/g, "");
              const isAccent = accentKeywords.some((kw) => cleanWord.includes(kw));

              return (
                <span
                  key={i}
                  data-word=""
                  className={`transition-opacity duration-150 will-change-[opacity] ${
                    isAccent
                      ? "text-[var(--color-accent)] italic font-normal"
                      : "text-[var(--color-text)]"
                  }`}
                  style={{ opacity: 0.14 }}
                >
                  {word}
                </span>
              );
            })}
          </p>

          <div className="mt-6 flex items-center gap-2 font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>Scroll down to light statement</span>
          </div>
        </div>

        {/* Bottom Feature Grid (Filling the previously empty space) */}
        <div className="pt-6 border-t border-[var(--color-hairline)] grid grid-cols-1 md:grid-cols-3 gap-6 font-['Geist_Mono',monospace]">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-4 sm:p-5 rounded-[var(--radius-card)] bg-[#1a1918]/80 border border-white/10 flex flex-col justify-between gap-2"
            >
              <div className="flex justify-between items-center text-[11px] text-[var(--color-accent)]">
                <span className="font-bold">PILLAR {pillar.num}</span>
                <span className="text-[var(--color-label)]">ENGINEERING</span>
              </div>
              <h4 className="text-[16px] font-bold text-white tracking-tight font-sans">
                {pillar.title}
              </h4>
              <p className="text-[12px] text-[var(--color-subtle)] leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
