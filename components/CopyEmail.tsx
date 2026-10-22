"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("ok");
    } catch {
      setState("error");
    }
    setTimeout(() => setState("idle"), 2200);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
      >
        {state === "ok" ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
        {state === "ok" ? "Copiado" : "Copiar email"}
      </button>
      <span role="status" aria-live="polite" className="text-xs text-subtle">
        {state === "error" ? "No se pudo copiar; seleccioná el texto" : ""}
      </span>
    </div>
  );
}
