import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <img src="/images/logo-full.png" alt="Simone Catarina" className={styles.logoImage} />
            <p className={styles.brandDesc}>
              Arquitetura e Urbanismo com precisão legal, transformando conceitos em empreendimentos viáveis e rentáveis.
            </p>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Menu</span>
              <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} className={styles.link}>Sobre Mim</a>
              <a href="#especialidade" onClick={(e) => handleScrollTo(e, 'especialidade')} className={styles.link}>Instituição</a>
              <a href="#projetos" onClick={(e) => handleScrollTo(e, 'projetos')} className={styles.link}>Projetos</a>
              <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} className={styles.link}>Serviços</a>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Contato</span>
              <a href="https://wa.me/5566996006518" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
              <a href="mailto:contato@arqsimonecatarina.com.br" className={styles.link}>E-mail</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© {currentYear} Arquiteta Simone Catarina. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://molda.io" target="_blank" rel="noopener noreferrer" className={styles.developer}>molda.io</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
