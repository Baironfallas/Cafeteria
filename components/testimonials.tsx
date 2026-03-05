import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Miembro desde 2022",
    quote:
      "Desde que me uni al club, mi ritual matutino cambio por completo. Cada mes espero con ansias el paquete con un nuevo cafe de origen unico.",
    rating: 5,
  },
  {
    name: "Carlos Ramirez",
    role: "Miembro desde 2021",
    quote:
      "Las catas mensuales son increibles. He aprendido a distinguir notas que nunca imagine. Es una comunidad maravillosa de personas apasionadas.",
    rating: 5,
  },
  {
    name: "Ana Torres",
    role: "Miembro desde 2023",
    quote:
      "La calidad del cafe es insuperable. Probe granos de Etiopia que me transportaron a otro mundo. El empaque y la atencion al detalle son impecables.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonios
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Lo que dicen nuestros miembros
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mt-6 text-foreground leading-relaxed">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
