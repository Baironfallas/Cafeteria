"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Award, Leaf } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    name: "María García",
    role: "Head Barista",
    specialty: "Espresso & Latte Art",
    bio: "Campeona nacional de café 2023. Experta en técnicas de extracción y perfeccionamiento de bebidas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    icon: <Award className="h-5 w-5" />,
  },
  {
    name: "Carlos Mendez",
    role: "Coffee Roaster",
    specialty: "Tueste Artesanal",
    bio: "Tuesta cada lote con precisión. Especialista en perfiles de origen único y desarrollo de sabor.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    icon: <Coffee className="h-5 w-5" />,
  },
  {
    name: "Sofia Lopez",
    role: "Sommelier de Café",
    specialty: "Catas & Maridaje",
    bio: "Certificada en Q-Grader. Diseña experiencias de café y maridajes con nuestra pastelería.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    name: "David Rojas",
    role: "Barista Customer",
    specialty: "Experiencia al Cliente",
    bio: "Experto en crear momentos memorables. Se especializa en personalizaciones y atención premium.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    icon: <Coffee className="h-5 w-5" />,
  },
];

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Nuestro Equipo
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Expertos en{" "}
            <em className="not-italic text-accent">Cada Taza</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Conoce a los baristas, tostadores y especialistas que transforman
            cada grano en una experiencia memorable. Pasión, técnica y dedicación
            en cada rol.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group rounded-2xl overflow-hidden border border-border/60 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Role Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-lg backdrop-blur">
                  <span className="text-accent">{member.icon}</span>
                  {member.role}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {member.specialty}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>

                {/* Social/Contact hint */}
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-muted-foreground/60">
                    Síguenos en redes para conocer más →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 rounded-2xl border border-accent/40 bg-linear-to-br from-accent/10 to-primary/10 p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            Conoce a Nuestro Equipo en Persona
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            Visítanos en Café Aura y disfruta de una conversación con nuestros
            expertos. Cada miembro del equipo está listo para compartir su pasión
            por el café.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-foreground bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Visitar Café Aura
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
