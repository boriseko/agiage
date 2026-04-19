# Design System — AGI Age

Извлечено из `index.html` (основной лендинг) и `brandbook.html` (канонический спек палитры и типографики).
Этот файл — операционный чек-лист для рефакторинга `agents.html` под визуальный язык основного сайта.

Палитра: **Sunflower Sunrise** (жёлтый→amber). Шрифт: **Geist** (Google Fonts, все веса 300–900) + **JetBrains Mono** для «технических» акцентов. Правило 70/20/10: **70 % белый, 20 % жёлтый, 10 % оранжевый-акцент**.

---

## 1. Цвета (CSS-переменные + использование)

### Базовый набор из `index.html`

```css
:root {
  --white: #FFFFFF;
  --black: #1A1A1A;        /* заголовки максимум контраста */
  --text: #333333;         /* основной текст */
  --text-muted: #666666;   /* описания, лиды */
  --text-light: #999999;   /* лейблы, мета, подсказки */
  --border: #E5E5E5;       /* hairlines на белом */
  --card-bg: #F5F5F5;      /* нейтральные подложки */
  --yellow: #FFD54F;       /* sun-500 — «основной» жёлтый, для номеров, dots */
  --yellow-light: #FFE082; /* sun-400 */
  --orange: #FFA000;       /* sun-800 — акцент, кнопки, активные состояния */
  --orange-dark: #FF8F00;  /* sun-900 — hover-стейты и градиенты */
}
```

### Канонический спек палитры (`brandbook.html`) — 9 оттенков Sunflower

Эти переменные надо использовать в `agents.html`, чтобы совпадать с брендбуком:

```css
--sun-100: #FFFDE7;  /* подложки, hero-soft, callouts */
--sun-200: #FFF9C4;
--sun-300: #FFF59D;  /* warm tinted sections */
--sun-400: #FFE082;
--sun-500: #FFD54F;  /* = --yellow, главный жёлтый */
--sun-600: #FFC107;
--sun-700: #FFB300;
--sun-800: #FFA000;  /* = --orange, главный акцент */
--sun-900: #FF8F00;  /* deep orange для градиентов */
```

### Нейтральные (из брендбука)

```
#FFFFFF  White         — фон страницы
#1A1A1A  Text          — максимум-контрастный текст / «black»
#6B6B6B  Text Mid      — подписи, лиды (index.html использует #666)
#A0A0A0  Text Light    — eyebrow-labels, метки (index.html — #999)
#E5E5E5  Border        — hairlines
```

### Градиенты (все, что живут в проекте)

```css
--grad-warm:    linear-gradient(135deg, #FFD54F 0%, #FFA000 100%);
                /* CTA-кнопки, маркеры timeline, бейджи — «main orange» */

--grad-sunrise: linear-gradient(135deg, #FFF59D 0%, #FFD54F 40%, #FFA000 100%);
                /* более богатый жёлтый→оранжевый, hero-варианты */

--grad-soft:    linear-gradient(135deg, #FFFDE7 0%, #FFF59D 50%, #FFE082 100%);
                /* пастельный, ненавязчивый — для pull-quote, callout, 
                   «дружелюбной» подложки секции */

--grad-hero:    linear-gradient(180deg, #FFFDE7, #FFF59D, #FFE082, #FFC107, #FFA000);
                /* вертикальный hero-градиент (рассвет) */

--grad-radial:  radial-gradient(circle at 50% 40%, #FFF59D 0%, #FFE082 35%,
                                #FFC107 65%, #FFA000 100%);
                /* фон с центральным «солнцем» */

--grad-page:      linear-gradient(160deg, #FFD54F, #FFB300, #FFA000);
                /* насыщенная оранжевая секция (statement, marquee-grad, practice) */

/* Cases/projects-showcase используют более глубокий оттенок: */
background: linear-gradient(135deg, #FFA000 0%, #FF8F00 60%, #F28000 100%);
```

### Где какой цвет применяется — карта использования

