"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Shot } from "@/lib/data";

export default function Gallery({ shots, name }: { shots: Shot[]; name: string }) {
  const [i, setI] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const go = useCallback((d: number) => setI((v) => (v + d + shots.length) % shots.length), [shots.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!el.open) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const shot = shots[i];

  return (
    <div>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="group relative block w-full overflow-hidden rounded-xl border border-line bg-soft"
        aria-label={`Ampliar captura: ${shot.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático: imágenes ya optimizadas a WebP */}
        <img
          src={shot.src}
          alt={shot.alt}
          width={1600}
          height={770}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand size={13} aria-hidden /> Ampliar
        </span>
      </button>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label={`Capturas de ${name}`}>
        {shots.map((s, n) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Ver captura ${n + 1}: ${s.alt}`}
            aria-pressed={n === i}
            className={`shrink-0 overflow-hidden rounded-md border transition-opacity ${
              n === i ? "border-accent opacity-100" : "border-line opacity-60 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt="" width={96} height={54} loading="lazy" className="h-12 w-20 object-cover object-top" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-label={`Captura de ${name}`}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[92vh] w-[min(1200px,94vw)] rounded-xl border border-line bg-elev p-0 text-fg backdrop:bg-black/75"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <p className="text-sm text-muted">
            {shot.alt} <span className="text-subtle">· {i + 1}/{shots.length}</span>
          </p>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => go(-1)} aria-label="Captura anterior" className="rounded-full p-2 hover:bg-soft">
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Captura siguiente" className="rounded-full p-2 hover:bg-soft">
              <ChevronRight size={18} aria-hidden />
            </button>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar" className="rounded-full p-2 hover:bg-soft">
              <X size={18} aria-hidden />
            </button>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={shot.alt} className="max-h-[80vh] w-full object-contain" />
      </dialog>
    </div>
  );
}
