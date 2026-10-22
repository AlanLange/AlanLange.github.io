// Diagramas construidos a partir del código real de cada proyecto (no son capturas simuladas).

function Box({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? "border-accent/40 bg-accent-soft" : "border-line bg-elev"}`}>
      <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${accent ? "text-accent" : "text-subtle"}`}>{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-fg">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1.5 font-mono text-[11px] text-subtle" aria-hidden>
      <span className="h-px w-6 bg-line" />
      {label}
      <span className="h-px w-6 bg-line" />
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-soft/60 p-4 sm:p-6">
      <figcaption className="mb-4 text-xs text-subtle">Arquitectura de 23 Barber Studio</figcaption>
      <div className="grid gap-1">
        <div className="grid gap-3 sm:grid-cols-2">
          <Box title="Clientes" items={["Reserva online pública", "Login de cliente con 2FA"]} />
          <Box title="Panel interno" items={["Agenda, caja, stock, ventas", "Dashboard, reportes, campañas"]} />
        </div>
        <Arrow label="Next.js · REST + WebSocket" />
        <Box
          accent
          title="API · Spring Boot"
          items={["Controllers → Facades → Services", "Spring Security · JWT · roles · 2FA", "Schedulers y auditoría de operaciones"]}
        />
        <Arrow label="JPA · servicios externos" />
        <div className="grid gap-3 sm:grid-cols-3">
          <Box title="Datos" items={["SQL Server"]} />
          <Box title="Mensajería" items={["Twilio SMS / Verify", "Email"]} />
          <Box title="IA" items={["Gemini 2.5 Flash", "Segmentación de clientes"]} />
        </div>
      </div>
    </figure>
  );
}

const stages = [
  { n: "01", title: "Build", detail: "Imagen Docker etiquetada por SHA" },
  { n: "02", title: "Scan", detail: "Trivy · falla con CVE críticas/altas" },
  { n: "03", title: "Quality gate", detail: "Gitleaks · detección de secretos" },
  { n: "04", title: "Push", detail: "Docker Hub · latest + SHA" },
];

export function PipelineDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-soft/60 p-4 sm:p-6">
      <figcaption className="mb-4 flex items-center justify-between text-xs text-subtle">
        <span>.github/workflows/pipeline.yml</span>
        <span className="font-mono">on: push · pull_request</span>
      </figcaption>
      <ol className="grid gap-3 sm:grid-cols-2">
        {stages.map((s) => (
          <li key={s.n} className="rounded-xl border border-line bg-elev p-4">
            <p className="font-mono text-[11px] text-accent">{s.n}</p>
            <p className="mt-1 font-medium text-fg">{s.title}</p>
            <p className="mt-1 text-sm text-muted">{s.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

const patterns = [
  { name: "Facade", use: "Interfaz única hacia el dominio" },
  { name: "Strategy", use: "Bonificaciones intercambiables" },
  { name: "State", use: "Estados del propietario" },
  { name: "Observer + SSE", use: "Actualización en tiempo real" },
];

export function PatternsDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-soft/60 p-4 sm:p-6">
      <figcaption className="mb-4 text-xs text-subtle">Patrones de diseño aplicados</figcaption>
      <ul className="grid gap-3 sm:grid-cols-2">
        {patterns.map((p) => (
          <li key={p.name} className="rounded-xl border border-line bg-elev p-4">
            <p className="font-mono text-sm text-accent">{p.name}</p>
            <p className="mt-1 text-sm text-muted">{p.use}</p>
          </li>
        ))}
      </ul>
    </figure>
  );
}
