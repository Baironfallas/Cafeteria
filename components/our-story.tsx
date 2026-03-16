import Image from "next/image"
import Link from "next/link"

const stats = [
  { value: "100%", label: "Organico" },
  { value: "24h", label: "Tostado Fresco" },
  { value: "50+", label: "Variedades" },
]

export function OurStory() {
  return (
    <section id="story" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/coffee-beans.jpg"
              alt="Granos de cafe premium de origen unico"
              width={600}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Del Grano a la Taza:{" "}
              <em className="not-italic text-accent">Un Viaje</em> de Pasion
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              En Cafe Aura, el cafe no es solo una bebida — es una experiencia.
              Nuestro viaje comenzo con una mision simple: obtener los mejores
              granos de granjas sostenibles alrededor del mundo y tostarlos a la
              perfeccion.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Creemos en el arte de hacer cafe. Cada lote es tostado en
              pequenas cantidades para resaltar las caracteristicas unicas de su
              origen, asegurando que cada taza que pruebes cuente una historia
              propia.
            </p>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
            >
              {"Leer historia completa"}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
