"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { BookingNotice } from "@/components/fareharbor/BookingNotice";

export function AppProviders({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const content = (
    <MotionConfig reducedMotion="user">
      {children}
      <BookingNotice />
    </MotionConfig>
  );

  if (reduceMotion) return content;

  return (
    <ReactLenis root options={{ duration: 1.12, lerp: 0.09, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
}
