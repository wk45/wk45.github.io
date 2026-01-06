import React, { useEffect, useRef } from 'react';

export const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Mouse Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      targetMouseX = (e.clientX / width) * 2 - 1;
      targetMouseY = (e.clientY / height) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- 1. Gradient Orbs (Background Layer) ---
    // Floating soft blobs typical in Spline designs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, r: 400, color: 'rgba(149, 117, 205, 0.12)', vx: 0.15, vy: 0.1 }, // Brand Purple
      { x: width * 0.8, y: height * 0.8, r: 500, color: 'rgba(56, 189, 248, 0.08)', vx: -0.1, vy: -0.15 }, // Sky Blue hint
      { x: width * 0.5, y: height * 0.5, r: 350, color: 'rgba(232, 121, 249, 0.06)', vx: 0.1, vy: -0.1 }, // Pinkish hint
    ];

    // --- 2. Particle Network (Foreground Layer) ---
    const particleCount = 60; // Number of nodes
    const particles: {x: number, y: number, z: number, vx: number, vy: number}[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 100, // Depth
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse interpolation for camera movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // === Draw Background Orbs ===
      orbs.forEach(orb => {
        // Float logic
        orb.x += orb.vx;
        orb.y += orb.vy;
        
        // Bounce smoothly off edges (extended bounds)
        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        // Subtle Parallax for background (moves slower than foreground)
        const bgParallaxX = orb.x - (mouseX * 50);
        const bgParallaxY = orb.y - (mouseY * 50);

        const gradient = ctx.createRadialGradient(bgParallaxX, bgParallaxY, 0, bgParallaxX, bgParallaxY, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        // Draw using a large rect to cover area (simpler compositing)
        ctx.fillRect(0, 0, width, height);
      });

      // === Draw Foreground Particles ===
      const cx = width / 2;
      const cy = height / 2;
      const focalLength = 400;

      // Update and Project Particles
      const projected = [];

      for(let p of particles) {
        // Update 3D position (Floating)
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around borders to keep them in view
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;

        // Apply Camera Rotation/Parallax based on mouse (Stronger effect for foreground)
        // This difference in movement speed (50 vs 200) creates the 3D depth feeling.
        const parallaxX = p.x - (mouseX * 200); 
        const parallaxY = p.y - (mouseY * 200);

        // Simple 3D Projection
        const scale = focalLength / (focalLength + p.z);
        const px = cx + parallaxX * scale;
        const py = cy + parallaxY * scale;

        projected.push({ x: px, y: py, s: scale, z: p.z });
      }

      // Draw Connections (The "Network" Look)
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Connect if close enough
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25; // Fade out based on distance
            // Color logic: mix of gray and brand purple
            ctx.strokeStyle = `rgba(149, 117, 205, ${alpha})`; 
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let p of projected) {
        const radius = Math.max(1, 4 * p.s);
        const alpha = Math.min(1, (1000 - p.z) / 1000) * 0.7;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(149, 117, 205, ${alpha})`; // Brand Purple
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 transition-opacity duration-500 opacity-80 dark:opacity-60"
    />
  );
};