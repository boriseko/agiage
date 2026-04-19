# Live Components — Copy-Paste Ready

Извлечено из `index.html`. Каждый блок самодостаточен — копируй и вставляй в agents.html.

---

## 0. CSS-переменные (ДОЛЖНЫ быть объявлены в `:root`)

Это корневой палитровый набор index.html. Всё остальное опирается на него. **Вставь в самый верх `<style>` на agents.html.**

```css
:root {
  --white: #FFFFFF;
  --black: #1A1A1A;
  --text: #333333;
  --text-muted: #666666;
  --text-light: #999999;
  --border: #E5E5E5;
  --card-bg: #F5F5F5;
  --yellow: #FFD54F;
  --yellow-light: #FFE082;
  --orange: #FFA000;
  --orange-dark: #FF8F00;
  --grad-warm: linear-gradient(135deg, #FFD54F 0%, #FFA000 100%);
  --grad-page: linear-gradient(160deg, #FFD54F 0%, #FFB300 50%, #FFA000 100%);
  --grad-page-dark: linear-gradient(160deg, #F0A020 0%, #E08A0A 50%, #CC7A08 100%);
  --transition: 0.5s cubic-bezier(0.32, 0, 0.12, 1);
  --transition-fast: 0.3s cubic-bezier(0.32, 0, 0.12, 1);
  --transition-slow: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; overflow-x: clip; }
body {
  font-family: 'Geist', -apple-system, system-ui, sans-serif;
  background: var(--white);
  color: var(--text);
  overflow-x: clip;
  max-width: 100vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
section[id], footer[id] { scroll-margin-top: 80px; }
```

### Шрифт (обязательно в `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## 1. Hero (WebGL orange shader + giant text)

### HTML
```html
<section class="hero" id="hero">
  <div class="hero-shader" id="heroShader"></div>
  <div class="hero-inner">
    <div class="hero-title-big visible" id="heroVibe">ВАЙБ</div>
    <h1 class="hero-subtitle hero-fade hero-fade-1 visible">ТЫ ЕЩЁ НЕ ПОНЯЛ<br class="br-mobile"> ЧТО ТАКОЕ ИИ-АГЕНТ</h1>
    <p class="hero-desc hero-fade hero-fade-2 visible">Лонгрид Егора Борисенко — честно,<br class="br-mobile"> без хайпа</p>
    <a href="#part-1" class="hero-cta-btn hero-fade hero-fade-4 visible">Читать</a>
  </div>
</section>
```

> Для статичной страницы (без intro) добавь класс `visible` к `.hero-title-big` и `.hero-fade-*` сразу.

### CSS
```css
.hero {
  position: relative; min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  overflow: hidden;
}
.hero-shader {
  position: absolute; inset: 0; z-index: 0;
}
.hero-shader canvas {
  width: 100%; height: 100%; display: block;
}
.hero::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 200px;
  background: linear-gradient(to top, var(--white), transparent);
  pointer-events: none;
}
.hero-inner {
  position: relative; z-index: 2;
  text-align: center; padding: 120px 2rem 80px;
  width: 100%;
}
.hero-title-big {
  font-size: clamp(80px, 20vw, 300px);
  font-weight: 900; line-height: 0.85; letter-spacing: -0.04em;
  color: var(--white);
  margin-bottom: 2rem;
  opacity: 0;
}
@media (max-width: 767px) {
  .hero-title-big { font-size: clamp(100px, 27vw, 140px); margin-bottom: 1.5rem; }
}
.hero-title-big.visible { opacity: 1; }

.hero-fade {
  opacity: 0; transform: translateY(25px);
  transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}
.hero-fade.visible { opacity: 1; transform: translateY(0); }
.hero-fade-1 { transition-delay: 0.1s; }
.hero-fade-2 { transition-delay: 0.25s; }
.hero-fade-3 { transition-delay: 0.4s; }
.hero-fade-4 { transition-delay: 0.55s; }
.hero-fade-5 { transition-delay: 0.7s; }

.hero-subtitle {
  font-size: clamp(1rem, 4.2vw, 2.25rem);
  font-weight: 700; line-height: 1.2; letter-spacing: 0.05em;
  color: var(--white); max-width: 900px; margin: 0 auto 1.5rem;
  padding: 0 0.25rem;
}
@media (min-width: 1024px) { .hero-subtitle { white-space: nowrap; } }

.hero-desc {
  font-size: clamp(0.95rem, 3.4vw, 1.5rem);
  color: rgba(255,255,255,0.85); max-width: 700px; margin: 0 auto;
  line-height: 1.55; font-weight: 400;
  padding: 0 0.25rem;
}
@media (min-width: 1024px) { .hero-desc { white-space: nowrap; } }

.br-mobile { display: none; }
@media (max-width: 767px) { .br-mobile { display: inline; } }

.hero-cta-btn {
  display: inline-block; margin-top: 2.5rem;
  padding: 1rem 2.5rem; font-size: 1.1rem; font-weight: 700;
  color: #666; text-decoration: none;
  background: var(--white); border-radius: 9999px;
  transition: all var(--transition);
}
.hero-cta-btn:hover { transform: translateY(-3px) scale(1.03); background: #f5f5f5; }
@media (max-width: 767px) {
  .hero-desc    { font-size: 1rem; font-weight: 400; line-height: 1.55; }
  .hero-cta-btn { font-size: 1rem; font-weight: 400; padding: 0.9rem 2rem; margin-top: 2rem; }
}
```

### JS — Stripe-style orange gradient shader (WebGL)
```html
<script>
function initOrangeShader(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const gl = canvas.getContext('webgl');
  if (!gl) return;

  const vsrc = `attribute vec2 position; varying vec2 vUv;
    void main(){ vUv = position * 0.5 + 0.5; gl_Position = vec4(position,0.0,1.0); }`;

  const fsrc = `precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform vec2 u_resolution;

    void main(){
      vec2 p = ((vUv * u_resolution * 2.0 - u_resolution) / (u_resolution.x + u_resolution.y) * 2.0) * 1.0;
      float t = u_time * 0.4;
      float a = 4.0 * p.y - sin(-p.x * 3.0 + p.y - t);
      a = smoothstep(cos(a) * 0.7, sin(a) * 0.7 + 1.0, cos(a - 4.0 * p.y) - sin(a + 3.0 * p.x));
      vec2 w = (cos(a) * p + sin(a) * vec2(-p.y, p.x)) * 0.5 + 0.5;

      vec3 c1 = vec3(1.0, 0.76, 0.16);
      vec3 c2 = vec3(1.0, 0.63, 0.0);
      vec3 c3 = vec3(0.95, 0.50, 0.0);

      vec3 col = mix(c1, c2, w.x);
      col = mix(col, c3, w.y);
      col *= col + 0.6 * sqrt(col);
      col = clamp(col, 0.0, 1.0);

      gl_FragColor = vec4(col, 1.0);
    }`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s); return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsrc));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsrc));
  gl.linkProgram(prog); gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');

  function resize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  let time = 0, running = true;
  function draw() {
    if (!running) return;
    time += 0.016;
    gl.uniform1f(uTime, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(draw);
  }
  draw();

  const obs = new IntersectionObserver(([e]) => {
    running = e.isIntersecting;
    if (running) draw();
  });
  obs.observe(container);
}

initOrangeShader('heroShader');
</script>
```

### Альтернатива: более светлый (pastel) шейдер
Используется в секции worth. Отличаются только цвета `c1/c2/c3`:
```glsl
vec3 c1 = vec3(1.0, 0.92, 0.65);
vec3 c2 = vec3(1.0, 0.82, 0.45);
vec3 c3 = vec3(1.0, 0.72, 0.35);
```

