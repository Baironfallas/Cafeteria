import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { milestones, values } from "@/lib/cafe-data";

export const metadata: Metadata = {
  title: "Nuestra Historia | Cafe Aura",
  description:
    "Conoce la historia completa de Cafe Aura: nuestro origen, proceso y valores para crear una experiencia de cafe premium.",
};

export default function HistoriaPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section
        id="hero"
        className="relative overflow-hidden border-b border-border bg-background pt-28 pb-16 md:pt-36 md:pb-24"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Nuestra Historia
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl text-balance">
                Una Historia de Origen, Oficio y Pasion por el Cafe
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Cafe Aura nacio con una idea simple: elevar el cafe diario a una
                experiencia premium. Desde la seleccion de granos hasta la taza
                final, cada detalle esta disenado para transmitir calidad,
                calidez y autenticidad.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/#menu"
                  className="rounded-sm border border-foreground bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Ver Nuestro Menu
                </Link>
                <Link
                  href="#story"
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                >
                  Explorar Timeline
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/60">
              <Image
                src="/images/coffee-beans.jpg"
                alt="Granos de cafe premium recien tostados"
                width={680}
                height={760}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Timeline
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              De una pequena barra a una casa de cafe de referencia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Cada etapa de nuestro crecimiento ha mantenido el mismo norte:
              respeto por el origen, tecnica en la extraccion y hospitalidad
              genuina para nuestra comunidad.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {milestones.map((item, index) => (
              <article
                key={item.year}
                className="group overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-[both]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={420}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm backdrop-blur">
                    {item.year}
                  </span>
                </div>

                <div className="space-y-3 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="relative overflow-hidden bg-background py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.12),transparent_42%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Nuestros Valores
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              El proceso que sostiene cada taza
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-xl border border-border/60 bg-card/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-[both]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="inline-flex rounded-full bg-accent/15 p-3 text-accent">
                    {typeof Icon === "function" ? (
                      <Icon className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="membership" className="bg-primary py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Vive la experiencia completa
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Ven a conocer Cafe Aura en persona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Te esperamos para descubrir perfiles de sabor, metodos de extraccion
            y maridajes pensados para disfrutar el cafe con todos los sentidos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#membership"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/80"
            >
              Reservar Experiencia
            </Link>
            <Link
              href="/"
              className="rounded-sm border border-primary-foreground/25 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
