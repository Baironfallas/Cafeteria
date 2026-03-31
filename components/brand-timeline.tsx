"use client";

import { timelineEvents } from "@/lib/cafe-data";

export function BrandTimeline() {
  return (
    <section
      id="timeline"
      className="relative bg-background py-16 md:py-24 px-4 md:px-6"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Nuestra Trayectoria
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            La Historia de Café Aura
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">
            De una pasión por el café a una comunidad global. Cada año, cada
            grano, cada taza cuenta nuestra historia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central - Desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-muted-foreground/20" />

          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Mobile Layout */}
                <div className="flex md:hidden gap-4">
                  <div className="flex flex-shrink-0 items-start pt-1">
                    <div
                      className={`h-6 w-6 rounded-full border-4 transition-all flex-shrink-0 ${
                        event.highlight
                          ? "border-accent bg-accent shadow-lg shadow-accent/50 scale-125"
                          : "border-background bg-muted"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`rounded-xl border transition-all ${
                        event.highlight
                          ? "border-accent bg-accent/5 shadow-lg"
                          : "border-border bg-card shadow-md"
                      } p-4`}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <div
                          className={`rounded-full p-2 flex-shrink-0 ${
                            event.highlight
                              ? "bg-accent text-background"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <event.icon className="h-6 w-6" />
                        </div>
                        <span
                          className={`font-serif text-xl font-bold ${
                            event.highlight ? "text-accent" : "text-foreground"
                          }`}
                        >
                          {event.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      {event.highlight && (
                        <div className="mt-4 inline-block">
                          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                            Hito Importante
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Alternado */}
                <div className="hidden md:flex gap-0 items-start">
                  {index % 2 === 0 ? (
                    <>
                      {/* Contenido izquierda */}
                      <div className="w-[calc(50%-2rem)] flex justify-end pr-8">
                        <div
                          className={`w-full rounded-2xl border transition-all ${
                            event.highlight
                              ? "border-accent bg-accent/5 shadow-lg hover:shadow-xl hover:scale-105"
                              : "border-border bg-card shadow-md hover:shadow-lg"
                          } p-8`}
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div
                              className={`rounded-full p-3 flex-shrink-0 ${
                                event.highlight
                                  ? "bg-accent text-background"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              <event.icon className="h-6 w-6" />
                            </div>
                            <span
                              className={`font-serif text-2xl font-bold ${
                                event.highlight
                                  ? "text-accent"
                                  : "text-foreground"
                              }`}
                            >
                              {event.year}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                          {event.highlight && (
                            <div className="mt-4 inline-block">
                              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                                Hito Importante
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Nodo centro */}
                      <div className="w-16 flex justify-center pt-8">
                        <div
                          className={`h-6 w-6 rounded-full border-4 transition-all ${
                            event.highlight
                              ? "border-accent bg-accent shadow-lg shadow-accent/50 scale-125"
                              : "border-background bg-muted"
                          }`}
                        />
                      </div>
                      {/* Espacio derecha */}
                      <div className="w-[calc(50%-2rem)]" />
                    </>
                  ) : (
                    <>
                      {/* Espacio izquierda */}
                      <div className="w-[calc(50%-2rem)]" />
                      {/* Nodo centro */}
                      <div className="w-16 flex justify-center pt-8">
                        <div
                          className={`h-6 w-6 rounded-full border-4 transition-all ${
                            event.highlight
                              ? "border-accent bg-accent shadow-lg shadow-accent/50 scale-125"
                              : "border-background bg-muted"
                          }`}
                        />
                      </div>
                      {/* Contenido derecha */}
                      <div className="w-[calc(50%-2rem)] flex pl-8">
                        <div
                          className={`w-full rounded-2xl border transition-all ${
                            event.highlight
                              ? "border-accent bg-accent/5 shadow-lg hover:shadow-xl hover:scale-105"
                              : "border-border bg-card shadow-md hover:shadow-lg"
                          } p-8`}
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div
                              className={`rounded-full p-3 flex-shrink-0 ${
                                event.highlight
                                  ? "bg-accent text-background"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              <event.icon className="h-6 w-6" />
                            </div>
                            <span
                              className={`font-serif text-2xl font-bold ${
                                event.highlight
                                  ? "text-accent"
                                  : "text-foreground"
                              }`}
                            >
                              {event.year}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                          {event.highlight && (
                            <div className="mt-4 inline-block">
                              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                                Hito Importante
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 rounded-xl md:rounded-2xl border border-border bg-muted/30 p-6 md:p-12 text-center">
          <h3 className="mb-2 md:mb-3 font-serif text-xl md:text-2xl font-bold text-foreground">
            Sé Parte de la Historia
          </h3>
          <p className="mx-auto mb-4 md:mb-6 max-w-md text-sm md:text-base text-muted-foreground">
            Cada cliente es parte importante de nuestro viaje. Únete a nuestra
            comunidad de amantes del café.
          </p>
          <a
            href="#membership"
            className="inline-flex items-center gap-2 rounded-sm border border-foreground bg-transparent px-5 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explorar Membresía
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
