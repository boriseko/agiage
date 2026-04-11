# Библиотека эффектов для AGI Age

Готовые к внедрению эффекты. Каждый — самостоятельный модуль (CSS + JS).
Все протестированы, все совместимы с нашим стеком (чистый HTML, Onest font, наша палитра).

Утверждено Егором 30.03.2026.

---

## Палитра (расширенная, утверждена)

```css
/* Основные */
--gold: #E8C840;
--orange: #D4722A;
--amber: #C9A030;

/* Новые акценты */
--rose: rgb(235, 163, 158);    /* мягкий розовый */
--teal: rgb(133, 199, 184);    /* приглушённая мята */
--sky: rgb(158, 194, 224);     /* мягкий голубой */

/* Фоны */
--bg-main: #FAFAF7;
--bg-alt: #F0ECE4;
--bg-dark: #1A1A1A;            /* секция Программа */
```

---

## 1. LINE-WORD REVEAL (из string-tune #6)

**Что:** Строки текста выезжают снизу с clip-маской. Слова внутри строки стаггерятся.
**Где применить:** Заголовки всех секций (h2), подзаголовки.
**Триггер:** Вход в viewport (IntersectionObserver).

### CSS

```css
/* Контейнер с text reveal */
.text-reveal {
  overflow: hidden;
}

.text-reveal .line {
  display: block;
  overflow: hidden;
  transform: translateY(100%);
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.text-reveal .line .word {
  display: inline-block;
  transform: translateY(150%);
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Stagger по строкам */
.text-reveal .line:nth-child(1) { transition-delay: 0s; }
.text-reveal .line:nth-child(1) .word { transition-delay: 0.04s; }
.text-reveal .line:nth-child(2) { transition-delay: 0.04s; }
.text-reveal .line:nth-child(2) .word { transition-delay: 0.08s; }
.text-reveal .line:nth-child(3) { transition-delay: 0.08s; }
.text-reveal .line:nth-child(3) .word { transition-delay: 0.12s; }

/* Когда видим */
.text-reveal.visible .line,
.text-reveal.visible .line .word {
  transform: translateY(0);
}
```

### HTML пример

```html
<h2 class="text-reveal section-title">
  <span class="line"><span class="word">После курса ты</span></span>
  <span class="line"><span class="word"><span class="gradient-text">сможешь</span></span></span>
</h2>
```

### JS (автоматическая разбивка текста на строки/слова)

```js
// Автоматически оборачивает слова и строки для text-reveal
function setupTextReveal() {
  document.querySelectorAll('.text-reveal-auto').forEach(function(el) {
    var text = el.textContent.trim();
    var words = text.split(/\s+/);
    // Оборачиваем каждое слово
    el.innerHTML = '<span class="line">' +
      words.map(function(w) { return '<span class="word">' + w + '</span>'; }).join(' ') +
      '</span>';
    el.classList.add('text-reveal');
  });
}
```

---

## 2. CHAR WAVE REVEAL (из string-tune #1)

**Что:** Буквы появляются по одной волной при скролле. Каждая с blur + scale.
**Где применить:** Один ключевой заголовок (например, "ВАЙБ" на hero, или заголовок секции Результат).
**Триггер:** Scroll progress (привязано к позиции скролла).

### CSS

```css
.char-wave .char {
  display: inline-block;
  opacity: 0;
  filter: blur(0.15em);
  transform: scale(1.5);
  transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
}

.char-wave.visible .char {
  opacity: 1;
  filter: blur(0);
  transform: scale(1);
}

/* Stagger через custom property */
.char-wave .char {
  transition-delay: calc(var(--i) * 0.05s);
}
```

### JS

```js
// Разбивает текст на символы с индексами
function setupCharWave() {
  document.querySelectorAll('.char-wave-auto').forEach(function(el) {
    var text = el.textContent;
    el.innerHTML = text.split('').map(function(ch, i) {
      if (ch === ' ') return ' ';
      return '<span class="char" style="--i:' + i + '">' + ch + '</span>';
    }).join('');
    el.classList.add('char-wave');
  });
}
```

---

## 3. SEQUENTIAL TEXT REPLACE (из string-tune #3)

