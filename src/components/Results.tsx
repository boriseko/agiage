"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const results = [
  { text: "Собрать сайт или лендинг с нуля", sub: "без дизайнера, без верстальщика, за вечер" },
  { text: "Создать Telegram-бота", sub: "который делает то, что тебе нужно" },
  { text: "Запустить проект на сервер", sub: "чтобы он работал 24/7 и был доступен всем" },
  { text: "Проверить любую бизнес-идею", sub: "собрать MVP за дни, а не месяцы" },
  { text: "Подключать внешние инструменты к AI", sub: "базы данных, API, сервисы" },
  { text: "Думать по-новому", sub: "ставить задачи AI так, чтобы получать результат с первого раза" },
  { text: "Не попадать в ловушки", sub: "знать, где AI врёт, где опасно, как проверять результат" },
  { text: "Автоматизировать рутину", sub: "отчёты, обработка данных, парсинг, рассылки" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" style={{ background: "#FAFAF7" }} ref={ref}>
      <div
        className="absolute bottom-[-50px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(232,123,53,0.15) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
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
          Результат
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          После курса{" "}
          <span className="gradient-text">ты сможешь:</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card flex items-start gap-4 p-5"
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: "rgba(232,200,64,0.15)", color: "#C9A030" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-bold leading-snug tracking-tight">
                  {item.text}
                </h3>
                <p className="text-sm mt-1" style={{ color: "#999" }}>
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 glass-card-strong p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight">
            И самое главное — ты получишь навык, который будет{" "}
            <strong>только дорожать</strong>.
            <br />
            <span className="gradient-text font-bold">
              Потому что так скоро будут работать все.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
