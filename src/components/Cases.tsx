"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cases = [
  {
    title: "Лендинг для мероприятия",
    time: "2 часа",
    who: "Нулевой опыт в вёрстке",
    desc: "Полностью адаптивный сайт с формой регистрации, анимациями и подключением к базе данных",
  },
  {
    title: "Telegram-бот для бизнеса",
    time: "3 часа",
    who: "Никогда не писал код",
    desc: "Бот с обработкой заказов, уведомлениями и интеграцией с Google Sheets",
  },
  {
    title: "Мини-сервис автоматизации",
    time: "1 вечер",
    who: "Маркетолог",
    desc: "Автоматический парсинг конкурентов с отправкой отчётов в Telegram каждый день",
  },
  {
    title: "Персональный AI-инструмент",
    time: "4 часа",
    who: "Дизайнер",
    desc: "Внутренний инструмент для генерации ТЗ из голосовых заметок с AI-обработкой",
  },
];

export default function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" style={{ background: "#F0ECE4" }} ref={ref}>
      <div
        className="absolute top-[20%] left-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(201,107,46,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-4"
          style={{ color: "#C9A030" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          Кейсы
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-5 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Вот что можно собрать{" "}
          <span className="gradient-text">с помощью AI</span>
        </motion.h2>

        <motion.p
          className="text-base mb-14 max-w-md leading-relaxed"
          style={{ color: "#666" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <strong style={{ color: "#444" }}>Обычные люди</strong>, без опыта в программировании.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="glass-card p-7"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#888" }}>
                  Кейс {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(232,200,64,0.2)", color: "#B8940A" }}
                >
                  {c.time}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-tight">{c.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>
                {c.desc}
              </p>

              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "rgba(0,0,0,0.04)", color: "#666" }}
              >
                {c.who}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          <a href="#pricing" className="btn-primary">
            Хочу так же
          </a>
        </motion.div>
      </div>
    </section>
  );
}
