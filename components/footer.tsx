import { Coffee } from "lucide-react"

const footerLinks = {
  club: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Nuestros cafes", href: "#" },
    { label: "Eventos", href: "#" },
    { label: "Blog", href: "#" },
  ],
  soporte: [
    { label: "Preguntas frecuentes", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Envios", href: "#" },
    { label: "Devoluciones", href: "#" },
  ],
  legal: [
    { label: "Terminos de servicio", href: "#" },
    { label: "Politica de privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#hero" className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">
                Coffee Lovers Club
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu destino para el mejor cafe de especialidad. Granos seleccionados, comunidad apasionada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">El Club</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.club.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Soporte</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"2026 Coffee Lovers Club. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
