import { site } from "@/lib/site";
import type { Tour } from "@/lib/content";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/catamaran.jpg`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.meetingPoint,
      addressLocality: "Adamas",
      addressRegion: "Milos",
      postalCode: "84800",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7236,
      longitude: 24.4458,
    },
    areaServed: {
      "@type": "Place",
      name: site.destination,
    },
  };
}

export function touristTripJsonLd(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${tour.name} — ${site.name}`,
    description: tour.summary,
    touristType: "Sailing",
    itinerary: {
      "@type": "Place",
      name: "Milos, Cyclades",
    },
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
    },
  };
}
