"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="sobre" className={styles.about}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.leftColumn}>
          <motion.span variants={itemVariants} className={styles.subtitle}>
            Sobre mim
          </motion.span>
          <motion.h2 variants={itemVariants} className={styles.title}>
            Um olhar que conecta pessoas, espaços e possibilidades.
          </motion.h2>
        </div>
        
        <div className={styles.rightColumn}>
          <motion.p variants={itemVariants} className={styles.paragraph}>
            Cada projeto nasce de uma leitura profunda do lugar e de quem vai habitá-lo. A arquitetura aqui vai além da forma: ela cria funcionalidade, acolhimento e identidade.
          </motion.p>
          <motion.p variants={itemVariants} className={styles.paragraph}>
            Entre linhas, proporções e normas, existe um trabalho que equilibra técnica e sensibilidade — desde uma residência íntima até empreendimentos que exigem precisão documental, como a instituição de condomínio.
          </motion.p>
          <motion.p variants={itemVariants} className={styles.paragraph}>
            Construo soluções completas: conceito, projeto, regularização e experiência. Tudo com a leveza de quem acredita que a arquitetura começa muito antes do traço e continua muito depois da entrega.
          </motion.p>
          
          <motion.a 
            href="#projetos" 
            variants={itemVariants} 
            className={styles.linkButton}
          >
            Saiba mais <ArrowRight size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
