"use client";

import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Esencial",
    monthlyPrice: 19,
    description: "Perfecto para quienes disfrutan un buen cafe cada dia.",
    badge: "Comunidad",
    features: [
      "2 cafes gratis al mes",
      "10% de descuento en menu",
      "Acceso a eventos mensuales",
      "Newsletter exclusiva",
    ],
    featured: false,
  },
  {
    name: "Connoisseur",
    monthlyPrice: 39,
    description: "Para verdaderos conocedores del arte del cafe.",
    badge: "Recomendado",
    features: [
      "5 cafes gratis al mes",
      "20% de descuento en menu",
      "Cata exclusiva mensual",
      "Mezcla del mes a domicilio",
      "Reserva prioritaria",
      "Acceso VIP a lanzamientos",
    ],
    featured: true,
  },
  {
    name: "Exclusivo",
    monthlyPrice: 69,
    description: "La experiencia maxima para amantes del cafe de elite.",
    badge: "Elite",
    features: [
      "Cafes ilimitados",
      "30% de descuento en menu",
      "Clase privada con barista",
      "Granos single-origin mensual",
      "Mesa reservada permanente",
      "Invitacion a eventos privados",
    ],
    featured: false,
  },
];

export function Membership() {
  const [billingCycle, setBillingCycle] = useState<"mensual" | "anual">(
    "mensual",
  );

  const isYearly = billingCycle === "anual";

  const getDisplayPrice = (monthlyPrice: number) => {
    if (!isYearly) {
      return {
        value: `$${monthlyPrice}`,
        period: "/mes",
        detail: "Facturacion mensual",
      };
    }

    const discountedMonthly = Math.round(monthlyPrice * 0.8);
    const annualTotal = discountedMonthly * 12;

    return {
      value: `$${discountedMonthly}`,
      period: "/mes",
      detail: `Facturado anual: $${annualTotal}`,
    };
  };

  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-primary py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.16),transparent_45%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Membresia Exclusiva
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Unete al Club del Cafe
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/70">
            Accede a beneficios exclusivos, eventos privados y las mejores
            mezclas entregadas en la puerta de tu hogar.
          </p>

          <div className="mx-auto mt-8 inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-1">
            <button
              type="button"
              onClick={() => setBillingCycle("mensual")}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                billingCycle === "mensual"
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground/75 hover:text-primary-foreground"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("anual")}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                billingCycle === "anual"
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground/75 hover:text-primary-foreground"
              }`}
            >
              Anual
            </button>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {isYearly ? "Ahorra 20% con facturacion anual" : "Sin permanencia"}
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => {
            const displayPrice = getDisplayPrice(plan.monthlyPrice);

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-[both] ${
                  plan.featured
                    ? "border-2 border-accent bg-accent/10 shadow-xl"
                    : "border border-primary-foreground/10 bg-primary-foreground/5"
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                    Mas Popular
                  </span>
                )}

                <span className="w-fit rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                  {plan.badge}
                </span>

                <h3 className="mt-4 font-serif text-2xl font-bold text-primary-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-bold text-primary-foreground">
                    {displayPrice.value}
                  </span>
                  <span className="text-sm text-primary-foreground/50">
                    {displayPrice.period}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary-foreground/55">
                  {displayPrice.detail}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-primary-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-sm py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    plan.featured
                      ? "bg-accent text-accent-foreground hover:bg-accent/80"
                      : "border border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Comenzar Ahora
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
