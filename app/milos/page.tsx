import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { itinerary } from "@/lib/content";
import { blurSea } from "@/lib/site";

export const metadata: Metadata = {
  title: "Milos Itinerary — Kleftiko, Sykia, Polyaigos",
  description:
    "Itinerary highlights for a Milos catamaran day: Klima, Kalogries, Sykia, Kleftiko, Polyaigos, Arkoudes, and the sulphur mines.",
};

export default function MilosPage() {
  return (
    <>
      <PageIntro
        eyebrow="The island"
        title="Milos, from the water."
        lede="The best of this island is not on the road. Exact order follows wind and swell. Confirm the day’s plan with the owner before you treat this as a promise."
        image="/images/kleftiko-cliffs.jpg"
        imageAlt="White cliffs and turquoise water — sample stand-in for Kleftiko"
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <p className="text-lg leading-relaxed text-navy/75">
            We sail from Adamas, the working harbour on the north of the gulf.
            South and west, the rock turns white and the water turns to glass.
            East, the old sulphur workings stain the cliffs. North, Arkoudes
            keeps watch.
          </p>
        </div>
      </section>
      <section className="bg-navy">
        {itinerary.map((stop, index) => (
          <article
            key={stop.id}
            className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative min-h-[22rem] lg:min-h-[28rem]">
              <Image
                src={stop.image}
                alt={stop.name}
                fill
                className="object-cover"
                sizes="50vw"
                placeholder="blur"
                blurDataURL={blurSea}
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-14 sm:px-12">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
                {String(index + 1).padStart(2, "0")} · {stop.kind}
              </p>
              <h2 className="font-display mt-3 text-4xl text-salt sm:text-5xl">
                {stop.name}
              </h2>
              {"aka" in stop && stop.aka ? (
                <p className="mt-2 text-sm text-gold-soft">{stop.aka}</p>
              ) : null}
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-salt/40">
                {stop.pronunciation}
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-salt/75">
                {stop.summary}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
