"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/site.config";
import { usePageTransition } from "./PageTransition";

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);
  const pathname = usePathname();
  const { navigateWithTransition } = usePageTransition();

  // Easter Egg: 5 quick clicks cycle global accent color
  const accentColors = ["#7fa8ff", "#ff7bb5", "#ffaa5a", "#b5ff54"];
  const colorNames = ["Electric Blue", "Neon Pink", "Cyber Orange", "Lime Green"];
  const colorIndexRef = useRef(0);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastClickTimeRef.current < 500) {
      clickCountRef.current += 1;
    } else {
      clickCountRef.current = 1;
    }
    lastClickTimeRef.current = now;

    if (clickCountRef.current === 5) {
      colorIndexRef.current = (colorIndexRef.current + 1) % accentColors.length;
      const newColor = accentColors[colorIndexRef.current];
      document.documentElement.style.setProperty("--color-accent", newColor);
      setToastMessage(`Palette switched to ${colorNames[colorIndexRef.current]}`);
      clickCountRef.current = 0;
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    // Normal click: If already on home page, smoothly scroll to top
    // If on another page, play the full blue wipe page transition to "/"
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigateWithTransition("/", "HOME", "PORTFOLIO");
    }
  };

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    title: string,
    meta: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigateWithTransition(href, title, meta);
    }
  };

  const navItems = [
    { label: "Projects", href: "/work", title: "PROJECTS", meta: "04 WORKS" },
    { label: "About", href: "/about", title: "ABOUT", meta: "KISHOR KUMAR" },
    { label: "Certifications", href: "/certifications", title: "ACCREDITATIONS", meta: "10 CREDENTIALS" },
    { label: "Contact", href: "/contact", title: "CONTACT", meta: "COLLABORATION" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-[clamp(20px,4vw,56px)] py-[18px] bg-gradient-to-b from-[#111010]/95 via-[#111010]/70 to-transparent backdrop-blur-[2px]">
        {/* Wordmark Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          data-cursor="Home"
          className="justify-self-start flex items-baseline text-[21px] leading-none select-none text-[var(--color-text)] hover:opacity-90 transition-opacity"
        >
          <span className="sr-only">{siteConfig.name}, Home</span>
          <span
            className="uppercase"
            style={{ fontVariationSettings: "'wdth' 68, 'wght' 850", letterSpacing: "-0.01em" }}
          >
            Kishor
          </span>
          <span
            className="relative mx-[0.08em] inline-flex items-center justify-center w-[0.82em] h-[0.94em] bg-[var(--color-accent)] text-[var(--color-on-accent)] italic font-light rounded-[2px]"
            style={{ fontVariationSettings: "'wdth' 110, 'wght' 300" }}
          >
            K
          </span>
          <span
            className="italic font-light"
            style={{ fontVariationSettings: "'wdth' 110, 'wght' 250", letterSpacing: "-0.02em" }}
          >
            umar
          </span>
        </Link>

        {/* Center Status / Eyebrow */}
        <div className="hidden lg:flex items-center gap-2.5 font-['Geist_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[var(--color-label)]">
          <span>{siteConfig.location}</span>
          <span className="opacity-40">/</span>
          <span>{siteConfig.status}</span>
        </div>

        {/* Right Navigation */}
        <nav
          aria-label="Main"
          className="hidden md:flex justify-self-end items-center gap-[clamp(16px,2.2vw,32px)] font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em]"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => router.prefetch(item.href)}
                onClick={(e) => handleNavClick(e, item.href, item.title, item.meta)}
                className={`py-1 transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "text-[var(--color-accent)] font-semibold"
                    : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] block" />}
                {item.label}
              </a>
            );
          })}

          {/* Download My CV Button */}
          <a
            href={siteConfig.contact.resumeUrl || "/resume.pdf"}
            download="Kishor_Kumar_Resume.pdf"
            data-cursor="Download"
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 font-medium text-[var(--color-on-accent)] hover:bg-[var(--color-text)] transition-all hover:scale-[1.02] flex items-center gap-1.5 shadow-[0_4px_16px_rgba(127,168,255,0.25)]"
          >
            <span>Download CV</span>
            <span className="text-[10px]">↓</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden justify-self-end flex items-center gap-2.5 rounded-full border border-[var(--color-outline)] px-4 py-2 font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-text)]"
        >
          <span className="flex flex-col gap-1 w-3.5">
            <span
              className={`block h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[2.75px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""
              }`}
            />
          </span>
          Menu
        </button>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[95] flex flex-col justify-between bg-[var(--color-bg)] px-6 pt-28 pb-8 md:hidden">
          <div className="flex flex-col divide-y divide-[var(--color-hairline)]">
            {[
              { label: "Home", href: "/", title: "HOME", meta: "PORTFOLIO", num: "01" },
              { label: "Projects", href: "/work", title: "PROJECTS", meta: "04 WORKS", num: "02" },
              { label: "About", href: "/about", title: "ABOUT", meta: "KISHOR KUMAR", num: "03" },
              { label: "Certifications", href: "/certifications", title: "ACCREDITATIONS", meta: "10 CREDENTIALS", num: "04" },
              { label: "Contact", href: "/contact", title: "CONTACT", meta: "COLLABORATION", num: "05" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.title, item.meta)}
                className="flex items-baseline justify-between py-5 text-[clamp(40px,11vw,64px)] font-bold uppercase tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                style={{ fontVariationSettings: "'wdth' 70, 'wght' 800" }}
              >
                <span>{item.label}</span>
                <span className="font-['Geist_Mono',monospace] text-[12px] text-[var(--color-label)]">
                  {item.num}
                </span>
              </a>
            ))}
          </div>

          <div className="font-['Geist_Mono',monospace] text-[12px] uppercase tracking-[0.06em] text-[var(--color-label)] flex flex-col gap-3">
            <a
              href={siteConfig.contact.resumeUrl || "/resume.pdf"}
              download="Kishor_Kumar_Resume.pdf"
              className="w-full py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-semibold text-center flex items-center justify-center gap-2 text-[13px]"
            >
              <span>Download My CV</span>
              <span>↓</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-text)] lowercase text-[14px]">
              {siteConfig.contact.email}
            </a>
            <span>{siteConfig.location} / Available</span>
          </div>
        </div>
      )}

      {/* Palette Switch Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[9999] rounded-full bg-[var(--color-text)] text-[#111010] px-5 py-3 font-['Geist_Mono',monospace] text-[13px] uppercase tracking-[0.06em] shadow-xl animate-fade-in">
          ✦ {toastMessage}
        </div>
      )}
    </>
  );
}
