"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const experiences = [
  {
    id: 1,
    image: "/images/hero-coffee.jpg",
    username: "@luciana.café",
    caption: "Mi lugar feliz ☕️✨",
    likes: 1243,
  },
  {
    id: 2,
    image: "/images/espresso.jpg",
    username: "@juan_coffee_lover",
    caption: "Cada mañana comienza aquí 🌅",
    likes: 987,
  },
  {
    id: 3,
    image: "/images/latte.jpg",
    username: "@sofia.moments",
    caption: "La mejor compañía para trabajar 💻☕",
    likes: 2156,
  },
  {
    id: 4,
    image: "/images/cappuccino.jpg",
    username: "@carlos_vibes",
    caption: "Calidad premium en cada sorbo 🤌",
    likes: 1654,
  },
  {
    id: 5,
    image: "/images/coffee-beans.jpg",
    username: "@maria_lifestyle",
    caption: "Encuentros perfectos con amigas 👯‍♀️",
    likes: 3421,
  },
];

export function Experiences() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

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

  return (
    <section id="experiences" className="relative bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Galería de Momentos
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Historias de Nuestros Clientes
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Descubre cómo Café Aura es parte de tus momentos especiales
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {experiences.map((exp) => (
              <CarouselItem
                key={exp.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 animate-in fade-in duration-500"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl">
                  {/* Imagen */}
                  <div className="relative h-96 overflow-hidden bg-muted">
                    <Image
                      src={exp.image}
                      alt={exp.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay oscuro al hover */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    {/* Username */}
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        {exp.username[1].toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {exp.username}
                        </p>
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="mt-3 text-sm text-foreground line-clamp-2">
                      {exp.caption}
                    </p>

                    {/* Likes */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-accent">❤️</span>
                      {exp.likes.toLocaleString()} likes
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Dots indicadores */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-accent"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Quieres aparecer aquí? Comparte tu momento con nosotros
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-accent bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Etiquétanos en Instagram
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
