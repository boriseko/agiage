"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const codingLetters = ["К", "О", "Д", "И", "Н", "Г"];

const letterExits = [
  { x: -80, y: -120, rotate: -12 },
  { x: -40, y: -160, rotate: 8 },
  { x: 20, y: -140, rotate: -6 },
  { x: 60, y: -170, rotate: 10 },
  { x: 100, y: -130, rotate: -14 },
  { x: 140, y: -150, rotate: 8 },
];

const smooth: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2800),
      setTimeout(() => setStage(3), 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const showText = stage >= 1;
  const lettersGone = stage >= 2;
  const finalStage = stage >= 3;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#FAFAF7" }}
    >
      {/* Main blob */}
      <div
        className="absolute hero-blob w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,217,104,0.4) 0%, rgba(232,123,53,0.18) 40%, rgba(139,92,246,0.08) 70%, transparent 100%)",
          filter: "blur(60px)",
          animation: "blob-breathe 8s ease-in-out infinite",
        }}
      />

      {/* Purple blob */}
      <div
        className="absolute top-[15%] right-[8%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full hero-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(109,40,217,0.08) 50%, transparent 100%)",
          filter: "blur(50px)",
          animation: "blob-drift 10s ease-in-out infinite",
        }}
      />

      {/* Header — appears at stage 1 */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-16 z-20"
        initial={{ opacity: 0 }}
        animate={showText ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: smooth }}
      >
        <span
          className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase"
          style={{ color: "rgba(26,26,26,0.5)" }}
        >
          АГИ
        </span>
      </motion.div>

      {/* Nav — appears at stage 1 */}
      <motion.nav
        className="absolute top-8 right-8 md:top-12 md:right-16 z-30 flex gap-4 md:gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={showText ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: smooth }}
      >
        <a href="#program" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>
          Программа
        </a>
        <a href="#pricing" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>
          Тарифы
        </a>
        <a href="#faq" className="text-sm font-medium hidden md:block" style={{ color: "#555" }}>
          FAQ
        </a>
        <a href="#pricing" className="btn-primary !py-2.5 !px-6 !text-sm">
          Записаться
        </a>
        {/* Mobile burger */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-20 right-8 z-30 glass-card-strong p-4 flex flex-col gap-1 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {[
              { href: "#program", label: "Программа" },
              { href: "#pricing", label: "Тарифы" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Контакты" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                style={{ color: "#555" }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="relative" style={{ height: "clamp(120px, 22vw, 250px)" }}>
          {/* Layer 1: ВАЙБ-КОДИНГ centered */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: finalStage ? 0 : showText ? 1 : 0,
              scale: showText ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, ease: smooth }}
          >
            <motion.div
              className="flex items-baseline justify-center"
              layout
              transition={{ layout: { duration: 0.8, ease: smooth } }}
            >
              <motion.span
                layout
                className="font-black"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
                transition={{ layout: { duration: 0.8, ease: smooth } }}
              >
                ВАЙБ
              </motion.span>

              <AnimatePresence mode="popLayout">
                {!lettersGone && (
                  <motion.span
                    key="dash"
                    layout
                    className="font-bold mx-1 md:mx-2"
                    style={{
                      color: "rgba(0,0,0,0.18)",
                      fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.5, ease: smooth },
                    }}
                  >
                    -
                  </motion.span>
                )}
                {!lettersGone &&
                  codingLetters.map((letter, i) => (
                    <motion.span
                      key={`k-${i}`}
                      layout
                      className="font-black inline-block"
                      style={{
                        color: "rgba(0,0,0,0.65)",
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        lineHeight: 1,
                      }}
                      exit={{
                        opacity: 0,
                        x: letterExits[i].x,
                        y: letterExits[i].y,
                        rotate: letterExits[i].rotate,
                        transition: {
                          duration: 1.2,
                          delay: 0.05 + i * 0.07,
                          ease: smooth,
                        },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Layer 2: Big gradient ВАЙБ */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={finalStage ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: smooth }}
          >
            <span
              className="gradient-text font-black tracking-tighter leading-none"
              style={{ fontSize: "clamp(5rem, 15vw, 12rem)" }}
            >
              ВАЙБ
            </span>
          </motion.div>
        </div>

        {/* H1 Subtitle — appears at stage 1 */}
        <motion.h1
          className="text-lg md:text-xl max-w-xl leading-relaxed font-normal"
          style={{ color: "#555" }}
          initial={{ opacity: 0, y: 20 }}
          animate={showText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: smooth }}
        >
          Научись решать любые задачи с помощью ИИ
          <br />
          <span style={{ color: "#888" }}>без кода · без опыта · без запары</span>
        </motion.h1>

        {/* CTA — appears at stage 1 */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={showText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: smooth }}
        >
          <a href="#pricing" className="btn-primary">
            Хочу на курс
          </a>
          <a href="#program" className="btn-secondary">
            Программа
          </a>
        </motion.div>

        {/* Info — appears at stage 1 */}
        <motion.p
          className="mt-8 text-sm"
          style={{ color: "#888" }}
          initial={{ opacity: 0 }}
          animate={showText ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0, ease: smooth }}
        >
          7 уроков · Закрытое комьюнити · Для любой профессии
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={showText ? { opacity: 0.5, y: [0, 6, 0] } : {}}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
