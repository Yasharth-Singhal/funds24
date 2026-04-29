export function Heading({ title, subtitle, line = false }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-4xl text-center">
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {line && <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-sage" />}
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{subtitle}</p>
    </div>
  );
}
