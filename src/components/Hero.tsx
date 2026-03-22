"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const codingLetters = ["К", "О", "Д", "И", "Н", "Г"];

// Each letter drifts away softly in its own direction
const letterExits = [
  { x: -80, y: -120, rotate: -12 },
  { x: -40, y: -160, rotate: 8 },
  { x: 20, y: -140, rotate: -6 },
  { x: 60, y: -170, rotate: 10 },
  { x: 100, y: -130, rotate: -14 },
  { x: 140, y: -150, rotate: 8 },
];

const smooth = [0.4, 0, 0.2, 1]; // gentle ease

export default function Hero() {
  const [stage, setStage] = useState(0);
  // 0: just blobs, nothing else
  // 1: ВАЙБ-КОДИНГ fades in
  // 2: КОДИНГ letters drift away
  // 3: ВАЙБ stays big + UI appears

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 3500),
      setTimeout(() => setStage(3), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#FAFAF7" }}
    >
      {/* Main blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,217,104,0.45) 0%, rgba(232,123,53,0.2) 40%, rgba(139,92,246,0.1) 70%, transparent 100%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
        transition={{
          scale: { duration: 2.5, ease: smooth },
          opacity: { duration: 2 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Purple blob */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(109,40,217,0.1) 50%, transparent 100%)",
          filter: "blur(60px)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{
          scale: { duration: 2.5, delay: 0.5, ease: smooth },
          opacity: { duration: 2, delay: 0.5 },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Header — only after final stage */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-16 z-20"
        initial={{ opacity: 0 }}
        animate={stage >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: smooth }}
      >
        <span className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase" style={{ color: "rgba(26,26,26,0.35)" }}>
          АГИ
        </span>
      </motion.div>

      {/* Nav — only after final stage */}
      <motion.nav
        className="absolute top-8 right-8 md:top-12 md:right-16 z-20 flex gap-6 md:gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={stage >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: smooth }}
      >
        <a href="#program" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>Программа</a>
        <a href="#pricing" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>Тарифы</a>
        <a href="#faq" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>FAQ</a>
        <a href="#pricing" className="btn-primary !py-2.5 !px-6 !text-sm">Записаться</a>
      </motion.nav>

      {/* Text area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="relative h-[100px] md:h-[140px] lg:h-[180px] flex items-center justify-center mb-6">

          {/* Stage 1: ВАЙБ-КОДИНГ appears */}
          {stage === 1 && (
            <motion.div
              className="flex items-baseline"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: smooth }}
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                ВАЙБ
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold mx-1 md:mx-2" style={{ color: "rgba(0,0,0,0.18)" }}>
                -
              </span>
              <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight" style={{ color: "rgba(0,0,0,0.65)" }}>
                КОДИНГ
              </span>
            </motion.div>
          )}

          {/* Stage 2: КОДИНГ letters drift away softly, ВАЙБ stays */}
          {stage === 2 && (
            <div className="flex items-baseline">
              {/* ВАЙБ stays put */}
              <motion.span
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                ВАЙБ
              </motion.span>

              {/* Dash fades */}
              <motion.span
                className="text-3xl md:text-5xl lg:text-6xl font-bold mx-1 md:mx-2"
                style={{ color: "rgba(0,0,0,0.18)" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, ease: smooth }}
              >
                -
              </motion.span>

              {/* КОДИНГ letters drift away one by one */}
              {codingLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight inline-block"
                  style={{ color: "rgba(0,0,0,0.65)" }}
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={{
                    opacity: 0,
                    x: letterExits[i].x,
                    y: letterExits[i].y,
                    rotate: letterExits[i].rotate,
                  }}
                  transition={{
                    duration: 1.4,
                    delay: 0.3 + i * 0.1,
                    ease: smooth,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          )}

          {/* Stage 3: ВАЙБ big gradient centered */}
          {stage >= 3 && (
            <motion.span
              className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter gradient-text leading-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: smooth }}
            >
              ВАЙБ
            </motion.span>
          )}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: "#555" }}
          initial={{ opacity: 0, y: 15 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: smooth }}
        >
          Научись решать любые задачи с помощью ИИ
          <br />
          <span style={{ color: "#999" }}>
            без кода · без опыта · без запары
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: smooth }}
        >
          <a href="#pricing" className="btn-primary">Хочу на курс</a>
          <a href="#program" className="btn-secondary">Программа</a>
        </motion.div>

        {/* Info */}
        <motion.p
          className="mt-8 text-sm"
          style={{ color: "#999" }}
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3, ease: smooth }}
        >
          7 уроков · Закрытое комьюнити · Для любой профессии
        </motion.p>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={stage >= 3 ? { opacity: 0.3, y: [0, 6, 0] } : {}}
        transition={{
          opacity: { delay: 2, duration: 0.8 },
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
