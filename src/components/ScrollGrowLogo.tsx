"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollGrowLogo
 * Fixed-position background watermark of the Calm Parent logo.
 * Grows and slightly fades as the user scrolls — like a plant growing from the hand.
 * Sits behind all content (zIndex: -1), pointer-events: none.
 */
export default function ScrollGrowLogo() {
  const [scale, setScale] = useState(0.3);
  const [opacity, setOpacity] = useState(0.04);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      tickingRef.current = false;

      // Scroll progress: 0 at top, 1 at bottom of page
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));

      // Interpolate scale 0.3 → 1.5 and opacity 0.04 → 0.08
      const newScale = 0.3 + (1.5 - 0.3) * progress;
      const newOpacity = 0.04 + (0.08 - 0.04) * progress;

      setScale(newScale);
      setOpacity(newOpacity);
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(update);
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial state

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: -1,
        opacity,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <img
        src="/logo/logo-original.jpg"
        alt=""
        style={{
          width: "auto",
          height: "60vh",
          transform: `scale(${scale})`,
          transformOrigin: "center bottom",
          transition: "transform 0.1s linear",
          userSelect: "none",
          maxWidth: "none",
        }}
      />
    </div>
  );
}
