// Contenido del portafolio. Debe coincidir con el CV (CV_Analista_Programador.pdf).

export const site = {
  url: "https://alanlange.github.io",
  name: "Alan Langelan",
  title: "Alan Langelan — Analista Programador · Full Stack Developer",
  description:
    "Analista Programador (Universidad ORT Uruguay) y desarrollador full stack junior. Java, Spring Boot, Next.js, React y TypeScript, con prácticas de DevOps e IA generativa aplicadas a proyectos reales.",
  cv: "/CV_Analista_Programador.pdf",
};

export const contact = {
  email: "alanlangelan.2016@gmail.com",
  linkedin: "https://www.linkedin.com/in/alanlangelan",
  github: "https://github.com/AlanLange",
  location: "Montevideo, Uruguay",
};

export type Shot = { src: string; alt: string };

export type Project = {
  id: string;
  name: string;
  tagline: string;
  context: string;
  period: string;
  problem: string;
  description: string;
  features: string[];
  contributions?: string[];
  stack: string[];
  stats?: { value: string; label: string }[];
  links: { label: string; href: string }[];
  note?: string;
  shots?: Shot[];
  visual?: "architecture" | "pipeline" | "patterns";
};

export const featured: Project = {
  id: "23-barber-studio",
  name: "23 Barber Studio",
  tagline: "Sistema integral de gestión para una barbería real",
  context: "Proyecto Integrador · Universidad ORT · equipo de 3",
  period: "abr. 2026 – sep. 2026",
  problem:
    "Centralizar en una sola plataforma la operación de la barbería: reservas, agenda, clientes, caja, stock, ventas y comunicación comercial.",
  description:
    "Plataforma full stack con API REST en Spring Boot y frontend en Next.js. Combina la gestión administrativa con reservas online en tiempo real, verificación por SMS y campañas comerciales con segmentación de clientes asistida por IA.",
  features: [
    "Reserva online con disponibilidad en tiempo real (WebSockets)",
    "Autenticación JWT, roles y permisos, 2FA por SMS",
    "Agenda de turnos, reasignaciones y control de asistencia",
    "Clientes con historial y mensualidades",
    "Caja, ventas manuales y control de stock con alertas",
    "Dashboard y reportes de balance, ingresos y demanda",
    "Campañas SMS con segmentación asistida por IA (Gemini)",
    "Auditoría de operaciones",
  ],
  contributions: [
    "Reserva pública online con disponibilidad en tiempo real mediante WebSockets e integración del envío de SMS (Twilio) en el flujo de reserva.",
    "Módulos de productos y stock con alertas de bajo inventario, ventas manuales y reportes de balance, ingresos por período y demanda, con pruebas unitarias en JUnit y Mockito.",
    "Frontend en Next.js: gestión de servicios y usuarios, landing y configuración del despliegue en Netlify.",
    "Mantenimiento de colecciones de Postman para probar la API.",
  ],
  stack: [
    "Java 21",
    "Spring Boot 3",
    "Spring Security",
    "JPA",
    "SQL Server",
    "WebSockets",
    "Twilio",
    "Gemini API",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Netlify",
  ],
  stats: [
    { value: "100", label: "endpoints REST" },
    { value: "560+", label: "casos de prueba" },
    { value: "34", label: "entidades de dominio" },
  ],
  links: [],
  note: "Código privado del cliente. Las cifras corresponden al backend completo del equipo.",
  visual: "architecture",
};

