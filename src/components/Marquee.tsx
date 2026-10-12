"use client";

import React from "react";
import { siteConfig } from "@/site.config";

export function Marquee() {
  const skills = siteConfig.marqueeSkills;

  return (
    <div className="border-y border-[var(--color-hairline)] py-5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center">
        {/* First track */}
        <div className="flex items-center gap-10 pr-10 text-[clamp(36px,5vw,72px)] italic font-light whitespace-nowrap text-[var(--color-text)]"
             style={{ fontVariationSettings: "'wdth' 115, 'wght' 250" }}>
          {skills.map((skill, index) => (
            <React.Fragment key={`skill-1-${index}`}>
              <span>{skill}</span>
              <span
                aria-hidden="true"
                className="w-3 h-3 bg-[var(--color-accent)] rotate-45 flex-shrink-0 inline-block shadow-[0_0_12px_rgba(127,168,255,0.4)]"
              />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate track for seamless infinite loop */}
        <div className="flex items-center gap-10 pr-10 text-[clamp(36px,5vw,72px)] italic font-light whitespace-nowrap text-[var(--color-text)]"
             aria-hidden="true"
             style={{ fontVariationSettings: "'wdth' 115, 'wght' 250" }}>
          {skills.map((skill, index) => (
            <React.Fragment key={`skill-2-${index}`}>
              <span>{skill}</span>
              <span
                aria-hidden="true"
                className="w-3 h-3 bg-[var(--color-accent)] rotate-45 flex-shrink-0 inline-block shadow-[0_0_12px_rgba(127,168,255,0.4)]"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
