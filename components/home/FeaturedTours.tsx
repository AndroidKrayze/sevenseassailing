import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/fareharbor/BookButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { tours } from "@/lib/content";
import { blurSea } from "@/lib/site";

export function FeaturedTours() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
            Experiences
          </p>
          <h2 className="font-display mt-4 text-4xl text-salt sm:text-6xl">
            Two ways to sail.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {tours.map((tour) => (
            <TiltCard key={tour.slug}>
              <article className="group relative overflow-hidden border border-gold/15 bg-navy-mid">
                <Link href={`/tours/${tour.slug}`} className="block">
                  <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                    <Image
                      src={tour.image}
                      alt={tour.tagline}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={blurSea}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  </div>
                </Link>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                    {tour.eyebrow}
                  </p>
                  <h3 className="font-display mt-2 text-3xl text-salt sm:text-4xl">
                    {tour.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-salt/75">
                    {tour.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <BookButton itemId={tour.fareharborItemId}>Book</BookButton>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="ghost-btn px-0"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
