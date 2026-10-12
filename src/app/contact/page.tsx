import React from "react";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: `Contact & Collaboration | ${siteConfig.name}`,
  description: "Get in touch with Kishor Kumar for project inquiries, freelance engineering, or technical consultation.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <Header />

      {/* Hero Header */}
      <section className="px-[var(--spacing-gutter)] mb-8 max-w-[1360px] mx-auto">
        <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
          [ GET IN TOUCH / COLLABORATION ]
        </div>
        <h1
          className="text-[clamp(44px,7vw,110px)] font-bold uppercase tracking-[-0.02em] leading-[0.9] text-[var(--color-text)] mb-4"
          style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
        >
          Start a Conversation
        </h1>
        <p className="font-['Geist_Mono',monospace] text-[13px] text-[var(--color-muted)] uppercase tracking-wider max-w-[55ch]">
          Open for software architecture, AI model design, IoT hardware bridges, and full-stack development.
        </p>
      </section>

      {/* Full Interactive Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}