"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { paintings, Painting } from "@/data/paintings";
import PaintingCard from "./PaintingCard";
import PaintingModal from "./PaintingModal";
import Reveal from "@/components/ui/Reveal";
import styles from "./PaintingGrid.module.css";

export default function PaintingGrid() {
  const [filter] = useState<string>("All");
  const [sortBy] = useState<string>("newest");
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [delayById, setDelayById] = useState<Record<string, number>>({});
  const gridRef = useRef<HTMLDivElement | null>(null);

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
  const paintingOrderKey = filteredPaintings.map((p) => p.id).join("|");

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const calculateDelays = () => {
      const nodes = Array.from(
        grid.querySelectorAll<HTMLElement>("[data-reveal-key]")
      );

      const positionedNodes = nodes.map((el) => {
        const rect = el.getBoundingClientRect();
        return { el, top: rect.top, left: rect.left };
      });

      const columnTolerance = 24;
      const columnAnchors: number[] = [];
      positionedNodes
        .map((node) => node.left)
        .sort((a, b) => a - b)
        .forEach((left) => {
          const isNewColumn = columnAnchors.every(
            (anchor) => Math.abs(anchor - left) > columnTolerance
          );
          if (isNewColumn) {
            columnAnchors.push(left);
          }
        });

      const columns = columnAnchors.map(() => [] as typeof positionedNodes);
      positionedNodes.forEach((node) => {
        let columnIndex = 0;
        let smallestDistance = Number.POSITIVE_INFINITY;

        columnAnchors.forEach((anchor, index) => {
          const distance = Math.abs(anchor - node.left);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            columnIndex = index;
          }
        });

        columns[columnIndex].push(node);
      });

      columns.forEach((column) => {
        column.sort((a, b) => a.top - b.top);
      });

      const sorted: HTMLElement[] = [];
      const maxRows = Math.max(...columns.map((column) => column.length), 0);
      for (let row = 0; row < maxRows; row += 1) {
        for (let col = 0; col < columns.length; col += 1) {
          const node = columns[col][row];
          if (node) {
            sorted.push(node.el);
          }
        }
      }

      const nextDelays: Record<string, number> = {};
      sorted.forEach((el, index) => {
        const key = el.dataset.revealKey;
        if (key) {
          // Keep a consistent stagger speed as the user scrolls:
          // delay only by visual column position (left-to-right), not full list index.
          const columnStaggerIndex = columns.length > 0 ? index % columns.length : 0;
          nextDelays[key] = columnStaggerIndex * 120;
        }
      });

      setDelayById(nextDelays);
    };

    calculateDelays();
    const resizeObserver = new ResizeObserver(calculateDelays);
    resizeObserver.observe(grid);
    window.addEventListener("resize", calculateDelays);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDelays);
    };
  }, [paintingOrderKey]);

  return (
    <>
      <section className={styles.gallerySection}>
                {/* Painting Count */}
        <p className={styles.count}>
          {filteredPaintings.length} {filteredPaintings.length === 1 ? 'work' : 'works'}
        </p>

        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>
          {filteredPaintings.map((painting) => (
            <Reveal
              key={painting.id}
              className={styles.gridItem}
              delayMs={delayById[painting.id] ?? 0}
              itemKey={painting.id}
            >
              <PaintingCard
                painting={painting}
                onClick={() => setSelectedPainting(painting)}
              />
            </Reveal>
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
