import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 text-sm leading-relaxed text-salt/75 sm:px-8">
      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
        Legal
      </p>
      <h1 className="font-display mt-4 text-5xl text-salt">Privacy</h1>
      <p className="mt-8">
        Seven Seas Sailing collects only what is needed to answer an enquiry
        or complete a booking. Reservations, payments, and guest details
        entered through FareHarbor are processed by FareHarbor under their
        own privacy terms.
      </p>
      <p className="mt-4">
        This stub will be replaced with a full policy before launch. Contact:{" "}
        EMAIL — TBD.
      </p>
    </article>
  );
}
