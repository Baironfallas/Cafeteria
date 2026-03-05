import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { StorySection } from "@/components/story-section"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { NewsletterCta } from "@/components/newsletter-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <StorySection />
      <Pricing />
      <Testimonials />
      <NewsletterCta />
      <Footer />
    </main>
  )
}
