"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import styles from "./Specialty.module.css";

export default function Specialty() {
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
    <section id="especialidade" className={styles.specialty}>
      <div className={styles.container}>
        <motion.div 
          className={styles.leftColumn}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={itemVariants} className={styles.subtitle}>
            Instituição de Condomínio
          </motion.span>
          <motion.h2 variants={itemVariants} className={styles.title}>
            O passo que dá viabilização legal ao seu projeto.
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.paragraph}>
            Muitos empreendimentos ficam parados porque não têm a documentação certa para serem vendidos ou regularizados. Para comercialização de mais de um imóvel no mesmo terreno, a instituição de condomínio é <strong>necessária por lei</strong>.
          </motion.p>
          <motion.p variants={itemVariants} className={styles.paragraph}>
            A instituição de condomínio resolve isso, garante segurança para quem vende, e além disso, valoriza o imóvel final.
          </motion.p>
          
          <motion.ul variants={itemVariants} className={styles.list}>
            <li className={styles.listItem}>
              <Check size={18} className={styles.bullet} />
              <span>Organiza as unidades habitacionais</span>
            </li>
            <li className={styles.listItem}>
              <Check size={18} className={styles.bullet} />
              <span>Define claramente as áreas de uso comum e privado</span>
            </li>
            <li className={styles.listItem}>
              <Check size={18} className={styles.bullet} />
              <span>Permite que cada parte do imóvel exista legalmente</span>
            </li>
          </motion.ul>
          
          <motion.a 
            href="https://wa.me/5566996006518?text=Ol%C3%A1!%20Vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20projetos%2Finstitui%C3%A7%C3%A3o%20de%20condom%C3%ADnio." 
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants} 
            className={styles.linkButton}
          >
            Saber mais <ArrowRight size={16} />
          </motion.a>
        </motion.div>
        
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className={styles.curtain}
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.img 
            src="/images/condominio.png" 
            alt="Projeto Residencial em Condomínio" 
            className={styles.image}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
