import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SignatureCoffees } from "@/components/signature-coffees";
import { Pastries } from "@/components/pastries";
import { SmartCombos } from "@/components/smart-combos";
import { Gallery } from "@/components/gallery";
import { Experiences } from "@/components/experiences";
import { BrandTimeline } from "@/components/brand-timeline";
import { Membership } from "@/components/membership";
import { OurStory } from "@/components/our-story";
import { PaymentMethods } from "@/components/payment-methods";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SignatureCoffees />
      <Pastries />
      <SmartCombos />
      <Gallery />
      <OurStory />
      <BrandTimeline />
      <Experiences />
      <Membership />
      <PaymentMethods />
      <Footer />
    </main>
  );
}
