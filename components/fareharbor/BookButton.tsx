"use client";

import {
  getLightframeBookUrl,
  isFareHarborConfigured,
  openFareHarbor,
} from "@/lib/fareharbor";

type BookButtonProps = {
  itemId?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "gold" | "solid" | "ghost";
};

export function BookButton({
  itemId,
  children = "Book now",
  className = "",
  variant = "gold",
}: BookButtonProps) {
  const href = isFareHarborConfigured()
    ? getLightframeBookUrl(itemId)
    : "/book";

  const styles = {
    gold: "gold-btn",
    solid:
      "inline-flex items-center justify-center bg-gold px-5 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-navy transition-colors duration-300 hover:bg-gold-soft",
    ghost: "ghost-btn",
  }[variant];

  return (
    <a
      href={href}
      className={`${styles} ${className}`}
      onClick={(event) => {
        event.preventDefault();
        openFareHarbor(itemId);
      }}
    >
      {children}
    </a>
  );
}
