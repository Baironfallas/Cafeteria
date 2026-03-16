import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Premium Coffee House
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Despierta Tus Sentidos{" "}
              <em className="not-italic text-accent">Con</em> Cada Sorbo.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Descubre mezclas tostadas a mano, elaboradas con pasion y
              precision para la experiencia definitiva del cafe.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#menu"
                className="rounded-sm border border-foreground bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Explorar Menu
              </Link>
              <Link
                href="#story"
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              >
                {"Nuestra Historia"}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-6 flex items-center gap-10">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">
                  15k+
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Clientes Felices
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">
                  4.9
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {"Calificacion Promedio"}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/hero-coffee.jpg"
                alt="Cafe premium siendo preparado con precision"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
