import React, { useEffect, useState } from "react";

const iconPaths = {
  chart: ["M5 19h14", "M7 16V9", "M12 16V5", "M17 16v-4"],
  file: ["M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z", "M14 2v5h5", "M9 15l2 2 4-5"],
  calculator: ["M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M8 7h8", "M8 11h.01", "M12 11h.01", "M16 11h.01", "M8 15h.01", "M12 15h.01", "M16 15h.01"],
  check: ["M20 6 9 17l-5-5"],
  swap: ["M17 1l4 4-4 4", "M3 11V9a4 4 0 0 1 4-4h14", "M7 23l-4-4 4-4", "M21 13v2a4 4 0 0 1-4 4H3"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  users: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  bolt: ["M13 2 3 14h8l-1 8 10-12h-8l1-8z"],
  award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M9 14l-1 8 4-2 4 2-1-8"],
  building: ["M3 21h18", "M5 21V7l8-4v18", "M19 21V11l-6-4", "M9 9h.01", "M9 13h.01", "M9 17h.01"],
  card: ["M3 5h18v14H3z", "M3 10h18"],
  trend: ["M3 17l6-6 4 4 8-8", "M14 7h7v7"],
  briefcase: ["M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1", "M3 7h18v13H3z", "M8 7v13", "M16 7v13"],
  target: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  heart: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"],
  lock: ["M7 11V7a5 5 0 0 1 10 0v4", "M5 11h14v10H5z"],
  globe: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M2 12h20", "M12 2a15 15 0 0 1 0 20", "M12 2a15 15 0 0 0 0 20"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  dollar: ["M12 1v22", "M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"],
  network: ["M6 16v-4", "M18 16v-4", "M12 8V4", "M6 12h12", "M12 4h.01", "M6 20h.01", "M18 20h.01"],
  scale: ["M12 3v18", "M5 8h14", "M6 8l-3 7h6L6 8z", "M18 8l-3 7h6l-3-7z"],
  bag: ["M6 7h12v14H6z", "M9 7a3 3 0 0 1 6 0"],
  mail: ["M4 4h16v16H4z", "M4 7l8 6 8-6"],
  phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.47-1.19a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z"],
  pin: ["M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
};

function Icon({ name, className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

function scrollToSection(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector("[data-site-header]");
  const offset = (header?.getBoundingClientRect().height ?? 96) + 14;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

function Logo({ footer = false, onClick }) {
  const content = (
    <>
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${footer ? "bg-white/10 text-cyanbrand" : "bg-ink text-cyanbrand"} shadow-sm transition group-hover:scale-105`}>
        <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3.4">
          <path d="M24 5 39 14v20L24 43 9 34V14L24 5Z" />
          <path d="M24 14v20M17 19l7-4 7 4M17 29l7 4 7-4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-2xl font-black tracking-[-0.04em]">Funds<span className="text-cyanbrand">24</span></span>
        <span className={`mt-1 block text-[0.64rem] font-black uppercase tracking-[0.28em] ${footer ? "text-white/45" : "text-muted"}`}>Financial Desk</span>
      </span>
    </>
  );

  if (footer) {
    return <button className="group flex items-center gap-3 text-left text-white transition hover:opacity-90" onClick={onClick} type="button">{content}</button>;
  }

  return (
    <button className="group flex items-center gap-3 text-left text-ink transition active:scale-[0.99] hover:opacity-90" onClick={onClick} type="button" aria-label="Scroll to top">
      {content}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const links = [["Home", "top"], ["Products", "products"], ["Services", "services"], ["About", "about"], ["Contact", "contact"]];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 80) {
        setActive("top");
        return;
      }

      const headerHeight = document.querySelector("[data-site-header]")?.getBoundingClientRect().height ?? 96;
      const threshold = headerHeight + 80;
      
      let closest = null;
      let closestDistance = Infinity;

      links
        .filter(([, id]) => id !== "top")
        .forEach(([, id]) => {
          const section = document.getElementById(id);
          if (!section) return;
          
          const sectionTop = section.getBoundingClientRect().top;
          // Find the section that is in view or most recently passed
          if (sectionTop <= threshold) {
            const distance = threshold - sectionTop;
            if (distance < closestDistance) {
              closestDistance = distance;
              closest = section;
            }
          }
        });

      if (closest) setActive(closest.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header id="top" data-site-header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/60 bg-white/85 shadow-soft backdrop-blur-xl" : "border-b border-transparent bg-white/45 backdrop-blur-md"}`}>
      <nav className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-16 ${scrolled ? "py-3" : "py-5"}`}>
        <Logo onClick={() => goTo("top")} />
        <button className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white/70 transition active:scale-95 lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span className="relative block h-5 w-5">
            <span className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
        <div className="hidden items-center gap-2 rounded-full border border-line/80 bg-white/65 p-1 text-base font-bold text-muted lg:flex">
          {links.map(([label, id]) => (
            <button className={`nav-link rounded-full px-5 py-2.5 transition active:scale-95 ${active === id ? "bg-ink text-white shadow-sm" : "hover:bg-mist hover:text-ink"}`} onClick={() => goTo(id)} type="button" key={label}>
              {label}
            </button>
          ))}
        </div>
        <button className="hidden rounded-full bg-sage px-8 py-4 text-lg font-black text-white shadow-sm transition active:scale-95 hover:-translate-y-0.5 hover:bg-ink hover:shadow-soft lg:inline-flex" onClick={() => goTo("contact")} type="button">Sign Up</button>
      </nav>
      <div className={`grid overflow-hidden border-t border-line bg-white/95 shadow-soft backdrop-blur transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent shadow-none"}`}>
        <div className="min-h-0">
          <div className="flex flex-col gap-3 px-5 py-4 text-base font-semibold text-slate-700">
            {links.map(([label, id]) => <button className={`rounded-2xl px-4 py-3 text-left ${active === id ? "bg-ink text-white" : "bg-mist/60 text-ink"}`} onClick={() => goTo(id)} type="button" key={label}>{label}</button>)}
            <button className="mt-2 rounded-2xl bg-sage px-5 py-3 text-center font-black text-white" onClick={() => goTo("contact")} type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Heading({ title, subtitle, line = false }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-4xl text-center">
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {line && <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-sage" />}
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{subtitle}</p>
    </div>
  );
}

const serviceCards = [
  ["building", "Personal & Business Loans", "Competitive rates for home loans, personal loans, and business financing", ["Quick approval", "Minimal documentation", "Flexible terms"]],
  ["shield", "Comprehensive Insurance", "Complete protection with Life, Health, Motor, and Commercial insurance", ["Wide coverage", "Claim assistance", "Best premiums"]],
  ["card", "Credit Card Solutions", "Expert assistance for credit card applications and balance management", ["Zero fees", "Instant approval", "Reward maximization"]],
  ["trend", "Loan Restructuring", "Smart restructuring and top-up facilities for existing loans", ["Lower EMIs", "Better terms", "Debt consolidation"]],
  ["calculator", "Financial Planning", "Long-term wealth building and expert financial consultation", ["Goal planning", "Investment advice", "Risk assessment"]],
  ["briefcase", "Business Solutions", "Tailored financial products for enterprises and startups", ["Working capital", "Equipment finance", "Trade finance"]],
];

const testimonials = [
  ["Priya Sharma", "Getting my home loan was seamless with Funds24. They compared multiple options, explained everything clearly, and got me the best rate. The digital process made it so convenient!"],
  ["Amit Patel", "Their insurance advisory is exceptional. They analyzed my family's needs and designed a comprehensive coverage plan that fits our budget perfectly. True professionals!"],
  ["Neha Verma", "I was unsure about my credit profile, but the team walked me through every step. The process felt transparent, calm, and surprisingly quick."],
  ["Rahul Singh", "Funds24 helped my business compare working-capital options without the usual confusion. Clear communication and no hidden surprises."],
];

function Hero() {
  const [parallax, setParallax] = useState(0);
  const products = ["Business Loan", "Home Loan", "New Car Loan", "Personal Loans", "Used Against Car"];

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fbfcfd] pb-16 pt-14 lg:pb-24 lg:pt-10">
      <div className="pointer-events-none absolute right-[-10rem] top-32 h-80 w-80 rounded-full bg-cyanbrand/10 blur-3xl will-change-transform" style={{ transform: `translateY(${parallax}px)` }} />
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:px-16">
        <div className="reveal relative max-w-2xl">
          <span className="mb-5 inline-flex border-l-4 border-sage bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-muted shadow-sm">Certified DSA partner network</span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">Fast & Secure Financial Services Funds24.in</h1>
          <p className="mt-7 text-lg leading-8 text-slate-700 sm:text-xl">Compare lenders, understand eligibility, and move through loan or insurance decisions with fewer handoffs and clearer documentation.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-lg bg-ink px-7 py-4 text-base font-bold text-white shadow-sm transition active:scale-[0.98] hover:-translate-y-0.5 hover:bg-navy hover:shadow-soft" onClick={() => scrollToSection("tools")} type="button">Check Eligibility</button>
            <button className="rounded-lg border border-line bg-white px-7 py-4 text-base font-bold text-ink transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-sage" onClick={() => scrollToSection("products")} type="button">Explore Products</button>
          </div>
        </div>
        <div className="reveal delay-1 rounded-2xl border border-line bg-white p-4 shadow-lift">
          <div className="rounded-xl bg-ink p-7 text-white sm:p-10">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand">Application desk</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Financial Solutions</h2>
              </div>
              <span className="rounded-md bg-white/10 px-3 py-2 text-sm font-bold">DSA</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Quick approval", "Minimal documentation", "Multiple lenders", "Transparent terms"].map((item) => (
                <div className="rounded-lg bg-white/8 p-4 text-sm font-semibold text-white/85" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="products" className="stagger mx-auto mt-14 grid max-w-[1120px] grid-cols-2 gap-4 px-5 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((item, index) => (
          <article className="reveal relative rounded-xl border border-line bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-soft" key={item}>
            {index === 4 && <span className="absolute -top-7 right-3 whitespace-nowrap rounded bg-sage px-3 py-1.5 text-[0.68rem] font-extrabold uppercase text-white">0% fee</span>}
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-mist text-sage"><Icon name="card" className="h-6 w-6" /></span>
            <h3 className="text-base font-extrabold uppercase leading-tight text-ink">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  const tools = [
    ["chart", "Credit Score Check", "Check your credit score instantly and for free"],
    ["file", "CIBIL Score Check", "Get your detailed CIBIL report in minutes"],
    ["calculator", "EMI Calculator", "Calculate your monthly EMI with ease"],
    ["check", "Loan Eligibility Checker", "Find out how much loan you can get"],
    ["swap", "Balance Transfer Tool", "Compare and save on your existing loans"],
  ];
  return (
    <section id="tools" className="bg-mist py-24 lg:py-28">
      <div className="mx-auto max-w-[1720px] px-5 sm:px-8 lg:px-20">
        <Heading title="Financial Tools & Services" subtitle="Powerful tools to help you make informed financial decisions" />
        <div className="stagger grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {tools.map(([icon, title, text], index) => (
            <article className={`reveal rounded-xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-soft ${index === 1 ? "shadow-soft" : ""}`} key={title}>
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-lg bg-mist text-navy"><Icon name={icon} className="h-6 w-6" /></span>
              <h3 className="text-xl font-extrabold text-ink">{title}</h3>
              <p className="mt-4 min-h-16 text-base leading-7 text-slate-700">{text}</p>
              <button className="mt-7 inline-flex font-extrabold text-sage transition hover:translate-x-1 hover:text-ink" onClick={() => scrollToSection("contact")} type="button">Check Now -</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12">
        <div className="reveal">
          <span className="mb-5 inline-flex rounded-full bg-mist px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-sage">About</span>
          <h2 className="font-display text-5xl font-extrabold leading-tight tracking-[-0.035em] text-ink lg:text-6xl">About Funds24</h2>
          <p className="mt-9 text-xl leading-9 text-slate-700">Funds24 is a certified Direct Selling Agent (DSA) partnering with leading banks and NBFCs across India. We bring you a comprehensive financial marketplace where transparency meets efficiency.</p>
          <p className="mt-8 text-xl leading-9 text-slate-700">Our digital-first approach eliminates paperwork, reduces processing time, and gives you access to multiple lenders - all in one place. We're committed to helping you make informed financial decisions with complete transparency.</p>
          <p className="mt-10 text-sm font-extrabold uppercase tracking-wide text-muted">Trusted Partners</p>
          <div className="mt-5 flex flex-wrap gap-5">
            {["Urban Money", "First Adviser Finance", "Finance Budha"].map((p) => <span className="rounded-full border border-line bg-mist px-6 py-3 text-lg font-bold text-ink shadow-sm" key={p}>{p}</span>)}
          </div>
        </div>
        <div className="stagger reveal delay-1 grid gap-5 sm:grid-cols-2">
          {[["shield", "100%", "Secure & Compliant"], ["users", "50K+", "Happy Customers"], ["bolt", "24 Hrs", "Quick Approval"], ["award", "DSA", "Certified Agent"]].map(([icon, value, label]) => (
            <article className="rounded-xl border border-line bg-mist p-7 text-ink transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft" key={label}>
              <Icon name={icon} className="h-10 w-10 text-sage" />
              <strong className="mt-6 block text-3xl font-extrabold">{value}</strong>
              <p className="mt-2 text-lg text-slate-700">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Heading title="Our Services" subtitle="Comprehensive financial solutions tailored to meet your unique needs" />
        <div className="stagger grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map(([icon, title, text, bullets]) => (
            <article className="reveal rounded-xl border border-line bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-soft" key={title}>
              <span className="mb-7 grid h-14 w-14 place-items-center rounded-lg bg-ink text-white shadow-sm"><Icon name={icon} className="h-6 w-6" /></span>
              <h3 className="text-2xl font-extrabold text-ink">{title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p>
              <ul className="mt-6 space-y-3 text-base text-muted">
                {bullets.map((b) => <li className="flex gap-4" key={b}><Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-ink" />{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionPrinciples() {
  const principles = [
    ["heart", "Honesty & Transparency", "We believe in complete transparency with no hidden charges or misleading information"],
    ["target", "Customer-Centric Approach", "Your financial goals are our priority. We tailor solutions to fit your unique needs"],
    ["eye", "Operational Efficiency", "Streamlined processes and digital tools to save you time and effort"],
    ["lock", "Data Privacy & Security", "Your personal and financial data is protected with bank-grade security"],
  ];
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <article className="reveal rounded-xl bg-ink p-10 text-white shadow-lift lg:p-12">
            <span className="mb-7 grid h-[56px] w-[56px] place-items-center rounded-lg bg-white/10"><Icon name="target" /></span>
            <h2 className="font-display text-4xl">Our Mission</h2>
            <p className="mt-7 text-xl leading-9">To democratize access to financial services by providing transparent, efficient, and customer-centric solutions that empower individuals and businesses to achieve their financial goals.</p>
          </article>
          <article className="reveal delay-1 rounded-xl bg-sage p-10 text-white shadow-lift lg:p-12">
            <span className="mb-7 grid h-[56px] w-[56px] place-items-center rounded-lg bg-white/12"><Icon name="eye" /></span>
            <h2 className="font-display text-4xl">Our Vision</h2>
            <p className="mt-7 text-xl leading-9">To become India's most trusted financial services platform, known for integrity, innovation, and putting customers first in every decision we make.</p>
          </article>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Heading title="Our Core Principles" subtitle="The values that guide everything we do" />
          <div className="stagger grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {principles.map(([icon, title, text]) => (
              <article className="reveal rounded-xl border border-line bg-mist p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft" key={title}>
                <span className="mb-6 grid h-[52px] w-[52px] place-items-center rounded-lg bg-white text-navy shadow-sm"><Icon name={icon} className="h-6 w-6" /></span>
                <h3 className="text-2xl font-extrabold text-ink">{title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StrengthsWhy() {
  const why = [
    ["network", "Multi-lender Access", "Compare offers from multiple banks and NBFCs to find the best deal for you"],
    ["scale", "Transparent Comparisons", "Clear, honest comparisons with no hidden fees or surprise charges"],
    ["file", "Reduced Paperwork", "Digital-first process means less paperwork and faster processing"],
    ["clock", "Faster Approvals", "Get loan approvals in as little as 24 hours with our streamlined process"],
    ["bag", "One-stop Marketplace", "All your financial needs - loans, insurance, credit cards - in one place"],
  ];
  return (
    <>
      <section id="strengths" className="bg-mist py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Heading title="Our DSA Strengths" subtitle="Proven track record of excellence in financial services" />
          <div className="reveal scroll-drift relative mx-auto min-h-[470px] max-w-[1180px]">
            <svg className="absolute inset-x-0 top-12 hidden h-[260px] w-full md:block" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path d="M60 230 C260 60 610 25 940 230" fill="none" stroke="#dce3eb" strokeWidth="3" strokeDasharray="10 10" />
            </svg>
            {[["globe", "left-[2%] top-[47%] bg-navy text-white h-28 w-28"], ["clock", "left-[23%] top-[26%] bg-white h-20 w-20"], ["award", "left-[48%] top-[13%] bg-white h-20 w-20"], ["users", "right-[23%] top-[26%] bg-white h-20 w-20"], ["dollar", "right-[3%] top-[49%] bg-white h-20 w-20"]].map(([icon, cls]) => (
              <span className={`absolute hidden place-items-center rounded-2xl border border-line/70 shadow-soft transition hover:-translate-y-1 md:grid ${cls}`} key={icon}><Icon name={icon} className="h-10 w-10" /></span>
            ))}
            <article className="absolute bottom-0 left-1/2 w-full max-w-[840px] -translate-x-1/2 rounded-[1.75rem] border border-line bg-white/88 p-8 text-center shadow-soft backdrop-blur sm:p-10">
              <h3 className="text-4xl font-extrabold text-ink sm:text-5xl">50+ Partners</h3>
              <strong className="mt-4 block text-2xl text-ink sm:text-3xl">Extensive Lender Network</strong>
              <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">Connected with 50+ banks and NBFCs for maximum choice and competitive rates</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Heading title="Why Choose Funds24" subtitle="We're committed to making your financial journey simple, transparent, and efficient" />
          <div className="stagger grid gap-9 md:grid-cols-3">
            {why.map(([icon, title, text]) => (
              <article className="reveal text-center" key={title}>
                <span className="mx-auto mb-5 grid h-[72px] w-[72px] place-items-center rounded-2xl bg-white text-navy shadow-soft"><Icon name={icon} /></span>
                <h3 className="text-2xl font-extrabold text-ink">{title}</h3>
                <p className="mx-auto mt-4 max-w-[300px] text-lg leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
        <Heading title="Client Testimonials" subtitle="Hear what our satisfied clients say about their experience with Funds24" line />
        <div className="reveal relative">
          <button onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)} className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-3xl text-ink shadow-sm transition active:scale-95 hover:scale-105 hover:bg-mist sm:left-0 sm:h-16 sm:w-16 sm:-translate-x-1/2 sm:text-4xl" type="button">{"<"}</button>
          <article className="rounded-xl border border-line bg-white px-8 py-14 text-center shadow-soft sm:px-16 lg:px-24">
            <div className="text-8xl font-bold leading-none text-slate-300">"</div>
            <p className="mx-auto mt-4 max-w-4xl text-2xl italic leading-[1.7] text-slate-600">"{current[1]}"</p>
            <p className="mt-8 text-3xl tracking-wide text-yellow-400">*****</p>
            <h3 className="mt-8 text-2xl font-extrabold text-slate-900">{current[0]}</h3>
          </article>
          <button onClick={() => setActive((active + 1) % testimonials.length)} className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-3xl text-ink shadow-sm transition active:scale-95 hover:scale-105 hover:bg-mist sm:right-0 sm:h-16 sm:w-16 sm:translate-x-1/2 sm:text-4xl" type="button">{">"}</button>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} className={`h-4 w-4 rounded-full ${index === active ? "bg-ink" : "bg-slate-300"}`} aria-label={`Go to testimonial ${index + 1}`} type="button" />)}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f8_100%)] py-24">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-12">
          <div className="reveal">
            <h2 className="font-display text-5xl text-ink lg:text-6xl">Get in Touch</h2>
            <p className="mt-7 max-w-2xl text-2xl leading-10 text-slate-700">Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.</p>
            <div className="mt-12 space-y-8">
              {[["mail", "Email Us", "email-hr@funds24.in"], ["phone", "Call Us", "+91 63875 57389"], ["pin", "Visit Us", "Lucknow, Uttar Pradesh"]].map(([icon, title, value]) => (
                <article className="flex items-center gap-5" key={title}>
                  <span className="grid h-[56px] w-[56px] place-items-center rounded-lg bg-white text-navy shadow-sm"><Icon name={icon} className="h-6 w-6" /></span>
                  <div><strong className="block text-xl text-ink">{title}</strong><p className="mt-2 text-xl text-muted">{value}</p></div>
                </article>
              ))}
            </div>
          </div>
          <form className="reveal delay-1 space-y-6 rounded-xl border border-line bg-white p-6 shadow-soft sm:p-8" onSubmit={(event) => event.preventDefault()}>
            {["Full Name", "Email Address", "Phone Number"].map((label, index) => (
              <label className="block text-sm font-bold uppercase tracking-[0.08em] text-ink" key={label}>{label}<input className="mt-3 w-full rounded-lg border border-line bg-mist/45 px-5 py-4 text-lg font-normal normal-case tracking-normal outline-none transition focus:border-sage focus:bg-white focus:ring-4 focus:ring-sage/15" placeholder={index === 0 ? "Enter your name" : index === 1 ? "your@email.com" : "+91 98765 43210"} /></label>
            ))}
            <label className="block text-sm font-bold uppercase tracking-[0.08em] text-ink">Service Interest<select className="mt-3 w-full rounded-lg border border-line bg-mist/45 px-5 py-4 text-lg font-normal normal-case tracking-normal outline-none transition focus:border-sage focus:bg-white focus:ring-4 focus:ring-sage/15"><option>Select a service</option><option>Personal Loan</option><option>Business Loan</option><option>Insurance</option></select></label>
            <label className="block text-sm font-bold uppercase tracking-[0.08em] text-ink">Message<textarea className="mt-3 min-h-[150px] w-full rounded-lg border border-line bg-mist/45 px-5 py-4 text-lg font-normal normal-case tracking-normal outline-none transition focus:border-sage focus:bg-white focus:ring-4 focus:ring-sage/15" placeholder="Tell us about your requirements..." /></label>
            <button className="w-full rounded-lg bg-ink py-4 text-lg font-extrabold text-white transition active:scale-[0.99] hover:-translate-y-0.5 hover:bg-sage hover:shadow-soft" type="submit">Request a Callback</button>
          </form>
        </div>
      </section>
      <footer className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr] lg:px-12">
          <div>
            <Logo footer onClick={() => scrollToSection("top")} />
            <p className="mt-8 max-w-sm text-lg leading-8 text-slate-100">Your trusted partner for transparent, efficient financial solutions. Certified DSA with access to multiple lenders.</p>
            <div className="mt-6 flex flex-wrap gap-4">{["Urban Money", "First Adviser Finance", "Finance Budha"].map((p) => <span className="rounded-md bg-white/10 px-4 py-2 font-bold" key={p}>{p}</span>)}</div>
          </div>
          {[["Products", "Personal Loan", "Credit Cards", "Business Loan", "Home Loan"], ["Services", "Credit Score Check", "EMI Calculator", "Loan Eligibility", "Balance Transfer"], ["Company", "About Us", "Contact", "Careers", "Blog"]].map(([title, ...footerLinks]) => (
            <div className="flex flex-col gap-5" key={title}>
              <h3 className="text-xl font-extrabold">{title}</h3>
              {footerLinks.map((link) => {
                const target = title === "Products" ? "products" : title === "Services" ? "services" : link === "About Us" ? "about" : link === "Contact" ? "contact" : "top";
                return <button className="text-left text-lg text-slate-100 transition hover:translate-x-1 hover:text-white" onClick={() => scrollToSection(target)} type="button" key={link}>{link}</button>;
              })}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 flex max-w-[1500px] flex-col gap-5 border-t border-white/10 px-5 pt-10 text-lg text-slate-200 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
          <p>(c) 2024 Funds24. All rights reserved.</p>
          <div className="flex flex-wrap gap-8"><button onClick={() => scrollToSection("top")} type="button">Privacy Policy</button><button onClick={() => scrollToSection("top")} type="button">Terms of Service</button><button onClick={() => scrollToSection("top")} type="button">Disclaimer</button></div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tools />
        <Services />
        <About />
        <MissionPrinciples />
        <StrengthsWhy />
        <Testimonials />
        <ContactFooter />
      </main>
    </>
  );
}