### Как вставить
1. Подключи `<div class="hero-shader" id="heroShader"></div>` в hero-секцию.
2. В конце страницы вызови `initOrangeShader('heroShader')`.
3. Можно переиспользовать на нескольких секциях: создай `<div class="hero-shader" id="myShader2"></div>` и вызови `initOrangeShader('myShader2')`.

---

## 2. Анимированные blob-фоны + pointer-blob

Фоновая секция (белый фон), под которым дышат оранжевые blob'ы + центральное пятно следит за курсором.

### HTML
```html
<section class="results-section" id="results">
  <div class="results-blobs" id="resultsBlobs">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>
    <div class="blob blob-5"></div>
    <div class="blob blob-pointer" id="resultsBlobPointer"></div>
  </div>
  <div class="results-inner">
    <!-- твой контент -->
  </div>
</section>
```

> Примечание: в index.html есть только `.blob-pointer` в HTML, а blob-1..5 заданы в CSS-классах. Структура выше правильная для полноценной работы всех пяти фонов — нужно добавить 5 div'ов.

### CSS
```css
.results-section {
  position: relative; z-index: 2;
  min-height: 100vh;
  background: var(--white);
  overflow: hidden;
}
.results-inner {
  position: relative;
  max-width: 1200px; margin: 0 auto;
  padding: clamp(60px, 8vw, 100px) 2rem;
}
@media (min-width: 768px) { .results-inner { padding: clamp(60px, 8vw, 100px) 3rem; } }
@media (min-width: 1280px) { .results-inner { padding: clamp(60px, 8vw, 100px) 5rem; } }

/* Animated gradient blobs background */
.results-blobs {
  position: absolute; inset: 0; overflow: hidden;
  pointer-events: none;
}
.results-blobs .blob {
  position: absolute;
  border-radius: 50%;
  width: 600px; height: 600px; /* default size; can vary per blob */
}
.results-blobs .blob-1 {
  top: -200px; left: 10%;
  background: radial-gradient(circle, rgba(255,213,79,0.8) 0%, transparent 50%);
  animation: blobVertical 30s ease infinite;
}
.results-blobs .blob-2 {
  top: 20%; right: 0;
  background: radial-gradient(circle, rgba(255,176,0,0.8) 0%, transparent 50%);
  animation: blobCircle 20s reverse infinite;
  transform-origin: calc(50% - 400px);
}
.results-blobs .blob-3 {
  bottom: 10%; left: 20%;
  background: radial-gradient(circle, rgba(255,160,0,0.8) 0%, transparent 50%);
  animation: blobCircle 40s linear infinite;
  transform-origin: calc(50% + 400px);
}
.results-blobs .blob-4 {
  top: 40%; left: 40%;
  background: radial-gradient(circle, rgba(255,140,0,0.7) 0%, transparent 50%);
  animation: blobHorizontal 35s ease infinite;
  transform-origin: calc(50% - 200px);
}
.results-blobs .blob-5 {
  bottom: -100px; right: 10%;
  background: radial-gradient(circle, rgba(255,213,79,0.8) 0%, transparent 50%);
  animation: blobCircle 25s ease infinite;
  transform-origin: calc(50% - 800px) calc(50% + 800px);
}
.results-blobs .blob-pointer {
  width: 900px; height: 900px;
  left: 50%; top: 50%;
  margin-left: -450px; margin-top: -450px;
  background: radial-gradient(circle, rgba(255,200,0,0.18) 0%, rgba(255,170,0,0.06) 40%, transparent 65%);
  filter: blur(55px);
  pointer-events: none;
  will-change: transform;
  transition: none;
}
@keyframes blobVertical {
  0%, 100% { transform: translateY(-50%); }
  50% { transform: translateY(50%); }
}
@keyframes blobCircle {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}
@keyframes blobHorizontal {
  0%, 100% { transform: translateX(-50%) translateY(-10%); }
  50% { transform: translateX(50%) translateY(10%); }
}
```

### JS — pointer-blob follows cursor (lerped)
```html
<script>
(function() {
  const section = document.getElementById('results');
  const blob = document.getElementById('resultsBlobPointer');
  if (!section || !blob) return;

  let curX = 0, curY = 0, tgX = 0, tgY = 0, active = false;

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    tgX = e.clientX - rect.left - rect.width / 2;
    tgY = e.clientY - rect.top - rect.height / 2;
  }, { passive: true });

  function animate() {
    curX += (tgX - curX) / 15;
    curY += (tgY - curY) / 15;
    blob.style.transform = `translate(${curX}px, ${curY}px)`;
    if (active) requestAnimationFrame(animate);
  }

  new IntersectionObserver(([e]) => {
    const was = active;
    active = e.isIntersecting;
    if (active && !was) animate();
  }, { threshold: 0.1 }).observe(section);
})();
</script>
```

### Как вставить
Оборачиваешь любую белую секцию. Внутри `.results-inner` — контент. Для работы pointer-blob нужен `id="results"` на секции и `id="resultsBlobPointer"` на нужном div'е (или поменять ID в JS).

---

## 3. Lamp-light (конус света сверху)

### HTML
```html
<section class="worth" id="worth">
  <div class="worth-lamp"><div class="worth-lamp-line"></div></div>
  <div class="worth-inner">
    <!-- контент -->
  </div>
</section>
```

### CSS
```css
.worth {
  position: relative; overflow: hidden;
  padding: clamp(100px, 12vw, 180px) 0 clamp(60px, 8vw, 120px);
  background: var(--white);
}

.worth-lamp {
  position: absolute; top: 0; left: 0; right: 0;
  height: 300px;
  pointer-events: none; z-index: 1;
}
/* Bright core */
.worth-lamp::before {
  content: ''; position: absolute;
  top: 0; left: 50%;
  width: 1200px; height: 100%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse 80% 100% at 50% 0%,
    rgba(255,180,0,0.35) 0%,
    rgba(255,200,0,0.15) 40%,
    transparent 80%);
}
/* Wide soft outer glow */
.worth-lamp::after {
  content: ''; position: absolute;
  top: 0; left: 50%;
  width: 1600px; height: 100%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse 80% 100% at 50% 0%,
    rgba(255,200,0,0.18) 0%,
    rgba(255,213,79,0.06) 50%,
    transparent 80%);
}
/* Top edge bright line */
.worth-lamp-line {
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 20%, rgba(255,160,0,0.5) 50%, transparent 80%);
  box-shadow: 0 0 40px 15px rgba(255,180,0,0.12);
}
.worth-inner {
  position: relative; z-index: 2;
  max-width: 1200px; margin: 0 auto; padding: 0 2rem;
  text-align: center;
}
@media (min-width: 768px) { .worth-inner { padding: 0 3rem; } }
@media (min-width: 1280px) { .worth-inner { padding: 0 5rem; } }
```

### Dependencies
- `--white`, `--orange` из :root
- Только CSS, JS не нужен

### Как вставить
Оборачиваешь белую секцию с `position: relative; overflow: hidden;`. Добавляешь `.worth-lamp` сразу внутри. Работает как "прожектор сверху" — идеально как разделитель между тёмными и светлыми участками.

---

## 4. Liquid-glass карточки (problem-card + bento-card)

Два варианта матового стекла — тонкий (problem-card для белого фона) и полупрозрачный (bento-card для цветных фонов).

### 4a. Problem-card (белый фон)

#### HTML
```html
<div class="problem-card glow-card">
  <div class="glow-effect"></div>
  <div class="problem-card-num">1</div>
  <div class="problem-card-text">Текст проблемы</div>
</div>
```

