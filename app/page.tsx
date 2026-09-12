import { BookBand } from "@/components/home/BookBand";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { GalleryMosaic } from "@/components/home/GalleryMosaic";
import { Hero } from "@/components/home/Hero";
import { HorizonReveal } from "@/components/home/HorizonReveal";
import { ItineraryRibbon } from "@/components/home/ItineraryRibbon";
import { SocialProof } from "@/components/home/SocialProof";
import { WhySevenSeas } from "@/components/home/WhySevenSeas";

export default function Home() {
  return (
    <>
      <Hero />
      <HorizonReveal />
      <WhySevenSeas />
      <FeaturedTours />
      <ItineraryRibbon />
      <SocialProof />
      <GalleryMosaic />
      <BookBand />
    </>
  );
}