| Место | Значение |
|---|---|
| Фон страницы, большинство секций | `var(--white)` |
| Hero-секция (ВАЙБ) | полноэкранный WebGL-shader + overlay gradient `var(--grad-page)`; fade в белый снизу через `::after` |
| «Тёплые» полноцветные секции (statement, practice, cin-footer) | `var(--grad-page)` |
| Cases showcase, projects-showcase | `linear-gradient(135deg, #FFA000, #FF8F00, #F28000)` (насыщенный оранж) |
| Pricing (featured) | белая карточка + orange `box-shadow` glow |
| H1/H2 на белом | `var(--text)` (`#333`) или `var(--black)` (`#1A1A1A`) для максимального контраста (h2 в `program-section`, `results-header`, `film-header` используют `#1A1A1A`) |
| Body text | `var(--text)` (#333) |
| Описания, лиды | `var(--text-muted)` (#666) |
| Eyebrow labels, meta | `var(--text-light)` (#999) |
| Акцентный цвет (кнопки, hover-state, accent words) | `var(--orange)` (#FFA000) |
| Градиент текстовый (редко, только deco) | `var(--grad-warm)` с `-webkit-background-clip: text` |
| Границы карточек на белом | `rgba(0,0,0,0.05)` → `rgba(0,0,0,0.06)` |
| Hover-border на карточках | `rgba(255,160,0,0.25)` |
| Box-shadow tint на hover | `rgba(255,160,0,0.06)` → `0.30` по темноте |

### Правило смешения — 70 / 20 / 10

```
70 %  БЕЛЫЙ   (фон, карточки, основной канвас)
20 %  ЖЁЛТЫЙ  (sun-300 / sun-400, пастельные градиенты, soft sections)
10 %  ОРАНЖЕВЫЙ (sun-800 акцент — и только!) — CTA, активные точки, accent слова
```
Полностью-оранжевые секции (cases, projects-showcase, statement, practice, cin-footer) — это **островки**, между ними всегда белые секции для отдыха глаз.

---

## 2. Типографика

Шрифт-семейство:
```css
font-family: 'Geist', -apple-system, system-ui, sans-serif;   /* весь текст */
font-family: 'JetBrains Mono', monospace;                      /* technical plash: метки, HEX, eyebrow, section-номера */
```
Используемые веса: **300, 400, 500, 600, 700, 800, 900**. Правило: ≤400 — только для длинного body; 500–600 — UI-элементы; 700–900 — заголовки.

### H1 / Hero title (главный «ВАЙБ»)

```css
font-size: clamp(80px, 20vw, 300px);
font-weight: 900;
line-height: 0.85;
letter-spacing: -0.04em;
color: var(--white);          /* hero поверх градиента */
```
Для hero-подзаголовков:
```css
/* .hero-subtitle */
font-size: clamp(1rem, 4.2vw, 2.25rem);
font-weight: 700;
line-height: 1.2;
letter-spacing: 0.05em;       /* единственное место с ПОЛОЖИТЕЛЬНЫМ трекингом */
text-transform: uppercase;    /* по сути, uppercase-строка */
```

### H2 / Section title — `.s-title`

Это **главный тип** — такие же метрики у `results-header h2`, `program-section .s-title`, `practice-section .s-title`, `film-header h2`:
```css
font-size: clamp(2.5rem, 7vw, 6rem);
font-weight: 800;
line-height: 1;            /* иногда 1.1 у brandbook */
letter-spacing: -0.04em;
color: var(--text);        /* или --black для максимум-контрастных секций */
margin-bottom: 1.5rem;
```
Для более «текстовых» H2 (worth, audience): `clamp(2rem, 5vw, 3.5rem)` → `font-weight: 800-900`, `line-height: 1.05-1.15`.

### H3 / Card title / sub-header

Timeline cards, cases, mindset, bento labels:
```css
font-size: clamp(1.05rem, 1.8vw, 1.3rem);   /* timeline-card h3 */
font-size: clamp(1.25rem, 2vw, 1.6rem);     /* cases-info-title */
font-size: clamp(1.5rem, 2.5vw, 2rem);      /* case-name, mindset */
font-weight: 700-800;
line-height: 1.25-1.35;
letter-spacing: -0.02em;
color: var(--text);
```

### Body text (основной)

```css
/* Обычный параграф (faq-answer, timeline-card li) */
font-size: 0.95rem - 1.05rem;   /* 15px–17px */
line-height: 1.65-1.7;          /* строго 1.7 для длинных параграфов */
color: var(--text-muted);       /* всегда mute-текст в описаниях */
```
На белом — `var(--text-muted)` (#666). На градиентных секциях — `rgba(255,255,255,0.8-0.85)`.

### Lead / крупный сопровождающий текст — `.s-desc`

```css
font-size: clamp(0.95rem, 1.2vw, 1.1rem);
color: var(--text-muted);
max-width: 500px;           /* только для коротких лидов */
line-height: 1.7;
```

### Label / Eyebrow — `.s-label`

```css
font-size: 0.7rem;              /* ≈ 11px; brandbook использует 12px */
font-weight: 600;
letter-spacing: 0.12em - 0.15em;
text-transform: uppercase;
color: var(--text-light);
margin-bottom: 1.5rem;
```
На градиенте: `color: rgba(255,255,255,0.6)`.

### Длинные тексты / как набирать лонгрид

- **max-width колонки:** `680–700px` (как уже сделано в `.longread`). Брендбук показывает `560px` для очень плотных лидов.
- **line-height:** `1.7` обязательно. На важных «узких» фрагментах (`.hero-desc`) — 1.55.
- **font-size:** `1.05–1.1rem` для тела лонгрида. Увеличивать только подзаголовки.
- **Отступ между параграфами:** `margin-bottom: 1.35rem`.
- **Gap между смысловыми блоками:** `2-2.5rem`.

### Особые типографические приёмы из `index.html`

1. **Градиент-текст** (`-webkit-background-clip: text`) — применяется очень точечно:
   - `fmt-step-num` (цифра-декор в формате)
   - `film-notif-body` (цифра «9 часов» в финальном экране)
   - `swarm-text-layer span` (декоративный крупный текст)
   - `compare-summary__punch strong` (одно слово-акцент внутри H3)

   **Важно (из feedback_geist_font.md):** gradient-текст в **заголовках** (H1/H2/H3 section titles) — **запрещён**. Только в декоративных крупных цифрах/коротких словах.

2. **`.accent` класс** для цветных слов внутри заголовка:
   ```css
   .audience-title .accent { color: var(--orange); }
   .problem-conclusion-text .accent { color: var(--orange); }
   .mindset-title .accent { color: var(--orange); }
   ```
   Просто сплошной оранжевый, без градиента. Это ключевой приём акцентации смысла.

3. **Цветные точки-буллеты** в списках:
   ```css
   .timeline-card li::before,
   .price-features li::before {
     content: '';
     width: 5-6px; height: 5-6px; border-radius: 50%;
     background: var(--orange);  /* или #FFA000 */
   }
   ```

4. **Tabular numbers** (для чисел в колонках — цифры в timeline-marker, pay-row, stat-num):
   ```css
   font-variant-numeric: tabular-nums;
   ```

5. **`::selection`** — фирменный жёлтый хайлайт:
   ```css
   ::selection { background: rgba(255,140,0,0.2); color: var(--text); }
   ```

---

## 3. Отступы и ритм

### Container & layout

```css
.s-container,
.container {
  max-width: 1200px;       /* основной — section-white, program, results, practice */
  max-width: 1340px;       /* широкие секции — cases, projects, audience */
  max-width: 1100px;       /* узкие — mindset, pricing, worth */
  max-width: 700px;        /* longread (как в agents.html) */
  margin: 0 auto;
  padding: 0 2rem;
}
@media (min-width: 768px)  { padding: 0 3rem; }
@media (min-width: 1280px) { padding: 0 5rem; }
```

### Padding секций (вертикальный ритм)

```css
/* Стандартная белая секция */
padding: clamp(60px, 8vw, 120px) 0;

/* Широкая «выразительная» (worth, practice)     */
padding: clamp(80px, 10vw, 140px) 0;   /* worth: 100-180 */

/* Mini-film, program, film                        */
padding: clamp(60px, 8vw, 100px) 0;

/* «Плотная» секция (projects-showcase после mindset) */
padding: clamp(24px, 3vw, 40px) 0 clamp(60px, 8vw, 110px);

/* Mobile-first narrow (section в agents.html)     */
padding: clamp(4rem, 8vw, 6.5rem) 0;
```

### Отступы между элементами

| Элемент | Значение |
|---|---|
| `s-label` → `s-title` | `margin-bottom: 1.5rem` у label |
| `s-title` → `s-desc` | `margin-bottom: 1.5rem` у title |
| Секционный header → grid/content | `margin-top: 3rem` (`.problem-grid`, `.timeline`, `.faq-list`) |
| Между карточками в grid | `gap: 1.5rem` mobile / `gap: 2rem` tablet+ |
| Между параграфами в `.longread` | `1.35rem` |
| Paragraph → pullquote, callout | `margin: 2rem 0` до `2.75rem` |

### Grid-gap для разных компонентов

```css
.problem-grid         { gap: 1.5rem; md: 2rem; lg: 2rem; }
.bento-grid           { gap: 0.75rem; }           /* нарочно плотный */
.ps-flow              { gap: 1.75rem; md: 1rem; } /* step-boxes */
.audience-grid        { gap: 2.5rem; md: 4rem; }
.expert-layout        { gap: 3rem; md: 4rem; }
.cases-stage (md+)    { gap: 1.5rem 3rem; }
.pricing-grid         { gap: 1.25–1.5rem; }
```

### Radius-ритм

```
999px / 9999px  — pills, badges, CTA-кнопки, бёрджер
22-24-28px      — крупные карточки (mindset-case, timeline-card, expert-photo)
18-20px         — стандартные карточки (bento, problem-card, price-card, ps-screen)
14-16px         — inputs, small cards, callouts
8-12px          — бейджи, кнопки в UI-моках, arc-block
4-6px           — dots и микромаркеры
```

---

## 4. Компоненты

### 4.1 Header (фиксированный)

- Прозрачный поверх hero; при скролле → `background: rgba(255,255,255,0.85)` + `backdrop-filter: blur(20px) saturate(1.4)`.
- Нав-ссылки по центру абсолютным позиционированием (desktop ≥768).
- Бёрджер на mobile (40×40px, `rgba(255,255,255,0.65)` на hero и `rgba(0,0,0,0.05)` при scrolled).
- `scroll-margin-top: 80px` на секциях.

### 4.2 Button — Primary (пилюля-CTA)

Главный CTA на сайте — **белая пилюля** (на оранжевом фоне) или **оранжевая** (на белом):

```css
/* hero-cta-btn — белая на градиенте hero/practice */
.hero-cta-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #666;
  background: var(--white);
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.32, 0, 0.12, 1);
}
.hero-cta-btn:hover {
  transform: translateY(-3px) scale(1.03);
  background: #f5f5f5;
}

/* Featured price CTA — оранжевый градиент */
.price-card--featured .price-cta {
  background: linear-gradient(145deg, var(--orange), #FF8F00);
  color: #FFF;
  border: 2px solid var(--orange);
  border-radius: 14px;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(255,140,0,0.2);
  transition: all 0.3s cubic-bezier(0.32, 0, 0.12, 1);
}
.price-card--featured .price-cta:hover {
  box-shadow: 0 8px 30px rgba(255,140,0,0.3);
}

/* Header-CTA pill — компактный */
.header-cta {
  padding: 0.5rem 1rem;            /* 0.7rem 1.8rem на desktop */
  background: var(--white);
  color: var(--text);
  border: 2px solid rgba(0,0,0,0.08);
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 700;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.header.scrolled .header-cta {
  background: var(--orange);
  color: var(--white);
  border-color: var(--orange);
}
```

### 4.3 Button — Secondary (outline)

```css
.price-cta {
  padding: 1rem 2rem;
  border-radius: 14px;
  background: var(--white);
  color: var(--text);
  border: 2px solid var(--border);
  font-size: 1.05rem;
  font-weight: 700;
  transition: all 0.3s;
}
.price-cta:hover {
  transform: translateY(-2px);
  border-color: var(--text-muted);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
```

### 4.4 Inline-ссылка (в тексте лонгрида)

Из уже существующего `agents.html`, но совместимо с системой:
```css
a {
  color: var(--text);
  text-decoration: none;
  border-bottom: 1.5px solid rgba(255,140,0,0.35);
  transition: all 0.25s;
}
a:hover {
  color: var(--orange-dark);
  border-bottom-color: var(--orange);
}
```

### 4.5 Card — базовая (белая на белом)

```css
.card-base {
  padding: 1.5rem 1.75rem;           /* mobile */
  /* 2–3.5rem для крупных карточек */
  border-radius: 20px;                /* или 22px для timeline */
  border: 1px solid rgba(0,0,0,0.05);
  background: linear-gradient(180deg, #FFFFFF 0%, #FBFBFB 100%);
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
  transition: border-color 0.4s, transform 0.4s, box-shadow 0.4s;
}
.card-base:hover {
  border-color: rgba(255,160,0,0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(255,180,0,0.06), 0 2px 8px rgba(0,0,0,0.03);
}
```

### 4.6 Card — Liquid glass (bento, problem-card)

Самый **фирменный** приём сайта. Используется на градиентных секциях:

```css
.glass-card {
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
}
/* Внутренний «блик» — верхний левый угол */
.glass-card::before {
  content: ''; position: absolute; inset: 0;
  border-radius: inherit; pointer-events: none;
  background:
    radial-gradient(ellipse 60% 50% at 20% 15%, rgba(255,255,255,0.8), transparent 60%),
    radial-gradient(ellipse 80% 40% at 80% 90%, rgba(255,200,50,0.04), transparent 50%);
}
/* Sheen-edge — светящаяся рамка */
.glass-card::after {
  content: ''; position: absolute; inset: 0;
  border-radius: inherit; pointer-events: none;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(255,255,255,0.5), transparent 40%,
                              transparent 60%, rgba(255,255,255,0.15)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### 4.7 Badge / Eyebrow-pill

Три основные вариации:

```css
/* Лёгкий (на белом) — для tags внутри карточек */
.pill-soft {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(255,140,0,0.10);
  border: 1px solid rgba(255,140,0,0.30);
  border-radius: 6-8px;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--orange);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Glass (на оранжевой секции) */
.pill-glass {
  padding: 0.3rem 0.7rem;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 6px;
  color: rgba(255,255,255,0.92);
  /* + backdrop-filter: blur(10px); */
}

/* Solid orange — «Реальный кейс», «Рекомендуем» */
.pill-solid {
  padding: 0.6rem 1.25rem;
  background: var(--orange);
  border: none;
  border-radius: 9999px;
  color: var(--white);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  box-shadow: 0 8px 22px rgba(255,140,0,0.35), 0 2px 6px rgba(0,0,0,0.10);
}
```

### 4.8 Pull-quote / callout (важно для лонгрида)

В `agents.html` эти компоненты уже есть — их надо просто выравнять по системе:

```css
/* Pull-quote — крупная цитата-акцент */
.pullquote {
  margin: 2.75rem 0;             /* можно -0.5rem чтобы выйти за колонку */
  padding: 1.25rem 0 1.25rem 1.5rem;
  border-left: 4px solid var(--orange);
  font-size: clamp(1.5rem, 2.5vw, 1.75rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--text);
}

/* BAB-badge — «action card» */
.bab-badge {
  margin: 2.5rem 0;
  padding: 1.5rem 1.75rem;
  background: var(--grad-soft);                /* пастельный! */
  border: 1px solid rgba(255,140,0,0.25);
  border-radius: 16px;
  font-size: clamp(1.15rem, 1.8vw, 1.25rem);
  font-weight: 700;
  box-shadow: 0 20px 50px -20px rgba(255,140,0,0.25);
}

/* Callout — тихий контекст / оффтоп */
.callout {
  margin: 2rem 0;
  padding: 1.15rem 1.35rem;
  background: var(--card-bg);       /* #F5F5F5 / #FAFAFA */
  border-left: 3px solid var(--text-soft);
  border-radius: 12px;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  font-style: italic;
}

/* Эталонный case-quote из index.html — для цитат персонажей */
.case-quote {
  padding: 1.25rem 1.5rem;
  background: rgba(255,140,0,0.06);
  border-left: 3px solid var(--orange);
  border-radius: 0 12px 12px 0;
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.65;
}
```

### 4.9 Divider

```css
.divider {
  width: 60px; height: 2px;       /* маленький центрированный — как в lonread */
  background: var(--border);
  margin: 2.75rem auto;
  border: none;
}

/* Длинный hairline (в brandbook и footer) */
.divider-line {
  height: 1px;
  background: rgba(0,0,0,0.06-0.08);
  margin: 2.5rem 0 1.5rem;
}
```

### 4.10 FAQ-item

```css
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-question {
  padding: 1.5rem 0;
  display: flex; align-items: center; justify-content: space-between;
  cursor: pointer; gap: 1rem;
  transition: opacity 0.3s;
}
.faq-question:hover { opacity: 0.7; }
.faq-question h3 {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.4;
}
.faq-answer {
  max-height: 0; overflow: hidden; opacity: 0;
  transition: max-height 0.8s, opacity 0.5s;
}
.faq-item.open .faq-answer { max-height: 400px; opacity: 1; }
.faq-item.open .faq-toggle { transform: rotate(45deg); }
```

### 4.11 Timeline (для глав лонгрида с нумерацией)

Применимо для оглавления статьи:
- Вертикальная линия `2px, var(--border)` слева.
- Marker-круг: 44px (mobile) / 50px (desktop), white bg, border `var(--border)`, при `revealed` — `linear-gradient(135deg, #FFD54F, #FFA000)`, shadow `rgba(255,160,0,0.30)`, animation `markerPop`.
- Timeline-progress: `linear-gradient(180deg, #FFD54F, #FFA000)` с `height: 0 → 100%`.

---

## 5. Декор, эффекты, анимации

### 5.1 Hero-оформление

В `index.html` hero использует **WebGL shader** (`heroShader`) + overlay:
- `::after` — градиент fade-в-белый снизу: `linear-gradient(to top, var(--white), transparent)`, 200px.
- При scroll шейдер переключается на `position: absolute` (settled).

Для `agents.html` это overkill — достаточно более простого hero (который уже есть): `background: var(--grad-hero)` + два радиальных `rgba(255,255,255,X)` для мягких бликов.

### 5.2 «Blobs» фон (animated)

На `.results-section` (белая секция) — 5 анимированных размытых кругов + «pointer-blob», следящий за курсором. Создаёт теплую атмосферу, не перебивая контент. Формула:
```css
.blob { position: absolute; border-radius: 50%; }
/* background: radial-gradient(circle, rgba(255,213,79,0.8) 0%, transparent 50%) */
animation: blobVertical|blobCircle|blobHorizontal (20–40s, infinite);
filter: blur(55px);
```

### 5.3 «Lamp-light» (верхний конус света)

`.worth-lamp` — создаёт эффект софита сверху секции (над CTA):
```css
position: absolute; top: 0; height: 300px;
/* ::before — яркое ядро */
background: radial-gradient(ellipse 80% 100% at 50% 0%,
  rgba(255,180,0,0.35), rgba(255,200,0,0.15) 40%, transparent 80%);
/* ::after — мягкий внешний glow (1600px) */
/* Плюс горизонтальная полоса света сверху */
.worth-lamp-line {
  height: 2px;
  background: linear-gradient(90deg, transparent 20%, rgba(255,160,0,0.5) 50%, transparent 80%);
  box-shadow: 0 0 40px 15px rgba(255,180,0,0.12);
}
```
**Это отличный приём для начала и конца глав лонгрида.**

### 5.4 Reveal-animations (scroll triggered)

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
.reveal-delay-1..5 { transition-delay: 0.1s..0.5s; }
```
JS просто добавляет `.visible` через `IntersectionObserver`. **Обязательно подключить в `agents.html`** — добавляет «жизни» без нагрузки.

### 5.5 Transition timing

Единый стандарт:
```css
--transition:      0.5s cubic-bezier(0.32, 0, 0.12, 1);
--transition-fast: 0.3s cubic-bezier(0.32, 0, 0.12, 1);
--transition-slow: 0.8s cubic-bezier(0.32, 0, 0.12, 1);

/* Альтернативный «упругий» для card-hover, reveal */
cubic-bezier(0.23, 1, 0.32, 1);

/* Для bounce/pop (markerPop, ms-spin) */
cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 5.6 Hover-паттерны карточек

Универсальное правило всех hoverable-карточек:
```css
.card:hover {
  transform: translateY(-3px) → translateY(-4px);
  border-color: rgba(255,160,0,0.25);
  box-shadow: 0 8px 28px rgba(255,180,0,0.06);
}
```

### 5.7 Иконки

- **Emoji** для «живого»/дружеского контекста (`🤖`, `✨`, `🔥`) — в film, faq, bot-моках.
- **Inline SVG** (stroke-based, 22x22) для UI-иконок в `.worth-card-icon` — stroke `var(--orange)`, wrapped в bg-gradient-box.
- **Никаких иконочных шрифтов, никакого иконпака**. Всё либо SVG, либо emoji.
- В `agents.html` уже уместно использовать JetBrains Mono-стрелки (`→`) как декор — это на бренде.

### 5.8 «Tech-style plash» (моноспейс-метки)

Применяется для **микро-меток**, которые подчёркивают «инженерность» продукта:
```css
/* brandbook: */
font-family: 'JetBrains Mono', monospace;
font-size: 9-12px;
background: rgba(255,255,255,0.7);
padding: 2px 6px;
border-radius: 4px;
color: var(--text-mid);
```
Используется на HEX-подписях, номерах шагов (`01 / Цвета`), арбитрарных метках кода. **В агентах это идеально для .section-label** (уже сделано).

---

## 6. Лайаут

### 6.1 Сетка

Основной паттерн — **Grid с clamp-колонками**:
```css
grid-template-columns: 1fr;                                    /* mobile */
@media (min-width: 640px)  { 1fr 1fr; }
@media (min-width: 1024px) { 1fr 1fr 1fr; }   /* problem-grid */
@media (min-width: 1024px) { 1.4fr 1fr; }     /* cases stage */
@media (min-width: 900px)  { 5fr 7fr; }       /* audience */
@media (min-width: 768px)  { repeat(6, 1fr); grid-auto-rows: minmax(140px, auto); } /* bento */
```

### 6.2 Breakpoints

```
default:     mobile (<640px)
640px:       small tablet
768px:       tablet (main desktop breakpoint)
900px:       wide tablet (audience, mindset split)
1024px:      desktop (cases side layout)
1280px:      wide desktop (5rem padding)
```

### 6.3 Footer (`cin-footer`)

Структура:
1. **Полная белая плита** (`.cin-card`) сверху градиентной подложки (`var(--grad-page)`).
2. Внутри плиты — grid 4-колоночный (`1.5fr 1fr 1fr 1fr`).
3. **Brand-name** — 2.25rem, weight 900, letter-spacing -0.04, color `var(--orange)`.
4. **Tagline** — 0.8rem, uppercase, 0.12em tracking, `var(--text-light)`.
5. Ссылки колонок: 0.9rem, `var(--text-muted)` → `var(--orange)` на hover.
6. **Divider** `height: 1px; background: rgba(0,0,0,0.08)`.
7. **Giant SVG «ВАЙБ»** ниже плиты — stroke-outline `rgba(255,255,255,0.2)`, на hover fill-gradient появляется. Animation `vibeBreath 6s` — лёгкое scale(1↔1.015).

---

## 7. Ключевые визуальные приёмы, которые делают главную страницу «красивой»

Перенести в `agents.html` **обязательно**:

1. **Светлая тёплая база + островки оранжевых секций**. Никогда не делать 3 оранжевых блока подряд. Ритм: `белый → оранжевый → белый → оранжевый`.

2. **Liquid glass-карточки** на оранжевых фонах (`::before` блик + `::after` sheen-edge + backdrop-filter). Это настоящий UX-характер сайта.

3. **Timeline-маркеры**: белый-незаполненный по умолчанию → gradient-filled с `markerPop`-анимацией при reveal. Отлично подойдут как nav/оглавление для лонгрида.

4. **Clamp-типографика везде**. Ни одного фиксированного `font-size: 48px` — только `clamp(…)`.

5. **Inline `.accent` в заголовках** — одно слово в `var(--orange)`, это узнаваемая фишка (не градиент!).

6. **Eyebrow-label выше каждого H2** — `0.7rem`, uppercase, 0.12em tracking, `var(--text-light)`.

7. **Точки-буллеты цвета orange** в маркированных списках — всегда `5-6px ○ var(--orange)`.

8. **Reveal-анимации** — каждая секция въезжает по скроллу. Delay 0.1s/0.2s/... на соседях.

9. **Lamp-light эффект** (конус тёплого света сверху) — для cta-секций и ключевых заголовков. Даёт сайту «кинематографичность».

10. **Mono-метки на всё «техническое»** (JetBrains Mono для section-номеров, HEX, step-numbers). Контраст с Geist-основой.

11. **Pills `9999px` border-radius** — все CTA и бейджи. Углы 20-24px — только карточки.

12. **Фирменная `::selection`** — `rgba(255,140,0,0.2)`. Мелочь, но работает.

13. **Footer-подвал** — белая плита поверх градиента, затем гигантский outline-«ВАЙБ». Можно на `agents.html` сделать подпись с именем автора тем же приёмом (outline-заголовок).

### Что отличает сайт от «generic AI landing»

- **Нет тёмных секций.** Черный фон полностью отсутствует — это принципиальная позиция (см. `project_design_vision_v3.md`).
- **Нет синего / фиолетового** (классические «AI» цвета). Только warm palette.
- **Нет иконочных библиотек** с одинаковыми SVG из Feather/Lucide — только либо простая ручная SVG, либо emoji.
- **Нет «чернушных» пустых пространств**. Все «воздушные» места либо получают текстуру (blobs, lamp, radial-gradient), либо чёткий hairline.
- **Нет Neue Machina / Space Grotesk / Inter.** Только Geist — это узнаваемо Vercel-adjacent.
- **Нет «cyberpunk-glitch»**. Движение — всегда плавный `cubic-bezier`, никаких резких перескоков.

---

## 8. Что из index.html НЕ применять в лонгриде (agents.html)

1. **Полноэкранные градиентные секции во весь width** (statement, practice-section, cin-footer). В лонгриде читатель уже «в потоке» — такие секции его выкидывают. Максимум — тонкий `grad-soft` для `bab-badge`, `callout`.

2. **Hero с `min-height: 100vh`.** В статье hero должен быть компактным — 60–70vh максимум, чтобы первый параграф был виден сразу при скролле.

3. **Marquee (бегущая строка) «ВАЙБ • AI FIRST • БЕЗ КОДА…»** — это брендовый «интро-шум» для продающего лендинга, в статье выглядит неуместно.

4. **Flip-text статemнт** (`.flip-line` в statement) — это аттракцион для продающей страницы, не для чтения.

5. **Intro-анимация «ВАЙБ — КОДИНГ»** на старте страницы. Для статьи — ненужная задержка.

6. **WebGL-shader hero.** Он хорош в index.html, но для лонгрида — overkill и лишние 200kb JS.

7. **Giant cin-vibe SVG в футере.** В футере статьи достаточно просто названия сайта + ссылка назад.

8. **Огромные заголовки `clamp(2.5rem, 7vw, 6rem)`.** Для статьи верх — `clamp(2.3rem, 6.5vw, 4.8rem)` у hero-title (уже так), разделы — `clamp(1.75rem, 4vw, 2.75rem)`.

9. **Bento-grid с огромными цифрами (×10, ∞, 24/7).** Это витрина, не тело статьи.

10. **Swarm-terminals (летающие чёрные терминалы)**. Слишком отвлекает внимание в контексте чтения.

11. **Sticky scroll-секция (`fmt-pin` — сплит-скрин 50/50 из `Format`)**. В мобильной статье это ломается.

12. **Price-cards с shadow-glow `0 -20px 300px 30px rgba(255,140,0,0.25)`.** Это чтобы пилить желание купить — в лонгриде только CTA в конце главы, без такого веса.

### Что из `agents.html` оставить и просто подстроить

- `.longread` с `max-width: 700px` — идеален, только line-height → 1.72 (как сейчас) и font-size → 1.075rem уже правильно.
- `.section-label` (mono + orange) — оставить, это на бренде.
- `.bab-badge`, `.pullquote`, `.callout`, `.easy-list` — структурно правильные, нужно только выровнять цвета/тени по системе (см. §4.8).
- `.chat-grid` / `.chat-window` — хороший edu-паттерн, аналог `mock-*` из практики. Нужно:
  - заменить `msg--user` background с `var(--black)` на тоже `#F0F0F0` или серый, чтобы не было «чёрного» в контенте (main site избегает чёрных бг-плиток в юзер-сообщениях);
  - **или** если хочется контраста — оставить черный только в одном-двух местах как выразительный приём.

---

## 9. Быстрый чеклист для правки `agents.html`

- [ ] Добавить `--sun-100..900` переменные (выровнять с brandbook).
- [ ] Сменить accent-gradient в `.section-title em` с `var(--grad-warm)` clip-text на просто `color: var(--orange)` — это базовое правило сайта (градиент в h — запрещён).
- [ ] Сменить `.hero-cta` — вместо `var(--black)` → `var(--white)` с `color: #666` (паттерн `.hero-cta-btn`) или `linear-gradient(145deg, #FFA000, #FF8F00)` с white-текстом.
- [ ] Ввести `.reveal` / `.reveal.visible` + IntersectionObserver (5 строк JS).
- [ ] Заменить `.msg--user { background: var(--black) }` на светлый вариант (либо accent-orange, либо #F0F0F0).
- [ ] Добавить `::selection { background: rgba(255,140,0,0.2); }`.
- [ ] Проверить, что шрифты-clamp не превышают index.html H2 (`clamp(2.5rem, 7vw, 6rem)`) — статья должна быть чуть спокойнее.
- [ ] Добавить eyebrow-label в mono-стиле перед каждым новым разделом (как в `.s-label`).
- [ ] Buttons-radius: перевести на `9999px` (pill) где кнопка-CTA, оставить `12-14px` для inline-actions.
- [ ] Где есть цветные точки-буллеты — сделать `5-6px ○ var(--orange)`.
- [ ] Добавить «lamp-light» перед финальным CTA в статье (см. §5.3).
- [ ] В футер статьи — простой текст-копирайт + ссылка на главную, без гигантских SVG.
- [ ] Использовать cases-style background только для одной «пиковой» секции статьи (`linear-gradient(135deg, #FFA000, #FF8F00, #F28000)`), всё остальное — белый / sun-100.
