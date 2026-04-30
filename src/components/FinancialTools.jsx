import React from "react";

const tools = [
  {
    id: "credit-score",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Credit Score Check",
    desc: "Check your credit score instantly and for free. Know where you stand before applying for any loan.",
    cta: "Check Now →",
  },
  {
    id: "cibil",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "CIBIL Score Check",
    desc: "Get your detailed CIBIL report in minutes and understand your full credit history.",
    cta: "Get Report →",
  },
  {
    id: "emi-calc",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.611 4.5 4.687V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.687c0-1.076-.806-1.986-1.857-2.115A48.965 48.965 0 0012 2.25z" />
      </svg>
    ),
    title: "EMI Calculator",
    desc: "Calculate your monthly EMI with ease. Plan your finances confidently before you apply.",
    cta: "Calculate EMI →",
  },
  {
    id: "eligibility",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Loan Eligibility Checker",
    desc: "Find out how much loan you qualify for based on your income and credit profile.",
    cta: "Check Eligibility →",
  },
  {
    id: "balance-transfer",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Balance Transfer Tool",
    desc: "Compare rates and save on your existing loans by switching to a lower-interest lender.",
    cta: "Explore Transfer →",
  },
];

function ToolCard({ tool }) {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col gap-4">
      {/* Icon */}
      <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-sky-50 group-hover:border-sky-200 group-hover:text-sky-700 transition-colors">
        {tool.icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-slate-900 font-bold text-[15px] mb-1.5">{tool.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
      </div>

      {/* CTA — no modal, just scroll to contact */}
      <button
        onClick={scrollToContact}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 group-hover:text-sky-600 transition-colors"
      >
        {tool.cta}
      </button>
    </div>
  );
}

export default function FinancialTools() {
  return (
    <section id="tools" className="bg-white py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Financial Tools</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Tools for informed<br />financial decisions.
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Use our free tools to understand your credit, estimate EMIs, and check eligibility — before you apply.
          </p>
        </div>

        {/* Top 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.slice(0, 3).map(t => <ToolCard key={t.id} tool={t} />)}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4 lg:max-w-2xl">
          {tools.slice(3).map(t => <ToolCard key={t.id} tool={t} />)}
        </div>

        {/* Trust strip */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-slate-600 text-sm">
              All tools are <span className="font-semibold text-slate-800">100% free</span> — your data is encrypted and never shared with third parties.
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            {["RBI Compliant", "256-bit SSL", "ISO Certified"].map(label => (
              <span key={label} className="text-xs text-slate-400 font-medium whitespace-nowrap">{label}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
