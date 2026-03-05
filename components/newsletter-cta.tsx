"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewsletterCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
          Tu primer cafe va por nuestra cuenta
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
          Suscribete a nuestro newsletter y recibe un descuento exclusivo en tu primera membresia. Ademas, te enviaremos tips de preparacion y novedades.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl bg-primary-foreground/10 p-8">
            <p className="text-xl font-semibold text-primary-foreground">
              Gracias por suscribirte
            </p>
            <p className="mt-2 text-primary-foreground/80">
              Pronto recibiras tu codigo de descuento en tu correo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electronico
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Suscribirme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
