"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BookingNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onUnconfigured = () => setOpen(true);
    window.addEventListener("sevenseas:booking-unconfigured", onUnconfigured);
    return () =>
      window.removeEventListener(
        "sevenseas:booking-unconfigured",
        onUnconfigured,
      );
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-navy/55 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-labelledby="booking-notice-title"
            className="w-full max-w-md border border-gold/30 bg-navy-mid p-8 text-salt shadow-2xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
              FareHarbor
            </p>
            <h2
              id="booking-notice-title"
              className="font-display mt-3 text-3xl text-salt"
            >
              Booking goes live with your IDs.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-salt/75">
              Paste the real company shortname and item IDs from Dashboard →
              Settings → Book Buttons & Embeds. Keep the Lightframe script in
              the body. FareHarbor remains the only checkout.
            </p>
            <button
              type="button"
              className="gold-btn mt-7 w-full"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
