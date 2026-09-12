"use client";

import { useEffect, useRef } from "react";
import {
  FAREHARBOR_SHORTNAME,
  getCalendarEmbedSrc,
  isFareHarborConfigured,
  isFareHarborPlaceholder,
} from "@/lib/fareharbor";
import { BookButton } from "@/components/fareharbor/BookButton";

type CalendarEmbedProps = {
  itemId?: string;
  title?: string;
};

export function CalendarEmbed({
  itemId,
  title = "Availability",
}: CalendarEmbedProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const configured =
    isFareHarborConfigured() &&
    (!itemId || !isFareHarborPlaceholder(itemId));

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !configured) return;

    mount.innerHTML = "";
    const script = document.createElement("script");
    script.src = getCalendarEmbedSrc(itemId);
    script.async = true;
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, [configured, itemId]);

  if (!configured) {
    return (
      <div className="border border-gold/25 bg-navy-mid/80 p-8 sm:p-12">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
          FareHarbor calendar
        </p>
        <h3 className="font-display mt-3 text-3xl text-salt">{title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-salt/70">
          The live availability calendar appears here once{" "}
          <code className="text-gold-soft">FAREHARBOR_SHORTNAME</code>
          {itemId ? (
            <>
              {" "}
              and this item ID are pasted from the FareHarbor embed generator.
            </>
          ) : (
            <> is pasted from the FareHarbor embed generator.</>
          )}{" "}
          Current placeholder:{" "}
          <span className="text-salt/90">{FAREHARBOR_SHORTNAME}</span>
          {itemId ? (
            <>
              {" / "}
              <span className="text-salt/90">{itemId}</span>
            </>
          ) : null}
          .
        </p>
        <BookButton className="mt-8" itemId={itemId}>
          Open FareHarbor
        </BookButton>
      </div>
    );
  }

  return (
    <div className="border border-gold/20 bg-salt/95 p-3 text-navy sm:p-5">
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-navy/55">
        {title} · Powered by FareHarbor
      </p>
      <div ref={mountRef} className="min-h-[420px]" />
    </div>
  );
}
