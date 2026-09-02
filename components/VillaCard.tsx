import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/lib/villas";

export default function VillaCard({
  villa,
  cover,
}: {
  villa: Villa;
  cover?: string;
}) {
  return (
    <Link
      href={`/villas/${villa.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white/60 ring-1 ring-stone transition hover:ring-olive/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        {cover ? (
          <Image
            src={cover}
            alt={villa.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-olive-dark">
          {villa.location}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink">{villa.name}</h3>
        <p className="mt-2 text-sm text-ink-soft">{villa.tagline}</p>
        <dl className="mt-5 flex gap-5 text-sm text-ink-soft">
          <div>
            <dt className="sr-only">Guests</dt>
            <dd>{villa.guests} guests</dd>
          </div>
          <div>
            <dt className="sr-only">Bedrooms</dt>
            <dd>{villa.bedrooms} bedrooms</dd>
          </div>
          <div>
            <dt className="sr-only">Baths</dt>
            <dd>{villa.baths} baths</dd>
          </div>
        </dl>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-olive-dark">
          View &amp; inquire
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
