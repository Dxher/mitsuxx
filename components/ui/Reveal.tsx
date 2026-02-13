"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  itemKey,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  itemKey?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-key={itemKey}
      className={["reveal", shown ? "revealIn" : "", className].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
