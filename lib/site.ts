export const site = {
  name: "Seven Seas Sailing",
  shortName: "Seven Seas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sevenseassailing.com",
  destination: "Milos, Cyclades, Greece",
  port: "Adamas (Adamantas), Milos",
  meetingPoint: "MEETING POINT PIN — TBD",
  phone: "PHONE — TBD",
  whatsapp: "WHATSAPP — TBD",
  email: "EMAIL — TBD",
  instagram: "INSTAGRAM — TBD",
  boatName: "BOAT NAME — TBD",
  maxGuests: "MAX GUESTS — TBD",
  season: "SEASON DATES — TBD",
  captain: "Emmanouil",
  description:
    "Private and small-group catamaran cruises in Milos. Sail to Kleftiko, Sykia, and the Polyaigos blue lagoon with unhurried Aegean hospitality.",
} as const;

export const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/boat", label: "The Boat" },
  { href: "/milos", label: "Milos" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const blurSea =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAAEAAQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACiP//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//Z";
