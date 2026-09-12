"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/fareharbor/BookButton";
import { blurSea } from "@/lib/site";

const slides = [
  {
    src: "/images/kleftiko-cliffs.jpg",
    alt: "White cliffs and turquoise water — sample imagery standing in for Kleftiko, Milos",
  },
  {
    src: "/images/catamaran.jpg",
    alt: "White catamaran at rest in clear turquoise sea",
  },
  {
    src: "/images/sunset-milos.jpg",
    alt: "Sailboats on the Aegean at dusk near Milos",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, reduce ? 1 : 1.08]);
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 80]);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative isolate h-[100svh] min-h-[42rem] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: slideIndex === index ? 1 : 0,
              transition: reduce ? "none" : "opacity 1.4s ease",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slideIndex === 0}
              className={`object-cover ${reduce ? "" : "kenburns"}`}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurSea}
            />
          </div>
        ))}
      </motion.div>
      <div className="film-grade" />
      <div className="film-haze" />
      {!reduce ? <div className="light-rays" /> : null}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 pt-36 sm:px-8 lg:pb-24">
        <motion.p
          className="text-[0.68rem] uppercase tracking-[0.28em] text-gold drop-shadow-[0_2px_18px_rgba(6,24,32,0.55)]"
          initial={reduce ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Milos · Cyclades
        </motion.p>
        <motion.h1
          className="font-display mt-5 max-w-5xl text-[3.4rem] leading-[0.9] text-salt drop-shadow-[0_8px_32px_rgba(6,24,32,0.62)] sm:text-7xl lg:text-[7.4rem]"
          initial={reduce ? false : { y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Sail Milos.
          <span className="block text-gold-soft">Seven Seas.</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md text-base leading-relaxed text-salt/78 sm:text-lg"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.48 }}
        >
          Catamaran days on the Aegean. Private, or nearly so.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-5"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BookButton>Book on FareHarbor</BookButton>
          <Link href="/tours" className="ghost-btn">
            Explore tours
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.28em] text-salt/55 lg:block">
        <span className="block h-10 w-px bg-gradient-to-b from-gold/10 to-gold mx-auto mb-2" />
        Drift
      </div>
    </section>
  );
}
