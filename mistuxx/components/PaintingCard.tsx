"use client";

import { Painting } from "@/data/paintings";
import styles from "./PaintingCard.module.css";

interface PaintingCardProps {
  painting: Painting;
  baseWidth?: number;
  onClick: () => void;
}

export default function PaintingCard({ painting, baseWidth = 300, onClick }: PaintingCardProps) {
  const aspectRatio = painting.dimensions.height / painting.dimensions.width;
  const displayWidth = baseWidth;
  const displayHeight = baseWidth * aspectRatio;
  const canvasDepth = 16;

  return (
    <div
      className={styles.cardContainer}
      style={{
        width: displayWidth,
        height: displayHeight,
      }}
      onClick={onClick}
    >
      <div
        className={styles.card}
        style={{
          width: displayWidth,
          height: displayHeight,
        }}
      >
        {/* Canvas wrapper with 3D depth */}
        <div className={styles.canvasWrapper}>
          {/* Main painting surface */}
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
          <div 
            className={`${styles.edge} ${styles.edgeTop}`}
            style={{ height: canvasDepth }}
          />
          <div 
            className={`${styles.edge} ${styles.edgeBottom}`}
            style={{ height: canvasDepth }}
          />
          <div 
            className={`${styles.edge} ${styles.edgeLeft}`}
            style={{ width: canvasDepth }}
          />
          <div 
            className={`${styles.edge} ${styles.edgeRight}`}
            style={{ width: canvasDepth }}
          />
        </div>

        {/* Sold badge */}
        {painting.sold && (
          <div className={styles.soldBadge}>Sold</div>
        )}

        {/* Hover info */}
        <div className={styles.hoverInfo}>
          <h3 className={styles.title}>{painting.title}</h3>
          <p className={styles.meta}>{painting.year} · {painting.medium}</p>
        </div>
      </div>
    </div>
  );
}