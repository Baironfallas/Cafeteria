"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
}

export function MenuPage() {
  const coffees: MenuItem[] = [
    { name: "Espresso Clasico", price: "$4.50" },
    { name: "Double Espresso", price: "$5.00" },
    { name: "Cappuccino", price: "$4.00" },
    { name: "Latte", price: "$4.00" },
    { name: "Americano", price: "$3.00" },
    { name: "Mocha", price: "$4.00" },
    { name: "Flat White", price: "$2.00" },
    { name: "Short Black", price: "$2.00" },
    { name: "Long Black", price: "$2.00" },
  ];

  const teas: MenuItem[] = [
    { name: "White", price: "$2.00" },
    { name: "Green", price: "$2.00" },
    { name: "Black", price: "$2.00" },
    { name: "Oolong", price: "$2.00" },
    { name: "Puer", price: "$2.00" },
  ];

  const pastries: MenuItem[] = [
    { name: "Croissant de Mantequilla", price: "$3.80" },
    { name: "Pastel de Chocolate", price: "$5.50" },
    { name: "Tarta de Frutas Frescas", price: "$4.90" },
    { name: "Pain au Chocolat", price: "$4.20" },
    { name: "Cheesecake de Vainilla", price: "$5.80" },
    { name: "Tarta de Almendra", price: "$5.30" },
  ];

  const desserts: MenuItem[] = [
    { name: "Roll de Canela", price: "$4.60" },
    { name: "Brownie Fudge", price: "$4.80" },
    { name: "Lemon Meringue Pie", price: "$4.00" },
    { name: "Oatmeal Cookie", price: "$3.00" },
    { name: "Apple Turnover", price: "$3.00" },
    { name: "Cinnamon Roll", price: "$3.00" },
  ];

  const sandwiches: MenuItem[] = [
    { name: "Cheese Salad", price: "$4.00" },
    { name: "Tuna Salad", price: "$4.00" },
    { name: "Hummus", price: "$4.00" },
    { name: "Brie Cheese", price: "$4.00" },
    { name: "Egg Mayo", price: "$4.00" },
  ];

  const MenuColumn = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div className="flex flex-col">
      <h3 className="font-serif text-2xl font-bold text-accent mb-6 border-b-2 border-accent/30 pb-3 tracking-tight">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-baseline gap-4 group">
            <span className="text-foreground/80 font-serif text-sm md:text-base group-hover:text-accent transition-colors duration-300">
              {item.name}
            </span>
            <div className="flex-grow border-b border-border/50 group-hover:border-accent/50 transition-colors" />
            <span className="text-accent font-serif text-sm md:text-base font-semibold whitespace-nowrap ml-2">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/5 via-background to-background py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button - Professional positioning */}
          <div className="mb-8 flex">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300 border border-accent/30 hover:border-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Regresar
            </Link>
          </div>

          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="text-accent text-2xl">✦</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-2">
              Menú Completo
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2 leading-tight">
              Café Aura
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Especialidades y Delicias del Día
            </p>
          </div>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="text-accent text-2xl">✦</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 pb-16 border-b-2 border-border/50 mb-16">
          <MenuColumn title="Cafés" items={coffees} />
          <MenuColumn title="Tés" items={teas} />
          <MenuColumn title="Repostería" items={pastries} />
          <MenuColumn title="Postres" items={desserts} />
          <MenuColumn title="Sándwiches" items={sandwiches} />
        </div>

        {/* Featured Image Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent text-center mb-4">
              Nuestras Especialidades
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">
              Hecho con Pasión
            </h2>
          </div>

          <div className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-lg">
            <Image
              src="/images/hero-coffee.jpg"
              alt="Café Aura Specialties"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          <p className="mt-8 text-center text-muted-foreground max-w-2xl leading-relaxed">
            Cada bebida y postre es preparado con ingredientes premium y cuidado artesanal. Creemos que la experiencia 
            comienza desde el primer sorbo.
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Sobre Nuestro Menú</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seleccionamos cuidadosamente cada café, té y postre para ofrecerte una experiencia inigualable. 
                Todos nuestros ingredientes provienen de proveedores de confianza que comparten nuestro compromiso 
                con la calidad.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Horarios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-accent">Lunes - Viernes:</span> 7:00 AM - 9:00 PM</li>
                <li><span className="font-semibold text-accent">Sábado:</span> 8:00 AM - 10:00 PM</li>
                <li><span className="font-semibold text-accent">Domingo:</span> 8:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="text-accent text-2xl">✦</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          <p className="font-serif text-foreground text-lg mb-4">Café Aura</p>
          <p className="text-muted-foreground">
            Centro Comercial Aura | 987 Calle Principal | Tu Ciudad
          </p>
          <p className="text-accent font-semibold mt-2">hola@cafeaura.com | +1 (555) 123-4567</p>

          {/* Button Section */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
