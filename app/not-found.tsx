import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-4 px-5">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold text-fg">Esta página no existe</h1>
      <Link href="/" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg">
        Volver al inicio
      </Link>
    </main>
  );
}
