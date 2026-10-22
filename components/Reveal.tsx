"use client";

import { useEffect, useRef } from "react";

type Props = { children: React.ReactNode; className?: string; as?: "div" | "section" | "li" | "article" };

/** Aparición sutil al entrar en pantalla. Respeta prefers-reduced-motion vía CSS. */
export default function Reveal({ children, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as React.Ref<never>} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
