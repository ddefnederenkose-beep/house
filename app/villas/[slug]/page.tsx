import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import InquiryForm from "@/components/InquiryForm";
import { villas, getVilla, getVillaImages } from "@/lib/villas";

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/villas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) return {};
  return {
    title: villa.name,
    description: villa.tagline,
  };
}

export default async function VillaPage({
  params,
}: PageProps<"/villas/[slug]">) {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) notFound();

  const images = getVillaImages(villa.slug);

  return (
    <article>
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-olive-dark">
          {villa.collection} &middot; {villa.location}
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          {villa.name}
        </h1>
        <p className="mt-2 max-w-xl text-ink-soft">{villa.tagline}</p>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-6">
        <Gallery images={images} villaName={villa.name} />
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-stone bg-white/60 p-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-stone-dark">Guests</dt>
              <dd className="mt-1 font-display text-xl text-ink">
                {villa.guests}
              </dd>
            </div>
            <div>
              <dt className="text-stone-dark">Bedrooms</dt>
              <dd className="mt-1 font-display text-xl text-ink">
                {villa.bedrooms}
              </dd>
            </div>
            <div>
              <dt className="text-stone-dark">Bathrooms</dt>
              <dd className="mt-1 font-display text-xl text-ink">
                {villa.baths}
              </dd>
            </div>
            <div>
              <dt className="text-stone-dark">Size</dt>
              <dd className="mt-1 font-display text-xl text-ink">
                {villa.sizeSqm} m&sup2;
              </dd>
            </div>
          </dl>

          <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft">
            {villa.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">Bedrooms</h2>
            <ul className="mt-4 space-y-3">
              {villa.bedroomBreakdown.map((room) => (
                <li
                  key={room.title}
                  className="flex items-baseline justify-between gap-4 border-b border-stone pb-3 text-sm"
                >
                  <span className="font-medium text-ink">{room.title}</span>
                  <span className="text-ink-soft">{room.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">Amenities</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
              {villa.amenities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">The area</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {villa.area}
            </p>
          </div>

          {villa.registrationNumber ? (
            <p className="mt-12 text-xs text-stone-dark">
              Registration no. {villa.registrationNumber}
            </p>
          ) : null}
        </div>

        <div>
          <div
            id="inquire"
            className="sticky top-24 rounded-2xl border border-stone bg-white/60 p-6"
          >
            <h2 className="font-display text-2xl text-ink">
              Send a booking inquiry
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              No payment required. We&apos;ll confirm availability and reply
              within 24 hours.
            </p>
            <div className="mt-6">
              <InquiryForm villaSlug={villa.slug} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
