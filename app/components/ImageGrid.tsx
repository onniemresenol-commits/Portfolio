"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Img = { src: string; alt: string };

export default function ImageGrid({ images }: { images: Img[] }) {
  const [active, setActive] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () => setActive((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setActive((i) => (i! < images.length - 1 ? i! + 1 : 0));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginTop: 16,
        }}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => open(i)}
            style={{
              position: "relative",
              height: 160,
              display: "block",
              background: "#f5f5f5",
              border: "1px solid #eee",
              borderRadius: 4,
              overflow: "hidden",
              cursor: "pointer",
              padding: 0,
              gridColumn: i === images.length - 1 && images.length % 2 !== 0 ? "1 / -1" : undefined,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, 300px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Image — stop propagation so clicking it doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              width: "min(900px, 90vw)",
              aspectRatio: "1236 / 875",
            }}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>

          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 28,
              lineHeight: 1,
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            style={{
              position: "fixed",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: 22,
              cursor: "pointer",
              borderRadius: 4,
              padding: "10px 14px",
              lineHeight: 1,
            }}
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            style={{
              position: "fixed",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: 22,
              cursor: "pointer",
              borderRadius: 4,
              padding: "10px 14px",
              lineHeight: 1,
            }}
          >
            ›
          </button>

          {/* Counter */}
          <div
            style={{
              position: "fixed",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              letterSpacing: "0.05em",
            }}
          >
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
