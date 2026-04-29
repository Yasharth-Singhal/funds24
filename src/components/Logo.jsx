export function Logo({ footer = false, onClick }) {
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
