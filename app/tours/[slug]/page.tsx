import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BookButton } from "@/components/fareharbor/BookButton";
import { CalendarEmbed } from "@/components/fareharbor/CalendarEmbed";
import { PageIntro } from "@/components/ui/PageIntro";
import { getTour, tours } from "@/lib/content";
import { touristTripJsonLd } from "@/lib/jsonld";
import { blurSea } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: tour.seoTitle.replace(" | Seven Seas Sailing", ""),
    description: tour.seoDescription,
    openGraph: {
      title: tour.seoTitle,
      description: tour.seoDescription,
      images: [tour.image],
    },
  };
}

export default async function TourPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(touristTripJsonLd(tour)),
        }}
      />
      <PageIntro
        eyebrow={tour.eyebrow}
        title={tour.name}
        lede={tour.tagline}
        image={tour.image}
        imageAlt={tour.tagline}
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg leading-relaxed text-navy/75">{tour.summary}</p>
            <ul className="mt-10 space-y-3 text-sm leading-relaxed">
              {tour.highlights.map((item) => (
                <li key={item} className="border-l border-gold pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="font-display mt-14 text-3xl">Included</h2>
            <ul className="mt-4 space-y-2 text-sm text-navy/70">
              {tour.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-10 text-xs uppercase tracking-[0.16em] text-navy/45">
              {tour.note}
            </p>
          </div>
          <aside className="border border-gold/30 bg-salt p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-teal">
              FareHarbor
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="uppercase tracking-[0.14em] text-navy/45">
                  Duration
                </dt>
                <dd className="mt-1">{tour.duration}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-navy/45">
                  Guests
                </dt>
                <dd className="mt-1">{tour.guests}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-navy/45">
                  Season
                </dt>
                <dd className="mt-1">{tour.season}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-navy/45">
                  Meeting
                </dt>
                <dd className="mt-1">{tour.meetingPoint}</dd>
              </div>
            </dl>
            <BookButton className="mt-8 w-full" itemId={tour.fareharborItemId}>
              Book this day
            </BookButton>
          </aside>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4">
        {tour.gallery.map((src) => (
          <div key={src} className="relative aspect-[4/5]">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="25vw"
              placeholder="blur"
              blurDataURL={blurSea}
            />
          </div>
        ))}
      </section>
      <section className="bg-navy px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-4xl text-salt">Choose a date</h2>
          <p className="mt-3 max-w-xl text-sm text-salt/65">
            Embedded FareHarbor calendar. Availability and payment stay with
            FareHarbor.
          </p>
          <div className="mt-10">
            <CalendarEmbed
              itemId={tour.fareharborItemId}
              title={`${tour.name} calendar`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
