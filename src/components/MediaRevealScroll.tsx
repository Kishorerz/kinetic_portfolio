"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

export function MediaRevealScroll() {
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

  // Continuous animation calculations
  // Clip path insets: Starts at 14% top/bottom, 20% left/right, round 16px -> 0% 0% round 0px
  const insetY = Math.max(14 * (1 - progress * 1.3), 0);
  const insetX = Math.max(20 * (1 - progress * 1.3), 0);
  const radius = Math.max(16 * (1 - progress * 1.3), 0);

  // Inner media scale: 1.25 -> 1.0
  const mediaScale = 1.25 - progress * 0.25;

  // Variable font morph: width 125 -> 70, weight 220 -> 800
  const fontWidth = 125 - progress * (125 - 70);
  const fontWeight = 220 + progress * (800 - 220);

  // Overlay shade: 0.7 -> 0.15
  const shadeOpacity = Math.max(0.7 - progress * 0.6, 0.15);

  return (
    <section ref={containerRef} className="relative h-[250vh] select-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Clipping Stage */}
        <div
          className="absolute inset-0 will-change-[clip-path]"
          style={{
            clipPath: `inset(${insetY.toFixed(2)}% ${insetX.toFixed(2)}% round ${radius.toFixed(0)}px)`,
          }}
        >
          {/* Inner High-Tech Visual Container */}
          <div
            className="absolute inset-0 bg-[#161514] will-change-transform flex items-center justify-center overflow-hidden"
            style={{ transform: `scale(${mediaScale.toFixed(3)})` }}
          >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7fa8ff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            {/* Generative Telemetry Matrix */}
            <div className="relative z-10 w-full max-w-4xl p-8 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Next-Gen Intelligent Systems</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)] animate-pulse" />
              </div>

              {/* Title Morphing with Scroll */}
              <h2
                className="text-[clamp(44px,8vw,140px)] uppercase tracking-[-0.02em] leading-[0.88] text-[var(--color-text)] mb-6"
                style={{
                  fontVariationSettings: `'wdth' ${fontWidth.toFixed(1)}, 'wght' ${fontWeight.toFixed(1)}`,
                }}
              >
                DEPLOYED AT SCALE
              </h2>

              <p className="text-[clamp(16px,1.6vw,22px)] text-[var(--color-muted)] max-w-[42ch] leading-relaxed">
                Bridging low-level IoT telemetry with high-level AI inference and immutable decentralized audit ledgers.
              </p>

              {/* Live Metric Ribbon */}
              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-6 font-['Geist_Mono',monospace]">
                <div>
                  <div className="text-[clamp(24px,3vw,42px)] font-bold text-white">99.98%</div>
                  <div className="text-[11px] text-[var(--color-label)] uppercase">Telemetry Uptime</div>
                </div>
                <div>
                  <div className="text-[clamp(24px,3vw,42px)] font-bold text-[var(--color-accent)]">&lt;15ms</div>
                  <div className="text-[11px] text-[var(--color-label)] uppercase">Edge Inference</div>
                </div>
                <div>
                  <div className="text-[clamp(24px,3vw,42px)] font-bold text-[var(--color-positive)]">0 Zero</div>
                  <div className="text-[11px] text-[var(--color-label)] uppercase">Audit Discrepancies</div>
                </div>
              </div>
            </div>

            {/* Dark Vignette Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#111010] via-transparent to-[#111010] pointer-events-none"
              style={{ opacity: shadeOpacity }}
            />
          </div>
        </div>

        {/* Floating Indicator Meta */}
        <div className="absolute left-[var(--spacing-gutter)] right-[var(--spacing-gutter)] bottom-8 flex justify-between items-end font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)] pointer-events-none z-20">
          <span>(Interactive Scrub / Scroll)</span>
          <span className="text-[var(--color-accent)]">
            Progress {Math.round(progress * 100)}%
          </span>
        </div>
      </div>
    </section>
  );
}
