import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Explorador",
    price: "$19",
    period: "/mes",
    description: "Perfecto para empezar tu viaje cafetero.",
    features: [
      "250g de cafe de especialidad",
      "Notas de cata y guia de preparacion",
      "Acceso a la comunidad online",
      "Envio gratuito",
    ],
    cta: "Comenzar ahora",
    highlighted: false,
  },
  {
    name: "Conocedor",
    price: "$39",
    period: "/mes",
    description: "La experiencia completa para los verdaderos amantes.",
    features: [
      "500g de cafe de especialidad",
      "Acceso a micro-lotes exclusivos",
      "Invitacion a catas mensuales",
      "Kit de preparacion artesanal",
      "Envio express gratuito",
      "Descuentos en la tienda",
    ],
    cta: "Unirse al Club",
    highlighted: true,
  },
  {
    name: "Maestro",
    price: "$69",
    period: "/mes",
    description: "Para los que buscan lo extraordinario.",
    features: [
      "1kg de cafe de especialidad",
      "Ediciones limitadas cada mes",
      "Talleres privados de barismo",
      "Visitas anuales a fincas cafeteras",
      "Accesorios premium incluidos",
      "Atencion personalizada",
    ],
    cta: "Ser Maestro",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coffee-beans.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Planes de Membresia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Elige tu experiencia ideal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
            Cada plan esta diseñado para ofrecerte lo mejor del cafe de especialidad, directamente de las fincas a tu taza.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? "bg-card ring-2 ring-accent shadow-2xl scale-105"
                  : "bg-card/90 border border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    Mas Popular
                  </span>
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  className={`w-full text-base ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
