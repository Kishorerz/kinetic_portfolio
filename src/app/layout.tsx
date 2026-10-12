import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransitionProvider } from "@/components/PageTransition";
import { siteConfig } from "@/site.config";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.heroBlurb,
  authors: [{ name: siteConfig.name }],
  keywords: [
    siteConfig.name,
    "AI",
    "Machine Learning",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "IoT",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.heroBlurb,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans antialiased min-h-screen selection:bg-[var(--color-accent)] selection:text-[var(--color-on-accent)]"
        suppressHydrationWarning
      >
        <PageTransitionProvider>
          <SmoothScroll />
          <CustomCursor />
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
