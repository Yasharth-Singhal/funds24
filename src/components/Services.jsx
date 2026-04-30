import React, { useState } from "react";
import { services } from "../data/siteData";

// All cards use the same monochrome style — one blue accent only
const serviceIcons = {
  "personal-loan":   "💼",
  "home-loan":       "🏠",
  "business-loan":   "📊",
  "lap":             "🏗️",
  "insurance":       "🛡️",
  "credit-card":     "💳",
};

function ServiceCard({ service, isActive, onClick }) {
  return (
    <article
      onClick={onClick}
      className={`group rounded-2xl border p-6 cursor-pointer transition-all duration-200 ${
        isActive
          ? "border-sky-500 bg-sky-50 shadow-md"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {/* Icon */}
      <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-xl mb-5 border transition-colors ${
        isActive ? "bg-sky-100 border-sky-200" : "bg-slate-50 border-slate-200 group-hover:bg-slate-100"
      }`}>
        {serviceIcons[service.id]}
      </div>

      <h3 className="font-bold text-slate-900 text-base mb-1">{service.title}</h3>
      <p className="text-slate-500 text-xs font-medium mb-3">{service.subtitle}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>

      <ul className="mt-4 grid grid-cols-2 gap-1.5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className={`h-1 w-1 rounded-full shrink-0 ${isActive ? "bg-sky-500" : "bg-slate-400"}`} />
            {f}
          </li>
        ))}
      </ul>

      <button className={`mt-5 flex items-center gap-1.5 text-xs font-bold transition-colors ${
        isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-700"
      }`}>
        Check Eligibility
        <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </article>
  );
}

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Financial products,<br />all in one place.
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            From instant personal loans to comprehensive insurance — expert guidance, transparent process, zero hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => (
            <ServiceCard
              key={s.id}
              service={s}
              isActive={active === s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between bg-white border border-slate-200 rounded-2xl px-7 py-5">
          <p className="text-slate-600 text-sm">
            Not sure which product is right for you?{" "}
            <span className="text-slate-400">Our advisors compare 35+ lenders for free.</span>
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 shadow-card"
            >
              Sign Up for Free
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
