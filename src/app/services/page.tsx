import React from "react";
import { Header } from "@/components/Header";
import { ServiceTiles } from "@/components/ServiceTiles";
import { BlueScrollWipe } from "@/components/BlueScrollWipe";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: `Services & Capabilities | ${siteConfig.name}`,
  description: "End-to-end technical consulting, AI/ML engineering, IoT firmware and cloud architecture solutions offered by Kishor Kumar.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <Header />

      {/* Hero Header */}
      <section className="px-[var(--spacing-gutter)] mb-12 max-w-[1360px] mx-auto">
        <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
          [ 04 / SPECIALIZED OFFERINGS ]
        </div>
        <h1
          className="text-[clamp(44px,7vw,110px)] font-bold uppercase tracking-[-0.02em] leading-[0.9] text-[var(--color-text)] mb-4"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          Capabilities
        </h1>
        <p className="font-['Geist_Mono',monospace] text-[13px] text-[var(--color-muted)] uppercase tracking-wider max-w-[55ch]">
          High-performance development across AI model integration, edge IoT telemetry, and modern web applications.
        </p>
      </section>

      {/* Services Tiles Component */}
      <ServiceTiles />

      {/* Blue Wipe Transition to Next Section */}
      <BlueScrollWipe />

      <Footer />
    </main>
  );
}