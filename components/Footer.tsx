export default function Footer() {
  return (
    <footer className="border-t border-stone/80 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-soft">
        <p className="font-display text-lg text-ink">Riglia Villas</p>
        <p className="mt-2 max-w-md">
          Three stone-built villas among the olive trees of the Mani
          Peninsula, Greece. Every booking is confirmed by hand — send an
          inquiry and we&apos;ll get back to you within 24 hours.
        </p>
        <p className="mt-6 text-xs text-stone-dark">
          &copy; {new Date().getFullYear()} Riglia Villas. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
