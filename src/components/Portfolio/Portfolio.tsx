"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: 1,
    title: "Residência C & M",
    category: "Residencial • Projeto Moderno",
    description: "Projeto com estilo moderno desenvolvido para construção em um condomínio fechado, destacando linhas retas e muita iluminação natural.",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "Condomínio\nFalcone",
    category: "Comercial • Instituição",
    description: "Projeto desenvolvido para a Construtora Falcone. Condomínio residencial com 10 imóveis, todos individualizados pelo processo de instituição de condomínio.",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Residência E & V",
    category: "Residencial • Alto Padrão",
    description: "Projeto moderno com o requinte das pedras naturais e a sofisticação da madeira desenvolvido para construção em um condomínio fechado.",
    image: "/images/project3.png",
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 3 projects -> 3 segments
    if (latest < 0.33) {
      setCurrentIndex(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(2);
    }
  });

  const currentProject = projects[currentIndex];

  return (
    <>
      <section id="projetos" className={`${styles.portfolioWrapper} ${styles.desktopOnly}`} ref={containerRef} style={{ position: "relative" }}>
        <div className={styles.portfolioSticky}>
          <div className={styles.leftColumn}>
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.contentWrapper}
              >
                <span className={styles.subtitle}>{currentProject.category}</span>
                <h2 className={styles.title}>{currentProject.title}</h2>
                <p className={styles.description}>{currentProject.description}</p>
                <a 
                  href="https://wa.me/5566996006518?text=Ol%C3%A1!%20Vim%20do%20seu%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20projetos." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Ver projeto <ArrowRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>

            <div className={styles.progressIndicator}>
              {projects.map((_, index) => (
                <div 
                  key={index} 
                  className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`} 
                />
              ))}
            </div>
          </div>

          <div className={styles.rightColumn}>
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={currentProject.image}
                alt={currentProject.title}
                className={styles.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className={styles.mobileOnly}>
        <div className={styles.mobileContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.mobileProjectCard}>
              <img src={project.image} alt={project.title} className={styles.mobileImage} />
              <div className={styles.mobileContent}>
                <span className={styles.subtitle}>{project.category}</span>
                <h3 className={styles.mobileTitle}>{project.title}</h3>
                <p className={styles.mobileDescription}>{project.description}</p>
                <a 
                  href="https://wa.me/5566996006518?text=Ol%C3%A1!%20Vim%20do%20seu%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20projetos." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Ver projeto <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
