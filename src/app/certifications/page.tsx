import React from "react";
import { Header } from "@/components/Header";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CertificatesStackScroll } from "@/components/CertificatesStackScroll";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: `Certifications & Accreditations | ${siteConfig.name}`,
  description: "Official certifications, verified credential IDs, and industry accreditations earned by Kishor Kumar across Google Cloud, IoT, and Full-Stack Engineering.",
};

export default function CertificationsPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <Header />

      {/* Hero Header */}
      <section className="px-[var(--spacing-gutter)] mb-12 max-w-[1360px] mx-auto">
        <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
          [ OFFICIAL CREDENTIALS &amp; ACCREDITATIONS ]
        </div>
        <h1
          className="text-[clamp(44px,7vw,110px)] font-bold uppercase tracking-[-0.02em] leading-[0.9] text-[var(--color-text)] mb-4"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          Verified Knowledge
        </h1>
        <p className="font-['Geist_Mono',monospace] text-[13px] text-[var(--color-muted)] uppercase tracking-wider max-w-[55ch]">
          10 verified professional credentials from Google, University of Michigan, UC Boulder, Infosys Springboard, RETECH, and accredited bodies.
        </p>
      </section>

      {/* Interactive Filterable Grid */}
      <CertificationsSection />

      {/* Pinned Scroll 3D Stacking Deck */}
      <CertificatesStackScroll />

      <Footer />
    </main>
  );
}