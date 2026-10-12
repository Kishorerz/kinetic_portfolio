"use client";

import React, { useState } from "react";
import { siteConfig, Service } from "@/site.config";
import { ArrowUpRight } from "lucide-react";

export function ServiceTiles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-[clamp(80px,12vh,150px)] px-[var(--spacing-gutter)]">
      {/* Header */}
      <div className="flex justify-between items-baseline mb-8 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
        <span className="text-[var(--color-accent)]">(Capabilities)</span>
        <span>04 Services</span>
      </div>

      <h2
        className="text-[clamp(36px,4.5vw,72px)] font-bold tracking-tight text-[var(--color-text)] mb-12 uppercase leading-none"
        style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
      >
        What I bring to the table
      </h2>

      {/* 4-Tile Interactive Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--color-hairline)] ${
          hoveredIndex !== null ? "has-hover" : ""
        }`}
      >
        {siteConfig.services.map((service: Service, index: number) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={service.num}
              data-cursor="Open"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative border-r border-bottom border-b border-[var(--color-hairline)] p-8 sm:p-9 flex flex-col justify-between min-h-[380px] overflow-hidden group cursor-pointer transition-opacity duration-500 ${
                hoveredIndex !== null && !isHovered ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Bottom-Up Accent Hover Fill */}
              <div
                className="absolute inset-0 bg-[var(--color-accent)] origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                }}
              />

              {/* Card Top: Number + Arrow */}
              <div className="relative z-10 flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] text-[var(--color-accent)] group-hover:text-[#111010] transition-colors duration-400">
                <span>{service.num}</span>
                <ArrowUpRight
                  className={`w-5 h-5 transition-transform duration-500 ease-out ${
                    isHovered ? "rotate-0 scale-110" : "-rotate-45"
                  }`}
                />
              </div>

              {/* Card Center: Title & Description */}
              <div className="relative z-10 my-auto py-6">
                <h3
                  className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-tight leading-tight mb-4 text-[var(--color-text)] group-hover:text-[#111010] group-hover:translate-x-1.5 transition-all duration-500"
                  style={{ fontVariationSettings: "'wdth' 88, 'wght' 700" }}
                >
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--color-subtle)] group-hover:text-[#111010]/90 transition-colors duration-400">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom: Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-hairline)] group-hover:border-[#111010]/20 transition-colors duration-400">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Geist_Mono',monospace] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--color-chip-border)] text-[var(--color-label)] group-hover:border-[#111010]/30 group-hover:text-[#111010] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