export const projects: Project[] = [
  {
    id: "gestion-pacientes",
    name: "GestiónPacientes",
    tagline: "Software de gestión para profesionales de la salud",
    context: "Freelance · en producción",
    period: "Freelance",
    problem:
      "Ordenar la agenda de una consulta y reducir inasistencias con recordatorios automáticos.",
    description:
      "Plataforma web publicada para agendar citas, llevar el registro e historial de cada paciente, enviar recordatorios y controlar asistencias y cancelaciones, con un panel de estadísticas.",
    features: [
      "Autenticación segura con JWT",
      "Agenda de citas y vista de próximas citas",
      "Historial de citas y asistencias por paciente",
      "Recordatorios automáticos",
      "Panel de estadísticas",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    links: [{ label: "Ver sitio", href: "https://www.gestionpacientes.xyz/" }],
    shots: [
      { src: "/projects/gestion-pacientes/landing-gp.webp", alt: "Landing de GestiónPacientes" },
      { src: "/projects/gestion-pacientes/historial.webp", alt: "Historial de citas de un paciente con asistencias" },
      { src: "/projects/gestion-pacientes/proximas-citas.webp", alt: "Vista semanal de próximas citas" },
      { src: "/projects/gestion-pacientes/login.webp", alt: "Pantalla de inicio de sesión" },
    ],
  },
  {
    id: "pipeline-devops",
    name: "Pipeline CI/CD con GitHub Actions",
    tagline: "Build, seguridad y publicación de imágenes Docker",
    context: "Laboratorio DevOps · 2026",
    period: "2026",
    problem:
      "Automatizar que cada cambio se construya, se analice en busca de vulnerabilidades y secretos y se publique solo si pasa los controles.",
    description:
      "Pipeline de cuatro etapas encadenadas: construye la imagen, la escanea con Trivy (falla ante vulnerabilidades críticas o altas), detecta secretos con Gitleaks y publica en Docker Hub con etiquetas por commit.",
    features: [
      "Build de imagen Docker con etiqueta por SHA",
      "Escaneo de vulnerabilidades con Trivy como quality gate",
      "Detección de secretos con Gitleaks",
      "Publicación en Docker Hub con credenciales en secrets",
      "Reporte de build como artefacto",
    ],
    stack: ["GitHub Actions", "Docker", "Trivy", "Gitleaks", "Docker Hub", "Nginx"],
    links: [{ label: "Repositorio", href: "https://github.com/AlanLange/lab-github-actions-t02" }],
    visual: "pipeline",
  },
  {
    id: "barberia-fullstack",
    name: "Barbería Fullstack",
    tagline: "SaaS de gestión de barberías con planes de suscripción",
    context: "Universidad ORT · equipo de 2 · 2025",
    period: "2025",
    problem: "Permitir que una barbería administre sus servicios y categorías según el plan contratado.",
    description:
      "API REST con Node.js, Express y MongoDB con autenticación JWT, validaciones Joi, bcrypt y rate limiting, y frontend en React con Redux Toolkit, Tailwind CSS e internacionalización.",
    features: [
      "Registro e inicio de sesión con JWT",
      "Planes Plus y Premium con reglas de negocio",
      "CRUD de servicios y categorías",
      "Dashboard de uso",
      "Interfaz en español e inglés (i18n)",
    ],
    stack: ["React", "Redux Toolkit", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel"],
    links: [
      { label: "Demo", href: "https://barbershopdfs.vercel.app/" },
      { label: "Frontend", href: "https://github.com/AlanLange/Frontend-DFS" },
      { label: "API", href: "https://github.com/AlanLange/Obligatorio-Desarollo-FullStack" },
    ],
    shots: [
      { src: "/projects/barberia-fullstack/landing.webp", alt: "Landing de la plataforma de barberías" },
      { src: "/projects/barberia-fullstack/dashboard.webp", alt: "Dashboard con métricas de uso" },
      { src: "/projects/barberia-fullstack/servicios.webp", alt: "Listado de servicios" },
      { src: "/projects/barberia-fullstack/cambiar-plan.webp", alt: "Cambio de plan de suscripción" },
    ],
  },
  {
    id: "sistema-peajes",
    name: "Sistema de Peajes",
    tagline: "Diseño orientado a objetos y tiempo real",
    context: "Universidad ORT · Diseño de Aplicaciones · 2025",
    period: "2025",
    problem: "Modelar tránsitos, tarifas, bonificaciones y saldos de propietarios con un diseño extensible.",
    description:
      "Aplicación en Java y Spring Boot con roles de propietario y administrador. La interfaz se actualiza sin recargar mediante Server-Sent Events conectados al patrón Observer.",
    features: [
      "Tarifas por categoría y bonificaciones (Strategy)",
      "Estados del propietario (State)",
      "Fachada única de acceso al dominio (Facade, Singleton)",
      "Notificaciones en tiempo real con SSE (Observer)",
    ],
    stack: ["Java", "Spring Boot", "SSE", "MVC", "Patrones de diseño"],
    links: [{ label: "Repositorio", href: "https://github.com/AlanLange/sistema-peajes" }],
    visual: "patterns",
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: "Desarrollador de Software Freelance",
    org: "Aplicaciones web a medida",
    period: "feb. 2023 – actualidad",
    summary: "Desarrollo de soluciones web de punta a punta para negocios.",
    bullets: [
      "Relevamiento con el cliente, definición de requerimientos, implementación, despliegue y mantenimiento.",
      "GestiónPacientes: plataforma en producción para profesionales de la salud, con agenda, historial, recordatorios automáticos y estadísticas.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    role: "Desarrollador Full Stack",
    org: "23 Barber Studio · Proyecto Integrador ORT",
    period: "abr. 2026 – sep. 2026",
    summary: "Sistema de gestión para una barbería real, desarrollado en un equipo de 3.",
    bullets: [
      "Reserva online en tiempo real con WebSockets e integración de SMS (Twilio).",
      "Módulos de stock, ventas manuales y reportes, con pruebas unitarias en JUnit y Mockito.",
      "Frontend en Next.js y despliegue en Netlify.",
    ],
    tags: ["Spring Boot", "Next.js", "SQL Server", "WebSockets"],
  },
  {
    role: "Administración, ventas y marketing digital",
    org: "Sofilú Car Center",
    period: "ene. 2026 – oct. 2026",
    summary: "Atención comercial, administración y marketing, con foco en automatizar con tecnología.",
    bullets: [
      "Atención y asesoramiento a clientes, presupuestos y seguimiento comercial.",
      "Campañas en Meta Ads con segmentación de públicos.",
      "Videos publicitarios generados por código con Remotion (React y TypeScript) y subtitulado automático con Whisper.",
      "Automatizaciones asistidas por IA para contenido, textos publicitarios y tareas administrativas.",
    ],
    tags: ["Meta Ads", "Remotion", "Whisper", "IA generativa"],
  },
];

export type SkillGroup = { title: string; items: { name: string; learning?: boolean }[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "HTML y CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "JPA / Hibernate" },
      { name: "Node.js y Express" },
      { name: "C# / .NET 8" },
      { name: "APIs REST" },
      { name: "WebSockets y SSE" },
    ],
  },
  {
    title: "Bases de datos",
    items: [{ name: "SQL Server" }, { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "SQL" }],
  },
  {
    title: "DevOps y CI/CD",
    items: [
      { name: "Docker y Compose" },
      { name: "GitHub Actions" },
      { name: "Pipelines CI/CD" },
      { name: "Trivy y Gitleaks" },
      { name: "Vercel, Netlify, GitHub Pages" },
      { name: "AWS", learning: true },
      { name: "Kubernetes", learning: true },
      { name: "Infraestructura como código", learning: true },
    ],
  },
  {
    title: "IA generativa",
    items: [
      { name: "Desarrollo asistido por IA (Claude Code)" },
      { name: "Agentes de IA y subagentes" },
      { name: "Prompt engineering" },
      { name: "Automatización con LLMs" },
      { name: "Modelos locales con Ollama" },
    ],
  },
  {
    title: "Herramientas y calidad",
    items: [
      { name: "Git y GitHub" },
      { name: "JUnit y Mockito" },
      { name: "Postman" },
      { name: "Scrum y Kanban" },
      { name: "Clean Architecture y SOLID" },
      { name: "Remotion y Whisper" },
    ],
  },
];

export const education = {
  institution: "Universidad ORT Uruguay",
  career: "Analista en Tecnologías de la Información",
  status: "Carrera en curso · 2024 – actualidad",
  degrees: [
    { name: "Analista Programador", detail: "Título intermedio · octubre 2026" },
    { name: "Programador Web", detail: "Título intermedio · 2025" },
  ],
  coursework: [
    "Desarrollo full stack",
    "Diseño de aplicaciones y patrones",
    "DevOps: CI/CD, contenedores, cloud, IaC y Kubernetes",
    "Proyecto Integrador con cliente real",
  ],
};