#### CSS
```css
.problem-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 1.5rem; margin-top: 3rem;
}
@media (min-width: 640px) { .problem-grid { grid-template-columns: 1fr 1fr; gap: 2rem; grid-auto-rows: 1fr; } }
@media (min-width: 1024px) { .problem-grid { grid-template-columns: 1fr 1fr 1fr; gap: 2rem; grid-auto-rows: 1fr; } }

.problem-card {
  position: relative;
  padding: 1.5rem 1.75rem;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05);
  background: linear-gradient(135deg,
    rgba(255,255,255,0.65) 0%,
    rgba(255,255,255,0.3) 100%);
  backdrop-filter: blur(20px) saturate(1.6);
  -webkit-backdrop-filter: blur(20px) saturate(1.6);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.03),
    0 4px 16px rgba(0,0,0,0.025),
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(0,0,0,0.015);
  transition: transform var(--transition-fast), border-color 0.4s ease, box-shadow 0.4s ease;
  cursor: default;
  display: flex; align-items: center; gap: 1.25rem;
  overflow: hidden;
}
.problem-card::before {
  content: ''; position: absolute; inset: 0;
  border-radius: 20px;
  background:
    radial-gradient(ellipse 50% 45% at 15% 12%, rgba(255,255,255,0.75), transparent 55%),
    radial-gradient(ellipse 70% 35% at 85% 90%, rgba(255,220,80,0.03), transparent 50%);
  pointer-events: none;
}
.problem-card::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 20px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(255,255,255,0.45), transparent 35%, transparent 65%, rgba(255,255,255,0.12)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.problem-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,200,50,0.2);
  box-shadow:
    0 8px 28px rgba(255,180,0,0.06),
    0 2px 8px rgba(0,0,0,0.03),
    inset 0 1px 0 rgba(255,255,255,0.9);
}
.problem-card-num {
  position: relative; z-index: 1;
  flex-shrink: 0;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900; line-height: 1;
  color: #FFD54F;
  filter: drop-shadow(0 1px 4px rgba(255,213,79,0.25));
}
.problem-card-text {
  position: relative; z-index: 1;
  font-size: 1.05rem; font-weight: 600; line-height: 1.4;
  color: var(--text);
}

/* GLOWING EFFECT (rotating gold border on cursor hover) */
.glow-card { position: relative; overflow: visible; }
.glow-effect {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  --start: 0;
  --active: 0;
  --spread: 20;
}
.glow-effect::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  border: 1.5px solid transparent;
  background:
    radial-gradient(circle, #FFD54F 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, #FFA000 5%, transparent 15%),
    radial-gradient(circle at 60% 60%, #FF8F00 10%, transparent 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #FFD54F 0%, #FFA000 5%, #FF8F00 10%, #FFB300 15%, #FFD54F 20%
    );
  background-attachment: fixed;
  opacity: var(--active);
  transition: opacity 0.3s ease;
  -webkit-mask-clip: padding-box, border-box;
  mask-clip: padding-box, border-box;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-image: linear-gradient(#0000, #0000), conic-gradient(
    from calc((var(--start) - var(--spread)) * 1deg),
    #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg)
  );
  mask-image: linear-gradient(#0000, #0000), conic-gradient(
    from calc((var(--start) - var(--spread)) * 1deg),
    #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg)
  );
}
```

#### JS — glow follows cursor
```html
<script>
const glowCards = document.querySelectorAll('.glow-card');
document.body.addEventListener('pointermove', (e) => {
  glowCards.forEach(card => {
    const glow = card.querySelector('.glow-effect');
    if (!glow) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const mx = e.clientX, my = e.clientY;
    const proximity = 120;
    const isNear = mx > left - proximity && mx < left + width + proximity &&
                   my > top - proximity && my < top + height + proximity;
    glow.style.setProperty('--active', isNear ? '1' : '0');
    if (!isNear) return;
    const angle = Math.atan2(my - (top + height / 2), mx - (left + width / 2)) * (180 / Math.PI) + 90;
    glow.style.setProperty('--start', String(angle));
  });
}, { passive: true });
</script>
```

### 4b. Bento-card (на цветном/градиентном фоне)

```css
.bento-card {
  position: relative; overflow: hidden;
  border-radius: 20px;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(255,255,255,0.45);
  background: linear-gradient(135deg,
    rgba(255,255,255,0.35) 0%,
    rgba(255,255,255,0.12) 100%);
  backdrop-filter: blur(20px) saturate(1.6);
  -webkit-backdrop-filter: blur(20px) saturate(1.6);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 8px 32px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.95),
    inset 0 -1px 0 rgba(0,0,0,0.02);
  transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
  display: flex; flex-direction: column; justify-content: flex-end;
}
.bento-card::before {
  content: ''; position: absolute; inset: 0;
  border-radius: 20px;
  background:
    radial-gradient(ellipse 60% 50% at 20% 15%, rgba(255,255,255,0.8), transparent 60%),
    radial-gradient(ellipse 80% 40% at 80% 90%, rgba(255,200,50,0.04), transparent 50%);
  pointer-events: none;
}
.bento-card::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 20px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(255,255,255,0.5), transparent 40%, transparent 60%, rgba(255,255,255,0.15)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.bento-card:hover {
  border-color: rgba(255,160,0,0.25);
  transform: translateY(-4px);
  box-shadow:
    0 8px 32px rgba(255,160,0,0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.9);
}
```

### Где используется в index.html
- `problem-card` — секция "Если хотя бы одно про тебя" (6 пронумерованных плашек)
- `bento-card` — секция "Твой результат" (5 карточек с большими цифрами)

### Как вставить
В лонгриде `problem-card` идеален для "6 знаков, что тебе нужен агент" или "что ты увидишь к концу статьи". Оборачивай в `.problem-grid` — автоматический grid.

---

## 5. Timeline с маркерами (идеально для оглавления глав)

### HTML
```html
<section class="program-section" id="program">
  <div class="s-container">
    <div class="reveal">
      <h2 class="s-title">Заголовок раздела</h2>
    </div>
    <div class="timeline" id="timeline">
      <div class="timeline-progress" id="timelineProgress"></div>

      <div class="timeline-item">
        <div class="timeline-marker">01</div>
        <div class="timeline-card">
          <h3>Название главы</h3>
          <ul>
            <li>Буллет 1</li>
            <li>Буллет 2</li>
          </ul>
          <div class="timeline-result">Итог главы.</div>
        </div>
      </div>

      <!-- повторить timeline-item для каждой главы -->
    </div>
  </div>
</section>
```

