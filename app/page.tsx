import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SignatureCoffees } from "@/components/signature-coffees"
import { Pastries } from "@/components/pastries"
import { Membership } from "@/components/membership"
import { OurStory } from "@/components/our-story"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SignatureCoffees />
      <Pastries />
      <Membership />
      <OurStory />
      <Footer />
    </main>
  )
}
