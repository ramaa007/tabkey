"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let gx = x;
    let gy = y;
    let raf = 0;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };
    const hover = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const active = Boolean(target.closest("a, button, [data-cursor='active']"));
      document.documentElement.classList.toggle("cursor-active", active);
    };
    const loop = () => {
      gx += (x - gx) * 0.115;
      gy += (y - gy) * 0.115;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", hover, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", hover);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
