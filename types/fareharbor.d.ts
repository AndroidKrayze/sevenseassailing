import type { FareHarborOpenOptions } from "@/lib/fareharbor";

declare global {
  interface Window {
    FH?: {
      open: (options: FareHarborOpenOptions) => void;
      close?: () => void;
    };
  }

  interface WindowEventMap {
    "sevenseas:booking-unconfigured": CustomEvent<void>;
  }
}

export {};
