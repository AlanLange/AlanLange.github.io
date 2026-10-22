import { ArrowUpRight } from "lucide-react";

export function SectionHeading({ id, kicker, title, intro }: { id: string; kicker: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{kicker}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function Tag({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11.5px] leading-5 ${
        muted ? "border-dashed border-line text-subtle" : "border-line bg-soft text-muted"
      }`}
    >
      {children}
    </span>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 rounded-full border border-line px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </a>
  );
}
