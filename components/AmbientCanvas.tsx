"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number; r: number; a: number };

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let raf = 0;
    const mouse = { x: window.innerWidth * 0.68, y: window.innerHeight * 0.42 };
    let points: Point[] = [];

    const createPoints = () => {
      const count = Math.min(68, Math.max(30, Math.floor((width * height) / 26000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.2 + 0.35,
        a: Math.random() * 0.5 + 0.12,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    };

    const pointerMove = (event: PointerEvent) => {
      mouse.x += (event.clientX - mouse.x) * 0.45;
      mouse.y += (event.clientY - mouse.y) * 0.45;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const wash = context.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.min(width, 720));
      wash.addColorStop(0, "rgba(23,231,238,.055)");
      wash.addColorStop(0.42, "rgba(23,190,227,.018)");
      wash.addColorStop(1, "rgba(0,5,8,0)");
      context.fillStyle = wash;
      context.fillRect(0, 0, width, height);

      context.save();
      context.strokeStyle = "rgba(125,226,235,.027)";
      context.lineWidth = 1;
      const spacing = width < 720 ? 72 : 92;
      const drift = reduced ? 0 : (frame * 0.018) % spacing;
      for (let x = -spacing + drift; x < width + spacing; x += spacing) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = -spacing + drift; y < height + spacing; y += spacing) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      context.restore();

      points.forEach((point, index) => {
        if (!reduced) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -20) point.x = width + 20;
          if (point.x > width + 20) point.x = -20;
          if (point.y < -20) point.y = height + 20;
          if (point.y > height + 20) point.y = -20;
        }

        for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
          const other = points[otherIndex];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 126) {
            context.strokeStyle = `rgba(23,231,238,${(1 - distance / 126) * 0.052})`;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.fillStyle = `rgba(119,239,242,${point.a})`;
        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fill();
      });

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />;
}