**Что:** Несколько фраз сменяют друг друга в одном месте при скролле.
**Где применить:** Hero (вместо статичного подзаголовка) или секция Результат.
**Триггер:** Scroll progress (каждая фраза имеет своё окно видимости).

### CSS

```css
.text-cycle {
  position: relative;
  height: 1.5em; /* высота одной строки */
  overflow: hidden;
}

.text-cycle .phrase {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.text-cycle .phrase.active {
  opacity: 1;
  transform: translateY(0);
}

.text-cycle .phrase.exit {
  opacity: 0;
  transform: translateY(-30px);
}
```

### JS

```js
// Циклическая смена фраз привязанная к скроллу
function setupTextCycle(container, phrases) {
  // phrases = [{el: element, start: 0, end: 0.33}, ...]
  var section = container.closest('.section') || container.parentElement;

  window.addEventListener('scroll', function() {
    var rect = section.getBoundingClientRect();
    var progress = Math.max(0, Math.min(1,
      (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
    ));

    phrases.forEach(function(p) {
      var active = progress >= p.start && progress < p.end;
      var past = progress >= p.end;
      p.el.classList.toggle('active', active);
      p.el.classList.toggle('exit', past);
    });
  }, { passive: true });
}
```

---

## 4. SCROLL PROGRESS BAR (из string-tune #4)

**Что:** Тонкая цветная линия вверху экрана, показывает прогресс чтения.
**Где применить:** Глобально на всю страницу (fixed сверху).
**Триггер:** Скролл.

### CSS

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 10000;
  pointer-events: none;
  transform-origin: 0 50%;
  transform: scaleX(0);
  background: linear-gradient(90deg, #E8C840, #D4722A);
  transition: transform 0.1s linear;
}
```

### JS

```js
function setupScrollProgress() {
  var bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', function() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var progress = h > 0 ? window.scrollY / h : 0;
    bar.style.transform = 'scaleX(' + progress + ')';
  }, { passive: true });
}
```

### HTML

```html
<div class="scroll-progress"></div>
```

---

## 5. BG COLOR TRANSITION (из string-tune #5)

**Что:** Фон секции плавно меняет цвет при скролле (светлый → тёмный).
**Где применить:** Переход от светлой секции Кейсы к тёмной секции Программа.
**Триггер:** Scroll progress внутри переходной зоны.

### CSS

```css
.bg-transition-zone {
  min-height: 200px;
  transition: background-color 0s; /* JS управляет */
}
```

### JS

```js
function setupBgTransition(element, colorFrom, colorTo) {
  // colorFrom/To = [r, g, b]
  function lerp(a, b, t) { return a + (b - a) * t; }

  window.addEventListener('scroll', function() {
    var rect = element.getBoundingClientRect();
    var progress = Math.max(0, Math.min(1,
      1 - (rect.bottom / (window.innerHeight + rect.height))
    ));

    var r = Math.round(lerp(colorFrom[0], colorTo[0], progress));
    var g = Math.round(lerp(colorFrom[1], colorTo[1], progress));
    var b = Math.round(lerp(colorFrom[2], colorTo[2], progress));
    element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }, { passive: true });
}

// Использование:
// setupBgTransition(element, [240, 236, 228], [26, 26, 26]);
// F0ECE4 → 1A1A1A
```

---

## 6. SPOTLIGHT BUTTON GLARE (из string-tune #17)

**Что:** При наведении на кнопку — свечение следует за курсором внутри кнопки, бордер подсвечивается.
**Где применить:** Все CTA-кнопки ("Хочу на курс", "Записаться").
**Триггер:** Mousemove на кнопке.

### CSS

```css
.btn-spotlight {
  position: relative;
  overflow: hidden;
}

.btn-spotlight .glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    circle 80px at var(--x, 50%) var(--y, 50%),
    rgba(255, 255, 255, 0.35),
    transparent
  );
}

.btn-spotlight:hover .glare {
  opacity: 1;
}

