import type { MetadataRoute } from "next";
import { tours } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tours",
    "/boat",
    "/milos",
    "/gallery",
    "/about",
    "/book",
    "/contact",
    "/privacy",
    "/terms",
    ...tours.map((tour) => `/tours/${tour.slug}`),
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
