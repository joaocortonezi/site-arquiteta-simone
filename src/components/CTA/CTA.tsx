"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Tem alguma ideia<br />de projeto?
        </motion.h2>
        
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Vamos transformar o seu conceito em um projeto viável e legalmente estruturado. Inicie uma conversa para entendermos o seu momento.
        </motion.p>

        <motion.a 
          href="https://wa.me/5566996006518?text=Ol%C3%A1!%20Vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Falar no WhatsApp <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
