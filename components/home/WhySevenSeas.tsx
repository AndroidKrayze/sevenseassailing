import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    n: "01",
    title: "The space of a catamaran",
    body: "Two hulls. A wide deck. Shade when you want it, sun when you don’t. Room to disappear without leaving the boat.",
  },
  {
    n: "02",
    title: "Coves only the sea can open",
    body: "Kleftiko. Sykia. The pale water off Polyaigos. Places that stay rumours until you arrive by boat.",
  },
  {
    n: "03",
    title: "Unhurried hospitality",
    body: "Emmanouil’s crew keeps the day quiet. Swim. Eat. Watch the light change. Nothing is performed.",
  },
];

export function WhySevenSeas() {
  return (
    <section className="bg-salt text-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-teal">
            Why Seven Seas
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
            Hospitality first. Then the wild coast.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-gold/30 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.n}
              delay={index * 0.08}
              className="bg-salt p-8 sm:p-10"
            >
              <p className="text-[0.68rem] tracking-[0.22em] text-gold">
                {pillar.n}
              </p>
              <h3 className="font-display mt-5 text-3xl leading-tight">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
