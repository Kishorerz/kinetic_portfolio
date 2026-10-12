"use client";

import React, { useEffect, useRef } from "react";

interface KineticTitleProps {
  text: string;
  className?: string;
  align?: "left" | "right" | "center";
  radius?: number; // 420px pull radius like mikewilcockdesign.com
}

export function KineticTitle({
  text,
  className = "",
  align = "left",
  radius = 420,
}: KineticTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion & touch preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const letterElements = Array.from(
      container.querySelectorAll<HTMLSpanElement>("[data-char]")
    );

    let mouseX = -1000;
    let mouseY = -1000;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateLetters = () => {
      letterElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - charCenterX, mouseY - charCenterY);

        if (dist < radius) {
          // Normalize distance: 1 at cursor center, 0 at outer perimeter
          const factor = Math.pow(1 - dist / radius, 1.35);
          const wdth = 70 + (125 - 70) * factor;
          const wght = 800 - (800 - 260) * factor;

          el.style.fontVariationSettings = `'wdth' ${wdth.toFixed(1)}, 'wght' ${wght.toFixed(1)}`;
        } else {
          // Reset to default heavy compact display state
          el.style.fontVariationSettings = `'wdth' 70, 'wght' 800`;
        }
      });

      animId = requestAnimationFrame(updateLetters);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(updateLetters);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [radius]);

  const alignClass =
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";

  return (
    <div ref={containerRef} className={`select-none ${alignClass} ${className}`}>
      {/* Screen Reader Full Copy */}
      <span className="sr-only">{text}</span>

      {/* Kinetic Display Letters */}
      <span aria-hidden="true" className="inline-flex flex-wrap leading-[0.84] tracking-[-0.01em]">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return (
              <span key={index} className="inline-block w-[0.22em]">
                &nbsp;
              </span>
            );
          }

          return (
            <span
              key={index}
              data-char={char}
              style={{
                fontVariationSettings: "'wdth' 70, 'wght' 800",
              }}
              className="inline-block font-sans will-change-[font-variation-settings] transition-[font-variation-settings] duration-150 ease-out"
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
}
