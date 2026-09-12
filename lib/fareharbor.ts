export const FAREHARBOR_SHORTNAME =
  process.env.NEXT_PUBLIC_FAREHARBOR_SHORTNAME ?? "REPLACE_SHORTNAME";

export const FAREHARBOR_ITEM_DAY_CRUISE =
  process.env.NEXT_PUBLIC_FAREHARBOR_ITEM_DAY_CRUISE ??
  "REPLACE_ITEM_DAY_CRUISE";

export const FAREHARBOR_ITEM_PRIVATE =
  process.env.NEXT_PUBLIC_FAREHARBOR_ITEM_PRIVATE ?? "REPLACE_ITEM_PRIVATE";

export const FAREHARBOR_LIGHTFRAME_SRC =
  "https://fareharbor.com/embeds/api/v1/?autolightframe=yes";

export function isFareHarborPlaceholder(value: string) {
  return !value || value.startsWith("REPLACE_");
}

export function isFareHarborConfigured() {
  return !isFareHarborPlaceholder(FAREHARBOR_SHORTNAME);
}

export function getLightframeBookUrl(itemId?: string) {
  const base = `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/`;
  const params = "full-items=yes&fallback=simple&ref=sevenseassailing-web";

  if (itemId && !isFareHarborPlaceholder(itemId)) {
    return `${base}items/${itemId}/?${params}`;
  }

  return `${base}?${params}`;
}

export function getCalendarEmbedSrc(itemId?: string) {
  if (itemId && !isFareHarborPlaceholder(itemId)) {
    return `https://fareharbor.com/embeds/script/calendar/${FAREHARBOR_SHORTNAME}/items/${itemId}/?fallback=simple&full-items=yes&ref=sevenseassailing-web`;
  }

  return `https://fareharbor.com/embeds/script/calendar/${FAREHARBOR_SHORTNAME}/?fallback=simple&full-items=yes&ref=sevenseassailing-web`;
}

export type FareHarborOpenOptions = {
  shortname: string;
  fallback?: string;
  fullItems?: string;
  view?: "items" | "all-availability" | { item: string | number };
};

export function openFareHarbor(itemId?: string) {
  if (typeof window === "undefined") return;

  if (!isFareHarborConfigured()) {
    window.dispatchEvent(new CustomEvent("sevenseas:booking-unconfigured"));
    return;
  }

  const options: FareHarborOpenOptions = {
    shortname: FAREHARBOR_SHORTNAME,
    fallback: "simple",
    fullItems: "yes",
  };

  if (itemId && !isFareHarborPlaceholder(itemId)) {
    const numeric = Number(itemId);
    options.view = { item: Number.isFinite(numeric) ? numeric : itemId };
  }

  if (window.FH?.open) {
    window.FH.open(options);
    return;
  }

  window.location.href = getLightframeBookUrl(itemId);
}
