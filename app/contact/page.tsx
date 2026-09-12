import type { Metadata } from "next";
import { BookButton } from "@/components/fareharbor/BookButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write, call, or WhatsApp Seven Seas Sailing in Milos. Placeholders until the owner publishes live details.",
};

const rows = [
  ["Port", site.port],
  ["Meeting", site.meetingPoint],
  ["Phone", site.phone],
  ["WhatsApp", site.whatsapp],
  ["Email", site.email],
  ["Instagram", site.instagram],
  ["Season", site.season],
];

export default function ContactPage() {
  const whatsappHref = site.whatsapp.includes("TBD")
    ? undefined
    : `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
  const mailHref = site.email.includes("TBD")
    ? undefined
    : `mailto:${site.email}`;
  const telHref = site.phone.includes("TBD")
    ? undefined
    : `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageIntro
        eyebrow="Harbour office"
        title="Ask for the day you want."
        lede="Questions before you book? Write. The calendar itself stays on FareHarbor."
        image="/images/harbour-lighthouse.jpg"
        imageAlt="Harbour light — sample stand-in for Adamas departures"
      />
      <section className="bg-salt text-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <dl className="divide-y divide-gold/30 border-y border-gold/30">
            {rows.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-navy/45">
                  {label}
                </dt>
                <dd className="text-right text-sm">{value}</dd>
              </div>
            ))}
          </dl>
          <div>
            <p className="text-sm leading-relaxed text-navy/70">
              Live numbers and the meeting pin go here in CAPS until they are
              real. Booking never happens on this page’s form — there isn’t
              one.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <BookButton>Book on FareHarbor</BookButton>
              {telHref ? (
                <a className="ghost-btn text-navy" href={telHref}>
                  Call
                </a>
              ) : null}
              {whatsappHref ? (
                <a className="ghost-btn text-navy" href={whatsappHref}>
                  WhatsApp
                </a>
              ) : null}
              {mailHref ? (
                <a className="ghost-btn text-navy" href={mailHref}>
                  Email
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
