import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 text-sm leading-relaxed text-salt/75 sm:px-8">
      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
        Legal
      </p>
      <h1 className="font-display mt-4 text-5xl text-salt">Terms</h1>
      <p className="mt-8">
        Charters are offered subject to weather, safety, and the captain’s
        decision. Cancellation, payment, and guest-count rules are those shown
        in FareHarbor at checkout. FareHarbor is the merchant of record for
        online bookings.
      </p>
      <p className="mt-4">
        This stub will be replaced with a full charter agreement before
        launch.
      </p>
    </article>
  );
}
