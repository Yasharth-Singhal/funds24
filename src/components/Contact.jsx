import React, { useState } from "react";
import { contact } from "../data/siteData";

const products = [
  "Personal Loan", "Home Loan", "Business Loan",
  "Loan Against Property", "Insurance", "Credit Card",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="text-sky-600 text-sm font-bold uppercase tracking-widest">Get in Touch</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Let's Find Your<br />
              <span className="text-gradient-sky">Best Finance Deal</span>
            </h2>
            <p className="mt-5 text-slate-500 text-lg leading-relaxed">
              Fill out the form and our advisor will call you back within 30 minutes during business hours — absolutely free.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { icon: "📞", label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
                { icon: "📧", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: "📍", label: "Address", value: contact.address },
                { icon: "🕐", label: "Hours", value: contact.hours },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-lg shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href} className="text-slate-800 font-semibold hover:text-sky-600 transition-colors">{value}</a>
                      : <p className="text-slate-800 font-semibold">{value}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`tel:${contact.phone}`}
              className="mt-8 inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 shadow-card"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us Directly
            </a>
          </div>

          {/* Right — Form */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-lifted">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">✅</div>
                <h3 className="text-slate-900 font-extrabold text-xl">Request Sent!</h3>
                <p className="text-slate-500">Our advisor will call you within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-slate-900 font-extrabold text-xl mb-1">Free Callback Request</h3>
                  <p className="text-slate-500 text-sm">Get expert advice within 30 minutes.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-700 text-sm font-semibold block mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Aarav Mehta"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-slate-700 text-sm font-semibold block mb-1.5">Phone <span className="text-red-400">*</span></label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 text-sm font-semibold block mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="text-slate-700 text-sm font-semibold block mb-1.5">I'm interested in <span className="text-red-400">*</span></label>
                  <select
                    required
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition"
                  >
                    <option value="">Select a product…</option>
                    {products.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 text-sm font-semibold block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirement or question…"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition resize-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center text-base py-4 rounded-xl"
                >
                  Request Free Callback
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <p className="text-center text-slate-400 text-xs">
                  🔒 Your data is 100% secure. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
