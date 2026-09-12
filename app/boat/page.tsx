import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/fareharbor/BookButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { blurSea, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Catamaran",
  description:
    "The Seven Seas Sailing catamaran — space, shade, and a quiet deck. Specs marked TBD until the owner confirms.",
};

const specs = [
  ["Name", site.boatName],
  ["Length", "LENGTH — TBD"],
  ["Beam", "BEAM — TBD"],
  ["Guests", site.maxGuests],
  ["Crew", "CREW — TBD"],
  ["Year / refit", "YEAR — TBD"],
];

const amenities = [
  "Forward sundeck — TBD",
  "Shaded cockpit — TBD",
  "Swim ladder — TBD",
  "Snorkel sets — TBD",
  "SUP boards — TBD",
  "Onboard lunch service — TBD",
  "Bluetooth sound — TBD",
  "Fresh-water rinse — TBD",
];

export default function BoatPage() {
  return (
    <>
      <PageIntro
        eyebrow="The boat"
        title={site.boatName}
        lede="A catamaran is a room on the water. Wide. Steady. Built for long swims and longer lunches. Specs below stay marked until the owner locks them."
        image="/images/catamaran.jpg"
        imageAlt="White sailing catamaran in turquoise water"
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">As we know her so far</h2>
            <dl className="mt-8 divide-y divide-gold/30 border-y border-gold/30">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-navy/50">
                    {label}
                  </dt>
                  <dd className="text-right text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-display text-4xl">On board</h2>
            <ul className="mt-8 grid gap-3 text-sm text-navy/75">
              {amenities.map((item) => (
                <li key={item} className="border-l border-gold pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <BookButton className="mt-10">Charter the boat</BookButton>
          </div>
        </div>
      </section>
      <section className="relative h-[70vh] min-h-[28rem]">
        <Image
          src="/images/cove-boats.jpg"
          alt="Catamaran and yachts in a turquoise cove"
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurSea}
        />
      </section>
    </>
  );
}
