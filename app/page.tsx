import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SignatureCoffees } from "@/components/signature-coffees";
import { Pastries } from "@/components/pastries";
import { SmartCombos } from "@/components/smart-combos";
import { Experiences } from "@/components/experiences";
import { BrandTimeline } from "@/components/brand-timeline";
import { Membership } from "@/components/membership";
import { OurStory } from "@/components/our-story";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SignatureCoffees />
      <Pastries />
      <SmartCombos />
      <Experiences />
      <BrandTimeline />
      <Membership />
      <OurStory />
      <Footer />
    </main>
  );
}