### CSS
```css
.program-section {
  padding: clamp(60px, 8vw, 120px) 0;
  position: relative; overflow: hidden;
  background: var(--white);
}
.program-section .s-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
@media (min-width: 768px) { .program-section .s-container { padding: 0 3rem; } }
@media (min-width: 1280px) { .program-section .s-container { padding: 0 5rem; } }
.program-section .s-title {
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 800; letter-spacing: -0.04em;
  color: var(--black); line-height: 1;
}

.timeline { position: relative; margin-top: 3rem; padding-left: 3.25rem; }
@media (min-width: 768px) { .timeline { padding-left: 4.5rem; } }
.timeline::before {
  content: ""; position: absolute;
  left: 1.25rem; top: 0.5rem; bottom: 0.5rem; width: 2px;
  background: var(--border);
  border-radius: 2px;
}
@media (min-width: 768px) { .timeline::before { left: 1.75rem; } }

.timeline-progress {
  position: absolute; left: 1.25rem; top: 0.5rem; width: 2px;
  background: linear-gradient(180deg, #FFD54F, #FFA000);
  height: 0; z-index: 1; border-radius: 2px;
  transition: height 0.4s ease-out;
}
@media (min-width: 768px) { .timeline-progress { left: 1.75rem; } }

.timeline-item { position: relative; padding-bottom: 2.5rem; }
.timeline-item:last-child { padding-bottom: 0; }

.timeline-marker {
  position: absolute;
  left: calc(-2rem - 1px - 22px); top: 1.25rem;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 800; color: var(--text-light);
  font-variant-numeric: tabular-nums; letter-spacing: 0.02em;
  transition: background 0.5s cubic-bezier(0.23, 1, 0.32, 1),
              border-color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
              color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
@media (min-width: 768px) {
  .timeline-marker {
    left: calc(-2.75rem - 1px - 25px);
    width: 50px; height: 50px; font-size: 0.9rem; top: 1.4rem;
  }
}
.timeline-item.revealed .timeline-marker {
  background: linear-gradient(135deg, #FFD54F 0%, #FFA000 100%);
  border-color: var(--orange);
  color: var(--white);
  box-shadow: 0 6px 18px rgba(255,160,0,0.30);
  animation: markerPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes markerPop {
  0% { transform: scale(0.6); opacity: 0; }
  60% { transform: scale(1.12); }
  100% { transform: scale(1); opacity: 1; }
}

.timeline-card {
  position: relative;
  border-radius: 22px; padding: 1.5rem 2rem 1.75rem;
  border: 1px solid rgba(0,0,0,0.06);
  background: linear-gradient(180deg, #FFFFFF 0%, #FBFBFB 100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0; transform: translateY(15px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
}
@media (min-width: 768px) {
  .timeline-card { padding: 1.75rem 2.5rem 2rem; }
}
.timeline-item.revealed .timeline-card {
  opacity: 1; transform: translateX(0) translateY(0);
}
.timeline-card:hover {
  border-color: rgba(255,160,0,0.25);
  box-shadow: 0 12px 32px rgba(255,160,0,0.08); transform: translateY(-2px);
}
.timeline-card h3 {
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  font-weight: 700; color: var(--black);
  margin-bottom: 0.75rem; line-height: 1.35;
  opacity: 0; transform: translateY(8px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.05s;
}
.timeline-item.revealed .timeline-card h3 { opacity: 1; transform: translateY(0); }
.timeline-card ul {
  list-style: none; padding: 0; margin: 0 0 0.75rem;
}
.timeline-card li {
  position: relative; padding-left: 1.25rem;
  font-size: 0.9rem; color: var(--text-muted);
  line-height: 1.65; margin-bottom: 0.35rem;
  opacity: 0; transform: translateX(-10px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.timeline-item.revealed .timeline-card li { opacity: 1; transform: translateX(0); }
.timeline-item.revealed .timeline-card li:nth-child(1) { transition-delay: 0.15s; }
.timeline-item.revealed .timeline-card li:nth-child(2) { transition-delay: 0.25s; }
.timeline-item.revealed .timeline-card li:nth-child(3) { transition-delay: 0.35s; }
.timeline-item.revealed .timeline-card li:nth-child(4) { transition-delay: 0.45s; }
.timeline-card li::before {
  content: ""; position: absolute; left: 0; top: 0.55em;
  width: 5px; height: 5px; border-radius: 50%;
  background: #FFA000;
}
.timeline-result {
  display: inline-block;
  font-size: 0.85rem; font-weight: 600; color: #FFA000;
  opacity: 0; transform: translateY(10px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s;
}
.timeline-item.revealed .timeline-result { opacity: 1; transform: translateY(0); }
```

### JS — scroll-based progress line + reveal
```html
<script>
(function() {
  const items = document.querySelectorAll('.timeline-item');
  const progress = document.getElementById('timelineProgress');
  const timeline = document.getElementById('timeline');
  if (!items.length || !progress || !timeline) return;

  // Reveal items on scroll
  let revealedCount = 0;
  const itemObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.classList.contains('revealed')) {
        const delay = revealedCount * 150;
        revealedCount++;
        setTimeout(() => e.target.classList.add('revealed'), delay);
        itemObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
  items.forEach(i => itemObs.observe(i));

  // Continuous scroll-based progress line
  function updateProgress() {
    const tRect = timeline.getBoundingClientRect();
    const viewMid = window.innerHeight * 0.6;
    const scrollInto = viewMid - tRect.top;
    const totalH = tRect.height;
    const pct = Math.max(0, Math.min(1, scrollInto / totalH));
    progress.style.height = (pct * 100) + '%';
    progress.style.transform = 'scaleY(1)';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
</script>
```

### Как вставить как оглавление лонгрида
Идеально. `timeline-marker` — номер главы, `<h3>` — её название, `<ul>` — тизер подпунктов, `.timeline-result` — какое ощущение даст глава. Маркер анимированно разгорается когда глава в viewport, линия прогресса плывёт сверху вниз по мере скролла.

---

## 6. Marquee (бегущая строка)

### HTML (белая версия)
```html
<div class="marquee marquee-white">
  <div class="marquee-track">
    <span class="marquee-item">ВАЙБ</span><span class="marquee-dot">•</span>
    <span class="marquee-item">AI FIRST</span><span class="marquee-dot">•</span>
    <span class="marquee-item">БЕЗ КОДА</span><span class="marquee-dot">•</span>
    <!-- продублируй для бесшовности — 2-3 раза -->
  </div>
</div>
```

### HTML (оранжевая градиентная)
```html
<div class="marquee marquee-grad">
  <div class="marquee-track">
    <!-- ... -->
  </div>
</div>
```

### CSS
```css
.marquee {
  overflow: hidden; white-space: nowrap;
  padding: 1.5rem 0; position: relative; z-index: 2;
}
.marquee-white { background: var(--white); }
.marquee-grad { background: var(--grad-page); }
.marquee-track {
  display: inline-flex; animation: ticker 40s linear infinite;
}
.marquee-item {
  font-size: clamp(1rem, 2vw, 1.5rem); font-weight: 700;
  letter-spacing: -0.02em; padding: 0 2rem;
  flex-shrink: 0;
}
.marquee-white .marquee-item { color: var(--text-light); }
.marquee-grad .marquee-item { color: rgba(255,255,255,0.6); }
.marquee-item { display: inline-flex; align-items: center; }
.marquee-dot { opacity: 0.35; font-size: 1em; margin: 0 1em; }
@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
```

### Где уместно в статье
Отличный переход между главами — тизит тон следующей секции. В index.html используется между hero→problem и между cases→program.

**JS не нужен** — чистая CSS-анимация.

---

## 7. Orange island section (как "островок" оранжевого в белом потоке)

Фон `projects-showcase` и `cases-section`.

### HTML
```html
<section class="projects-showcase" id="my-island">
  <div class="s-container">
    <!-- контент, например грид с картинками -->
  </div>
</section>
```

### CSS
```css
.projects-showcase {
  background: linear-gradient(135deg, #FFA000 0%, #FF8F00 60%, #F28000 100%);
  padding: clamp(24px, 3vw, 40px) 0 clamp(60px, 8vw, 110px);
  position: relative; z-index: 2;
  overflow: hidden;
}
.projects-showcase::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.10), transparent 55%);
  pointer-events: none;
}
.projects-showcase .s-container {
  max-width: 1340px; margin: 0 auto; padding: 0 2rem;
  position: relative; z-index: 1;
}
@media (min-width: 768px) { .projects-showcase .s-container { padding: 0 3rem; } }
```

### Как вставить
Любую секцию оформи таким фоном и она станет "оранжевым островом" — переход будет мягкий благодаря radial-gradient в ::before.

---

## 8. Reveal-анимации (полный комплект)

