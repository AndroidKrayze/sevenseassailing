import Script from "next/script";
import { FAREHARBOR_LIGHTFRAME_SRC } from "@/lib/fareharbor";

export function FareHarborScript() {
  return (
    <Script
      id="fareharbor-lightframe"
      src={FAREHARBOR_LIGHTFRAME_SRC}
      strategy="lazyOnload"
    />
  );
}
