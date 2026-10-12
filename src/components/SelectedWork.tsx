"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteConfig, Project } from "@/site.config";
import { usePageTransition } from "./PageTransition";
import {
  ChainSensePreview,
  PathfindrPreview,
  PrecisionFarmingPreview,
  CodeSurePreview,
} from "./ProjectPreviews";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringList, setIsHoveringList] = useState(false);
  const { navigateWithTransition } = usePageTransition();

  // Floating follower card position & velocity tilt
  const [followerPos, setFollowerPos] = useState({ x: -400, y: -400, tilt: 0 });
  const prevMouseXRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = -400;
    let targetY = -400;
    let currentX = -400;
    let currentY = -400;
    let currentTilt = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX + 30;
      targetY = e.clientY - 120;
      const deltaX = e.clientX - prevMouseXRef.current;
      prevMouseXRef.current = e.clientX;
      // Tilt based on cursor horizontal speed (-8deg to +8deg)
      const targetTilt = Math.max(Math.min(deltaX * 0.45, 8), -8);
      currentTilt += (targetTilt - currentTilt) * 0.15;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentTilt += (0 - currentTilt) * 0.05; // Return to center

      setFollowerPos({
        x: currentX,
        y: currentY,
        tilt: currentTilt,
      });

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const previewComponents = [
    <ChainSensePreview key="0" />,
    <PathfindrPreview key="1" />,
    <PrecisionFarmingPreview key="2" />,
    <CodeSurePreview key="3" />,
  ];

  const handleProjectClick = (e: React.MouseEvent, proj: Project) => {
    e.preventDefault();
    navigateWithTransition(
      `/work/${proj.slug}`,
      proj.name,
      `${proj.num} / PROJECT`
    );
  };

  return (
    <section id="work" className="py-[clamp(80px,14vh,160px)] px-[var(--spacing-gutter)]">
      {/* Eyebrow Header */}
      <div className="flex justify-between items-center pb-8 border-b border-[var(--color-hairline)] mb-2 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
        <h2 className="flex items-center gap-2">
          Selected work <span>(04)</span>
        </h2>
        <span className="hidden sm:inline">2023 — 2026</span>
      </div>

      {/* Main Grid: Work List + Sticky Dock */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(320px,32vw,460px)] gap-[clamp(32px,4vw,64px)] items-stretch">
        {/* Left Column: Project Rows */}
        <div
          className="flex flex-col"
          onMouseEnter={() => setIsHoveringList(true)}
          onMouseLeave={() => setIsHoveringList(false)}
        >
          {siteConfig.projects.map((proj: Project, index: number) => {
            const isActive = activeIndex === index;

            return (
              <a
                key={proj.num}
                href={`/work/${proj.slug}`}
                onClick={(e) => handleProjectClick(e, proj)}
                data-cursor="View"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`group relative flex flex-col justify-center min-h-[38vh] py-8 border-t border-[var(--color-hairline)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                  isActive
                    ? "text-[var(--color-accent)] lg:pl-7"
                    : "text-[var(--color-text)] hover:text-[var(--color-accent)] lg:hover:pl-7"
                }`}
              >
                {/* Row Top: Number, Title, Year */}
                <div className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-baseline gap-4 sm:gap-6">
                  {/* Number */}
                  <span className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-label)] group-hover:text-[var(--color-accent)] transition-colors">
                    {proj.num}
                  </span>

                  {/* Project Name */}
                  <div className="min-w-0">
                    <h3
                      className="text-[clamp(32px,4.8vw,88px)] leading-[0.92] tracking-[-0.02em] font-bold"
                      style={{ fontVariationSettings: "'wdth' 88, 'wght' 700" }}
                    >
                      {proj.name}
                    </h3>
                  </div>

                  {/* Year */}
                  <span className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-label)] text-right">
                    {proj.year}
                  </span>
                </div>

                {/* Row Details / Tech Stack / CTA */}
                <div className="mt-4 pl-[48px] flex flex-wrap items-center justify-between gap-y-2 gap-x-4 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-[var(--color-text)]/90">{proj.category}</span>
                    {proj.accentNote && (
                      <span className="text-[var(--color-accent)]">({proj.accentNote})</span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View project <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="mt-3 pl-[48px] flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full border border-[var(--color-chip-border)] text-[11px] font-['Geist_Mono',monospace] text-[var(--color-subtle)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
          <div className="border-t border-[var(--color-hairline)]" />
        </div>

        {/* Right Column: Sticky Dock Preview */}
        <div className="relative hidden lg:block">
          <div className="sticky top-[calc(50vh-230px)]">
            <div className="relative aspect-[4/5] w-full rounded-[var(--radius-image)] border border-[var(--color-outline)] bg-[var(--color-surface)] overflow-hidden shadow-2xl">
              {/* Dynamic Project Preview Layers with zero-flicker cross-fade */}
              {previewComponents.map((component, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeIndex === idx
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-[1.03] pointer-events-none"
                  }`}
                >
                  {component}
                </div>
              ))}

              {/* Watermark Big Number */}
              <div className="absolute bottom-4 right-5 font-['Geist_Mono',monospace] text-[56px] font-bold text-white/5 pointer-events-none select-none">
                0{activeIndex + 1}
              </div>
            </div>

            {/* Bottom Dock Meta Info */}
            <div className="flex justify-between items-center mt-3.5 font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
              <span>Interactive Preview</span>
              <span className="text-[var(--color-accent)]">
                Project {activeIndex + 1} of {siteConfig.projects.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cursor Follower Card (Leans with mouse speed) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[60] w-[260px] h-[330px] rounded-[var(--radius-image)] overflow-hidden border border-white/20 shadow-2xl transition-opacity duration-300 hidden md:block ${
          isHoveringList ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${followerPos.x}px, ${followerPos.y}px, 0) rotate(${followerPos.tilt}deg)`,
        }}
      >
        {previewComponents.map((comp, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ${
              activeIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            {comp}
          </div>
        ))}
      </div>
    </section>
  );
}
