import Image from "next/image";
import { blurSea } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
};

export function PageIntro({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: PageIntroProps) {
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurSea}
      />
      <div className="film-grade" />
      <div className="film-haze" />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.95] text-salt sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-salt/78 sm:text-lg">
            {lede}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
