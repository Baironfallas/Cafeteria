"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const coffees = [
  {
    name: "Espresso Clasico",
    price: "$4.50",
    description: "Intenso doble shot con crema dorada.",
    image: "/images/espresso.jpg",
    roast: "Oscuro",
    notes: "Cacao, avellana",
  },
  {
    name: "Velvet Latte",
    price: "$5.20",
    description: "Leche vaporizada suave con un shot de espresso.",
    image: "/images/latte.jpg",
    roast: "Medio",
    notes: "Vainilla, caramelo",
  },
  {
    name: "Signature Cappuccino",
    price: "$6.00",
    description: "Espresso, leche y espuma aterciopelada a partes iguales.",
    image: "/images/cappuccino.jpg",
    roast: "Medio",
    notes: "Almendra, cacao",
  },
  {
    name: "Cold Brew Citrus",
    price: "$5.80",
    description: "Extraccion en frio por 18 horas con final fresco.",
    image: "/images/coffee-beans.jpg",
    roast: "Claro",
    notes: "Citricos, miel",
  },
  {
    name: "Caramel Macchiato",
    price: "$6.30",
    description: "Capas de espresso, leche cremosa y caramelo artesanal.",
    image: "/images/hero-coffee.jpg",
    roast: "Medio",
    notes: "Toffee, vainilla",
  },
  {
    name: "Flat White Reserve",
    price: "$5.90",
    description: "Textura sedosa y sabor equilibrado con latte art.",
    image: "/images/latte.jpg",
    roast: "Medio",
    notes: "Nuez, chocolate",
  },
  {
    name: "Mocha de la Casa",
    price: "$6.40",
    description: "Chocolate oscuro fundido con espresso de origen unico.",
    image: "/images/espresso.jpg",
    roast: "Oscuro",
    notes: "Cacao, canela",
  },
  {
    name: "Affogato Supremo",
    price: "$6.80",
    description: "Helado de vainilla coronado con espresso intenso.",
    image: "/images/cappuccino.jpg",
    roast: "Oscuro",
    notes: "Vainilla, cacao",
  },
];

export function SignatureCoffees() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-secondary py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Nuestro Menu
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Cafes Signature
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Explora nuestra coleccion de especialidad: perfiles de tostado,
            notas aromaticas y recetas de autor para una experiencia cafetera
            memorable.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-6xl">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {coffees.map((coffee) => (
                <CarouselItem
                  key={coffee.name}
                  className="pb-3 sm:basis-1/2 xl:basis-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={coffee.image}
                        alt={coffee.name}
                        width={500}
                        height={360}
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm backdrop-blur">
                        Tostado {coffee.roast}
                      </span>
                    </div>

                    <div className="space-y-4 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif text-xl font-semibold leading-tight text-card-foreground">
                          {coffee.name}
                        </h3>
                        <span className="font-serif text-xl font-bold text-accent">
                          {coffee.price}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {coffee.description}
                      </p>

                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Notas:{" "}
                        <span className="text-foreground">{coffee.notes}</span>
                      </p>

                      <Link
                        href="#"
                        className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        Ordenar Ahora
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 hidden border-border/70 bg-background/90 md:flex" />
            <CarouselNext className="-right-4 hidden border-border/70 bg-background/90 md:flex" />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir al cafe ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={[
                  "h-2.5 rounded-full transition-all",
                  current === index
                    ? "w-7 bg-accent"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
