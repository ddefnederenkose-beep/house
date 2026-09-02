import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone/80 bg-cream/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
        >
          Riglia <span className="italic text-olive-dark">Villas</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-ink-soft sm:flex">
          <Link href="/villas/villa-stone" className="hover:text-ink">
            Villa Stone
          </Link>
          <Link href="/villas/villa-olive" className="hover:text-ink">
            Villa Olive
          </Link>
          <Link href="/villas/villa-elea" className="hover:text-ink">
            Villa Elea
          </Link>
        </nav>
      </div>
    </header>
  );
}
