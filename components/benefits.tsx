import { Bean, Truck, Users, CalendarDays, Award, Gift } from "lucide-react"

const benefits = [
  {
    icon: Bean,
    title: "Granos de Origen Unico",
    description:
      "Seleccionamos los mejores granos de fincas reconocidas mundialmente, tostados con precision artesanal.",
  },
  {
    icon: Truck,
    title: "Entrega Mensual a tu Puerta",
    description:
      "Recibe tu cafe favorito cada mes sin preocuparte. Empacado al vacio para preservar la frescura.",
  },
  {
    icon: Users,
    title: "Comunidad Exclusiva",
    description:
      "Conecta con otros amantes del cafe en eventos de cata y talleres de barismo.",
  },
  {
    icon: CalendarDays,
    title: "Eventos y Talleres",
    description:
      "Acceso prioritario a catas mensuales, masterclasses y visitas a fincas cafeteras.",
  },
  {
    icon: Award,
    title: "Cafes de Edicion Limitada",
    description:
      "Acceso exclusivo a micro-lotes y ediciones especiales no disponibles al publico.",
  },
  {
    icon: Gift,
    title: "Regalos de Bienvenida",
    description:
      "Kit de bienvenida con accesorios de cafe artesanales al unirte al club.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Por que elegirnos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Una experiencia de cafe sin igual
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Cada detalle esta pensado para que vivas el cafe de una manera que nunca imaginaste.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl bg-card p-8 transition-all hover:shadow-lg border border-border"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
