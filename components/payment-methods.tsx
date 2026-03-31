"use client";

import { paymentMethods } from "@/lib/cafe-data";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function PaymentMethods() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Premium */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold border border-accent/20">
              ✓ Múltiples opciones de pago
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Paga de Tu Forma Preferida
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos múltiples formas de pago seguras y convenientes para que disfrutes de nuestro café sin inconvenientes
          </p>
        </motion.div>

        {/* Payment Methods Grid - Mejorado */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            const accentVariations = [
              "bg-accent/20 border-accent/30 hover:bg-accent/30",
              "bg-accent/15 border-accent/25 hover:bg-accent/25",
              "bg-accent/20 border-accent/30 hover:bg-accent/30",
              "bg-accent/15 border-accent/25 hover:bg-accent/25",
              "bg-accent/20 border-accent/30 hover:bg-accent/30",
            ];
            const accentStyle = accentVariations[index % accentVariations.length];

            return (
              <motion.div
                key={method.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="perspective"
              >
                <div className={`h-full rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-border to-border/50`}>
                  <Card className={`h-full flex flex-col items-center justify-center p-8 bg-card hover:shadow-2xl transition-all duration-400 group cursor-pointer border border-border/50 relative overflow-hidden ${accentStyle}`}>
                    {/* Contenido */}
                    <motion.div
                      className="relative z-10 flex flex-col items-center justify-center h-full"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="p-5 bg-accent/20 border border-accent/40 rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-accent" />
                      </motion.div>

                      <h3 className="text-lg font-semibold text-foreground text-center mb-2 group-hover:text-accent transition-colors duration-300">
                        {method.name}
                      </h3>

                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {method.description}
                      </p>

                      {/* Badge animado */}
                      <motion.div
                        className="mt-4 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold text-accent">
                          Disponible
                        </span>
                      </motion.div>
                    </motion.div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info Section - Mejorada */}
        <motion.div
          className="bg-card rounded-3xl p-10 md:p-16 border border-accent/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <motion.h3
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
              whileInView={{ x: 0 }}
              initial={{ x: -20, opacity: 0 }}
              viewport={{ once: true }}
            >
              🛡️ Seguridad y Confianza
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🔒",
                  title: "100% Seguro",
                  text: "Todos los pagos son procesados con encriptación SSL de nivel bancario",
                },
                {
                  emoji: "✅",
                  title: "Sin Comisiones",
                  text: "El precio que ves es el que pagas, sin sorpresas ocultas",
                },
                {
                  emoji: "⚡",
                  title: "Procesos Rápidos",
                  text: "Confirmación instantánea de tus transacciones en cualquier método",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl">{item.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/menu">
            <motion.button
              className="px-10 py-4 bg-accent text-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-accent/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Nuestro Menú
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
