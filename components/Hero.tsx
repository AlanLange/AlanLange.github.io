import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact, site } from "@/lib/data";

const focus = ["GenAI", "Automatización", "DevOps"];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/70 px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible para posiciones junior · Montevideo
          </p>

          <h1 id="hero-title" className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Alan Langelan
          </h1>
          <p className="mt-4 text-xl font-medium text-fg sm:text-2xl">
            Analista Programador <span className="text-subtle">·</span>{" "}
            <span className="text-accent">Full Stack Developer</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Desarrollo aplicaciones web de punta a punta con <strong className="font-medium text-fg">Java, Spring Boot y Next.js</strong>:
            APIs seguras, interfaces claras y procesos automatizados para negocios reales. Sumo prácticas de DevOps e IA
            generativa para entregar más rápido sin resignar calidad.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Áreas de foco">
            {focus.map((f) => (
              <li key={f} className="rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos <ArrowDown size={16} aria-hidden />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} aria-hidden /> Descargar CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (pestaña nueva)" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-soft hover:text-fg">
                <GithubIcon size={19} />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (pestaña nueva)" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-soft hover:text-fg">
                <LinkedinIcon size={19} />
              </a>
              <a href={`mailto:${contact.email}`} aria-label={`Enviar email a ${contact.email}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-soft hover:text-fg">
                <Mail size={19} aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="relative hidden rounded-2xl border border-line bg-elev/80 shadow-2xl shadow-black/10 backdrop-blur sm:block" aria-label="Resumen del perfil en formato código">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-subtle">perfil.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-muted">
        <code>
          <span className="text-subtle">{"// lo que construyo y con qué\n"}</span>
          <span className="text-accent">const</span> <span className="text-fg">alan</span> = {"{\n"}
          {"  "}titulo: <S>&quot;Analista Programador&quot;</S>,{"\n"}
          {"  "}universidad: <S>&quot;ORT Uruguay&quot;</S>,{"\n"}
          {"  "}backend: [<S>&quot;Java&quot;</S>, <S>&quot;Spring Boot&quot;</S>, <S>&quot;Node&quot;</S>],{"\n"}
          {"  "}frontend: [<S>&quot;Next.js&quot;</S>, <S>&quot;React&quot;</S>, <S>&quot;TS&quot;</S>],{"\n"}
          {"  "}datos: [<S>&quot;SQL Server&quot;</S>, <S>&quot;PostgreSQL&quot;</S>],{"\n"}
          {"  "}devops: [<S>&quot;Docker&quot;</S>, <S>&quot;GitHub Actions&quot;</S>],{"\n"}
          {"  "}ia: [<S>&quot;LLMs&quot;</S>, <S>&quot;Agentes&quot;</S>, <S>&quot;Automatización&quot;</S>],{"\n"}
          {"  "}busco: <S>&quot;Full Stack / Backend Junior&quot;</S>,{"\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
}

function S({ children }: { children: React.ReactNode }) {
  return <span className="text-fg">{children}</span>;
}
