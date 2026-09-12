"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { blurSea } from "@/lib/site";

export function HorizonReveal() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-48, 48]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
          From Adamas
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-salt sm:text-6xl">
          The island opens only after the harbour falls away.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-salt/70">
          We leave from Adamas — Adamantas if you prefer the older name. Then
          the deck, the wake, and a coast that still keeps secrets.
        </p>
      </div>
      <div className="relative h-[58vh] min-h-[22rem] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="/images/underwater.jpg"
            alt="Open Aegean water to a clean horizon"
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurSea}
          />
        </motion.div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[min(70%,40rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
}
