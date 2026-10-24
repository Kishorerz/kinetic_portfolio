"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KineticTitle } from "@/components/KineticTitle";
import { usePageTransition } from "@/components/PageTransition";
import {
  CodeSurePreview,
  KineticPortfolioPreview,
  ChainSensePreview,
  PathfindrPreview,
  PrecisionFarmingPreview,
} from "@/components/ProjectPreviews";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface CaseStudyClientProps {
  project: Project;
}

export function CaseStudyClient({ project }: CaseStudyClientProps) {
  const { navigateWithTransition } = usePageTransition();

  const previewMap: Record<string, React.ReactNode> = {
    codesure: <CodeSurePreview />,
    "kinetic-portfolio": <KineticPortfolioPreview />,
    chainsense: <ChainSensePreview />,
    pathfindr: <PathfindrPreview />,
    "precision-farming": <PrecisionFarmingPreview />,
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition("/", "HOME", "PORTFOLIO");
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition(
      `/work/${project.nextProject.slug}`,
      project.nextProject.name,
      `${project.nextProject.num} / NEXT`
    );
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main className="pt-[clamp(110px,16vh,160px)]">
        {/* Case Study Header */}
        <section className="px-[var(--spacing-gutter)] pb-12">
          {/* Back link */}
          <Link
            href="/"
            onClick={handleBack}
            data-cursor="Back"
            className="inline-flex items-center gap-2 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] hover:text-[var(--color-accent)] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All work
          </Link>

          {/* Kinetic Title */}
          <div className="my-4">
            <KineticTitle
              text={project.name.toUpperCase()}
              align="left"
              className="text-[clamp(52px,12vw,190px)] leading-[0.86]"
            />
          </div>

          {/* Meta Details Grid */}
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-8 border-t border-[var(--color-hairline)] font-['Geist_Mono',monospace]">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-faint)] mb-2">
                Client / Scope
              </dt>
              <dd className="text-[16px] text-white font-sans font-medium">
                {project.client}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-faint)] mb-2">
                Role
              </dt>
              <dd className="text-[16px] text-white font-sans font-medium">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-faint)] mb-2">
                Platform
              </dt>
              <dd className="text-[16px] text-white font-sans font-medium">
                {project.platform}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-faint)] mb-2">
                Year
              </dt>
              <dd className="text-[16px] text-white font-sans font-medium">
                {project.year}
              </dd>
            </div>
          </dl>

          {/* Project Action Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-chip-border)] font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Repository <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Hero Interactive Telemetry Screen */}
        <section className="px-[var(--spacing-gutter)] my-8">
          <div className="relative aspect-[16/9] min-h-[420px] max-h-[640px] w-full rounded-[var(--radius-image)] border border-[var(--color-outline)] bg-[var(--color-surface)] overflow-hidden shadow-2xl">
            {previewMap[project.slug] || <div className="p-8">Preview</div>}
          </div>
        </section>

        {/* Overview Narrative */}
        <section className="py-[clamp(60px,10vh,120px)] px-[var(--spacing-gutter)]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-accent)] block mb-4">
                (Overview)
              </span>
              <h3
                className="text-[clamp(28px,3vw,44px)] font-bold tracking-tight text-white leading-tight"
                style={{ fontVariationSettings: "'wdth' 88, 'wght' 700" }}
              >
                The problem &amp; solution
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-[clamp(20px,2vw,28px)] text-[var(--color-text)] leading-relaxed font-light">
                {project.description}
              </p>
              <p className="text-[17px] text-[var(--color-muted)] leading-relaxed">
                {project.longDescription}
              </p>

              {/* Scope Chips */}
              <div className="pt-6">
                <span className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)] block mb-3">
                  Scope of work
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.whatIDid.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full border border-[var(--color-chip-border)] font-['Geist_Mono',monospace] text-[12px] text-[var(--color-subtle)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Pillars / Highlights */}
        <section className="py-16 px-[var(--spacing-gutter)] border-t border-[var(--color-hairline)]">
          <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-accent)] mb-8">
            (Engineering Architecture)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-hairline)] flex flex-col justify-between min-h-[260px]"
              >
                <div className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-accent)]">
                  0{i + 1}
                </div>
                <div className="my-auto py-4">
                  <h4
                    className="text-[22px] font-bold text-white mb-2"
                    style={{ fontVariationSettings: "'wdth' 88, 'wght' 700" }}
                  >
                    {h.title}
                  </h4>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
                <div className="w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
              </div>
            ))}
          </div>
        </section>

        {/* Numbers & Metrics */}
        <section className="py-20 px-[var(--spacing-gutter)] border-t border-[var(--color-hairline)]">
          <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] mb-8">
            (By The Numbers)
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.stats.map((s, idx) => (
              <div key={idx} className="border-t border-[var(--color-hairline)] pt-6">
                <div
                  className="text-[clamp(44px,6vw,92px)] font-bold text-white leading-none mb-2"
                  style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
                >
                  {s.value}
                </div>
                <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer CTA */}
        <a
          href={`/work/${project.nextProject.slug}`}
          onClick={handleNextProject}
          data-cursor="Next"
          className="group block px-[var(--spacing-gutter)] py-[clamp(80px,14vh,160px)] border-t border-[var(--color-hairline)] hover:bg-[var(--color-surface)] transition-colors cursor-pointer select-none"
        >
          <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] group-hover:text-[var(--color-accent)] transition-colors mb-4 flex items-center justify-between">
            <span>Next project ({project.nextProject.num})</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
          <div
            className="text-[clamp(48px,11vw,160px)] font-bold uppercase tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] leading-[0.88] transition-colors"
            style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
          >
            {project.nextProject.name}
          </div>
        </a>
      </main>

      <Footer />
    </div>
  );
}
