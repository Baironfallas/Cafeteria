"use client";

import { useMemo, useState } from "react";
import { Gift, Sparkles } from "lucide-react";

type ComboItem = {
  id: string;
  coffeeName: string;
  coffeePrice: number;
  pastryName: string;
  pastryPrice: number;
  discountPercent: number;
  description: string;
  pairing: string;
};

const combos: ComboItem[] = [
  {
    id: "combo-classic",
    coffeeName: "Espresso Clasico",
    coffeePrice: 4.5,
    pastryName: "Croissant de Mantequilla",
    pastryPrice: 3.8,
    discountPercent: 15,
    description: "La combinacion clasica: intenso y crujiente.",
    pairing: "Perfecto para la manana",
  },
  {
    id: "combo-velvet",
    coffeeName: "Velvet Latte",
    coffeePrice: 5.2,
    pastryName: "Cheesecake de Vainilla",
    pastryPrice: 5.8,
    discountPercent: 18,
    description: "Suavidad y cremosidad en cada sorbo.",
    pairing: "Ideal para lo dulce",
  },
  {
    id: "combo-cappuccino",
    coffeeName: "Signature Cappuccino",
    coffeePrice: 6.0,
    pastryName: "Tarta de Almendra",
    pastryPrice: 5.3,
    discountPercent: 20,
    description: "Balance perfecto entre espuma y almendra tostada.",
    pairing: "Para un break especial",
  },
  {
    id: "combo-chocolate",
    coffeeName: "Mocha de la Casa",
    coffeePrice: 6.4,
    pastryName: "Pastel de Chocolate",
    pastryPrice: 5.5,
    discountPercent: 22,
    description: "Para los amantes del cacao: doble dosis de chocolate.",
    pairing: "La indulgencia total",
  },
  {
    id: "combo-citrus",
    coffeeName: "Cold Brew Citrus",
    coffeePrice: 5.8,
    pastryName: "Tarta de Frutas Frescas",
    pastryPrice: 4.9,
    discountPercent: 16,
    description: "Fresco y vibrante: perfecto para dias calidos.",
    pairing: "Revigorizante",
  },
  {
    id: "combo-flatwhite",
    coffeeName: "Flat White Reserve",
    coffeePrice: 5.9,
    pastryName: "Pain au Chocolat",
    pastryPrice: 4.2,
    discountPercent: 17,
    description: "Textura sedosa con chocolate clasico.",
    pairing: "Lujo accesible",
  },
];

export function SmartCombos() {
  const [selectedCombo, setSelectedCombo] = useState(0);

  const combo = useMemo(() => {
    return combos[selectedCombo];
  }, [selectedCombo]);

  const originalPrice = combo.coffeePrice + combo.pastryPrice;
  const discountAmount = (originalPrice * combo.discountPercent) / 100;
  const comboPrice = originalPrice - discountAmount;

  const handleOrderCombo = () => {
    const message = encodeURIComponent(
      [
        "Hola Cafe Aura, quiero ordenar este combo:",
        `☕ ${combo.coffeeName} ($${combo.coffeePrice.toFixed(2)})`,
        `🥐 ${combo.pastryName} ($${combo.pastryPrice.toFixed(2)})`,
        ``,
        `Precio original: $${originalPrice.toFixed(2)}`,
        `Descuento: -$${discountAmount.toFixed(2)} (${combo.discountPercent}%)`,
        `Precio final combo: $${comboPrice.toFixed(2)}`,
      ].join("\n"),
    );

    window.open(`https://wa.me/00000000?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,110,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2">
            <Gift className="h-4 w-4 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Combos Recomendados
            </p>
          </div>

          <h2 className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Cafe + Postre con Descuento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Nuestros baristas curaron estas combinaciones perfas. Cada combo
            incluye un descuento especial de hasta 22%.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Selector de combos */}
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Elige tu combo
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {combos.map((c, index) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCombo(index)}
                  className={`rounded-xl border-2 px-4 py-4 text-left transition-all duration-200 ${
                    selectedCombo === index
                      ? "border-accent bg-accent/15"
                      : "border-primary-foreground/10 bg-primary-foreground/5 hover:border-primary-foreground/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary-foreground">
                        {c.coffeeName}
                      </p>
                      <p className="mt-1 text-xs text-primary-foreground/70">
                        + {c.pastryName}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        -{c.discountPercent}% descuento
                      </p>
                    </div>
                    <span className="rounded-lg bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                      $
                      {(
                        c.coffeePrice +
                        c.pastryPrice -
                        (c.coffeePrice + c.pastryPrice) *
                          (c.discountPercent / 100)
                      ).toFixed(2)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detalle del combo seleccionado */}
          <div className="flex flex-col justify-between rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 shadow-lg">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {combo.pairing}
                </p>
              </div>

              <h3 className="font-serif text-3xl font-bold text-primary-foreground">
                {combo.coffeeName}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                {combo.description}
              </p>

              <div className="mt-6 space-y-3 rounded-xl bg-primary-foreground/10 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-foreground/70">
                    ☕ {combo.coffeeName}
                  </span>
                  <span className="font-semibold text-primary-foreground">
                    ${combo.coffeePrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-foreground/70">
                    🥐 {combo.pastryName}
                  </span>
                  <span className="font-semibold text-primary-foreground">
                    ${combo.pastryPrice.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-primary-foreground/20 pt-3">
                  <div className="flex items-center justify-between text-xs text-primary-foreground/70">
                    <span>Subtotal</span>
                    <span>${originalPrice.toFixed(2)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-accent">
                      Descuento {combo.discountPercent}%
                    </span>
                    <span className="font-semibold text-accent">
                      -${discountAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-accent/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/70">
                  Precio final del combo
                </p>
                <p className="mt-1 font-serif text-4xl font-bold text-accent">
                  ${comboPrice.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-accent/80">
                  Ahorras ${discountAmount.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleOrderCombo}
                className="flex-1 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Ordenar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
