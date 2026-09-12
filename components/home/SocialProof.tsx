import { exampleReviews } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section className="bg-salt text-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-teal">
            Example words — not live reviews
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            What a day should feel like.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-navy/65">
            Placeholder notes until real guest letters arrive. No invented
            scores. No borrowed TripAdvisor stars.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {exampleReviews.map((review) => (
            <blockquote
              key={review.quote}
              className="border border-gold/35 bg-salt p-8"
            >
              <p className="font-display text-2xl leading-snug">
                “{review.quote}”
              </p>
              <footer className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-navy/50">
                {review.name}
                <span className="mt-1 block">{review.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
