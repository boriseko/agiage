"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const vibeLetters = ["В", "А", "Й", "Б"];

// Each letter flies off in a unique direction
const letterExits = [
  { x: -120, y: -180, rotate: -35, scale: 0.3 },
  { x: -60, y: -220, rotate: 20, scale: 0.2 },
  { x: 80, y: -200, rotate: -15, scale: 0.25 },
  { x: 150, y: -160, rotate: 30, scale: 0.3 },
];

export default function Hero() {
  const [stage, setStage] = useState(0);
  // 0: empty background with blobs fading in
  // 1: ВАЙБ-КОДИНГ appears
  // 2: ВАЙБ letters scatter away
  // 3: КОДИНГ centers + UI appears

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 2800),
      setTimeout(() => setStage(3), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#FAFAF7" }}
    >
      {/* Main gradient blob — always visible, fades in first */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,217,104,0.45) 0%, rgba(232,123,53,0.2) 40%, rgba(139,92,246,0.1) 70%, transparent 100%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
        transition={{
          scale: { duration: 2, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 1.5 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Secondary purple blob */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(109,40,217,0.1) 50%, transparent 100%)",
          filter: "blur(60px)",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 12, 0],
          y: [0, -8, 0],
        }}
        transition={{
          scale: { duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 1, delay: 0.3 },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Header — appears only at stage 3 */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-16 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase"
          style={{ color: "rgba(26,26,26,0.35)" }}
        >
          АГИ
        </span>
      </motion.div>

      {/* Nav — appears only at stage 3 */}
      <motion.nav
        className="absolute top-8 right-8 md:top-12 md:right-16 z-20 flex gap-6 md:gap-8 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#program" className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}>
          Программа
        </a>
        <a href="#pricing" className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}>
          Тарифы
        </a>
        <a href="#faq" className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}>
          FAQ
        </a>
        <a href="#pricing" className="btn-primary !py-2.5 !px-6 !text-sm">
          Записаться
        </a>
      </motion.nav>

      {/* Main text area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="relative h-[100px] md:h-[140px] lg:h-[180px] flex items-center justify-center mb-6">

          {/* Stage 1: ВАЙБ-КОДИНГ appears smoothly */}
          <AnimatePresence>
            {stage === 1 && (
              <motion.div
                className="flex items-baseline"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                  ВАЙБ
                </span>
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold mx-1 md:mx-2" style={{ color: "rgba(0,0,0,0.2)" }}>
                  -
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                  КОДИНГ
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 2: ВАЙБ letters scatter, dash fades, КОДИНГ stays */}
          <AnimatePresence>
            {stage === 2 && (
              <div className="flex items-baseline">
                {/* ВАЙБ — each letter flies off individually */}
                {vibeLetters.map((letter, i) => (
                  <motion.span
                    key={`vibe-${i}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight inline-block"
                    initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
                    animate={{
                      opacity: 0,
                      x: letterExits[i].x,
                      y: letterExits[i].y,
                      rotate: letterExits[i].rotate,
                      scale: letterExits[i].scale,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.08,
                      ease: [0.36, 0, 0.66, -0.56],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Dash fades */}
                <motion.span
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mx-1 md:mx-2"
                  style={{ color: "rgba(0,0,0,0.2)" }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  -
                </motion.span>

                {/* КОДИНГ stays */}
                <motion.span
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  КОДИНГ
                </motion.span>
              </div>
            )}
          </AnimatePresence>

          {/* Stage 3: КОДИНГ — big, centered, gradient */}
          <AnimatePresence>
            {stage >= 3 && (
              <motion.span
                className="text-6xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter gradient-text leading-none"
                initial={{ scale: 0.7, opacity: 0, filter: "blur(4px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                КОДИНГ
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle — smooth fade in */}
        <motion.p
          className="text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: "#555" }}
          initial={{ opacity: 0, y: 20 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Научись решать любые задачи с помощью ИИ
          <br />
          <span style={{ color: "#999" }}>
            без кода · без опыта · без запары
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#pricing" className="btn-primary">
            Хочу на курс
          </a>
          <a href="#program" className="btn-secondary">
            Программа
          </a>
        </motion.div>

        {/* Info line */}
        <motion.p
          className="mt-8 text-sm"
          style={{ color: "#999" }}
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          7 уроков · Закрытое комьюнити · Для любой профессии
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={stage >= 3 ? { opacity: 0.3, y: [0, 6, 0] } : {}}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
