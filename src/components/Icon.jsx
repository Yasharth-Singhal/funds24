import { iconPaths } from "../utils/iconPaths";

export function Icon({ name, className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
