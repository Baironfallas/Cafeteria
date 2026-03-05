import Image from "next/image"

export function StorySection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/coffee-shop.jpg"
              alt="Interior acogedor de nuestra cafeteria"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Nuestra historia
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Nacimos del amor por el buen cafe
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Desde 2018, Coffee Lovers Club ha recorrido fincas cafeteras en Colombia, Etiopia, Guatemala y Brasil para encontrar los granos mas excepcionales. Nuestro equipo de catadores expertos selecciona solo los mejores micro-lotes para ofrecerte una experiencia sensorial unica.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Hoy, mas de 5,000 miembros disfrutan cada mes de cafe recien tostado, entregado en su puerta con toda la pasion y el cuidado que merece cada grano.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">5K+</p>
                <p className="mt-1 text-sm text-muted-foreground">Miembros activos</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">12</p>
                <p className="mt-1 text-sm text-muted-foreground">Paises de origen</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">98%</p>
                <p className="mt-1 text-sm text-muted-foreground">Satisfaccion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
