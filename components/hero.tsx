import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Cafe premium servido en taza artesanal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Membresia Exclusiva
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl text-balance">
            El cafe que mereces, cada dia
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Unete a Coffee Lovers Club y disfruta de granos seleccionados de las mejores fincas del mundo, entregados a tu puerta cada mes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <a href="#pricing">
                Descubre los planes
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground text-base">
              <a href="#benefits">Conoce los beneficios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
