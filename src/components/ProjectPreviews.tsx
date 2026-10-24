"use client";

import React from "react";
import {
  Cpu,
  ShieldCheck,
  Navigation,
  Sprout,
  Terminal,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  Gauge,
  Workflow,
} from "lucide-react";

export function CodeSurePreview() {
  return (
    <div className="relative w-full h-full bg-[#121214] p-6 flex flex-col justify-between overflow-hidden font-['Geist_Mono'] text-[#edeae4]">
      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-[11px] text-white uppercase tracking-wider font-bold">
            CODESURE RISK ENGINE
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          DIFF-AWARE
        </div>
      </div>

      {/* Risk Score & Evidence Cards */}
      <div className="relative z-10 my-auto space-y-3">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#18181c] border border-white/10 rounded-lg p-3">
            <span className="text-[10px] text-[var(--color-label)] uppercase block">
              Release Risk Tier
            </span>
            <div className="text-[18px] font-bold text-[var(--color-positive)] mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> LOW RISK
            </div>
            <span className="text-[10px] text-[var(--color-label)]">Score: 18 / 100</span>
          </div>

          <div className="bg-[#18181c] border border-white/10 rounded-lg p-3">
            <span className="text-[10px] text-[var(--color-label)] uppercase block">
              Static Checks
            </span>
            <div className="text-[18px] font-bold text-white mt-1">48 / 48</div>
            <span className="text-[10px] text-[var(--color-positive)]">0 Critical CVEs</span>
          </div>
        </div>

        {/* Terminal Evidence Stream */}
        <div className="bg-[#0b0b0d] border border-white/10 rounded-lg p-3 text-[10px] space-y-1.5 leading-relaxed">
          <div className="text-white/60">$ git diff HEAD~1 | codesure analyze --evidence</div>
          <div className="text-[var(--color-accent)]">✓ Spring Boot 4 + Java 21 LTS AST parsed</div>
          <div className="text-[var(--color-positive)]">✓ 142 lines added, 0 secret exposures detected</div>
          <div className="text-[var(--color-label)]">✓ Evidence factor: High test coverage (94%)</div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="relative z-10 flex justify-between items-center text-[10px] text-[var(--color-label)] pt-2 border-t border-white/10">
        <span>GATEWAY: PR PASS</span>
        <span className="text-[var(--color-accent)] font-bold">READY TO MERGE</span>
      </div>
    </div>
  );
}

export function KineticPortfolioPreview() {
  return (
    <div className="relative w-full h-full bg-[#111010] p-6 flex flex-col justify-between overflow-hidden text-[#edeae4]">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7fa8ff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-white font-bold">
            KINETIC PORTFOLIO
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 text-[var(--color-accent)] font-['Geist_Mono'] text-[10px]">
          NEXT.js 16 + REACT 19
        </span>
      </div>

      {/* Central Visual Showcase */}
      <div className="relative z-10 my-auto space-y-3">
        <div className="bg-[#181818] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center font-['Geist_Mono'] text-[10px] text-[var(--color-label)]">
            <span>ANIMATION CHOREOGRAPHY</span>
            <span className="text-[var(--color-accent)] font-bold">60 FPS</span>
          </div>

          <div className="text-[26px] font-bold tracking-tight text-white leading-none uppercase">
            PHYSICS &amp; MOTION
          </div>
          <p className="text-[11px] text-[var(--color-subtle)] font-['Geist_Mono']">
            Scroll-scrubbed typography · Follower lean dock · SMTP route
          </p>

          <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-white/10 font-['Geist_Mono'] text-center">
            <div className="bg-white/5 rounded p-1.5">
              <span className="text-[9px] text-[var(--color-label)] block">LIGHTHOUSE</span>
              <span className="text-[13px] font-bold text-[var(--color-positive)]">99 / 100</span>
            </div>
            <div className="bg-white/5 rounded p-1.5">
              <span className="text-[9px] text-[var(--color-label)] block">WIPE TIME</span>
              <span className="text-[13px] font-bold text-[var(--color-accent)]">650ms</span>
            </div>
            <div className="bg-white/5 rounded p-1.5">
              <span className="text-[9px] text-[var(--color-label)] block">STATUS</span>
              <span className="text-[13px] font-bold text-white">LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="relative z-10 flex justify-between items-center font-['Geist_Mono'] text-[10px] text-[var(--color-label)] border-t border-white/10 pt-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--color-positive)] animate-pulse" />
          PRODUCTION VERCEL DEPLOYMENT
        </span>
        <span className="text-[var(--color-accent)] font-semibold">VIEW LIVE →</span>
      </div>
    </div>
  );
}

