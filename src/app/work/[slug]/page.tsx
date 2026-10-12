import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { CaseStudyClient } from "./CaseStudyClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${project.category} | ${siteConfig.name}`,
    description: project.description,
  };
}

async function CaseStudyContent({ params }: Props) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyClient project={project} />;
}

export default function CaseStudyPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#111010] flex items-center justify-center font-['Geist_Mono',monospace] text-[12px] uppercase text-[var(--color-muted)]">
          Loading project...
        </div>
      }
    >
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
