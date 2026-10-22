"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/data";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight text-fg">
          alan<span className="text-accent">.</span>langelan
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.cv}
            download
            className="hidden items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <Download size={15} aria-hidden /> CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg hover:bg-soft md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-fg hover:bg-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                download
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-lg px-2 py-3 text-base text-accent hover:bg-soft"
              >
                <Download size={16} aria-hidden /> Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
