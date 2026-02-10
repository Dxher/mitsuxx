"use client";

import { useState } from "react";
import { paintings, categories, Painting } from "@/data/paintings";
import PaintingCard from "./PaintingCard";
import PaintingModal from "./PaintingModal";
import styles from "./PaintingGrid.module.css";

export default function PaintingGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");
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

  const getBaseWidth = (painting: Painting): number => {
    const maxDimension = Math.max(painting.dimensions.width, painting.dimensions.height);
    
    if (maxDimension >= 48) return 380;
    if (maxDimension >= 36) return 320;
    if (maxDimension >= 24) return 280;
    return 240;
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
                baseWidth={getBaseWidth(painting)}
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