/* Подсветка бордера в направлении курсора */
.btn-spotlight::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(
    calc(1deg * var(--angle, 90)),
    rgba(232, 200, 64, 0.6),
    transparent 40%,
    transparent 60%,
    rgba(212, 114, 42, 0.3)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.btn-spotlight:hover::after {
  opacity: 1;
}
```

### JS

```js
function setupSpotlightButtons() {
  document.querySelectorAll('.btn-spotlight').forEach(function(btn) {
    // Добавляем glare span если нет
    if (!btn.querySelector('.glare')) {
      var g = document.createElement('span');
      g.className = 'glare';
      btn.appendChild(g);
    }

    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var px = (x / rect.width * 100);
      var py = (y / rect.height * 100);

      btn.style.setProperty('--x', px + '%');
      btn.style.setProperty('--y', py + '%');

      // Угол для бордера
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
      btn.style.setProperty('--angle', angle);
    });
  });
}
```

### HTML

```html
<a href="#pricing" class="btn btn-accent btn-spotlight">Хочу на курс</a>
```

---

## 7. PIXEL POSITION TRANSITIONS (из string-tune)

**Что:** Между секциями декоративный элемент показывающий пиксельную позицию. "← TOP: 1920 PX →". Ломает четвёртую стену — технический шик.
**Где применить:** Между каждой секцией вместо текущих `<div style="height:60px">` переходов.
**Триггер:** Статично (позиция обновляется JS при resize).

### CSS

```css
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 24px;
  font-family: 'Onest', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0.35;
  user-select: none;
}

.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
}

/* На тёмном фоне */
.section-divider--dark {
  color: rgba(255,255,255,0.3);
}
.section-divider--dark::before,
.section-divider--dark::after {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}
```

### HTML

```html
<div class="section-divider" data-pixel-pos>← TOP: 1920 PX →</div>
```

### JS

```js
function setupPixelDividers() {
  document.querySelectorAll('[data-pixel-pos]').forEach(function(el) {
    function update() {
      var top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      el.textContent = '← TOP: ' + top + ' PX →';
    }
    update();
    window.addEventListener('resize', update);
    // Обновить после всех layout shifts
    setTimeout(update, 1000);
  });
}
```

---

## 8. STRIPE-STYLE DARK MESH GRADIENT (для секции Программа)

**Что:** Animated mesh gradient на тёмном фоне — как Stripe но в нашей палитре.
**Где применить:** Фон секции Программа (заменяет статичный #1A1A1A).
**Триггер:** Всегда активен.

### Реализация

Тот же WebGL подход что в hero, но с тёмной палитрой:

```js
// Те же шейдеры, но другие цвета:
// bg = vec3(0.102, 0.102, 0.102)  // #1A1A1A
// Зоны:
// gold   = vec3(0.580, 0.490, 0.130)  // приглушённое золото
// orange = vec3(0.530, 0.300, 0.100)  // тёмный оранж
// amber  = vec3(0.450, 0.350, 0.120)  // тёмный amber
// teal   = vec3(0.200, 0.350, 0.320)  // тёмный teal
// rose   = vec3(0.400, 0.250, 0.240)  // тёмный rose
//
// Интенсивность: *.25 (subtle на тёмном, не перебивает контент)
// Без mouse interaction (секция далеко от hero)
```

---

## 9. FADE SLIDE UP (апгрейд наших .reveal)

**Что:** Элементы появляются снизу с fade — то же что наш `.reveal`, но плавнее.
**Где применить:** Заменяет текущий `.reveal` на всём сайте.

### CSS (замена текущего .reveal)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger */
.reveal-delay-1 { transition-delay: 0.08s; }
.reveal-delay-2 { transition-delay: 0.16s; }
.reveal-delay-3 { transition-delay: 0.24s; }
.reveal-delay-4 { transition-delay: 0.32s; }
.reveal-delay-5 { transition-delay: 0.40s; }
```

Отличия от текущего: duration 0.8s вместо 0.6s, delay шаги 0.08s вместо 0.1s.

---

## Порядок внедрения (рекомендация)

1. **Scroll progress bar** (#4) — 1 минута, глобально
2. **Pixel dividers** (#7) — заменить все `<div style="height:60px">` переходы
3. **Spotlight buttons** (#6) — на все CTA
4. **BG color transition** (#5) — переход в секцию Программа
5. **Line-word reveal** (#1) — на заголовки секций
6. **Char wave** (#2) — на один ключевой заголовок
7. **Sequential text replace** (#3) — в hero или результаты
8. **Dark mesh gradient** (#8) — фон Программы
9. **Fade slide up** (#9) — апгрейд .reveal