### CSS
```css
.reveal {
  opacity: 0; transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-big {
  opacity: 0; transform: translateY(80px) scale(0.95);
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.reveal-big.visible { opacity: 1; transform: translateY(0) scale(1); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-delay-5 { transition-delay: 0.5s; }
```

### JS
```html
<script>
const reveals = document.querySelectorAll('.reveal, .reveal-big');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => revealObserver.observe(el));
</script>
```

### Как применять
```html
<div class="reveal">появится снизу</div>
<div class="reveal reveal-delay-1">с задержкой 0.1s</div>
<h2 class="reveal-big">большой рывок (для hero-заголовков внутри секций)</h2>
```

---

## 9. Header (transparent → scrolled blur) + mobile burger

### HTML
```html
<header class="header" id="header">
  <a href="/" class="header-logo">АГИ</a>
  <nav class="header-nav">
    <a href="#part-1">Часть 1</a>
    <a href="#part-2">Часть 2</a>
    <a href="#part-3">Часть 3</a>
  </nav>
  <div class="header-actions">
    <a href="/#pricing" class="header-cta">На практикум</a>
    <button type="button" class="header-burger" id="headerBurger" aria-label="Открыть меню" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <a href="#part-1">Часть 1</a>
  <a href="#part-2">Часть 2</a>
  <a href="#part-3">Часть 3</a>
  <a href="/#pricing">На практикум</a>
</div>
```

### CSS
```css
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  transition: transform var(--transition), background var(--transition);
}
.header.scrolled { background: rgba(255,255,255,0.85); backdrop-filter: blur(20px) saturate(1.4); }
.header-logo {
  font-size: 1.1rem; font-weight: 800; letter-spacing: -0.03em;
  text-decoration: none; color: #444;
  flex-shrink: 0;
}
.header-nav { display: none; }
.header-nav a {
  text-decoration: none; color: #444;
  font-size: 0.9rem; font-weight: 500;
  transition: opacity var(--transition-fast);
}
.header-nav a:hover { opacity: 0.5; }
.header-actions {
  display: flex; align-items: center; gap: 0.5rem;
  flex-shrink: 0;
}
.header-cta {
  padding: 0.5rem 1rem;
  background: var(--white); color: var(--text);
  border-radius: 9999px; font-size: 0.82rem; font-weight: 700;
  text-decoration: none; transition: all var(--transition-fast);
  border: 2px solid rgba(0,0,0,0.08);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  flex-shrink: 0;
  white-space: nowrap;
}
.header-cta:hover { background: #F5F5F5; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
.header.scrolled .header-cta {
  background: var(--orange); color: var(--white); border-color: var(--orange);
}
.header.scrolled .header-cta:hover { background: var(--orange-dark); border-color: var(--orange-dark); }

/* Mobile burger */
.header-burger {
  display: flex; flex-direction: column; justify-content: center;
  align-items: center; gap: 4px;
  width: 40px; height: 40px;
  border: none; background: rgba(255,255,255,0.65);
  border-radius: 10px;
  cursor: pointer; padding: 0;
  flex-shrink: 0;
  transition: background var(--transition-fast);
}
.header.scrolled .header-burger { background: rgba(0,0,0,0.05); }
.header-burger span {
  display: block; width: 18px; height: 2px;
  background: #444;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.header-burger.is-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.header-burger.is-open span:nth-child(2) { opacity: 0; }
.header-burger.is-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile drawer menu */
.mobile-menu {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  z-index: 999;
  display: flex; flex-direction: column;
  padding: 5rem 2rem 2rem;
  opacity: 0; pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu.is-open {
  opacity: 1; pointer-events: auto;
  transform: translateY(0);
}
.mobile-menu a {
  font-size: 1.75rem; font-weight: 700;
  color: var(--text); text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  letter-spacing: -0.02em;
}
.mobile-menu a:last-child { border-bottom: none; }

@media (min-width: 768px) {
  .header { padding: 1.25rem 3rem; gap: 0.5rem; }
  .header-nav {
    display: flex; gap: 2.5rem; align-items: center;
    position: absolute; left: 50%; transform: translateX(-50%);
  }
  .header-cta { padding: 0.7rem 1.8rem; font-size: 0.95rem; }
  .header-burger { display: none; }
  .mobile-menu { display: none; }
}
@media (min-width: 1280px) { .header { padding: 1.5rem 5rem; } }
```

### JS
```html
<script>
// === Header background on scroll ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}, { passive: true });

// === Mobile burger menu ===
(() => {
  const burger = document.getElementById('headerBurger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;
  const close = () => {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  burger.addEventListener('click', () => {
    const opened = menu.classList.toggle('is-open');
    burger.classList.toggle('is-open', opened);
    burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    document.body.style.overflow = opened ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();
</script>
```

### Как вставить
Прозрачный на hero, размытый белый при скролле. Кнопка СТА становится оранжевой в scrolled-стейте.

---

## 10. Pricing cards (обычная + featured с glow)

### HTML
```html
<section class="pricing-section" id="pricing">
  <div class="pricing-shader" id="pricingShader"></div>
  <div class="s-container">
    <div class="reveal">
      <h2 class="s-title">Выбери свой формат</h2>
    </div>
    <div class="pricing-grid">
      <div class="price-card reveal reveal-delay-1">
        <div class="price-name">Основной</div>
        <div class="price-early">Ранняя цена · −33%</div>
        <div class="price-amount-row">
          <div class="price-amount"><span>19 999</span> ₽</div>
          <div class="price-old">30 000 ₽</div>
        </div>
        <ul class="price-features">
          <li>Пункт один</li>
          <li>Пункт два</li>
        </ul>
        <button type="button" class="price-cta">Записаться</button>
      </div>
      <div class="price-card price-card--featured reveal reveal-delay-2">
        <div class="price-badge">Осталось 5 мест</div>
        <div class="price-name">Персональный</div>
        <div class="price-early">Ранняя цена · −38%</div>
        <div class="price-amount-row">
          <div class="price-amount"><span>39 999</span> ₽</div>
          <div class="price-old">65 000 ₽</div>
        </div>
        <ul class="price-features">
          <li>Всё из основного</li>
          <li>Плюс персональный разбор</li>
        </ul>
        <button type="button" class="price-cta">Записаться</button>
      </div>
    </div>
  </div>
</section>
```

