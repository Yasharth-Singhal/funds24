import React from "react";
import { steps, whyUs } from "../data/siteData";

function Step({ step, title, desc, icon }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="relative h-16 w-16 rounded-2xl bg-navy-900 flex flex-col items-center justify-center shadow-md shrink-0">
        <span className="text-2xl">{icon}</span>
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-sky-500 text-white text-[10px] font-black flex items-center justify-center">
          {step}
        </span>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-1.5">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">{desc}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-sm transition-all">
      <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-lg mb-3">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      {/* How it works */}
      <section id="how-it-works" className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Process</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Get a loan in 4 simple steps.
            </h2>
            <p className="mt-4 text-slate-500 text-base">
              Our streamlined digital process gets you the best offer with minimal effort and zero paperwork hassle.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />
            {steps.map(s => <Step key={s.step} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why Funds24 */}
      <section id="about" className="bg-white py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                India's most trusted DSA partner.
              </h2>
              <p className="mt-4 text-slate-500 text-base leading-relaxed">
                Since 2018, Funds24 has helped over 50,000 customers across Uttar Pradesh and beyond secure the best financial products — with complete transparency and dedicated support.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["50K+",    "Happy Clients"],
                  ["₹500Cr+", "Loans Disbursed"],
                  ["35+",     "Partner Banks & NBFCs"],
                  ["6+",      "Years of Experience"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="block text-2xl font-extrabold text-navy-900">{v}</span>
                    <span className="text-slate-500 text-xs font-medium mt-0.5 block">{l}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 inline-flex items-center gap-2 bg-navy-900 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Get Started
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-3">
              {whyUs.map(w => <WhyCard key={w.title} {...w} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
