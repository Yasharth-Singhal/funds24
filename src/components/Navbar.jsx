import React, { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";

function scrollTo(id) {
  if (id === "hero") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const ids = navLinks.map(n => n.id).filter(id => id !== "hero");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (id) => { scrollTo(id); setMenuOpen(false); setActive(id); };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-xl shadow-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-2.5 group"
          aria-label="Funds24 home"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform">
            <span className="text-navy-950 font-black text-lg leading-none">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-lg tracking-tight">Funds24</span>
            <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">.in</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === id
                  ? "bg-sky-400/15 text-sky-400"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </button>
          <button
            onClick={() => go("contact")}
            className="btn-primary text-sm"
          >
            Sign Up →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-navy-950/98 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                active === id ? "bg-sky-400/15 text-sky-400" : "text-slate-200 hover:bg-white/[0.06]"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-2 btn-primary justify-center text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
