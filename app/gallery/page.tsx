"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { gallery } from "@/lib/content";
import { blurSea } from "@/lib/site";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="bg-navy pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
          Gallery
        </p>
        <h1 className="font-display mt-4 text-5xl text-salt sm:text-7xl">
          Sample light.
        </h1>
        <p className="mt-5 max-w-xl text-sm text-salt/65">
          Watermark-free stand-in photographs. Replace with Seven Seas Sailing
          boat and operations images before launch.
        </p>
      </div>
      <div className="columns-1 gap-3 px-5 pb-24 sm:columns-2 sm:px-8 lg:columns-3">
        {gallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="relative mb-3 block w-full overflow-hidden"
            onClick={() => setActive(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1500}
              className="h-auto w-full object-cover"
              placeholder="blur"
              blurDataURL={blurSea}
            />
            <span className="sr-only">{item.caption}</span>
          </button>
        ))}
      </div>
      <Lightbox
        src={active === null ? null : gallery[active].src}
        alt={active === null ? "" : gallery[active].alt}
        onClose={() => setActive(null)}
      />
    </div>
  );
}
