import { Header } from "@/components/Header";
import { KineticTitle } from "@/components/KineticTitle";
import { Marquee } from "@/components/Marquee";
import { SelectedWork } from "@/components/SelectedWork";
import { CertificatesStackScroll } from "@/components/CertificatesStackScroll";
import { PinnedStatement } from "@/components/PinnedStatement";
import { BlueScrollWipe } from "@/components/BlueScrollWipe";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { IntroPreloader } from "@/components/IntroPreloader";
import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 0-100 First Load Intro Preloader */}
      <IntroPreloader />

      {/* Fixed Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="box-border flex flex-col justify-between h-[100svh] min-h-[620px] pt-[clamp(110px,16vh,160px)] pb-10 px-[var(--spacing-gutter)]">
        {/* Top Eyebrow Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
          <span className="justify-self-start">(Portfolio / ©2026)</span>
          <span className="hidden sm:inline justify-self-center text-center text-[var(--color-text)]">
            {siteConfig.eyebrow}
          </span>
          <span className="hidden sm:inline justify-self-end text-right">
            {siteConfig.location} / Available
          </span>
        </div>

        {/* Central Kinetic Display Names */}
        <div className="my-auto py-4 flex flex-col justify-center">
          <div className="overflow-hidden">
            <KineticTitle
              text="KISHOR"
              align="left"
              className="text-[clamp(68px,17vw,220px)] leading-[0.84]"
            />
          </div>
          <div className="overflow-hidden">
            <KineticTitle
              text="KUMAR"
              align="right"
              className="text-[clamp(68px,17vw,220px)] leading-[0.84]"
            />
          </div>
        </div>

        {/* Bottom Hero Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 pt-4 border-t border-[var(--color-hairline)] md:border-t-0">
          <p className="text-[clamp(17px,1.6vw,22px)] leading-relaxed text-[var(--color-muted)] max-w-[34ch]">
            {siteConfig.heroBlurb}
          </p>

          <span className="hidden md:block justify-self-center font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
            ↓ Scroll, gently
          </span>

          <div className="md:justify-self-end">
            <a
              href="#work"
              data-cursor="Look"
              className="inline-block rounded-full border border-[var(--color-outline)] px-7 py-4 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-[1.02] transition-all"
            >
              See the work →
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <Marquee />

      {/* Selected Work (5 Projects with Interactive Hover Dock & Leaning Follower Card) */}
      <SelectedWork />

      {/* Continuous Pinned Scroll Certificates Stacking (0 to 100% progress scrub) */}
      <CertificatesStackScroll />

      {/* Pinned Scroll Statement (Word-by-word lighting) */}
      <PinnedStatement />

      {/* Full-Screen Scroll-Synchronized Reversible Blue Wipe Transition with Direct Contact & Resume */}
      <BlueScrollWipe />

      {/* Editorial Contact & Enquiry Section */}
      <ContactSection />

      {/* Massive Kinetic Footer */}
      <Footer />
    </main>
  );
}
