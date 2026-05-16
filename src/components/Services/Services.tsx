"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

const servicesList = [
  {
    title: "Projeto Arquitetônico",
    desc: "Desenho exclusivo de residências de alto padrão, focando na integração de espaços, iluminação natural e proporções harmoniosas."
  },
  {
    title: "Design de Interiores",
    desc: "Escolha minuciosa de revestimentos, marcenaria e texturas que transformam a planta em um ambiente acolhedor e luxuoso."
  },
  {
    title: "Regularização de Obras",
    desc: "Aprovação em prefeituras e órgãos competentes, garantindo que o seu projeto nasça 100% alinhado às normas legais."
  },
  {
    title: "Instituição de Condomínio",
    desc: "Processo técnico e burocrático completo para viabilizar a comercialização de empreendimentos residenciais e comerciais."
  }
];

export default function Services() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={styles.titleGroup}>
            <motion.span variants={itemVariants} className={styles.subtitle}>Expertise</motion.span>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Serviços Completos para o seu Empreendimento.
            </motion.h2>
          </div>
          
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeNumber}>10+</span>
            <span className={styles.badgeText}>Anos de<br />Experiência</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {servicesList.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
