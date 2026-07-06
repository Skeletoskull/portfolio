import { useEffect, useRef } from 'react';

/**
 * Animated RF / signal-processing backdrop: layered sine waves (one AM-modulated)
 * drifting over a faint oscilloscope grid. Communicates the domain at a glance.
 * Respects prefers-reduced-motion and cleans up on unmount.
 */
const SignalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const waves = [
      { amp: 46, freq: 0.0045, speed: 0.9, color: 'rgba(0, 216, 255, 0.20)', mod: false },
      { amp: 26, freq: 0.010, speed: 1.6, color: 'rgba(100, 255, 218, 0.20)', mod: true },
      { amp: 16, freq: 0.022, speed: -2.3, color: 'rgba(0, 216, 255, 0.14)', mod: false },
    ];

    const render = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const mid = h * 0.52;
      ctx.clearRect(0, 0, w, h);

      // faint oscilloscope grid
      ctx.strokeStyle = 'rgba(0, 216, 255, 0.035)';
      ctx.lineWidth = 1;
      const gap = 44;
      for (let x = 0; x <= w; x += gap) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y <= h; y += gap) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      // layered signal traces
      waves.forEach((wv, i) => {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = wv.color;
        ctx.shadowColor = wv.color;
        ctx.shadowBlur = 8;
        for (let x = 0; x <= w; x += 3) {
          const env = wv.mod ? 0.55 + 0.45 * Math.sin(x * 0.006 + t * 0.02) : 1;
          const y = mid + Math.sin(x * wv.freq + t * wv.speed * 0.03 + i) * wv.amp * env;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      ctx.shadowBlur = 0;
      t += 1;
    };

    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };

    if (reduce) render();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SignalBackground;
