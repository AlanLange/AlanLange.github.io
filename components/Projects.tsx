import { Lock } from "lucide-react";
import { featured, projects, type Project } from "@/lib/data";
import Gallery from "./Gallery";
import Reveal from "./Reveal";
import { ArchitectureDiagram, PatternsDiagram, PipelineDiagram } from "./Diagrams";
import { ExternalLink, SectionHeading, Tag } from "./ui";

function Visual({ p }: { p: Project }) {
  if (p.shots?.length) return <Gallery shots={p.shots} name={p.name} />;
  if (p.visual === "architecture") return <ArchitectureDiagram />;
  if (p.visual === "pipeline") return <PipelineDiagram />;
  if (p.visual === "patterns") return <PatternsDiagram />;
  return null;
}

function Links({ p }: { p: Project }) {
  if (!p.links.length && !p.note) return null;
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {p.links.map((l) => (
        <ExternalLink key={l.href} href={l.href}>
          {l.label}
        </ExternalLink>
      ))}
      {p.note && (
        <p className="inline-flex items-start gap-1.5 text-xs leading-relaxed text-subtle">
          <Lock size={13} aria-hidden className="mt-0.5 shrink-0" /> {p.note}
        </p>
      )}
    </div>
  );
}

function Featured() {
  const p = featured;
  return (
    <Reveal as="article" className="rounded-3xl border border-line bg-elev p-5 sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-fg">Proyecto destacado</span>
            <span className="text-xs text-subtle">
              {p.context} · {p.period}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{p.name}</h3>
          <p className="mt-1 text-muted">{p.tagline}</p>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">Problema: </span>
            {p.problem}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

          {p.stats && (
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {p.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-soft/60 px-3 py-3">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-mono text-2xl font-semibold text-fg">{s.value}</span>
                    <span className="text-xs text-subtle">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <h4 className="mt-7 text-sm font-medium text-fg">Mis aportes</h4>
          <ul className="mt-3 space-y-2.5">
            {p.contributions?.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <Visual p={p} />
          <div>
            <h4 className="text-sm font-medium text-fg">Funcionalidades del sistema</h4>
            <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="text-sm leading-snug text-muted">
                  <span aria-hidden className="mr-1.5 text-accent">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {p.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        <Links p={p} />
      </div>
    </Reveal>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <Reveal as="article" className="flex flex-col rounded-2xl border border-line bg-elev p-5 sm:p-7">
      <Visual p={p} />
      <div className="mt-6 flex flex-1 flex-col">
        <p className="text-xs text-subtle">{p.context}</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-fg">{p.name}</h3>
        <p className="mt-1 text-sm text-muted">{p.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          <span className="font-medium text-fg">Problema: </span>
          {p.problem}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-4 space-y-1.5">
          {p.features.map((f) => (
            <li key={f} className="text-sm text-muted">
              <span aria-hidden className="mr-1.5 text-accent">›</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
            {p.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
          <Links p={p} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section aria-labelledby="proyectos" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="proyectos"
          kicker="Proyectos"
          title="Software construido y entregado"
          intro="Sistemas para negocios reales, trabajos en equipo y proyectos académicos. En cada uno indico el contexto y qué parte desarrollé."
        />
        <Featured />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
