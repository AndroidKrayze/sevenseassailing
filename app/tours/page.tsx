import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/fareharbor/BookButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { TiltCard } from "@/components/ui/TiltCard";
import { tours } from "@/lib/content";
import { blurSea } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catamaran Experiences in Milos",
  description:
    "Day cruise or private charter. Kleftiko, Sykia, and the Polyaigos lagoon from Adamas. Book on FareHarbor.",
};

export default function ToursPage() {
  return (
    <>
      <PageIntro
        eyebrow="Experiences"
        title="Choose how the day feels."
        lede="A shared catamaran day, or the boat entirely yours. Both leave from Adamas. Both live on FareHarbor."
        image="/images/cove-boats.jpg"
        imageAlt="Turquoise cove with anchored yachts and a catamaran"
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          {tours.map((tour) => (
            <TiltCard key={tour.slug}>
              <article className="overflow-hidden border border-gold/30 bg-salt">
                <Link href={`/tours/${tour.slug}`} className="relative block aspect-[16/11]">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={blurSea}
                  />
                </Link>
                <div className="p-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-teal">
                    {tour.eyebrow}
                  </p>
                  <h2 className="font-display mt-2 text-4xl">{tour.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">
                    {tour.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-navy/55">
                    <div>
                      <dt>Duration</dt>
                      <dd className="mt-1 text-navy">{tour.duration}</dd>
                    </div>
                    <div>
                      <dt>Guests</dt>
                      <dd className="mt-1 text-navy">{tour.guests}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <BookButton itemId={tour.fareharborItemId}>Book</BookButton>
                    <Link href={`/tours/${tour.slug}`} className="ghost-btn text-navy">
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
