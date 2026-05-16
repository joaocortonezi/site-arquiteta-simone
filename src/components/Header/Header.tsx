"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Header.module.css";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" onClick={(e) => handleScrollTo(e, 'top')} className={clsx(styles.logo, !isScrolled && styles.logoLight)}>
          Simone Catarina
        </a>
        <nav className={styles.nav}>
          <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} className={clsx(styles.navLink, !isScrolled && styles.navLinkLight)}>Sobre</a>
          <a href="#especialidade" onClick={(e) => handleScrollTo(e, 'especialidade')} className={clsx(styles.navLink, !isScrolled && styles.navLinkLight)}>Condomínios</a>
          <a href="#projetos" onClick={(e) => handleScrollTo(e, 'projetos')} className={clsx(styles.navLink, !isScrolled && styles.navLinkLight)}>Projetos</a>
          <a href="https://wa.me/5566996006518" target="_blank" rel="noopener noreferrer" className={clsx(styles.ctaButton, !isScrolled && styles.ctaButtonLight)}>
            Fale Conosco
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
