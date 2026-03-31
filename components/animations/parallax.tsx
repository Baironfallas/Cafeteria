"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxImageProps {
  children: React.ReactNode;
  offset?: number;
}

export function ParallaxImage({ children, offset = 50 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        y: scrollY * 0.3,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}