### CSS
```css
.pricing-section {
  position: relative; z-index: 2;
  padding: clamp(80px, 10vw, 140px) 0;
  overflow: hidden;
}
.pricing-shader {
  position: absolute; inset: 0; z-index: 0;
  pointer-events: none;
}
.pricing-shader canvas { width: 100%; height: 100%; display: block; }
.pricing-section .s-container {
  max-width: 1100px; margin: 0 auto; padding: 0 2rem;
  position: relative; z-index: 1;
}
@media (min-width: 768px) { .pricing-section .s-container { padding: 0 3rem; } }

#pricing .s-title {
  color: var(--white); text-align: center;
  margin-bottom: 3rem;
}

.pricing-grid {
  display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3rem;
}
@media (min-width: 768px) {
  .pricing-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; align-items: stretch; }
}

.price-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px; padding: 2.5rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  display: flex; flex-direction: column;
}
.price-card:hover { transform: translateY(-4px); }

.price-card--featured {
  border-color: rgba(255,160,0,0.2);
  box-shadow: 0px -20px 300px 30px rgba(255,140,0,0.25);
  z-index: 2;
}
.price-card--featured:hover {
  box-shadow: 0px -20px 350px 40px rgba(255,140,0,0.3);
}

.price-name {
  font-size: 1.5rem; font-weight: 800; color: var(--text);
  margin-bottom: 0.75rem;
}
.price-early {
  display: inline-block; align-self: flex-start;
  font-size: 0.72rem; font-weight: 800;
  color: var(--orange); letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  background: rgba(255,140,0,0.10);
  border: 1px solid rgba(255,140,0,0.25);
  border-radius: 999px;
  margin-bottom: 0.85rem;
}
.price-amount-row {
  display: flex; align-items: baseline; gap: 0.85rem;
  flex-wrap: wrap; margin-bottom: 2rem;
}
.price-amount {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900; color: var(--text);
  letter-spacing: -0.03em;
}
.price-old {
  font-size: 1.15rem; font-weight: 600;
  color: var(--text-muted); text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: rgba(255,140,0,0.55);
}

.price-features {
  list-style: none; margin-bottom: 2rem;
  padding-top: 1.5rem; border-top: 1px solid var(--border);
  flex: 1;
}
.price-features li {
  font-size: 0.95rem; color: var(--text-muted);
  padding: 0.45rem 0; line-height: 1.5;
  display: flex; align-items: center; gap: 0.65rem;
}
.price-features li::before {
  content: '';
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  background: var(--orange);
}

.price-cta {
  display: block; text-align: center;
  padding: 1rem 2rem; border-radius: 14px;
  background: var(--white); color: var(--text);
  border: 2px solid var(--border);
  font-size: 1.05rem; font-weight: 700;
  text-decoration: none;
  transition: all var(--transition-fast);
  width: 100%; font-family: inherit; cursor: pointer;
}
.price-cta:hover {
  transform: translateY(-2px);
  border-color: var(--text-muted);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.price-card--featured .price-cta {
  background: linear-gradient(145deg, var(--orange), #FF8F00);
  color: #FFF; border-color: var(--orange);
  box-shadow: 0 4px 20px rgba(255,140,0,0.2);
}
.price-card--featured .price-cta:hover {
  box-shadow: 0 8px 30px rgba(255,140,0,0.3);
}

.price-badge {
  position: absolute; top: -14px; left: 2.5rem;
  padding: 0.35rem 0.85rem;
  background: var(--orange); color: var(--white);
  border: 1px solid var(--orange);
  border-radius: 8px; font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em;
  box-shadow: 0 4px 14px rgba(255,140,0,0.35);
}
```

### JS
Для шейдерного фона — тот же `initOrangeShader('pricingShader')` (см. компонент 1).

### Featured glow
Самая крутая деталь — `box-shadow: 0px -20px 300px 30px rgba(255,140,0,0.25);` — сочный оранжевый halo вокруг featured-карточки. На белом/шейдерном фоне смотрится как прожектор.

---

## 11. Section dividers / transitions

Index.html не использует wave-dividers или ::before/::after оверлеи между секциями. Плавный переход достигается за счёт:

### 11a. Fade-overlay снизу hero
```css
.hero::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 200px;
  background: linear-gradient(to top, var(--white), transparent);
  pointer-events: none;
}
```
Так hero-шейдер растворяется в белом фоне следующей секции.

### 11b. Marquee как разделитель
Между контрастными секциями (белая → оранжевая) ставится `.marquee` — она нейтральная по высоте и тонально разделяет.

### 11c. Цветовые "острова"
Белая → оранжевая (`projects-showcase`) → белая. За счёт того что оранжевая имеет свой radial-gradient `::before`, края не смотрятся резко.

### 11d. Lamp-light
Компонент 3 создаёт прожектор сверху — отличный способ визуально отделить начало светлой секции от предыдущей.

**Вывод:** index.html не использует wave-SVG. Переходы — тонально через marquee, fade-overlay, и radial-gradient в углах.

---

## 12. Статичные декоры

### SVG-иконки (worth-card icons — line style)
```html
<!-- Часы -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
</svg>

<!-- Молния -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
</svg>

<!-- Замок -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>

<!-- График вверх -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
  <polyline points="17 6 23 6 23 12"/>
</svg>

<!-- Плюс (для faq) -->
<svg class="faq-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
</svg>
```

Контейнер иконок worth-card:
```css
.worth-card-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
}
.worth-card-icon svg {
  width: 22px; height: 22px; stroke: var(--orange); fill: none;
  stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
}
```

### Цветные точки-буллеты
```css
/* Оранжевая точка перед li */
.price-features li::before,
.timeline-card li::before {
  content: '';
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  background: var(--orange);
}
```

### Градиентные подложки для бейджей
```css
/* Оранжевый пилл-бейдж */
.mindset-top-pill {
  font-size: 0.74rem; font-weight: 800;
  color: var(--white);
  letter-spacing: 0.14em; text-transform: uppercase;
  padding: 0.6rem 1.25rem;
  background: var(--orange);
  border-radius: 9999px;
  box-shadow: 0 8px 22px rgba(255,140,0,0.35), 0 2px 6px rgba(0,0,0,0.10);
}

/* Мягкий тег с рамкой */
.cases-info-tag {
  display: inline-block; padding: 0.35rem 0.75rem;
  background: rgba(255,140,0,0.10);
  border: 1px solid rgba(255,140,0,0.30);
  border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; color: var(--orange);
  text-transform: uppercase; letter-spacing: 0.1em;
}

/* Eyebrow с бордюром-линзой */
.expert-badge {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border-radius: 8px; font-size: 0.8rem; font-weight: 600;
  background: linear-gradient(135deg, rgba(232,199,56,0.12), rgba(222,128,46,0.08));
  border: 1px solid rgba(232,199,56,0.2);
  color: var(--text);
}
.expert-badge::before {
  content: '✦'; color: var(--orange); font-size: 0.7rem;
}
```

### Спираль Фибоначчи (используется в секции results как фон)
```html
<div class="results-spiral" id="spiralContainer"></div>
```
```css
.results-spiral {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  pointer-events: none; opacity: 0.18;
  -webkit-mask-image: radial-gradient(circle at center, #000, rgba(0,0,0,0.2) 55%, transparent 72%);
  mask-image: radial-gradient(circle at center, #000, rgba(0,0,0,0.2) 55%, transparent 72%);
}
```
```html
<script>
(function() {
  const container = document.getElementById('spiralContainer');
  if (!container) return;
  const SIZE = 800, N = 600, DOT = 2;
  const GA = Math.PI * (3 - Math.sqrt(5));
  const CENTER = SIZE / 2, MAX_R = CENTER - 8;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`);
  svg.style.width = '100%'; svg.style.height = '100%';
  svg.style.maxWidth = '2400px'; svg.style.maxHeight = '2400px';

  const defs = document.createElementNS(svgNS, 'defs');
  const grad = document.createElementNS(svgNS, 'radialGradient');
  grad.setAttribute('id', 'spiralG');
  grad.setAttribute('cx', '50%'); grad.setAttribute('cy', '50%'); grad.setAttribute('r', '50%');
  [['0%','#FFD54F'],['100%','#FFA000']].forEach(([o,c]) => {
    const s = document.createElementNS(svgNS, 'stop');
    s.setAttribute('offset', o); s.setAttribute('stop-color', c);
    grad.appendChild(s);
  });
  defs.appendChild(grad); svg.appendChild(defs);

  for (let i = 0; i < N; i++) {
    const f = (i + 0.5) / N;
    const r = Math.sqrt(f) * MAX_R;
    const th = (i + 0.5) * GA;
    const c = document.createElementNS(svgNS, 'circle');
    c.setAttribute('cx', (CENTER + r * Math.cos(th)).toFixed(1));
    c.setAttribute('cy', (CENTER + r * Math.sin(th)).toFixed(1));
    c.setAttribute('r', String(DOT));
    c.setAttribute('fill', 'url(#spiralG)');
    c.setAttribute('opacity', String((0.25 + f * 0.55).toFixed(2)));
    svg.appendChild(c);
  }
  container.appendChild(svg);
})();
</script>
```

---

## 13. Typography patterns

### Section title (main H2)
```css
.s-title {
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 800; line-height: 1; letter-spacing: -0.04em;
  color: var(--text); margin-bottom: 1.5rem;
}
.section-grad .s-title { color: var(--white); }
```

### Section label (eyebrow)
```css
.s-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--text-light); margin-bottom: 1.5rem;
}
```

### Section description
```css
.s-desc {
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: var(--text-muted); max-width: 500px; line-height: 1.7;
}
```

### Accent (inline orange highlight)
```css
.accent { color: var(--orange); }
```

Использование:
```html
<h2 class="audience-title">Это <span class="accent">не</span> про <span class="accent">программирование</span></h2>
<div class="problem-conclusion-text">то ты по <span class="accent">адресу</span></div>
```

### Контейнер для секций
```css
.s-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
@media (min-width: 768px) { .s-container { padding: 0 3rem; } }
@media (min-width: 1280px) { .s-container { padding: 0 5rem; } }

