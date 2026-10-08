"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    // High-intensity density
    const particleCount = isMobile ? 45 : 95;
    const maxDistance = isMobile ? 140 : 185;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.05, // Faster, energetic flow
        vy: (Math.random() - 0.5) * 1.05,
        radius: Math.random() * 2.2 + 2.0, // Bold, clear nodes
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.04 + 0.02,
      });
    }

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const isDark = theme === "dark";
    // Vivid indigo palette
    const rgb = isDark ? "129, 140, 248" : "79, 70, 229";

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connections between nearby nodes with high visibility
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce at boundaries
        if (p1.x < 0) {
          p1.x = 0;
          p1.vx *= -1;
        } else if (p1.x > width) {
          p1.x = width;
          p1.vx *= -1;
        }

        if (p1.y < 0) {
          p1.y = 0;
          p1.vy *= -1;
        } else if (p1.y > height) {
          p1.y = height;
          p1.vy *= -1;
        }

        // Mouse interactivity with high intensity tethering
        if (mouse.active) {
          const mdx = mouse.x - p1.x;
          const mdy = mouse.y - p1.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 240) {
            const mouseAlpha = (1 - mDist / 240) * (isDark ? 0.75 : 0.65);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${rgb}, ${mouseAlpha})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // Stronger kinetic pull toward cursor
            const force = (240 - mDist) / 240;
            p1.x += (mdx / mDist) * force * 0.7;
            p1.y += (mdy / mDist) * force * 0.7;
          }
        }

        // Particle to particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.55 : 0.45);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }

      // 2. Draw nodes with intense luminous halos
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulsePhase += p.pulseSpeed;
        const pulse = Math.sin(p.pulsePhase) * 0.4 + 0.8;
        const currentRadius = p.radius * pulse;
        const nodeAlpha = isDark ? 0.95 : 0.85;

        // Wide luminous outer halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${nodeAlpha * 0.25})`;
        ctx.fill();

        // Inner glowing core ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${nodeAlpha * 0.5})`;
        ctx.fill();

        // Solid luminous center
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${nodeAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
}
