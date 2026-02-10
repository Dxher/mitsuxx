import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>Mistuxx</span>
            <p className={styles.tagline}>Creating beauty, one brushstroke at a time</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Explore</h4>
              <a href="/">Gallery</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Artsy</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Mistuxx Art Studio. All rights reserved.</p>
          <p className={styles.credit}>
            All artworks are original pieces. Reproduction without permission is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}