export function ChainSensePreview() {
  return (
    <div className="relative w-full h-full bg-[#161514] p-6 flex flex-col justify-between overflow-hidden text-[#edeae4]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#7fa8ff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-4">
        <div>
          <span className="font-['Geist_Mono'] text-[10px] text-[var(--color-accent)] uppercase tracking-wider block">
            Hardware Telemetry Node #08
          </span>
          <h4 className="text-[17px] font-bold tracking-tight text-white flex items-center gap-2 mt-1">
            <Cpu className="w-4 h-4 text-[var(--color-accent)]" /> Raspberry Pi 4B + Web3.py
          </h4>
        </div>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 text-[var(--color-accent)] font-['Geist_Mono'] text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping" />
          ETH MAINNET SYNC
        </span>
      </div>

      {/* Sensor Metric Cards */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        <div className="bg-[#1e1c1b] border border-white/10 rounded-lg p-3">
          <span className="font-['Geist_Mono'] text-[10px] text-[var(--color-label)] uppercase block">
            Vibration Sensor
          </span>
          <div className="text-[20px] font-bold text-white mt-1">
            2.48 <span className="text-[11px] font-normal text-[var(--color-label)]">mm/s</span>
          </div>
          <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--color-positive)] w-[42%]" />
          </div>
        </div>

        <div className="bg-[#1e1c1b] border border-white/10 rounded-lg p-3">
          <span className="font-['Geist_Mono'] text-[10px] text-[var(--color-label)] uppercase block">
            Thermal Probe
          </span>
          <div className="text-[20px] font-bold text-white mt-1">
            68.2 <span className="text-[11px] font-normal text-[var(--color-label)]">°C</span>
          </div>
          <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--color-accent)] w-[68%]" />
          </div>
        </div>
      </div>

      {/* Blockchain Ledger Block */}
      <div className="relative z-10 bg-[#121110] border border-white/10 rounded-lg p-3 font-['Geist_Mono'] text-[11px]">
        <div className="flex justify-between items-center text-[var(--color-label)] mb-1.5">
          <span>TX HASH (BLOCK #1948201)</span>
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-positive)]" />
        </div>
        <p className="text-white/80 truncate text-[10px]">
          0x4a9f...e829d1c7f4019b84ac4f8263591
        </p>
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5 text-[10px] text-[var(--color-accent)]">
          <span>Merkle Audit Root Verified</span>
          <span>Gas: 21,000</span>
        </div>
      </div>
    </div>
  );
}

