"use client";

import { paymentMethods } from "@/lib/cafe-data";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Variants } from "framer-motion";

export function PaymentMethods() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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
    <section className="py-12 md:py-16 px-3 md:px-8 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Premium */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-3 md:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 rounded-full text-accent text-xs md:text-sm font-semibold border border-accent/20">
              ✓ Múltiples opciones de pago
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-3 md:mb-6 text-foreground">
            Paga de Tu Forma Preferida
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Ofrecemos múltiples formas de pago seguras y convenientes para que
            disfrutes de nuestro café sin inconvenientes
          </p>
        </motion.div>

        {/* Payment Methods Grid - Mejorado */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 mb-6 md:mb-8"
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
            const accentStyle =
              accentVariations[index % accentVariations.length];

            return (
              <motion.div
                key={method.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="perspective"
              >
                <div
                  className={`h-full rounded-xl md:rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-border to-border/50`}
                >
                  <Card
                    className={`h-full flex flex-col items-center justify-center p-3 md:p-6 bg-card hover:shadow-2xl transition-all duration-400 group cursor-pointer border border-border/50 relative overflow-hidden ${accentStyle}`}
                  >
                    {/* Contenido */}
                    <motion.div
                      className="relative z-10 flex flex-col items-center justify-center h-full"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="p-2.5 md:p-4 bg-accent/20 border border-accent/40 rounded-xl md:rounded-2xl mb-2 md:mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-5 h-5 md:w-8 md:h-8 text-accent" />
                      </motion.div>

                      <h3 className="text-xs md:text-base font-semibold text-foreground text-center mb-1 md:mb-2 group-hover:text-accent transition-colors duration-300">
                        {method.name}
                      </h3>

                      <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                        {method.description}
                      </p>

                      {/* Badge animado */}
                      <motion.div
                        className="mt-1.5 md:mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-accent" />
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


        {/* CTA Button */}
        <motion.div
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/menu">
            <button className="px-6 md:px-10 py-3 md:py-4 bg-accent text-primary rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-2xl hover:bg-accent/90 transition-all duration-300">
              Explorar Nuestro Menú
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
