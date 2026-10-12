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

  return (
    <section id="about" ref={containerRef} className="relative h-[165vh] select-none">
      <div className="sticky top-0 flex h-screen flex-col justify-center px-[var(--spacing-gutter)]">
        {/* Section Tag */}
        <div className="mb-7 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-accent)]">
          (Statement)
        </div>

        {/* Lit Paragraph */}
        <p className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] text-[clamp(28px,5vw,78px)] font-semibold leading-[1.05] tracking-[-0.02em] max-w-[1240px]">
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

        {/* Small Scroll Prompt */}
        <div className="mt-12 font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
          ↓ Continuous scroll lights the statement
        </div>
      </div>
    </section>
  );
}
