"use client";

import { useState } from "react";
import { paintings, Painting } from "@/data/paintings";
import PaintingCard from "./PaintingCard";
import PaintingModal from "./PaintingModal";
import styles from "./PaintingGrid.module.css";

const BASELINE_AREA = 36 * 48;
const COLUMN_WIDTH = 240;
const ROW_HEIGHT = 8;

interface DisplayConfig {
  baseWidth: number;
  rowSpan: number;
  columnSpan: number;
}

export default function PaintingGrid() {
  const [filter] = useState<string>("All");
  const [sortBy] = useState<string>("newest");
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const filteredPaintings = paintings
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year;
        case "oldest":
          return a.year - b.year;
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

  const getDisplayConfig = (painting: Painting): DisplayConfig => {
    const area = painting.dimensions.width * painting.dimensions.height;
    const featuredScale = painting.id === "2" ? 1.7 : painting.id === "3" ? 1.35 : 1;
    const scaledArea = area * featuredScale;
    const areaScale = Math.sqrt(scaledArea / BASELINE_AREA);

    const columnSpan = areaScale > 1.08 ? 2 : 1;
    const baseWidth = COLUMN_WIDTH * columnSpan;
    const displayHeight = baseWidth * (painting.dimensions.height / painting.dimensions.width);
    const rowSpan = Math.ceil((displayHeight + 16) / ROW_HEIGHT);

    return {
      baseWidth,
      rowSpan,
      columnSpan,
    };
  };

  return (
    <>
      <section className={styles.gallerySection}>
                {/* Painting Count */}
        <p className={styles.count}>
          {filteredPaintings.length} {filteredPaintings.length === 1 ? 'work' : 'works'}
        </p>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredPaintings.map((painting) => (
            <div key={painting.id} className={styles.gridItem}>
              <PaintingCard
                painting={painting}
                onClick={() => setSelectedPainting(painting)}
              />
            </div>
          ))}
        </div>
        {filteredPaintings.length === 0 && (
          <div className={styles.noResults}>
            <p>No paintings found in this category.</p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedPainting && (
        <PaintingModal
          painting={selectedPainting}
          isOpen={!!selectedPainting}
          onClose={() => setSelectedPainting(null)}
        />
      )}
    </>
  );
}