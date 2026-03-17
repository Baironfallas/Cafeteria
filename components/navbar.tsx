"use client";

import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "Menu", href: "/#menu" },
  { label: "Nuestra Historia", href: "/historia" },
  { label: "Contacto", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/#hero" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-accent" />
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            {"Cafe Aura"}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#membership"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          Reservar Mesa
        </Link>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#membership"
                className="mt-2 inline-block rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                Reservar Mesa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
