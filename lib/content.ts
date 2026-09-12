import itineraryData from "@/content/itinerary.json";
import toursData from "@/content/tours.json";

export type Tour = (typeof toursData)[number];
export type ItineraryStop = (typeof itineraryData)[number];

export const tours = toursData as Tour[];
export const itinerary = itineraryData as ItineraryStop[];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export const gallery = [
  {
    src: "/images/kleftiko-cliffs.jpg",
    alt: "White limestone cliffs and turquoise water in the Ionian — sample stand-in for Kleftiko, Milos",
    caption: "White rock. Impossible water.",
  },
  {
    src: "/images/catamaran.jpg",
    alt: "White sailing catamaran at anchor in clear turquoise sea",
    caption: "The quiet of two hulls.",
  },
  {
    src: "/images/sunset-milos.jpg",
    alt: "Sailboats on the Aegean at dusk near Milos, Greece",
    caption: "Late light off Milos.",
  },
  {
    src: "/images/cove-boats.jpg",
    alt: "Yachts and a catamaran in a turquoise Greek cove",
    caption: "A cove only the sea can open.",
  },
  {
    src: "/images/lagoon.jpg",
    alt: "Aerial view of a white-cliff lagoon and a lone sailboat",
    caption: "Blue over pale sand.",
  },
  {
    src: "/images/harbour.jpg",
    alt: "Cycladic harbour with clear water and white houses — sample stand-in for Adamas",
    caption: "Home port mood.",
  },
  {
    src: "/images/hero-sunset.jpg",
    alt: "Aegean horizon at dusk with distant boats and white terrace",
    caption: "The hour the wind lies down.",
  },
  {
    src: "/images/sarakiniko.jpg",
    alt: "Sculpted white volcanic rock at Sarakiniko, Milos",
    caption: "Milos underfoot.",
  },
  {
    src: "/images/village.jpg",
    alt: "Whitewashed Cycladic house with a pale blue gate and bougainvillea",
    caption: "Ash, lime, and salt.",
  },
  {
    src: "/images/underwater.jpg",
    alt: "Open Aegean sea to the horizon",
    caption: "Nothing but water and weather.",
  },
  {
    src: "/images/harbour-lighthouse.jpg",
    alt: "Small harbour light and ferry — sample stand-in for Adamas departures",
    caption: "We leave from Adamas.",
  },
] as const;

export const exampleReviews = [
  {
    quote: "The day felt longer than the clock. Quiet crew. Perfect water.",
    name: "EXAMPLE — Guest name TBD",
    place: "EXAMPLE — City TBD",
  },
  {
    quote: "Kleftiko without the scramble. We swam, we ate, we said almost nothing.",
    name: "EXAMPLE — Guest name TBD",
    place: "EXAMPLE — City TBD",
  },
  {
    quote: "Private, unhurried, and completely Milos. We will come back.",
    name: "EXAMPLE — Guest name TBD",
    place: "EXAMPLE — City TBD",
  },
] as const;
