"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { siteConfig } from "@/site.config";

const emptySubscribe = () => () => {};

export function IntroPreloader() {
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const shouldShow = useSyncExternalStore(
    emptySubscribe,
    () => typeof window !== "undefined" && !sessionStorage.getItem("mw-intro-seen"),
    () => false
  );

  useEffect(() => {
    if (!shouldShow || dismissed) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setDismissed(true);
          try {
            sessionStorage.setItem("mw-intro-seen", "true");
          } catch {
            // Ignore storage errors in private browsing
          }
        }, 350);
      } else {
        setProgress(current);
      }
    }, 26);

    return () => clearInterval(interval);
  }, [shouldShow, dismissed]);

  if (!shouldShow || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("mw-intro-seen", "true");
    } catch {
      // Ignore storage errors in private browsing
    }
  };

  return (
    <div
      onClick={handleDismiss}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#111010] p-[var(--spacing-gutter)] cursor-pointer select-none"
    >
      {/* Top Meta */}
      <div className="flex justify-between font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
        <span>(Intro / 2026)</span>
        <span className="text-[var(--color-accent)]">Click anywhere to skip</span>
      </div>

      {/* Center Wordmark with expanding accent box */}
      <div className="flex items-baseline justify-center text-[clamp(40px,9vw,130px)] font-bold uppercase leading-none">
        <span style={{ fontVariationSettings: "'wdth' 68, 'wght' 850" }}>Kishor</span>
        <span
          className="mx-[0.1em] inline-flex items-center justify-center w-[0.82em] h-[0.95em] bg-[var(--color-accent)] text-[#111010] italic rounded-[2px]"
          style={{ fontVariationSettings: "'wdth' 110, 'wght' 300" }}
        >
          k
        </span>
        <span
          className="italic font-light lowercase"
          style={{ fontVariationSettings: "'wdth' 110, 'wght' 250" }}
        >
          umar
        </span>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div>
        <div className="flex justify-between items-end font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] mb-3">
          <span>{siteConfig.eyebrow}</span>
          <span className="text-[clamp(32px,5vw,72px)] font-bold text-[var(--color-text)] tabular-nums leading-none">
            {progress.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
