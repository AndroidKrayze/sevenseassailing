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
    src: "/images/sarakiniko-aerial.jpg",
    alt: "Aerial view of white volcanic rock meeting dark blue sea at Sarakiniko, Milos, in golden light",
    caption: "White rock at the end of the day.",
  },
  {
    src: "/images/kleftiko-boat.jpg",
    alt: "A small boat seen through a rock arch at Kleftiko, Milos",
    caption: "Through the arch.",
  },
  {
    src: "/images/klima-boathouses.jpg",
    alt: "Colourful fishermen's boathouses on the water at Klima, Milos",
    caption: "Klima, up close.",
  },
  {
    src: "/images/milos-sea-caves.jpg",
    alt: "Motor yachts at anchor beneath a sea cave on the Milos coast",
    caption: "A cove only the sea can open.",
  },
  {
    src: "/images/klima-village.jpg",
    alt: "The Klima waterfront and a small boat at anchor, Milos",
    caption: "Klima from the water.",
  },
  {
    src: "/images/milos-beach.jpg",
    alt: "Aerial view of a turquoise cove and boathouse village on Milos",
    caption: "Blue over pale sand.",
  },
  {
    src: "/images/milos-harbour.jpg",
    alt: "Painted boathouses, steps and small boats in a Milos harbour",
    caption: "Boathouses and morning light.",
  },
  {
    src: "/images/milos-bay-aerial.jpg",
    alt: "Aerial view of a turquoise bay on Milos with boats at anchor",
    caption: "Anchored in clear water.",
  },
  {
    src: "/images/sarakiniko.jpg",
    alt: "Sculpted white volcanic rock at Sarakiniko, Milos",
    caption: "Milos underfoot.",
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
