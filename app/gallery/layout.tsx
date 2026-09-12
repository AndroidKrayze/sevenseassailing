import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Sample Aegean imagery for Seven Seas Sailing. Replace with real boat and operations photographs.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
