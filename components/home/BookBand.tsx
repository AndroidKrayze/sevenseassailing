import Image from "next/image";
import { BookButton } from "@/components/fareharbor/BookButton";
import { blurSea, site } from "@/lib/site";

export function BookBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-sunset.jpg"
        alt="Aegean dusk with distant boats"
        fill
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurSea}
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
          {site.season}
        </p>
        <h2 className="font-display mt-5 text-5xl text-salt sm:text-7xl">
          The boat is waiting.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-salt/75">
          Reservations live on FareHarbor. Availability and payment stay there —
          we never invent a second checkout.
        </p>
        <div className="mt-10 flex justify-center">
          <BookButton variant="solid">Book on FareHarbor</BookButton>
        </div>
      </div>
    </section>
  );
}