.section-white {
  background: var(--white); position: relative; z-index: 2;
  padding: clamp(60px, 8vw, 120px) 0;
}
.section-grad {
  background: var(--grad-page); position: relative; z-index: 2;
  padding: clamp(60px, 8vw, 120px) 0;
}
.section-grad .s-label { color: rgba(255,255,255,0.6); }
.section-grad .s-title { color: var(--white); }
.section-grad .s-desc { color: rgba(255,255,255,0.8); }
```

---

## 14. Бонус — уникальные фишки

### 14a. Flip-text (буквы переворачиваются при hover)

Используется в секции statement (4 фразы по центру жёлтой страницы).

```html
<section class="statement" id="statement">
  <div class="flip-line" data-flip="Не лекции по промптам">Не лекции по промптам</div>
  <div class="flip-line" data-flip="Смена мышления">Смена мышления</div>
  <div class="flip-line" data-flip="AI-First навык">AI-First навык</div>
</section>
```

```css
.statement {
  position: relative; z-index: 2;
  background: var(--grad-page);
  min-height: 100vh;
  display: grid; place-content: center;
  gap: 0.35rem;
  padding: 4rem 5%;
}
.flip-line {
  position: relative;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  font-size: clamp(2.2rem, 7.5vw, 9rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--white);
  cursor: default;
}
.flip-line .flip-row { display: flex; }
.flip-line .flip-row-bottom {
  position: absolute; inset: 0;
  display: flex;
}
.flip-line .flip-row span {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.32, 0, 0.12, 1);
}
.flip-line .flip-row span.space { width: 0.3em; }
.flip-line:hover .flip-row-top span { transform: translateY(-110%); }
.flip-line .flip-row-bottom span { transform: translateY(110%); }
.flip-line:hover .flip-row-bottom span { transform: translateY(0); }
@media (max-width: 767px) {
  .statement { gap: 0.35rem; padding: 3rem 1rem; }
  .flip-line { font-size: clamp(1.35rem, 6.8vw, 2.4rem); letter-spacing: -0.03em; }
}
```

```html
<script>
document.querySelectorAll('.flip-line').forEach(line => {
  const text = line.textContent;
  line.textContent = '';
  const makeRow = (cls) => {
    const row = document.createElement('div');
    row.className = 'flip-row ' + cls;
    text.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      if (ch === ' ') { span.innerHTML = '\u00a0'; span.classList.add('space'); }
      else { span.textContent = ch; }
      span.style.transitionDelay = `${i * 25}ms`;
      row.appendChild(span);
    });
    return row;
  };
  line.appendChild(makeRow('flip-row-top'));
  line.appendChild(makeRow('flip-row-bottom'));
});
</script>
```

### 14b. Flip-pill (профессии переворачиваются сами по себе)

Плашки с названиями профессий постоянно сами меняются — 3D-переворот через rotateX.

```html
<div class="audience-right reveal">
  <div class="oval-pills" id="ovalPills">
    <div class="oval-row">
      <span class="oval-pill flip-pill"><span class="flip-text">Маркетолог</span></span>
      <span class="oval-pill flip-pill"><span class="flip-text">Юрист</span></span>
      <!-- больше плашек -->
    </div>
  </div>
</div>
```

```css
.oval-pills {
  display: flex; flex-direction: column;
  gap: 0.8rem; width: 100%; padding: 0 1rem;
}
.oval-row {
  display: flex; gap: 0.7rem; justify-content: center;
}
.oval-row:nth-child(1) { transform: translateX(-14px); }
.oval-row:nth-child(2) { transform: translateX(42px); }
.oval-row:nth-child(3) { transform: translateX(-28px); }
.oval-row:nth-child(4) { transform: translateX(36px); }
.oval-row:nth-child(5) { transform: translateX(-10px); }
@media (max-width: 768px) {
  .oval-pills { padding: 0; }
  .oval-row { flex-wrap: wrap; gap: 0.5rem; }
  .oval-row:nth-child(n) { transform: none; }
}
.oval-pill {
  flex: 0 0 auto; width: 140px;
  display: flex; align-items: center; justify-content: center;
  min-height: 54px; padding: 0.55rem 0.75rem;
  background: var(--white);
  border: 1.5px solid var(--border);
  border-radius: 14px;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 600; color: var(--text);
  text-align: center; white-space: nowrap; overflow: hidden;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  cursor: default;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  perspective: 800px;
}
.oval-pill:hover {
  background: var(--orange); color: var(--white); border-color: var(--orange);
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 22px rgba(255,140,0,0.35);
  z-index: 2;
}
.flip-text {
  display: inline-block;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  will-change: transform;
  text-overflow: ellipsis; overflow: hidden; max-width: 100%;
}
```

JS — см. index.html строки 4489-4580. Короче: IntersectionObserver запускает setInterval(tick, 750), каждый тик перебирает 1-2 плашки и rotateX(-90deg) → swap text → rotateX(90deg) → rotateX(0). Пул профессий ~50 штук.

### 14c. Swarm-terminals (хаотичный рой мини-терминалов)

Это GSAP ScrollTrigger-приколючение — нужны библиотеки GSAP + ScrollTrigger. Для статьи вряд ли нужно, но код есть в index.html строки 4887-5136.

Короткая версия: создаются 18-34 "терминала" (div'ы со стилем mac-style чёрный прямоугольник с тремя точками), раскидываются по viewport с safe-zone вокруг центрального текста, печатают сами себя случайными строками, можно драгать.

Если хочется вставить — копируй весь скрипт + HTML:
```html
<section class="swarm-outer" id="swarm" style="height:500vh;">
  <div class="swarm-pin" id="swarmPin">
    <div class="swarm-text-layer" id="swT1"><span>Текст фаза 1</span></div>
    <div class="swarm-text-layer" id="swT2"><span>Текст фаза 2</span></div>
    <div class="swarm-canvas" id="swarmCanvas"></div>
  </div>
</section>
```

### 14d. ВАЙБ hover-gradient SVG в футере

Гигантский SVG-текст, при hover внутри него движется радиальный градиент следящий за курсором.

```html
<div class="cin-vibe-wrap" id="vibeWrap">
  <svg class="cin-vibe-svg" viewBox="0 0 900 240" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="vibeGrad" cx="50%" cy="50%" r="45%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <text x="450" y="200" text-anchor="middle" class="cin-vibe-stroke">ВАЙБ</text>
    <text x="450" y="200" text-anchor="middle" class="cin-vibe-fill">ВАЙБ</text>
  </svg>
