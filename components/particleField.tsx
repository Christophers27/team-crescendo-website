"use client";

import React, { useRef, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  type: "star" | "moon";
  rotation: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logicalSize = useRef({ w: 0, h: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createParticles = () => {
      const { w, h } = logicalSize.current;
      const count = Math.max(20, Math.min(70, Math.round((w * h) / 12000)));

      particlesRef.current = Array.from({ length: count }, () => {
        const type = Math.random() < 0.7 ? "star" : "moon";
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: type === "star" ? Math.random() * 3 + 1 : Math.random() * 6 + 4,
          dx: (Math.random() - 0.5) * 0.25,
          dy: (Math.random() - 0.5) * 0.25,
          type,
          rotation: Math.random() * Math.PI * 2,
        };
      });
    };

    const resizeToParent = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.max(window.devicePixelRatio || 1, 1);

      logicalSize.current.w = rect.width;
      logicalSize.current.h = rect.height;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      createParticles();
    };

    const ro = new ResizeObserver(resizeToParent);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resizeToParent();

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      r: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72) * Math.PI) / 180) * r,
          -Math.sin(((18 + i * 72) * Math.PI) / 180) * r
        );
        ctx.lineTo(
          Math.cos(((54 + i * 72) * Math.PI) / 180) * (r / 2.2),
          -Math.sin(((54 + i * 72) * Math.PI) / 180) * (r / 2.2)
        );
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fill();
      ctx.restore();
    };

    const drawMoon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      r: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // full circle base
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgba(255,255,200,0.9)";
      ctx.fill();

      // cut-out smaller circle to form crescent
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(r * 0.4, 0, r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      ctx.restore();
    };

    const draw = () => {
      const { w, h } = logicalSize.current;
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.clearRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        if (p.type === "star") {
          drawStar(ctx, p.x, p.y, p.r);
        } else {
          drawMoon(ctx, p.x, p.y, p.r, p.rotation);
        }

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
    />
  );
}
