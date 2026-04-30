import React from "react";
import { footerLinks, contact } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Ready to get the best deal?
            </h2>
            <p className="text-sky-100 mt-2 text-lg">
              Talk to our expert advisor — free consultation, no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-navy-900 font-bold px-7 py-4 rounded-full text-sm hover:bg-slate-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Sign Up — It's Free
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-navy-900/60 border border-white/20 text-white font-bold px-7 py-4 rounded-full text-sm hover:bg-navy-900/80 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <span className="text-navy-950 font-black text-lg">F</span>
              </div>
              <div className="leading-none">
                <span className="text-white font-extrabold text-xl block">Funds24</span>
                <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">.in</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              India's trusted DSA partner for loans, insurance & credit cards. Empanelled with 35+ banks & NBFCs. Serving 50,000+ clients across UP and beyond.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400">
              <a href={`tel:${contact.phone}`} className="hover:text-sky-400 transition-colors flex items-center gap-2">
                <span>📞</span> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="hover:text-sky-400 transition-colors flex items-center gap-2">
                <span>📧</span> {contact.email}
              </a>
              <span className="flex items-center gap-2">
                <span>📍</span> Lucknow, Uttar Pradesh
              </span>
            </div>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", icon: "f", href: "#" },
                { label: "Twitter", icon: "𝕏", href: "#" },
                { label: "LinkedIn", icon: "in", href: "#" },
                { label: "Instagram", icon: "📸", href: "#" },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-400 text-xs font-bold hover:bg-sky-400/20 hover:text-sky-400 hover:border-sky-400/30 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{group}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="text-slate-400 text-sm hover:text-sky-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {year} Funds24.in · All rights reserved. IRDA · AMFI · RBI Compliant</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
