"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.background}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 2.0 }}
      />
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          >
            Projetos que unem<br />
            propósito, design e<br />
            <em>obras sem imprevisto.</em>
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
          >
            Espaços concebidos com propósito, precisão e sensibilidade do desenho ao documento final.
          </motion.p>
        </div>

        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.9, ease: "easeOut" }}
        >
          <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} className={styles.ghostButton}>
            Explorar <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
