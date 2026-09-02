"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery({
  images,
  villaName,
}: {
  images: string[];
  villaName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const close = () => setOpenIndex(null);
  const step = (delta: number) =>
    setOpenIndex((i) =>
      i === null ? null : (i + delta + images.length) % images.length,
    );

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`relative overflow-hidden rounded-xl bg-stone ring-1 ring-stone transition hover:opacity-90 ${
              i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]" : "aspect-square"
            }`}
          >
            <Image
              src={src}
              alt={`${villaName} photo ${i + 1}`}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-5 top-5 text-3xl leading-none text-cream/80 hover:text-cream"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 text-4xl text-cream/70 hover:text-cream sm:left-6"
          >
            &#8249;
          </button>
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={`${villaName} photo ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 text-4xl text-cream/70 hover:text-cream sm:right-6"
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </>
  );
}
