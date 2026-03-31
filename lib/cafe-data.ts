import { Coffee, Leaf, Users, Award, Globe, Sparkles, HeartHandshake, Flame } from "lucide-react";

// Timeline unificado: 2016-2026
export const timelineEvents = [
  {
    year: 2016,
    title: "El primer origen",
    description:
      "Comenzamos con una pequeña barra de espresso y una obsesión clara: servir café trazable con tostado fresco y consistencia impecable.",
    icon: Coffee,
  },
  {
    year: 2018,
    title: "Tostado de la casa",
    description:
      "Incorporamos tuestes en lotes pequeños para controlar curva, dulzor y cuerpo. Cada perfil se prueba en mesa sensorial antes de publicarse.",
    icon: Flame,
  },
  {
    year: 2021,
    title: "Comunidad cafetera",
    description:
      "Abrimos catas y talleres para compartir técnicas de extracción, filtrados y maridaje con nuestra pastelería artesanal.",
    icon: Users,
  },
  {
    year: 2023,
    title: "Reconocimiento",
    description:
      "Ganamos el premio 'Mejor Café de Especialidad del Año' y expandimos nuestras opciones de granos de origen único.",
    icon: Award,
    highlight: true,
  },
  {
    year: 2024,
    title: "Sostenibilidad",
    description:
      "Iniciamos partnerships directas con fincas de café orgánico. Comprometidos con prácticas ecológicas en toda nuestra cadena.",
    icon: Globe,
  },
  {
    year: 2026,
    title: "Presente & Futuro",
    description:
      "Hoy celebramos a todos nuestros clientes que hacen posible esta historia. Innovando cada día para ofrecer la mejor experiencia premium.",
    icon: Sparkles,
    highlight: true,
  },
];

// Milestones con imágenes (para página de historia)
export const milestones = [
  {
    year: "2016",
    title: "El primer origen",
    description:
      "Comenzamos con una pequeña barra de espresso y una obsesión clara: servir café trazable con tostado fresco y consistencia impecable.",
    image: "/images/espresso.jpg",
  },
  {
    year: "2018",
    title: "Tostado de la casa",
    description:
      "Incorporamos tuestes en lotes pequeños para controlar curva, dulzor y cuerpo. Cada perfil se prueba en mesa sensorial antes de publicarse.",
    image: "/images/coffee-beans.jpg",
  },
  {
    year: "2021",
    title: "Comunidad cafetera",
    description:
      "Abrimos catas y talleres para compartir técnicas de extracción, filtrados y maridaje con nuestra pastelería artesanal.",
    image: "/images/pastries.jpg",
  },
  {
    year: "2024",
    title: "Sostenibilidad & Experiencia",
    description:
      "Consolidamos una propuesta premium: baristas formados, partnerships directas con fincas, y un espacio pensado para pausar, conversar y disfrutar.",
    image: "/images/hero-coffee.jpg",
  },
];

// Estadísticas unificadas
export const stats = [
  { value: "100%", label: "Orgánico" },
  { value: "24h", label: "Tostado Fresco" },
  { value: "50+", label: "Variedades" },
];

// Valores unificados
export const values = [
  {
    icon: Leaf,
    title: "Origen responsable",
    description:
      "Trabajamos con fincas que priorizan prácticas sostenibles y comercio justo.",
  },
  {
    icon: Flame,
    title: "Tueste preciso",
    description:
      "Ajustamos cada curva para resaltar notas naturales sin perder equilibrio en taza.",
  },
  {
    icon: HeartHandshake,
    title: "Servicio cercano",
    description:
      "Convertimos cada visita en una experiencia cálida, cuidada y memorable.",
  },
  {
    icon: Award,
    title: "Calidad constante",
    description:
      "Estándares diarios de calibración para ofrecer la misma excelencia todo el año.",
  },
];
