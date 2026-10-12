"use client";

import React, { useState, useMemo } from "react";
import { siteConfig, Certificate } from "@/site.config";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Layers,
  Search,
  Hash,
} from "lucide-react";

const allCerts: Certificate[] = siteConfig.certificates || [];
const linkedInCertUrl =
  siteConfig.certificationsLinkedInUrl ||
  "https://www.linkedin.com/in/kishorkumarbaskaran/details/certifications/";

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Unique Issuers for Filter Tabs
  const issuers = useMemo(() => {
    const list = Array.from(new Set(allCerts.map((c) => c.issuer)));
    return ["ALL", ...list];
  }, []);

  // Filter & Search Logic
  const filteredCerts = useMemo(() => {
    return allCerts.filter((cert) => {
      const matchesFilter =
        activeFilter === "ALL" || cert.issuer.toLowerCase() === activeFilter.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="certifications" className="relative py-28 px-[var(--spacing-gutter)] border-t border-[var(--color-hairline)] bg-[#111010]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2.5 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>[ 04 / ACCREDITATIONS &amp; CREDENTIALS ]</span>
            </div>
            <h2
              className="text-[clamp(36px,5vw,72px)] font-bold uppercase tracking-[-0.02em] leading-[0.95] text-[var(--color-text)]"
              style={{ fontVariationSettings: "'wdth' 72, 'wght' 800" }}
            >
              Certified Industry Knowledge
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-muted)]">
              Total Verified Credentials: <span className="text-[var(--color-accent)] font-semibold">{allCerts.length}</span>
            </p>
            <a
              href={linkedInCertUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-['Geist_Mono',monospace] text-[12px] uppercase tracking-wider transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <span>View All on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
          {/* Issuer Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <span className="font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider text-[var(--color-label)] mr-1 flex items-center gap-1.5 shrink-0">
              <Layers className="w-3 h-3" /> Filter:
            </span>
            {issuers.map((issuer) => {
              const active = activeFilter === issuer;
              return (
                <button
                  key={issuer}
                  type="button"
                  onClick={() => setActiveFilter(issuer)}
                  className={`px-3 py-1.5 rounded-full font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                    active
                      ? "bg-[var(--color-accent)] text-[#111010] font-semibold"
                      : "bg-[#1a1918] text-[var(--color-muted)] hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {issuer === "ALL" ? `All (${allCerts.length})` : issuer}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
            <input
              type="text"
              placeholder="Search title, ID, skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1918] border border-white/10 rounded-full pl-9 pr-4 py-1.5 font-['Geist_Mono',monospace] text-[12px] text-white placeholder-[var(--color-label)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-[#1a1918]/50">
            <p className="font-['Geist_Mono',monospace] text-[13px] text-[var(--color-muted)] uppercase tracking-wider">
              No certifications matched your filter or search criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("ALL");
                setSearchQuery("");
              }}
              className="mt-4 text-[12px] font-['Geist_Mono',monospace] text-[var(--color-accent)] underline uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => {
              const hasOfficialVerification = Boolean(cert.credentialUrl && cert.credentialUrl.trim());
              const targetUrl = hasOfficialVerification ? cert.credentialUrl! : linkedInCertUrl;
              const linkLabel = hasOfficialVerification ? "Verify Certificate" : "View on LinkedIn";

              return (
                <article
                  key={cert.num}
                  className="group relative flex flex-col justify-between bg-[#1a1918] border border-white/10 hover:border-white/25 rounded-[var(--radius-card)] p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] hover:-translate-y-1"
                >
                  {/* Top Bar: Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)]" />
                        <span className="font-['Geist_Mono',monospace] text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                          {cert.badgeText || "ACCREDITATION"}
                        </span>
                      </div>
                      <span className="font-['Geist_Mono',monospace] text-[11px] text-[var(--color-label)]">
                        #{cert.num}
                      </span>
                    </div>

                    {/* Issuer & Issue Date */}
                    <div className="flex items-center justify-between text-[12px] font-['Geist_Mono',monospace] text-[var(--color-muted)] mb-3">
                      <span className="flex items-center gap-1.5 text-white font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1 text-[var(--color-label)]">
                        <Calendar className="w-3 h-3" />
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3
                      className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-3 tracking-tight"
                      style={{ fontVariationSettings: "'wdth' 85, 'wght' 700" }}
                    >
                      {cert.title}
                    </h3>

                    {/* Credential ID badge (if available) */}
                    {cert.credentialId ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 font-['Geist_Mono',monospace] text-[11px] text-[var(--color-muted)] mb-4">
                        <Hash className="w-3 h-3 text-[var(--color-accent)]" />
                        <span>ID: <strong className="text-white font-medium">{cert.credentialId}</strong></span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 font-['Geist_Mono',monospace] text-[11px] text-[var(--color-label)] mb-4">
                        <ShieldCheck className="w-3 h-3 text-[var(--color-label)]" />
                        <span>Issued via Verified Authority</span>
                      </div>
                    )}

                    {/* Associated Skills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--color-subtle)] font-['Geist_Mono',monospace] text-[10px] tracking-wide"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-['Geist_Mono',monospace] text-[var(--color-positive)]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>

                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['Geist_Mono',monospace] text-[11px] uppercase tracking-wider font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors"
                      title={hasOfficialVerification ? "Verify Certificate via official credential authority" : "View certification details on LinkedIn"}
                    >
                      <span>{linkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-[var(--radius-card)] bg-[#1a1918]/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
            <p className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-subtle)] leading-relaxed">
              All credentials reflect official certifications issued by Google, University of Michigan, UC Boulder, Infosys, and accredited technical institutions.
            </p>
          </div>
          <a
            href={linkedInCertUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-wider text-[var(--color-accent)] hover:underline shrink-0"
          >
            LinkedIn Certifications Page →
          </a>
        </div>
      </div>
    </section>
  );
}
