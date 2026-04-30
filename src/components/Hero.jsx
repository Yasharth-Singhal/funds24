import React from "react";
import { hero, stats } from "../data/siteData";

function StatCard({ value, label, color }) {
  const colors = {
    sky:     "from-sky-400/20 to-sky-500/10 border-sky-400/20 text-sky-300",
    gold:    "from-gold-400/20 to-gold-500/10 border-gold-400/20 text-yellow-300",
    emerald: "from-emerald-400/20 to-emerald-500/10 border-emerald-400/20 text-emerald-300",
  };
  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-2xl px-6 py-5 flex flex-col gap-1`}>
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-sm font-medium text-slate-400">{label}</span>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/30 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-gradient-hero">{hero.headline.split(",")[0]},</span>
              <br />
              <span className="text-white">{hero.headline.split(",")[1]?.trim()}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-body">
              {hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-base" onClick={() => scrollTo("contact")}>
                {hero.cta1}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button className="btn-outline text-base" onClick={() => scrollTo("services")}>
                {hero.cta2}
              </button>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["RS","PV","AS","SG"].map(ini => (
                  <div
                    key={ini}
                    className="h-8 w-8 rounded-full border-2 border-navy-900 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-[9px] font-black text-white"
                  >
                    {ini}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">{hero.trustLine}</p>
            </div>
          </div>

          {/* Right: Dashboard Card */}
          <div className="relative flex items-center justify-center">
            <div className="animate-float">
              {/* Main card */}
              <div className="glass rounded-3xl p-6 w-full max-w-md shadow-hero">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sky-400 text-xs font-bold uppercase tracking-widest">Live Dashboard</p>
                    <h3 className="text-white text-xl font-extrabold mt-1">Approval Pipeline</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
                    ● Active
                  </span>
                </div>

                {/* Progress bars */}
                {[
                  { label: "Personal Loan",   pct: 94 },
                  { label: "Home Loan",        pct: 87 },
                  { label: "Business Loan",    pct: 76 },
                  { label: "Insurance",        pct: 68 },
                ].map(({ label, pct }) => (
                  <div key={label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300 font-medium">{label}</span>
                      <span className="text-white font-bold">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-sky-400 transition-all duration-1000" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}

                {/* Bottom stats row */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[["24hrs", "Avg Approval"], ["35+", "Partners"], ["98%", "Satisfaction"]].map(([v, l]) => (
                    <div key={l} className="bg-white/[0.06] rounded-xl p-3 text-center">
                      <span className="block text-lg font-black text-white">{v}</span>
                      <span className="text-[11px] text-slate-400 font-medium">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-5 -right-8 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lifted">
                <div className="h-9 w-9 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <span className="text-emerald-300 text-lg">✅</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Loan Approved!</p>
                  <p className="text-slate-400 text-[11px]">₹12L · HDFC Bank · 2 min ago</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-8 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-lifted">
                <span className="text-yellow-400 text-lg">⭐</span>
                <div>
                  <p className="text-white text-xs font-bold">4.9 / 5 Rating</p>
                  <p className="text-slate-400 text-[11px]">50,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