export function PathfindrPreview() {
  return (
    <div className="relative w-full h-full bg-[#151718] p-6 flex flex-col justify-between overflow-hidden text-[#edeae4]">
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-white">
            CAMPUS ROUTE ENGINE
          </span>
        </div>
        <span className="font-['Geist_Mono'] text-[10px] text-[var(--color-label)]">
          EST: 3 MIN WALK (240M)
        </span>
      </div>

      {/* Interactive Map Layout Graphic */}
      <div className="relative z-10 my-auto h-48 border border-white/10 rounded-xl bg-[#0f1011] overflow-hidden p-3 flex flex-col justify-between">
        {/* SVG Route */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 160">
          <path
            d="M 40 120 L 110 120 L 110 50 L 220 50 L 260 80"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-pulse"
          />
          {/* Start Point */}
          <circle cx="40" cy="120" r="6" fill="#6fdc8c" />
          {/* Waypoint */}
          <circle cx="110" cy="50" r="4" fill="var(--color-accent)" />
          {/* Destination */}
          <circle cx="260" cy="80" r="7" fill="var(--color-accent)" stroke="#fff" strokeWidth="2" />
        </svg>

        {/* Building Cards */}
        <div className="flex justify-between text-[10px] font-['Geist_Mono'] text-[var(--color-label)]">
          <span className="bg-white/5 px-2 py-1 rounded">Science Block A</span>
          <span className="bg-[var(--color-accent)]/20 text-[var(--color-accent)] px-2 py-1 rounded border border-[var(--color-accent)]/30">
            Central Library (Target)
          </span>
        </div>

        <div className="flex justify-between items-end text-[10px] font-['Geist_Mono']">
          <span className="bg-white/5 px-2 py-1 rounded text-[var(--color-label)]">
            Main Auditorium
          </span>
          <div className="flex items-center gap-1.5 bg-[#1a1b1c] px-2.5 py-1 rounded border border-white/10 text-[var(--color-positive)]">
            <CheckCircle2 className="w-3 h-3" /> Accessible Path Found
          </div>
        </div>
      </div>

      {/* Navigation Instruction */}
      <div className="relative z-10 bg-[#1e2022] border border-white/10 rounded-lg p-3">
        <span className="font-['Geist_Mono'] text-[10px] text-[var(--color-accent)] uppercase block mb-1">
          Turn by Turn
        </span>
        <p className="text-[13px] text-white font-medium">
          Head north through Engineering corridor, then take East atrium walkway.
        </p>
      </div>
    </div>
  );
}

export function PrecisionFarmingPreview() {
  return (
    <div className="relative w-full h-full bg-[#141814] p-6 flex flex-col justify-between overflow-hidden text-[#edeae4]">
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-3">
        <div>
          <span className="font-['Geist_Mono'] text-[10px] text-[#6fdc8c] uppercase tracking-wider block">
            AI AGRI-CROP MONITOR
          </span>
          <h4 className="text-[16px] font-bold text-white flex items-center gap-2 mt-1">
            <Sprout className="w-4 h-4 text-[#6fdc8c]" /> Sector 4 · Zone A Telemetry
          </h4>
        </div>
        <span className="px-2 py-1 rounded bg-[#6fdc8c]/15 text-[#6fdc8c] border border-[#6fdc8c]/30 font-['Geist_Mono'] text-[10px]">
          NDVI: 0.82 (OPTIMAL)
        </span>
      </div>

      {/* Soil & Crop Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto">
        <div className="bg-[#1b221b] border border-white/10 rounded-lg p-2.5">
          <span className="font-['Geist_Mono'] text-[9px] text-[var(--color-label)] uppercase block">
            Soil Moisture
          </span>
          <div className="text-[18px] font-bold text-[#6fdc8c] mt-1">44.8%</div>
          <span className="text-[9px] text-[var(--color-label)]">Target: 42-46%</span>
        </div>

        <div className="bg-[#1b221b] border border-white/10 rounded-lg p-2.5">
          <span className="font-['Geist_Mono'] text-[9px] text-[var(--color-label)] uppercase block">
            Soil Nitrogen
          </span>
          <div className="text-[18px] font-bold text-white mt-1">182 ppm</div>
          <span className="text-[9px] text-[var(--color-label)]">Status: Rich</span>
        </div>

        <div className="bg-[#1b221b] border border-white/10 rounded-lg p-2.5">
          <span className="font-['Geist_Mono'] text-[9px] text-[var(--color-label)] uppercase block">
            Solar Lux
          </span>
          <div className="text-[18px] font-bold text-[var(--color-accent)] mt-1">54.2k</div>
          <span className="text-[9px] text-[var(--color-label)]">Full Sun</span>
        </div>
      </div>

      {/* AI Decision Output */}
      <div className="relative z-10 bg-[#121612] border border-[#6fdc8c]/30 rounded-lg p-3">
        <div className="flex items-center justify-between text-[10px] font-['Geist_Mono'] text-[#6fdc8c] mb-1">
          <span>AI RECOMMENDATION (PYTORCH + RF)</span>
          <Activity className="w-3.5 h-3.5" />
        </div>
        <p className="text-[12px] text-white">
          Crop: Maize / Wheat recommended for current soil pH (6.4) and N-P-K levels. Foliage disease risk: Low.
        </p>
      </div>
    </div>
  );
}
