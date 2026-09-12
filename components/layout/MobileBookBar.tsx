"use client";

import { BookButton } from "@/components/fareharbor/BookButton";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-navy/88 px-4 py-3 backdrop-blur-xl lg:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <BookButton className="w-full" variant="solid">
        Book now
      </BookButton>
    </div>
  );
}
