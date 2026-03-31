"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/components/ui/use-mobile";

const galleryItems = [
  // AMBIENTE (8 items)
  {
    id: 1,
    title: "Bar de Espresso Artesanal",
    category: "Ambiente",
    image: "/images/espresso.jpg",
    description: "Nuestro espacio principal con equipos de última generación",
  },
  {
    id: 2,
    title: "Área de Catas Sensoriales",
    category: "Ambiente",
    image: "/images/hero-coffee.jpg",
    description: "Sala dedicada para degustaciones y eventos premium",
  },
  {
    id: 3,
    title: "Rincón de Lectura Acogedor",
    category: "Ambiente",
    image: "/images/hero-coffee.jpg",
    description: "Espacio de descanso con iluminación cálida y acogedora",
  },
  {
    id: 4,
    title: "Mesas Comunitarias",
    category: "Ambiente",
    image: "/images/cappuccino.jpg",
    description: "Donde los clientes comparten experiencias y conexiones",
  },
  {
    id: 5,
    title: "Fachada Elegante",
    category: "Ambiente",
    image: "/images/hero-coffee.jpg",
    description: "Entrada principal con diseño contemporáneo premium",
  },
  {
    id: 6,
    title: "Mostrador de Atención",
    category: "Ambiente",
    image: "/images/latte.jpg",
    description: "Punto de servicio con equipamientos profesionales",
  },
  {
    id: 7,
    title: "Terraza Exterior",
    category: "Ambiente",
    image: "/images/espresso.jpg",
    description: "Espacio al aire libre para disfrutar del ambiente",
  },
  {
    id: 8,
    title: "Lounge Premium",
    category: "Ambiente",
    image: "/images/hero-coffee.jpg",
    description: "Zona VIP con confort y privacidad absoluta",
  },
  // TÉCNICA (8 items)
  {
    id: 9,
    title: "Extracción de Espresso",
    category: "Técnica",
    image: "/images/espresso.jpg",
    description: "Dominio de la extracción con presión y temperatura perfecta",
  },
  {
    id: 10,
    title: "Latte Art Avanzado",
    category: "Técnica",
    image: "/images/latte.jpg",
    description: "Diseños intrincados con precisión milimétrica en cada taza",
  },
  {
    id: 11,
    title: "Vaporización de Leche",
    category: "Técnica",
    image: "/images/cappuccino.jpg",
    description: "Técnica de microespuma para texturas perfectas",
  },
  {
    id: 12,
    title: "Vertido Manual (Pour Over)",
    category: "Técnica",
    image: "/images/coffee-beans.jpg",
    description: "Control total del vertido para extraer máximo sabor",
  },
  {
    id: 13,
    title: "Preparación con Prensa Francesa",
    category: "Técnica",
    image: "/images/hero-coffee.jpg",
    description: "Inmersión completa para cuerpo y sabor intenso",
  },
  {
    id: 14,
    title: "Extracción con AeroPress",
    category: "Técnica",
    image: "/images/espresso.jpg",
    description: "Método innovador con presión de aire controlada",
  },
  {
    id: 15,
    title: "Cold Brew Profesional",
    category: "Técnica",
    image: "/images/latte.jpg",
    description: "Extracción en frío por 18 horas con precisión",
  },
  {
    id: 16,
    title: "Filtrado Especializado",
    category: "Técnica",
    image: "/images/cappuccino.jpg",
    description: "Uso de filtros especiales para claridad y pureza",
  },
  // PROCESO (8 items)
  {
    id: 17,
    title: "Granos Verdes Seleccionados",
    category: "Proceso",
    image: "/images/coffee-beans.jpg",
    description: "Origen único de fincas certificadas sostenibles",
  },
  {
    id: 18,
    title: "Tostado Artesanal",
    category: "Proceso",
    image: "/images/espresso.jpg",
    description: "Control de lotes pequeños y curva de tostado personalizada",
  },
  {
    id: 19,
    title: "Enfriamiento Controlado",
    category: "Proceso",
    image: "/images/coffee-beans.jpg",
    description: "Proceso crucial para fijar sabores y aromas",
  },
  {
    id: 20,
    title: "Reposo Post-Tostado",
    category: "Proceso",
    image: "/images/hero-coffee.jpg",
    description: "Estabilización de CO2 para óptima extracción",
  },
  {
    id: 21,
    title: "Molienda Precisión",
    category: "Proceso",
    image: "/images/coffee-beans.jpg",
    description: "Ajuste fino del tamaño según método de preparación",
  },
  {
    id: 22,
    title: "Control de Humedad",
    category: "Proceso",
    image: "/images/espresso.jpg",
    description: "Preservación ideal del grano para máxima frescura",
  },
  {
    id: 23,
    title: "Prueba Sensorial",
    category: "Proceso",
    image: "/images/latte.jpg",
    description: "Cupping profesional de cada lote antes de servir",
  },
  {
    id: 24,
    title: "Empaque Protector",
    category: "Proceso",
    image: "/images/cappuccino.jpg",
    description: "Almacenamiento con válvulas especiales de frescura",
  },
  // PRODUCTOS (8 items)
  {
    id: 25,
    title: "Cappuccino Premium",
    category: "Productos",
    image: "/images/cappuccino.jpg",
    description: "Espuma aterciopelada con sabor equilibrado",
  },
  {
    id: 26,
    title: "Espresso Clásico",
    category: "Productos",
    image: "/images/espresso.jpg",
    description: "Intenso doble shot con crema dorada perfecta",
  },
  {
    id: 27,
    title: "Flat White",
    category: "Productos",
    image: "/images/latte.jpg",
    description: "Textura sedosa con latte art y sabor equilibrado",
  },
  {
    id: 28,
    title: "Pastelería Artesanal",
    category: "Productos",
    image: "/images/pastries.jpg",
    description: "Elaboraciones frescas diarias de nuestro horno",
  },
  {
    id: 29,
    title: "Croissants de Mantequilla",
    category: "Productos",
    image: "/images/croissant.jpg",
    description: "Crujientes por fuera, suaves por dentro",
  },
  {
    id: 30,
    title: "Torta de Chocolate",
    category: "Productos",
    image: "/images/chocolate-cake.jpg",
    description: "Ganache artesanal con capas de mousse",
  },
  {
    id: 31,
    title: "Tarta de Frutas Frescas",
    category: "Productos",
    image: "/images/fruit-tart.jpg",
    description: "Frutos rojos de temporada sobre crema pastelera",
  },
  {
    id: 32,
    title: "Cold Brew Premium",
    category: "Productos",
    image: "/images/hero-coffee.jpg",
    description: "Extracción en frío suave y refrescante",
  },
  // EXPERIENCIA (8 items)
  {
    id: 33,
    title: "Cata de Café Profesional",
    category: "Experiencia",
    image: "/images/hero-coffee.jpg",
    description: "Degustación guiada de diferentes orígenes y perfiles",
  },
  {
    id: 34,
    title: "Masterclass de Barista",
    category: "Experiencia",
    image: "/images/latte.jpg",
    description: "Aprende técnicas profesionales de extracción y arte",
  },
  {
    id: 35,
    title: "Tarde de Conexión",
    category: "Experiencia",
    image: "/images/cappuccino.jpg",
    description: "Espacio comunitario donde se crean amistades duraderas",
  },
  {
    id: 36,
    title: "Eventos Exclusivos",
    category: "Experiencia",
    image: "/images/hero-coffee.jpg",
    description: "Reuniones privadas y lanzamientos de nuevos productos",
  },
  {
    id: 37,
    title: "Viaje de Origen",
    category: "Experiencia",
    image: "/images/coffee-beans.jpg",
    description: "Conoce las fincas de donde proviene nuestro café",
  },
  {
    id: 38,
    title: "Workshop Sostenibilidad",
    category: "Experiencia",
    image: "/images/espresso.jpg",
    description: "Aprende sobre prácticas ecológicas en la industria cafetera",
  },
  {
    id: 39,
    title: "Desayuno Gastronómico",
    category: "Experiencia",
    image: "/images/pastries.jpg",
    description: "Maridaje perfecto de café con pastelería artesanal",
  },
  {
    id: 40,
    title: "Ambiente de Bienestar",
    category: "Experiencia",
    image: "/images/hero-coffee.jpg",
    description: "Espacio pensado para relajación y reconexión personal",
  },
];

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const isMobile = useIsMobile();

  const categories = [
    "Todos",
    "Ambiente",
    "Proceso",
    "Experiencia",
    "Productos",
    "Técnica",
  ];

  const itemsToShow = isMobile ? 4 : 8;
  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems.slice(0, itemsToShow)
      : galleryItems.filter((item) => item.category === selectedCategory);

  const currentIndex = galleryItems.findIndex((item) => item.id === selectedId);
  const currentItem = galleryItems[currentIndex];

  const handleNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      setSelectedId(galleryItems[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedId(galleryItems[currentIndex - 1].id);
    }
  };

  return (
    <section id="gallery" className="relative bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Galería Visual
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Descubre Nuestro Mundo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explora cada rincón de nuestra cafetería, desde el proceso de
            tostado hasta los espacios donde se crean momentos inolvidables.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedId(item.id)}
                className="group relative h-64 cursor-pointer overflow-hidden rounded-lg border border-border transition-all hover:border-accent"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-1 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-200">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Image Container */}
              <div className="relative h-96 w-full overflow-hidden rounded-xl md:h-[500px]">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-6 text-center text-white md:mt-8">
                <div className="mb-2 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold">
                  {currentItem.category}
                </div>
                <h3 className="font-serif text-3xl font-bold md:text-4xl">
                  {currentItem.title}
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-300">
                  {currentItem.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="rounded-full border border-white/30 p-2 text-white transition-all hover:border-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex gap-2">
                  {galleryItems.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-8 bg-accent"
                          : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === galleryItems.length - 1}
                  className="rounded-full border border-white/30 p-2 text-white transition-all hover:border-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 md:top-8 md:right-8"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Counter */}
              <div className="mt-4 text-center text-sm text-gray-400">
                {currentIndex + 1} / {galleryItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
