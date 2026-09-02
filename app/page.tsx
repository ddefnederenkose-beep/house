import VillaCard from "@/components/VillaCard";
import { villas, getVillaImages } from "@/lib/villas";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-olive-dark">
          Mani Peninsula, Greece
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Three stone villas, one olive grove, a private stretch of the
          Messinian Gulf
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
          Villa Stone, Villa Olive, and Villa Elea share a quiet complex above
          Agios Nikolaos — each with its own bedrooms and terrace, all with
          access to a shared pool. Browse a villa below and send us an
          inquiry; we confirm every booking by hand.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {villas.map((villa) => {
          const images = getVillaImages(villa.slug);
          return (
            <VillaCard key={villa.slug} villa={villa} cover={images[0]} />
          );
        })}
      </section>

      <section className="border-t border-stone/80 bg-cream-deep">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            No live calendar, no instant booking
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft">
            Send an inquiry with your dates and party size from any villa
            page. We reply within 24 hours to confirm availability and work
            out the details directly with you.
          </p>
        </div>
      </section>
    </div>
  );
}
