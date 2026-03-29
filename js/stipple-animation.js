// ============================================
// STIPPLE - Clean Canvas Animation (Vanilla JS)
// ============================================

class StippleAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.dots = [];
    this.stars = [];
    this.meteors = [];

    this.mouse = { x: -9999, y: -9999 };
    this.lastMeteorTime = Date.now();
    this.nextMeteorInterval = 3000 + Math.random() * 5000;

    this.init();
    this.animate();
    this.bindEvents();
  }

  init() {
    this.resize();
    this.createDots();
    this.createStars();
    this.createMeteors();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  createDots() {
    const colors = ["#bc475f", "#015f7e", "#1b3907", "#d4a574", "#e8c9a0", "#ffffff"];
    this.dots = [];

    for (let i = 0; i < 200; i++) {
      this.dots.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.01 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  createStars() {
    this.stars = [];

    for (let i = 0; i < 100; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.6,
        twinkleSpeed: 0.02 + Math.random() * 0.05,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  createMeteors() {
    this.meteors = Array.from({ length: 3 }, () => ({
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      opacity: 1,
      tail: [],
    }));
  }

  launchMeteor() {
    const idx = this.meteors.findIndex(m => !m.active);
    if (idx === -1) return;

    const W = this.canvas.width;
    const H = this.canvas.height;

    this.meteors[idx] = {
      active: true,
      x: Math.random() * (W * 0.6),
      y: Math.random() * (H * 0.3),
      vx: 3 + Math.random() * 4,
      vy: 2 + Math.random() * 3,
      opacity: 1,
      tail: [],
    };
  }

  bindEvents() {
    window.addEventListener("resize", () => this.resize());

    this.canvas.addEventListener("mousemove", e => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
    });
  }

  update() {
    const W = this.canvas.width;
    const H = this.canvas.height;

    // Launch meteors
    const now = Date.now();
    if (now - this.lastMeteorTime > this.nextMeteorInterval) {
      this.launchMeteor();
      this.lastMeteorTime = now;
      this.nextMeteorInterval = 3000 + Math.random() * 5000;
    }

    // Update dots
    this.dots.forEach(dot => {
      const dx = dot.x - this.mouse.x;
      const dy = dot.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100 && dist > 0) {
        const force = (100 - dist) / 100;
        dot.vx += (dx / dist) * force * 0.4;
        dot.vy += (dy / dist) * force * 0.4;
      }

      dot.vx *= 0.98;
      dot.vy *= 0.98;

      dot.x += dot.vx;
      dot.y += dot.vy;

      // Wrap edges
      if (dot.x < 0) dot.x = W;
      if (dot.x > W) dot.x = 0;
      if (dot.y < 0) dot.y = H;
      if (dot.y > H) dot.y = 0;

      dot.twinklePhase += dot.twinkleSpeed;
    });

    // Update meteors
    this.meteors.forEach(m => {
      if (!m.active) return;

      m.tail.unshift({ x: m.x, y: m.y });
      if (m.tail.length > 20) m.tail.pop();

      m.x += m.vx;
      m.y += m.vy;
      m.opacity -= 0.012;

      if (m.opacity <= 0 || m.x > W || m.y > H) {
        m.active = false;
      }
    });

    this.stars.forEach(s => {
      s.twinklePhase += s.twinkleSpeed;
    });
  }

  draw() {
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Dark gradient background
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#0a1a06");
    bg.addColorStop(0.4, "#0d2415");
    bg.addColorStop(0.7, "#01202a");
    bg.addColorStop(1, "#0a1520");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Draw stars
    this.stars.forEach(s => {
      const opacity = s.opacity * (0.5 + 0.5 * Math.sin(s.twinklePhase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < this.dots.length; i++) {
      for (let j = i + 1; j < this.dots.length; j++) {
        const dx = this.dots[i].x - this.dots[j].x;
        const dy = this.dots[i].y - this.dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.25;
          ctx.beginPath();
          ctx.moveTo(this.dots[i].x, this.dots[i].y);
          ctx.lineTo(this.dots[j].x, this.dots[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw dots
    this.dots.forEach(dot => {
      const tOpacity = dot.opacity * (0.6 + 0.4 * Math.sin(dot.twinklePhase));

      const hex = dot.color;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      const glow = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 3);
      glow.addColorStop(0, `rgba(${r},${g},${b},${tOpacity * 0.8})`);
      glow.addColorStop(1, `rgba(${r},${g},${b},0)`);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${tOpacity})`;
      ctx.fill();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("stippleCanvas");
  if (canvas) new StippleAnimation(canvas);
});
