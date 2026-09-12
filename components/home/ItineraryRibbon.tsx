import Image from "next/image";
import Link from "next/link";
import { itinerary } from "@/lib/content";
import { blurSea } from "@/lib/site";

export function ItineraryRibbon() {
  return (
    <section className="bg-navy-mid">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
              The day, in water
            </p>
            <h2 className="font-display mt-3 text-4xl text-salt sm:text-5xl">
              A coast of names.
            </h2>
          </div>
          <Link href="/milos" className="ghost-btn hidden sm:inline-flex">
            Milos notes
          </Link>
        </div>
      </div>
      <div className="snap-x-luxe flex gap-4 overflow-x-auto px-5 pb-16 sm:px-8">
        {itinerary.map((stop, index) => (
          <article
            key={stop.id}
            className="snap-card relative h-[28rem] w-[78vw] shrink-0 overflow-hidden border border-gold/10 sm:w-[22rem]"
          >
            <Image
              src={stop.image}
              alt={stop.name}
              fill
              className="object-cover"
              sizes="360px"
              placeholder="blur"
              blurDataURL={blurSea}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                {String(index + 1).padStart(2, "0")} · {stop.kind}
              </p>
              <h3 className="font-display mt-2 text-3xl text-salt">
                {stop.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-salt/75">
                {stop.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
