"use client";

import { useState, useEffect, useCallback } from "react";
import { Painting } from "@/data/paintings";
import styles from "./PaintingModal.module.css";

interface PaintingModalProps {
  painting: Painting;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasMultipleImages = painting.images.length > 1;
  
  // Calculate if this is a large painting that needs center brace
  const isLargePainting = painting.dimensions.width > 30 || painting.dimensions.height > 30;
  const isVeryLargePainting = painting.dimensions.width > 48 || painting.dimensions.height > 48;

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsFlipped(false);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (!isFlipped && hasMultipleImages) {
            prevImage();
          }
          break;
        case 'ArrowRight':
          if (!isFlipped && hasMultipleImages) {
            nextImage();
          }
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          handleCanvasClick();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFlipped, hasMultipleImages, currentImageIndex]);

  const handleCanvasClick = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isFlipped, isAnimating]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (isFlipped) return;
    setCurrentImageIndex((prev) => (prev + 1) % painting.images.length);
  };

  const prevImage = () => {
    if (isFlipped) return;
    setCurrentImageIndex((prev) => (prev - 1 + painting.images.length) % painting.images.length);
  };

  if (!isOpen) return null;

  // Calculate display dimensions maintaining aspect ratio
  const aspectRatio = painting.dimensions.height / painting.dimensions.width;
  const maxWidth = Math.min(window.innerWidth * 0.8, 800);
  const maxHeight = window.innerHeight * 0.75;
  
  let displayWidth = maxWidth;
  let displayHeight = maxWidth * aspectRatio;
  
  if (displayHeight > maxHeight) {
    displayHeight = maxHeight;
    displayWidth = maxHeight / aspectRatio;
  }

  const canvasDepth = 20;

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      {/* Close button */}
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Navigation arrows - only show if multiple images and not flipped */}
      {hasMultipleImages && !isFlipped && (
        <>
          <button 
            className={`${styles.navArrow} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button 
            className={`${styles.navArrow} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Main canvas container */}
      <div 
        className={styles.canvasContainer}
        style={{
          width: displayWidth,
          height: displayHeight,
        }}
      >
        <div 
          className={`${styles.canvas} ${isFlipped ? styles.flipped : ''}`}
          onClick={(e) => { e.stopPropagation(); handleCanvasClick(); }}
          style={{
            width: displayWidth,
            height: displayHeight,
          }}
        >
          {/* FRONT - The Painting */}
          <div className={styles.canvasFront}>
            {/* Painting surface */}
            <div className={styles.paintingSurface}>
              <img
                src={'/mitsuxx/' +painting.images[currentImageIndex]}
                alt={painting.title}
                className={styles.paintingImage}
                draggable={false}
              />
              <div className={styles.canvasTexture} />
            </div>

            {/* 3D Edges */}
            <div className={`${styles.edge} ${styles.edgeTop}`} style={{ height: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeBottom}`} style={{ height: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeLeft}`} style={{ width: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeRight}`} style={{ width: canvasDepth }} />
          </div>

          {/* BACK - Realistic Canvas Back */}
          <div className={styles.canvasBack}>
            <div className={styles.backInner}>
              {/* Raw canvas fabric showing through */}
              <div className={styles.rawCanvas}>
                {/* Canvas texture pattern */}
                <div className={styles.canvasFabric} />
              </div>

              {/* Wooden stretcher frame */}
              <div className={styles.stretcherFrame}>
                {/* Top bar */}
                <div className={`${styles.woodBar} ${styles.barTop}`}>
                  <div className={styles.woodGrain} />
                </div>
                {/* Bottom bar */}
                <div className={`${styles.woodBar} ${styles.barBottom}`}>
                  <div className={styles.woodGrain} />
                </div>
                {/* Left bar */}
                <div className={`${styles.woodBar} ${styles.barLeft}`}>
                  <div className={styles.woodGrain} />
                </div>
                {/* Right bar */}
                <div className={`${styles.woodBar} ${styles.barRight}`}>
                  <div className={styles.woodGrain} />
                </div>

                {/* Center cross brace for large paintings */}
                {isLargePainting && (
                  <div className={`${styles.woodBar} ${styles.barCenterH}`}>
                    <div className={styles.woodGrain} />
                  </div>
                )}
                {isVeryLargePainting && (
                  <div className={`${styles.woodBar} ${styles.barCenterV}`}>
                    <div className={styles.woodGrain} />
                  </div>
                )}

                {/* Corner joints */}
                <div className={`${styles.cornerJoint} ${styles.jointTL}`} />
                <div className={`${styles.cornerJoint} ${styles.jointTR}`} />
                <div className={`${styles.cornerJoint} ${styles.jointBL}`} />
                <div className={`${styles.cornerJoint} ${styles.jointBR}`} />
              </div>

              {/* Staples along the edges */}
              <div className={styles.staples}>
                {/* Top staples */}
                {[...Array(Math.floor(displayWidth / 40))].map((_, i) => (
                  <div 
                    key={`st-${i}`} 
                    className={`${styles.staple} ${styles.stapleTop}`}
                    style={{ left: `${(i + 1) * (100 / (Math.floor(displayWidth / 40) + 1))}%` }}
                  />
                ))}
                {/* Bottom staples */}
                {[...Array(Math.floor(displayWidth / 40))].map((_, i) => (
                  <div 
                    key={`sb-${i}`} 
                    className={`${styles.staple} ${styles.stapleBottom}`}
                    style={{ left: `${(i + 1) * (100 / (Math.floor(displayWidth / 40) + 1))}%` }}
                  />
                ))}
                {/* Left staples */}
                {[...Array(Math.floor(displayHeight / 40))].map((_, i) => (
                  <div 
                    key={`sl-${i}`} 
                    className={`${styles.staple} ${styles.stapleLeft}`}
                    style={{ top: `${(i + 1) * (100 / (Math.floor(displayHeight / 40) + 1))}%` }}
                  />
                ))}
                {/* Right staples */}
                {[...Array(Math.floor(displayHeight / 40))].map((_, i) => (
                  <div 
                    key={`sr-${i}`} 
                    className={`${styles.staple} ${styles.stapleRight}`}
                    style={{ top: `${(i + 1) * (100 / (Math.floor(displayHeight / 40) + 1))}%` }}
                  />
                ))}
              </div>

              {/* Canvas fold/wrap visible at edges */}
              <div className={`${styles.canvasFold} ${styles.foldTop}`} />
              <div className={`${styles.canvasFold} ${styles.foldBottom}`} />
              <div className={`${styles.canvasFold} ${styles.foldLeft}`} />
              <div className={`${styles.canvasFold} ${styles.foldRight}`} />

              {/* Info label on back */}
              <div className={styles.infoLabel}>
                <h2 className={styles.labelTitle}>{painting.title}</h2>
                <div className={styles.labelDivider} />
                <p className={styles.labelYear}>{painting.year}</p>
                <p className={styles.labelMedium}>{painting.medium}</p>
                <p className={styles.labelDimensions}>
                  {painting.dimensions.width}" × {painting.dimensions.height}"
                </p>
                <div className={styles.labelDivider} />
                <p className={styles.labelDescription}>{painting.description}</p>
                {!painting.sold && painting.price && (
                  <p className={styles.labelPrice}>${painting.price.toLocaleString()}</p>
                )}
                {painting.sold && (
                  <p className={styles.labelSold}>Private Collection</p>
                )}
              </div>
            </div>

            {/* Back edges */}
            <div className={`${styles.edge} ${styles.edgeTop} ${styles.backEdge}`} style={{ height: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeBottom} ${styles.backEdge}`} style={{ height: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeLeft} ${styles.backEdge}`} style={{ width: canvasDepth }} />
            <div className={`${styles.edge} ${styles.edgeRight} ${styles.backEdge}`} style={{ width: canvasDepth }} />
          </div>

          {/* Side edges visible during rotation */}
          <div 
            className={`${styles.sideEdge} ${styles.sideLeft}`}
            style={{ width: canvasDepth }}
          />
          <div 
            className={`${styles.sideEdge} ${styles.sideRight}`}
            style={{ width: canvasDepth }}
          />
        </div>
      </div>

      {/* Image indicators */}
      {hasMultipleImages && !isFlipped && (
        <div className={styles.imageIndicators}>
          {painting.images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Instruction text */}
      <p className={styles.instruction}>
        {isFlipped ? 'Click canvas to see painting' : 'Click canvas to see details'}
      </p>
    </div>
  );
}