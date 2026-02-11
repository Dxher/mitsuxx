'use client';

import PaintingGrid from "@/components/PaintingGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Where Color</span>
            <span className={styles.titleLine}>Meets Soul</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Original paintings that capture emotions and people.
          </p>
          <div className={styles.heroHint}>
            <span 
              className={styles.hintIcon}
              onClick={() => {
                const element = document.getElementById('gallery');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ↓
            </span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className={styles.heroPaint1}></div>
        <div className={styles.heroPaint2}></div>
        <div className={styles.heroPaint3}></div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={styles.gallery}>
        <h2 className={styles.sectionTitle}>The Collection</h2>
        <PaintingGrid />
      </section>
    </div>
  );
}