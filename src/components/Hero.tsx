"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [stage, setStage] = useState(0);
  // 0: initial
  // 1: show AGI + blob
  // 2: show ВАЙБ-КОДИНГ
  // 3: КОДИНГ falls
  // 4: ВАЙБ expands center

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1000),
      setTimeout(() => setStage(3), 2400),
      setTimeout(() => setStage(4), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#FAFAF7" }}>
      {/* Gradient blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,217,104,0.5) 0%, rgba(232,123,53,0.25) 50%, rgba(139,92,246,0.1) 80%, transparent 100%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          stage >= 1
            ? { scale: 1, opacity: 1, y: [0, -20, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={{
          scale: { duration: 1.2, ease: "easeOut" },
          opacity: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.15) 60%, transparent 100%)",
          filter: "blur(60px)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          stage >= 1
            ? { scale: 1, opacity: 1, x: [0, 15, 0], y: [0, -10, 0] }
            : {}
        }
        transition={{
          scale: { duration: 1, delay: 0.3 },
          opacity: { duration: 0.6, delay: 0.3 },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Header - AGI */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-16 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={stage >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase" style={{ color: "rgba(26,26,26,0.4)" }}>
          АГИ
        </span>
      </motion.div>

      {/* Nav */}
      <motion.nav
        className="absolute top-8 right-8 md:top-12 md:right-16 z-20 flex gap-6 md:gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={stage >= 1 ? { opacity: 0.7, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="#program"
          className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}
        >
          Программа
        </a>
        <a
          href="#pricing"
          className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}
        >
          Тарифы
        </a>
        <a
          href="#faq"
          className="text-sm font-medium transition-colors hidden md:block" style={{ color: "#555" }}
        >
          FAQ
        </a>
        <a href="#pricing" className="btn-primary !py-2.5 !px-6 !text-sm">
          Записаться
        </a>
      </motion.nav>

      {/* Main text area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* ВАЙБ-КОДИНГ → ВАЙБ animation */}
        <div className="relative h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center mb-6">
          {/* Stage 2: ВАЙБ-КОДИНГ appears */}
          <AnimatePresence>
            {stage === 2 && (
              <motion.div
                className="flex items-baseline gap-2 md:gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                  ВАЙБ
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-500/50">
                  -
                </span>
                <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-neutral-500/70">
                  КОДИНГ
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 3: КОДИНГ falls */}
          <AnimatePresence>
            {stage === 3 && (
              <div className="flex items-baseline gap-2 md:gap-4">
                <motion.span
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  ВАЙБ
                </motion.span>
                <motion.span
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-500/50"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: 200, rotate: 15 }}
                  transition={{ duration: 0.7, ease: "easeIn" }}
                >
                  -
                </motion.span>
                <motion.span
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-neutral-500/70"
                  initial={{ opacity: 1, y: 0, rotate: 0 }}
                  animate={{ opacity: 0, y: 300, rotate: 12 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                >
                  КОДИНГ
                </motion.span>
              </div>
            )}
          </AnimatePresence>

          {/* Stage 4: ВАЙБ big and centered */}
          <AnimatePresence>
            {stage >= 4 && (
              <motion.span
                className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tight gradient-text leading-none"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                ВАЙБ
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-neutral-500 max-w-2xl leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Научись решать любые задачи с помощью ИИ
          <br />
          <span className="text-neutral-400">
            без кода · без опыта · без запары
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
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
          className="mt-8 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={stage >= 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          7 уроков · Закрытое комьюнити · Для любой профессии
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={stage >= 4 ? { opacity: 0.4, y: [0, 8, 0] } : {}}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
