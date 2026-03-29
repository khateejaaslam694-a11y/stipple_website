// ============================================
// STIPPLE - Canvas Animation
// ============================================

class StippleAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.dots = [];
        this.stars = [];
        this.meteors = [];
        this.mouse = { x: null, y: null };
        this.animationId = null;
        this.lastMeteorTime = 0;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createDots();
        this.createStars();
        this.bindEvents();
        this.animate();
    }
    
    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    createDots() {
        const colors = [
            '#1b3907', '#2d5a0f', // Spruce
            '#bc475f', '#d4637a', // Tulip
            '#015f7e', '#0280a8', // Ocean
            '#f9c74f', '#f4a261', // Warm accents
            '#ffffff', '#faf8f5', // White/cream
        ];
        
        this.dots = [];
        const count = Math.min(150, Math.floor((this.canvas.width * this.canvas.height) / 8000));
        
        for (let i = 0; i < count; i++) {
            this.dots.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    createStars() {
        this.stars = [];
        const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
        
        for (let i = 0; i < count; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1 + 0.5,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinkleOffset: Math.random() * Math.PI * 2
            });
        }
    }
    
    createMeteor() {
        const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
        const speed = Math.random() * 4 + 3;
        
        this.meteors.push({
            x: Math.random() * this.canvas.width,
            y: -20,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            trail: [],
            maxTrail: 25,
            life: 1
        });
    }
    
    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createDots();
            this.createStars();
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
    
    update(time) {
        // Update dots
        for (const dot of this.dots) {
            dot.x += dot.vx;
            dot.y += dot.vy;
            
            // Bounce off edges
            if (dot.x < 0 || dot.x > this.canvas.width) dot.vx *= -1;
            if (dot.y < 0 || dot.y > this.canvas.height) dot.vy *= -1;
            
            // Mouse repulsion
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = dot.x - this.mouse.x;
                const dy = dot.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    dot.vx += (dx / dist) * force * 0.2;
                    dot.vy += (dy / dist) * force * 0.2;
                }
            }
            
            // Limit velocity
            const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);
            if (speed > 2) {
                dot.vx = (dot.vx / speed) * 2;
                dot.vy = (dot.vy / speed) * 2;
            }
        }
        
        // Update meteors
        for (let i = this.meteors.length - 1; i >= 0; i--) {
            const meteor = this.meteors[i];
            
            meteor.trail.unshift({ x: meteor.x, y: meteor.y });
            if (meteor.trail.length > meteor.maxTrail) {
                meteor.trail.pop();
            }
            
            meteor.x += meteor.vx;
            meteor.y += meteor.vy;
            meteor.life -= 0.008;
            
            if (meteor.life <= 0 || meteor.y > this.canvas.height + 50) {
                this.meteors.splice(i, 1);
            }
        }
        
        // Spawn meteors
        if (time - this.lastMeteorTime > 3000 + Math.random() * 5000) {
            this.createMeteor();
            this.lastMeteorTime = time;
        }
    }
    
    draw(time) {
        const ctx = this.ctx;
        
        // Clear and draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, '#0f2104');
        gradient.addColorStop(0.5, '#1b3907');
        gradient.addColorStop(1, '#014559');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connecting lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < this.dots.length; i++) {
            for (let j = i + 1; j < this.dots.length; j++) {
                const dx = this.dots[i].x - this.dots[j].x;
                const dy = this.dots[i].y - this.dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    ctx.globalAlpha = (100 - dist) / 100 * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(this.dots[i].x, this.dots[i].y);
                    ctx.lineTo(this.dots[j].x, this.dots[j].y);
                    ctx.stroke();
                }
            }
        }
        
        ctx.globalAlpha = 1;
        
        // Draw stars with twinkling
        for (const star of this.stars) {
            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;
            ctx.globalAlpha = twinkle * 0.8;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.globalAlpha = 1;
        
        // Draw meteors
        for (const meteor of this.meteors) {
            for (let i = 0; i < meteor.trail.length; i++) {
                const point = meteor.trail[i];
                const alpha = (1 - i / meteor.trail.length) * meteor.life * 0.7;
                const radius = (1 - i / meteor.trail.length) * 3;
                
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#f9c74f';
                ctx.beginPath();
                ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.globalAlpha = 1;
        
        // Draw dots
        for (const dot of this.dots) {
            ctx.globalAlpha = dot.opacity;
            ctx.fillStyle = dot.color;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.globalAlpha = 1;
    }
    
    animate = (time = 0) => {
        this.update(time);
        this.draw(time);
        this.animationId = requestAnimationFrame(this.animate);
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Auto-initialize on any page with stipple canvas
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('stippleCanvas');
    if (canvas) {
        new StippleAnimation(canvas);
    }
});
