"use client";

import { Painting } from "@/data/paintings";
import styles from "./PaintingCard.module.css";

interface PaintingCardProps {
  painting: Painting;
  onClick: () => void;
}

export default function PaintingCard({ painting, onClick }: PaintingCardProps) {
  return (
    <div
      className={styles.cardContainer}
      style={{
        aspectRatio: `${painting.dimensions.width} / ${painting.dimensions.height}`,
      }}
      onClick={onClick}
    >
      <div className={styles.card}>
        <div className={styles.canvasWrapper}>
          <div className={styles.paintingSurface}>
            <img
              src={painting.images[0]}
              alt={painting.title}
              className={styles.paintingImage}
              draggable={false}
            />
            <div className={styles.canvasTexture} />
          </div>

          {/* Canvas edges */}
          <div className={`${styles.edge} ${styles.edgeTop}`} />
          <div className={`${styles.edge} ${styles.edgeBottom}`} />
          <div className={`${styles.edge} ${styles.edgeLeft}`} />
          <div className={`${styles.edge} ${styles.edgeRight}`} />
        </div>

        {painting.sold && <div className={styles.soldBadge}>Sold</div>}

        <div className={styles.hoverInfo}>
          <h3 className={styles.title}>{painting.title}</h3>
          <p className={styles.meta}>
            {painting.year} · {painting.medium}
          </p>
        </div>
      </div>
    </div>
  );
}
