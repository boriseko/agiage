"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section relative" style={{ background: "#FAFAF7" }} ref={ref}>
      <div
        className="absolute bottom-[-50px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,123,53,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-6"
          style={{ color: "#A0A0A0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Результат
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          После курса{" "}
          <span className="gradient-text">ты сможешь:</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card flex items-start gap-4 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <span
                className="text-xs font-semibold tracking-widest mt-1 shrink-0"
                style={{ color: "#E8C840" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug tracking-tight">
                  {item.text}
                </h3>
                <p className="text-sm mt-1" style={{ color: "#A0A0A0" }}>
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 glass-card-strong p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight">
            И самое главное — ты получишь навык, который будет только дорожать.
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
