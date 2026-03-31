"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Flame, Snowflake, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeInScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in-scroll";
import { useState } from "react";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
  badge?: string;
  category?: "coffee" | "cold" | "tea" | "pastry";
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const coffees: MenuItem[] = [
    {
      name: "Espresso Clásico",
      price: 4.5,
      description: "Intenso doble shot con crema dorada",
      image: "/images/espresso.jpg",
      badge: "Bestseller",
      category: "coffee",
    },
    {
      name: "Velvet Latte",
      price: 5.2,
      description: "Leche vaporizada suave con espresso",
      image: "/images/latte.jpg",
      badge: "Premium",
      category: "coffee",
    },
    {
      name: "Cappuccino",
      price: 6.0,
      description: "Espresso, leche y espuma a partes iguales",
      image: "/images/cappuccino.jpg",
      badge: "Clásico",
      category: "coffee",
    },
    {
      name: "Mocha de la Casa",
      price: 6.4,
      description: "Chocolate oscuro con espresso de origen único",
      image: "/images/chocolate-cake.jpg",
      badge: "Especial",
      category: "coffee",
    },
    {
      name: "Flat White Reserve",
      price: 5.9,
      description: "Textura sedosa y sabor equilibrado",
      image: "/images/cappuccino.jpg",
      category: "coffee",
    },
    {
      name: "Caramel Macchiato",
      price: 6.3,
      description: "Espresso, leche cremosa y caramelo artesanal",
      image: "/images/latte.jpg",
      category: "coffee",
    },
  ];

  const coldDrinks: MenuItem[] = [
    {
      name: "Ice Cappuccino",
      price: 10.0,
      description: "Cappuccino helado con espresso fresco",
      image: "/images/cappuccino.jpg",
      badge: "Refrescante",
      category: "cold",
    },
    {
      name: "Café Shake",
      price: 15.0,
      description: "Café, leche, helado y chocolate gourmet",
      image: "/images/latte.jpg",
      badge: "Indulgencia",
      category: "cold",
    },
    {
      name: "Affogato",
      price: 13.0,
      description: "Helado de vainilla cubierto con espresso intenso",
      image: "/images/espresso.jpg",
      badge: "Clásico",
      category: "cold",
    },
    {
      name: "Café Frappé",
      price: 19.0,
      description: "Helado granizado con café y shaker perfecto",
      image: "/images/coffee-beans.jpg",
      badge: "Premium",
      category: "cold",
    },
  ];

  const teas: MenuItem[] = [
    {
      name: "Xícara de Chá",
      price: 6.5,
      description: "Variedades de sabores disponibles",
      image: "/images/pastries.jpg",
      badge: "Orgánico",
      category: "tea",
    },
    {
      name: "Chá Latte",
      price: 6.5,
      description: "Chá con especias y leche artesanal",
      image: "/images/pastries.jpg",
      category: "tea",
    },
  ];

  const pastries: MenuItem[] = [
    {
      name: "Croissant de Mantequilla",
      price: 3.8,
      description: "Crujiente por fuera, suave por dentro",
      image: "/images/croissant.jpg",
      badge: "Francés",
      category: "pastry",
    },
    {
      name: "Pastel de Chocolate",
      price: 5.5,
      description: "Ganache de chocolate oscuro artesanal",
      image: "/images/chocolate-cake.jpg",
      badge: "Bestseller",
      category: "pastry",
    },
    {
      name: "Tarta de Frutas",
      price: 4.9,
      description: "Crema pastelera con frutos frescos",
      image: "/images/fruit-tart.jpg",
      category: "pastry",
    },
    {
      name: "Pain au Chocolat",
      price: 4.2,
      description: "Laminado francés con chocolate premium",
      image: "/images/croissant.jpg",
      category: "pastry",
    },
    {
      name: "Cheesecake de Vainilla",
      price: 5.8,
      description: "Textura cremosa con toque vainilla natural",
      image: "/images/pastries.jpg",
      category: "pastry",
    },
    {
      name: "Tarta de Almendra",
      price: 5.3,
      description: "Crema de almendra caramelizada",
      image: "/images/pastries.jpg",
      category: "pastry",
    },
  ];

  const MenuCard = ({
    item,
    index,
    featured,
  }: {
    item: MenuItem;
    index: number;
    featured?: boolean;
  }) => (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -6 }}
        className={`rounded-3xl border border-border/30 bg-card/60 backdrop-blur-xl shadow-md hover:shadow-2xl overflow-hidden group transition-all duration-300 flex flex-col h-full ${
          featured ? "lg:col-span-2 lg:row-span-2 border-accent/50" : ""
        }`}
      >
        {/* Image Section */}
        <div
          className={`relative overflow-hidden bg-linear-to-br from-accent/15 to-primary/10 ${featured ? "h-64" : "h-52"}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Flame className="h-20 w-20 text-accent/20" />
            </div>
          )}

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-card/70 via-card/20 to-transparent" />

          {/* Badge - Enhanced */}
          {item.badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider shadow-xl shadow-accent/30 backdrop-blur-sm"
            >
              {item.badge}
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow">
          <h3
            className={`font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2 ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {item.name}
          </h3>

          {item.description && (
            <p
              className={`text-muted-foreground mb-4 line-clamp-2 grow ${
                featured ? "text-sm" : "text-sm"
              }`}
            >
              {item.description}
            </p>
          )}

          {/* Price Section - Always Visible & Prominent */}
          <div className="mt-auto pt-4 border-t border-border/40">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-bold">
                Precio
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-base text-accent/70">$</span>
                <span
                  className={`font-serif font-bold text-accent ${
                    featured ? "text-4xl" : "text-3xl"
                  }`}
                >
                  {item.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-accent text-accent-foreground font-bold uppercase tracking-wide text-sm hover:shadow-xl shadow-accent/20 transition-shadow duration-300"
          >
            Ordenar Ahora
          </motion.button>
        </div>
      </motion.div>
    </StaggerItem>
  );

  // Featured Coffee (Espresso Clásico)
  const featuredCoffee = coffees[0];

  const categories = [
    { id: "all", label: "Todos", icon: null },
    { id: "coffee", label: "Cafés", icon: Flame },
    { id: "cold", label: "Gelados", icon: Snowflake },
    { id: "tea", label: "Chás", icon: Leaf },
    { id: "pastry", label: "Postres", icon: null },
  ];

  const allItems = [...coffees, ...coldDrinks, ...teas, ...pastries];

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section - Reduced Height */}
      <div className="relative bg-linear-to-b from-primary/25 via-background to-background py-12 md:py-16 px-4 md:px-6">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            className="mb-8 flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-300 border border-accent/30 hover:border-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Link>
          </motion.div>

          {/* Title Section */}
          <FadeInScroll>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent mb-3">
                ☕ Menú Completo
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
                Café Aura
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Nuestras Especialidades
              </p>
              <p className="text-base md:text-lg text-muted-foreground italic">
                Cada bebida cuenta una historia de pasión, calidad y tradición
              </p>
            </div>
          </FadeInScroll>
        </div>
      </div>

      {/* Main Menu Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        {/* Category Filter */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Filtra por categoría
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-accent text-background shadow-xl shadow-accent/30"
                      : "bg-card/70 text-foreground border border-border/60 hover:border-accent/50 hover:bg-card"
                  }`}
                >
                  {Icon && <Icon className="inline h-4 w-4 mr-2" />}
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8">
            Nuestro Menú
          </p>
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <MenuCard key={idx} item={item} index={idx} featured={false} />
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-card/50 rounded-2xl border border-border/40 p-8 hover:border-accent/50 transition-all hover:bg-card/70 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="h-1.5 w-10 bg-accent rounded-full" />⏰ Horarios
            </h3>
            <ul className="space-y-5">
              {[
                { day: "Lunes - Viernes", hours: "7:00 AM - 9:00 PM" },
                { day: "Sábado", hours: "8:00 AM - 10:00 PM" },
                { day: "Domingo", hours: "8:00 AM - 8:00 PM" },
              ].map((schedule, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center pb-4 border-b border-border/30 last:border-b-0"
                >
                  <span className="font-semibold text-foreground">
                    {schedule.day}
                  </span>
                  <span className="text-accent font-bold text-sm">
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-card/50 rounded-2xl border border-border/40 p-8 hover:border-accent/50 transition-all hover:bg-card/70 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="h-1.5 w-10 bg-accent rounded-full" />
              📞 Contacto
            </h3>
            <div className="space-y-5">
              <div className="pb-4 border-b border-border/30">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  📍 Ubicación
                </p>
                <p className="text-foreground font-semibold">
                  Calle Principal 987, Centro
                </p>
              </div>
              <div className="pb-4 border-b border-border/30">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  ✉️ Email
                </p>
                <p className="text-accent font-semibold">hola@cafeaura.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  📱 Teléfono
                </p>
                <p className="text-accent font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA + Footer Section - Premium */}
        <motion.div
          className="rounded-3xl overflow-hidden bg-linear-to-br from-accent/15 via-card/50 to-primary/10 border-2 border-accent/40 p-12 md:p-20 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="text-5xl">☕</span>
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Listo para Probar?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ven a visitarnos y disfruta de la mejor experiencia cafetera
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="https://wa.me/00000000"
                target="_blank"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded-xl shadow-xl shadow-accent/30 hover:shadow-2xl transition-all"
              >
                📱 Contáctanos por WhatsApp
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card text-foreground font-bold uppercase tracking-wide rounded-xl border border-border/60 shadow-md hover:shadow-lg transition-all hover:border-accent/50"
              >
                📞 Llamarnos
              </motion.a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card/40 border border-border/40 hover:border-accent/50 transition-all">
                <p className="text-sm text-muted-foreground mb-2 font-semibold">
                  UBICACIÓN
                </p>
                <p className="text-foreground font-bold">Calle Principal 987</p>
              </div>
              <div className="p-6 rounded-xl bg-card/40 border border-border/40 hover:border-accent/50 transition-all">
                <p className="text-sm text-muted-foreground mb-2 font-semibold">
                  EMAIL
                </p>
                <p className="text-accent font-bold">hola@cafeaura.com</p>
              </div>
              <div className="p-6 rounded-xl bg-card/40 border border-border/40 hover:border-accent/50 transition-all">
                <p className="text-sm text-muted-foreground mb-2 font-semibold">
                  TELÉFONO
                </p>
                <p className="text-accent font-bold">+1 (555) 123-4567</p>
              </div>
            </div>

            <motion.div
              className="flex items-center justify-center gap-4 pt-8 border-t border-border/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card/60 text-foreground font-semibold hover:bg-card border border-border/60 hover:border-accent/50 transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al Inicio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
