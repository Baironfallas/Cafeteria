"use client";

import * as React from "react";
import Image from "next/image";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pastries = [
  {
    name: "Croissant de Mantequilla",
    price: "$3.80",
    description:
      "Crujiente por fuera, suave por dentro. Elaborado con mantequilla francesa importada.",
    image: "/images/croissant.jpg",
    pairing: "Ideal con: Espresso Clasico",
  },
  {
    name: "Pastel de Chocolate",
    price: "$5.50",
    description:
      "Ganache de chocolate oscuro artesanal con capas de mousse aterciopelada.",
    image: "/images/chocolate-cake.jpg",
    pairing: "Ideal con: Mocha de la Casa",
  },
  {
    name: "Tarta de Frutas Frescas",
    price: "$4.90",
    description:
      "Crema pastelera sedosa sobre masa quebrada con frutos rojos de temporada.",
    image: "/images/fruit-tart.jpg",
    pairing: "Ideal con: Cold Brew Citrus",
  },
  {
    name: "Pain au Chocolat",
    price: "$4.20",
    description:
      "Laminado frances con mantequilla premium y centro de chocolate oscuro.",
    image: "/images/croissant.jpg",
    pairing: "Ideal con: Flat White Reserve",
  },
  {
    name: "Cheesecake de Vainilla",
    price: "$5.80",
    description:
      "Textura cremosa y ligera con base crocante y toque de vainilla natural.",
    image: "/images/chocolate-cake.jpg",
    pairing: "Ideal con: Velvet Latte",
  },
  {
    name: "Tarta de Almendra",
    price: "$5.30",
    description:
      "Relleno de crema de almendra con acabado caramelizado y aroma tostado.",
    image: "/images/fruit-tart.jpg",
    pairing: "Ideal con: Signature Cappuccino",
  },
  {
    name: "Roll de Canela",
    price: "$4.60",
    description:
      "Masa suave glaseada con canela especiada y mantequilla dorada.",
    image: "/images/pastries.jpg",
    pairing: "Ideal con: Caramel Macchiato",
  },
  {
    name: "Brownie Fudge",
    price: "$4.80",
    description:
      "Intenso cacao con nuez tostada y centro humedo estilo bakery.",
    image: "/images/chocolate-cake.jpg",
    pairing: "Ideal con: Espresso Doble",
  },
];

export function Pastries() {
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
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Reposteria Artesanal
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            La Compania Perfecta
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Nuestra vitrina combina tecnicas de pasteleria fina con ingredientes
            de temporada para elevar cada sorbo con un bocado inolvidable.
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
              {pastries.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="pb-3 sm:basis-1/2 xl:basis-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={360}
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm backdrop-blur">
                        Reposteria de autor
                      </span>
                    </div>

                    <div className="space-y-4 p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif text-xl font-semibold leading-tight text-card-foreground">
                          {item.name}
                        </h3>
                        <span className="font-serif text-xl font-bold text-accent">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        <span className="text-foreground">{item.pairing}</span>
                      </p>
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
                aria-label={`Ir al postre ${index + 1}`}
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
