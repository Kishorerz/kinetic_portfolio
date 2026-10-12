import React from "react";
import { Header } from "@/components/Header";
import { PinnedStatement } from "@/components/PinnedStatement";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/site.config";
import { Code2, Cpu, Terminal } from "lucide-react";

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Learn more about Kishor Kumar, AI/ML enthusiast, developer, and builder of intelligent systems.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <Header />

      {/* Hero Header */}
      <section className="px-[var(--spacing-gutter)] mb-16 max-w-[1360px] mx-auto">
        <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
          [ 03 / BACKGROUND & PHILOSOPHY ]
        </div>
        <h1
          className="text-[clamp(44px,7vw,110px)] font-bold uppercase tracking-[-0.02em] leading-[0.9] text-[var(--color-text)] mb-8"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          Engineering with Purpose.
        </h1>
        <p className="text-[clamp(18px,2vw,28px)] leading-relaxed text-[var(--color-muted)] max-w-[42ch]">
          {siteConfig.heroBlurb}
        </p>
      </section>

      {/* Narrative & Focus Cards */}
      <section className="px-[var(--spacing-gutter)] mb-24 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[var(--radius-card)] bg-[#1a1918] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider text-[var(--color-label)] mb-2">
                CORE FOCUS 01
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3" style={{ fontVariationSettings: "'wdth' 85, 'wght' 700" }}>
                Machine Learning &amp; AI
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-subtle)]">
                Training deep learning models, computer vision classifiers, and predictive analytics that solve high-friction industrial and campus challenges.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[var(--radius-card)] bg-[#1a1918] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider text-[var(--color-label)] mb-2">
                CORE FOCUS 02
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3" style={{ fontVariationSettings: "'wdth' 85, 'wght' 700" }}>
                Hardware &amp; IoT Systems
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-subtle)]">
                Bridging embedded physical sensors, Raspberry Pi edge controllers, and decentralized ledgers for tamper-proof telemetry.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[var(--radius-card)] bg-[#1a1918] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider text-[var(--color-label)] mb-2">
                CORE FOCUS 03
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3" style={{ fontVariationSettings: "'wdth' 85, 'wght' 700" }}>
                Modern Web Architecture
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-subtle)]">
                Designing ultra-fast, kinetic, accessible web applications with Next.js, React, Tailwind, and variable typography systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Kinetic Statement */}
      <PinnedStatement />

      <Footer />
    </main>
  );
}