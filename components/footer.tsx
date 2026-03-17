"use client";

import { Coffee, MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "Menu", href: "/#menu" },
  { label: "Nuestra Historia", href: "/historia" },
  { label: "Membresia", href: "/#membership" },
  { label: "Contacto", href: "/#contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-bold">
                {"Cafe Aura"}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Creando momentos de alegria, una taza a la vez. Experimenta la
              verdadera esencia del cafe premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Links Rapidos
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                123 Coffee Lane, Brew City
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                hello@cafeaura.com
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {"Lun - Dom: 7:00 AM - 9:00 PM"}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-primary-foreground/60">
              Suscribete para recibir ofertas especiales y novedades.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electronico"
                className="rounded-sm border border-primary-foreground/20 bg-transparent px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/80"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-center text-xs text-primary-foreground/40">
            {"© 2026 Cafe Aura. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
