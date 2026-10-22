import { Briefcase, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { contact, education, experience, site, skills } from "@/lib/data";
import CopyEmail from "./CopyEmail";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { SectionHeading, Tag } from "./ui";

export function About() {
  const facts = [
    { icon: GraduationCap, label: "Formación", value: "Analista Programador · ORT Uruguay" },
    { icon: Briefcase, label: "Busco", value: "Full Stack, Backend o Analista Programador Junior" },
    { icon: MapPin, label: "Ubicación", value: contact.location },
  ];
  return (
    <section aria-labelledby="sobre-mi" className="border-y border-line bg-soft/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SectionHeading id="sobre-mi" kicker="Sobre mí" title="De la necesidad del negocio al software en producción" />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Soy <strong className="font-medium text-fg">Analista Programador por la Universidad ORT Uruguay</strong> y sigo
              la carrera de Analista en Tecnologías de la Información. Mi foco es el desarrollo full stack: APIs en Java y
              Spring Boot, interfaces en Next.js y React, y bases de datos relacionales.
            </p>
            <p>
              Trabajé con clientes reales, como desarrollador freelance y en el equipo que construyó el sistema de gestión
              de 23 Barber Studio. Eso me enseñó a relevar requerimientos, priorizar entregas y sostener el software
              después de publicarlo.
            </p>
            <p>
              También trabajé en administración, ventas y marketing digital. Ahí automaticé tareas con IA generativa y
              produje contenido por código. Me interesa aplicar IA, automatización y prácticas de DevOps para resolver
              problemas concretos, no para sumar herramientas.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <ul className="space-y-3 lg:mt-24">
            {facts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4 rounded-xl border border-line bg-elev p-4">
                <Icon size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-subtle">{label}</p>
                  <p className="text-sm font-medium text-fg">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="experiencia" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="experiencia" kicker="Experiencia" title="Dónde apliqué lo que sé" />
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {experience.map((j) => (
            <Reveal as="li" key={j.role + j.org} className="relative">
              <span aria-hidden className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
              <div className="rounded-2xl border border-line bg-elev p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-fg">{j.role}</h3>
                  <p className="font-mono text-xs text-subtle">{j.period}</p>
                </div>
                <p className="text-sm text-accent">{j.org}</p>
                <p className="mt-3 text-sm text-muted">{j.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Herramientas">
                  {j.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section aria-labelledby="stack" className="border-y border-line bg-soft/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="stack"
          kicker="Stack"
          title="Tecnologías y habilidades"
          intro="Las que usé en proyectos reales o académicos. Las marcadas con borde punteado las estoy aprendiendo."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <Reveal key={g.title} className="rounded-2xl border border-line bg-elev p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <Tag muted={s.learning}>
                      {s.name}
                      {s.learning && <span className="sr-only"> (en formación)</span>}
                    </Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-subtle">
          <span className="inline-block h-3 w-6 rounded border border-dashed border-line" aria-hidden /> En formación
        </p>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section aria-labelledby="formacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="formacion" kicker="Formación" title={education.institution} />
        <Reveal className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-line bg-elev p-6">
            <p className="text-xs text-subtle">{education.status}</p>
            <h3 className="mt-1 text-xl font-semibold text-fg">{education.career}</h3>
            <ul className="mt-5 space-y-3">
              {education.degrees.map((d) => (
                <li key={d.name} className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent-soft p-4">
                  <GraduationCap size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-fg">{d.name}</p>
                    <p className="text-sm text-muted">{d.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-elev p-6">
            <h3 className="text-sm font-medium text-fg">Áreas de la carrera aplicadas en mis proyectos</h3>
            <ul className="mt-4 space-y-2.5">
              {education.coursework.map((c) => (
                <li key={c} className="text-sm text-muted">
                  <span aria-hidden className="mr-1.5 text-accent">›</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const linkCls =
    "flex items-center gap-4 rounded-2xl border border-line bg-elev p-5 transition-colors hover:border-accent";
  return (
    <section aria-labelledby="contacto" className="border-t border-line bg-soft/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="contacto"
          kicker="Contacto"
          title="Hablemos"
          intro="Busco mi próxima posición como desarrollador Full Stack, Backend o Analista Programador Junior. Respondo por email o LinkedIn."
        />
        <Reveal className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-accent/40 bg-accent-soft p-5 sm:flex-row sm:items-center md:col-span-2">
            <div className="flex items-center gap-4">
              <Mail size={22} aria-hidden className="shrink-0 text-accent" />
              <div className="min-w-0">
                <p className="text-xs text-subtle">Email</p>
                <a href={`mailto:${contact.email}`} className="break-all text-base font-medium text-fg hover:text-accent sm:text-lg">
                  {contact.email}
                </a>
              </div>
            </div>
            <CopyEmail email={contact.email} />
          </div>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <LinkedinIcon size={22} className="shrink-0 text-accent" />
            <div>
              <p className="text-xs text-subtle">LinkedIn</p>
              <p className="font-medium text-fg">linkedin.com/in/alanlangelan</p>
            </div>
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <GithubIcon size={22} className="shrink-0 text-accent" />
            <div>
              <p className="text-xs text-subtle">GitHub</p>
              <p className="font-medium text-fg">github.com/AlanLange</p>
            </div>
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>
          <a href={site.cv} download className={`${linkCls} md:col-span-2`}>
            <Download size={22} aria-hidden className="shrink-0 text-accent" />
            <div>
              <p className="text-xs text-subtle">Currículum</p>
              <p className="font-medium text-fg">Descargar CV en PDF</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Alan Langelan · Montevideo, Uruguay</p>
        <p>Hecho con Next.js, TypeScript y Tailwind CSS · desplegado con GitHub Actions</p>
      </div>
    </footer>
  );
}
