import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { blurSea, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Captain & Crew",
  description:
    "Seven Seas Sailing is Emmanouil’s private and small-group catamaran house in Milos. Crew details TBD.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The house"
        title="Emmanouil’s boat. Your day."
        lede="Seven Seas Sailing is a small Milos house — private charters and quiet shared days, never a floating nightclub."
        image="/images/sunset-milos.jpg"
        imageAlt="Sailboats on the Aegean near Milos at dusk"
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Captain</h2>
            <p className="mt-5 text-sm leading-relaxed text-navy/75">
              {site.captain} hosts. Milos is home. The Medusa on the mark is
              not theatre — it is a Cycladic house sign: watchful, local, and
              tied to the water.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy/75">
              BIO — TBD. Years on the water, licences, and the story of the
              boat will sit here when the owner writes them.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl">Crew</h2>
            <p className="mt-5 text-sm leading-relaxed text-navy/75">
              CREW NAMES — TBD. Hospitality first. They will tell you when to
              swim and when to stay on deck. They will not fill the silence
              for you.
            </p>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden">
              <Image
                src="/images/harbour.jpg"
                alt="Cycladic harbour — sample stand-in for Adamas"
                fill
                className="object-cover"
                sizes="50vw"
                placeholder="blur"
                blurDataURL={blurSea}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
