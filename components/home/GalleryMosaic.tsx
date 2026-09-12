"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/lib/content";
import { blurSea } from "@/lib/site";
import { Lightbox } from "@/components/ui/Lightbox";

const preview = gallery.slice(0, 7);

export function GalleryMosaic() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
          Light on water
        </p>
        <h2 className="font-display mt-4 text-4xl text-salt sm:text-5xl">
          A first look.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-3">
          {preview.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden ${
                index === 0
                  ? "col-span-2 row-span-2 min-h-[16rem] md:min-h-[28rem]"
                  : "min-h-[11rem] md:min-h-[13rem]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? "60vw" : "30vw"}
                placeholder="blur"
                blurDataURL={blurSea}
              />
              <span className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/20" />
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        src={active === null ? null : preview[active].src}
        alt={active === null ? "" : preview[active].alt}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
