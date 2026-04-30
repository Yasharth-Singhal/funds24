import React from "react";
import { partners, testimonials } from "../data/siteData";

function Star({ filled = true }) {
  return (
    <svg className={`h-3.5 w-3.5 ${filled ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({ name, location, role, rating, text, avatar, product }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} filled={i < rating} />)}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">"{text}"</p>
      <span className="inline-flex w-fit text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
        {product}
      </span>
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div className="h-9 w-9 rounded-full bg-navy-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-slate-800 font-bold text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role} · {location}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <>
      {/* Partners */}
      <section id="partners" className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Empanelled with India's leading banks & NBFCs
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-4 w-max" style={{ animation: "scroll 28s linear infinite" }}>
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p}-${i}`}
                  className="px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-500 text-xs font-semibold whitespace-nowrap"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Client Reviews</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              What our clients say.
            </h2>
            <p className="mt-4 text-slate-500 text-base">
              50,000+ customers have trusted Funds24 for their financial needs across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>

          {/* Rating summary */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7 flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left shrink-0">
              <span className="text-5xl font-black text-navy-900 leading-none">4.9</span>
              <div className="flex gap-0.5 mt-2 justify-center md:justify-start">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
              </div>
              <p className="text-slate-400 text-xs mt-1">50,000+ reviews</p>
            </div>
            <div className="flex-1 w-full max-w-sm">
              {[5, 4, 3, 2, 1].map((n, i) => {
                const ws = ["87%", "8%", "3%", "1%", "1%"];
                return (
                  <div key={n} className="flex items-center gap-3 mb-1.5">
                    <span className="text-[11px] text-slate-400 w-3">{n}</span>
                    <Star />
                    <div className="flex-1 h-1.5 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: ws[i] }} />
                    </div>
                    <span className="text-[11px] text-slate-400 w-7 text-right">{ws[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
