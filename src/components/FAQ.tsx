"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const questions = [
  { q: "Мне нужно уметь программировать?", a: "Нет. Курс создан для людей без технического опыта. Мы учим ставить задачи AI-агенту — это ближе к навыку управления, чем к программированию." },
  { q: "Я уже пробовал ChatGPT и мне не зашло. Чем это отличается?", a: "ChatGPT — это чат. Мы работаем с агентными системами, которые могут сами создавать файлы, писать код, запускать сервисы. Это принципиально другой уровень — попробуйте и удивитесь." },
  { q: "Какие инструменты понадобятся?", a: "Компьютер (Mac / Windows / Linux) и подписка на одну из агентных систем. На курсе подскажем какую выбрать и как настроить." },
  { q: "Сколько времени нужно на курс?", a: "7 уроков, каждый можно проходить в своём темпе. Средняя скорость: 1–2 недели." },
  { q: "Будут ли записи?", a: "Да, все уроки доступны в записи навсегда." },
  { q: "Мне нужно будет платить за AI-инструменты отдельно?", a: "Да, подписка на агентную систему оплачивается отдельно (обычно $20–50/мес). Мы покажем как выбрать оптимальный вариант." },
  { q: "Я смогу реально что-то запустить?", a: "Да. На 5-м уроке мы собираем продукт в реальном времени, а на 7-м участники показывают свои проекты. Это практический курс." },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section relative" id="faq" ref={ref} style={{ background: "#F0ECE4" }}>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-4 text-center"
          style={{ color: "#C9A030" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          FAQ
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Частые <span className="gradient-text">вопросы</span>
        </motion.h2>

        <div className="space-y-3">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-bold text-base md:text-lg pr-4 leading-snug">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: openIndex === i ? "rgba(232,200,64,0.2)" : "rgba(0,0,0,0.05)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 leading-relaxed" style={{ color: "#555" }}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