</div>
```

```css
.cin-vibe-wrap {
  position: relative;
  width: 100%; max-width: 1400px; margin: 0 auto;
  height: clamp(120px, 22vw, 280px);
  overflow: hidden;
}
.cin-vibe-wrap:hover .cin-vibe-fill { opacity: 1; }
.cin-vibe-svg {
  width: 100%; height: 100%;
  display: block;
  animation: vibeBreath 6s ease-in-out infinite;
  transform-origin: center center;
  transition: filter 0.4s ease;
}
.cin-vibe-wrap:hover .cin-vibe-svg {
  filter: drop-shadow(0 0 32px rgba(255,255,255,0.25));
}
@keyframes vibeBreath {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.015); }
}
.cin-vibe-svg text {
  font-family: 'Geist', sans-serif;
  font-weight: 900; font-size: 240px;
  letter-spacing: -0.04em;
}
.cin-vibe-stroke {
  fill: none;
  stroke: rgba(255,255,255,0.2);
  stroke-width: 1.5;
  transition: stroke 0.4s ease;
}
.cin-vibe-wrap:hover .cin-vibe-stroke {
  stroke: rgba(255,255,255,0.45);
}
.cin-vibe-fill {
  fill: url(#vibeGrad);
  opacity: 0;
  transition: opacity 0.4s ease;
}
```

```html
<script>
(function() {
  const wrap = document.getElementById('vibeWrap');
  if (!wrap) return;
  const grad = document.getElementById('vibeGrad');
  wrap.addEventListener('mousemove', e => {
    const rect = wrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    grad.setAttribute('cx', x + '%');
    grad.setAttribute('cy', y + '%');
  });
})();
</script>
```

### 14e. Rotating hero phrases (строка меняется снизу вверх)

```html
<div class="hero-rotate" id="heroRotate">
  <div class="hero-rotate-item active">• Вариант 1</div>
  <div class="hero-rotate-item">• Вариант 2</div>
  <div class="hero-rotate-item">• Вариант 3</div>
</div>
```

```css
.hero-rotate {
  margin-top: 2rem; height: 1.8em;
  overflow: hidden; position: relative;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 400; color: rgba(255,255,255,0.85);
}
.hero-rotate-item {
  position: absolute; left: 0; right: 0; text-align: center;
  opacity: 0; transform: translateY(100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.hero-rotate-item.active { opacity: 1; transform: translateY(0); }
.hero-rotate-item.out { opacity: 0; transform: translateY(-100%); }
```

```html
<script>
(function() {
  const items = document.querySelectorAll('.hero-rotate-item');
  if (!items.length) return;
  let current = 0;
  setInterval(() => {
    items[current].classList.remove('active');
    items[current].classList.add('out');
    setTimeout(() => items[current === 0 ? items.length - 1 : current - 1].classList.remove('out'), 600);
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 2500);
})();
</script>
```

### 14f. FAQ accordion (инвариантный + чистый)

```html
<div class="faq-list">
  <div class="faq-item">
    <div class="faq-question" onclick="toggleFaq(this.parentElement)">
      <h3>Вопрос?</h3>
      <svg class="faq-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </div>
    <div class="faq-answer"><div class="faq-answer-inner">Ответ.</div></div>
  </div>
</div>
```

```css
.faq-list { max-width: 800px; margin: 3rem auto 0; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-question {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.5rem 0; cursor: pointer; gap: 1rem;
  transition: opacity var(--transition-fast);
}
.faq-question:hover { opacity: 0.7; }
.faq-question h3 {
  font-size: 1.05rem; font-weight: 600; color: var(--text);
  line-height: 1.4;
}
.faq-toggle {
  width: 20px; height: 20px; flex-shrink: 0;
  position: relative; color: var(--text-light);
  transition: transform var(--transition-fast);
}
.faq-answer {
  max-height: 0; overflow: hidden;
  transition: max-height var(--transition-slow), opacity var(--transition);
  opacity: 0;
}
.faq-answer-inner {
  padding: 0 0 1.5rem;
  font-size: 1.05rem; color: var(--text-muted); line-height: 1.7;
}
.faq-item.open .faq-answer { max-height: 400px; opacity: 1; }
.faq-item.open .faq-toggle { transform: rotate(45deg); }
```

```html
<script>
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
</script>
```

### 14g. Smooth scroll для anchor-ссылок
```html
<script>
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
</script>
```

---

## 15. Card Stack (worth-stack) — карточки тасуются сами

Колода карт: верхняя через 3с уезжает вниз с fade, под ней всплывает следующая.

```html
<div class="worth-stack" id="worthStack">
  <div class="worth-card" data-pos="0"> <!-- самая верхняя --> </div>
  <div class="worth-card" data-pos="1"> </div>
  <div class="worth-card" data-pos="2"> </div>
  <div class="worth-card" data-pos="3"> </div>
</div>
<div class="worth-dots" id="worthDots">
  <button class="worth-dot active" data-i="0"></button>
  <button class="worth-dot" data-i="1"></button>
  <button class="worth-dot" data-i="2"></button>
  <button class="worth-dot" data-i="3"></button>
</div>
```

CSS и JS — см. index.html строки 1623-1691 (CSS) и 4717-4768 (JS). Ключевые pos-позиции:
```css
.worth-card[data-pos="0"] { z-index: 10; transform: translateY(0) scale(1); opacity: 1; }
.worth-card[data-pos="1"] { z-index: 3; transform: translateY(-16px) scale(0.95); opacity: 1; }
.worth-card[data-pos="2"] { z-index: 2; transform: translateY(-30px) scale(0.9); opacity: 0.6; }
.worth-card[data-pos="3"] { z-index: 1; transform: translateY(-42px) scale(0.85); opacity: 0.3; }
.worth-card.exiting {
  z-index: 10 !important;
  transform: translateY(340px) scale(0.95) !important;
  opacity: 0 !important;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
}
```

---

## Путеводитель: что куда вставлять в лонгрид agents.html

| Компонент | Куда в статье |
|-----------|---------------|
| Hero + orange shader | Самый верх, заголовок лонгрида |
| Marquee | Сразу под hero и между главами |
| Timeline (#5) | **Оглавление статьи** — каждая глава как `timeline-item` |
| problem-card | "Если ты узнаёшь себя в одном из этих сценариев..." |
| Glass bento-card | Секция с результатами/выгодами |
| Orange island (#7) | Акцентная глава или блок с примерами |
| Lamp-light (#3) | Начало ключевого раздела — "прожектор" |
| Reveal | На КАЖДОМ важном блоке (заголовок + текст) |
| Flip-line (#14a) | Разделитель между большими смысловыми блоками |
| Header + burger | Обязательно — с навигацией по главам |
| Smooth scroll | Обязательно |
| Pricing (#10) | В конце — CTA на практикум |
| FAQ (#14f) | Перед pricing — типичные возражения |
| Footer | cin-footer из index.html (компонент в конце секции) |

---

## Ядро для быстрого старта

**Минимальный набор компонентов для agents.html, чтобы стало "как main":**

1. CSS-переменные (компонент 0) ← ОБЯЗАТЕЛЬНО
2. Hero + shader (компонент 1)
3. Header (компонент 9)
4. Reveal-анимации (компонент 8)
5. Marquee (компонент 6)
6. Timeline (компонент 5) — как оглавление
7. Problem-card + glow (компонент 4a)
8. Bento-card (компонент 4b) — для статистики
9. Typography (компонент 13)
10. Footer (см. index.html 3850-3911)

Этот стек даст **80% визуальной идентичности** с index.html.
