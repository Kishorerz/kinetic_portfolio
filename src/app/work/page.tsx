import React from "react";
import { Header } from "@/components/Header";
import { SelectedWork } from "@/components/SelectedWork";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: `Selected Work | ${siteConfig.name}`,
  description: "Featured engineering projects, AI/ML models, IoT architectures, and full-stack systems built by Kishor Kumar.",
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <Header />
      <div className="px-[var(--spacing-gutter)] mb-6">
        <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
          [ ARCHIVE / SELECTED WORK ]
        </div>
        <h1
          className="text-[clamp(44px,7vw,110px)] font-bold uppercase tracking-[-0.02em] leading-[0.9] text-[var(--color-text)]"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          Selected Work
        </h1>
        <p className="font-['Geist_Mono',monospace] text-[13px] text-[var(--color-muted)] uppercase tracking-wider mt-4 max-w-[55ch]">
          A curated selection of real-world deployed products, hardware telemetry bridges, and AI solutions.
        </p>
      </div>

      <SelectedWork />
      <Footer />
    </main>
  );
}