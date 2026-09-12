import type { Metadata } from "next";
import { BookButton } from "@/components/fareharbor/BookButton";
import { CalendarEmbed } from "@/components/fareharbor/CalendarEmbed";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Milos Catamaran Cruise",
  description:
    "Reserve a Seven Seas Sailing catamaran day in Milos. FareHarbor is the only booking engine.",
};

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Reservations"
        title="Book the day."
        lede="FareHarbor holds the calendar, the seats, and the payment. We do not run a second checkout."
        image="/images/lagoon.jpg"
        imageAlt="White-cliff lagoon and a lone sailboat"
      />
      <section className="bg-salt px-5 py-16 text-navy sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-teal">
              {site.port}
            </p>
            <h2 className="font-display mt-3 text-4xl">Open the Lightframe</h2>
            <p className="mt-3 max-w-md text-sm text-navy/65">
              Prefer overlay booking from any page? The sticky Book button
              uses the same FareHarbor company flow.
            </p>
          </div>
          <BookButton variant="solid">Book on FareHarbor</BookButton>
        </div>
      </section>
      <section className="bg-navy px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <CalendarEmbed title="Seven Seas availability" />
        </div>
      </section>
    </>
  );
}
