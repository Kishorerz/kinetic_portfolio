"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContextType {
  navigateWithTransition: (
    href: string,
    title?: string,
    meta?: string
  ) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Transition States: "idle" | "covering" | "covered" | "uncovering"
  const [phase, setPhase] = useState<"idle" | "covering" | "covered" | "uncovering">("idle");
  const [targetTitle, setTargetTitle] = useState("");
  const [targetMeta, setTargetMeta] = useState("");
  const pendingHrefRef = useRef<string | null>(null);

  const navigateWithTransition = useCallback(
    (href: string, title: string = "WORK", meta: string = "PROJECT") => {
      if (phase !== "idle") return;
      pendingHrefRef.current = href;
      setTargetTitle(title);
      setTargetMeta(meta);
      setPhase("covering");

      // Swiftly navigate once bars cover the screen (reduced from 650ms to 240ms)
      setTimeout(() => {
        setPhase("covered");
        router.push(href);
      }, 240);
    },
    [phase, router]
  );

  // When pathname changes after navigation, uncover the screen
  useEffect(() => {
    if (phase === "covered") {
      // Instant uncover (reduced from 100ms pause to 20ms)
      const timer = setTimeout(() => {
        setPhase("uncovering");
        const exitTimer = setTimeout(() => {
          setPhase("idle");
          setTargetTitle("");
          setTargetMeta("");
          pendingHrefRef.current = null;
        }, 260); // Fast uncurtain exit (reduced from 700ms to 260ms)
        return () => clearTimeout(exitTimer);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [pathname, phase]);

  const bars = [0, 1, 2, 3, 4];

  return (
    <TransitionContext.Provider
      value={{
        navigateWithTransition,
        isTransitioning: phase !== "idle",
      }}
    >
      {children}

      {/* Full-screen Choreographed Blue Wipe Overlay */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[9000] pointer-events-none ${
          phase === "idle" ? "invisible" : "visible"
        }`}
      >
        {/* 5 Vertical Staggered Accent Bars */}
        <div className="absolute inset-0 flex">
          {bars.map((i) => {
            let transformStyle = "translateY(101%)";
            if (phase === "covering" || phase === "covered") {
              transformStyle = "translateY(0%)";
            } else if (phase === "uncovering") {
              transformStyle = "translateY(-101%)";
            }

            // Snappy stagger delays
            const delayMs =
              phase === "covering"
                ? i * 25
                : phase === "uncovering"
                ? i * 20
                : 0;

            return (
              <div
                key={i}
                className="flex-1 h-full bg-[var(--color-accent)] -mr-[1px] will-change-transform"
                style={{
                  transform: transformStyle,
                  transition: `transform 0.28s cubic-bezier(0.25, 1, 0.5, 1) ${delayMs}ms`,
                }}
              />
            );
          })}
        </div>

        {/* Transition Text & Line */}
        <div
          className={`absolute left-[var(--spacing-gutter)] right-[var(--spacing-gutter)] bottom-[clamp(24px,5vw,64px)] text-[#111010] select-none transition-opacity duration-300 ${
            phase === "covering" || phase === "covered"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {/* Top Meta */}
          <div className="flex justify-between items-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] mb-4">
            <span>({targetMeta || "NAVIGATING"})</span>
            <span>KISHOR KUMAR</span>
          </div>

          {/* Huge Kinetic Target Title */}
          <div
            className="text-[clamp(56px,12vw,200px)] font-bold uppercase tracking-[-0.02em] leading-[0.86] truncate"
            style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
          >
            {targetTitle}
          </div>

          {/* Expanding Black Dividing Line */}
          <div
            className="h-[2px] bg-[#111010] mt-5 origin-left transition-transform duration-500 ease-out"
            style={{
              transform:
                phase === "covering" || phase === "covered"
                  ? "scaleX(1)"
                  : "scaleX(0)",
              transitionDelay: "250ms",
            }}
          />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
