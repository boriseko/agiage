"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Базовый",
    price: "Скоро",
    features: [
      "Доступ ко всем 7 урокам",
      "Записи уроков навсегда",
      "Доступ в закрытый чат",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "С поддержкой",
    price: "Скоро",
    features: [
      "Всё из «Базового»",
      "Обратная связь по проектам",
      "Доп. материалы и шаблоны",
      "Приоритетные ответы",
    ],
    highlighted: true,
    badge: "Рекомендуем",
  },
  {
    name: "Персональный",
    price: "Скоро",
    features: [
      "Всё из «С поддержкой»",
      "1-на-1 созвон с автором",
      "Разбор вашей задачи",
      "Помощь с запуском",
    ],
    highlighted: false,
    badge: "Лимит мест",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" id="pricing" ref={ref} style={{ background: "#F0ECE4" }}>
      <div
        className="absolute top-[30%] left-[-50px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,200,64,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-6 text-center"
          style={{ color: "#A0A0A0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Тарифы
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Выбери свой формат
        </motion.h2>
        <motion.p
          className="text-base mb-16 text-center"
          style={{ color: "#6B6B6B" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          От самостоятельного до персонального
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-7 flex flex-col ${tier.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
              style={
                tier.highlighted
                  ? {
                      background: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(40px)",
                      border: "1.5px solid rgba(232,200,64,0.35)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(212,169,48,0.1)",
                    }
                  : {
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(40px)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    }
              }
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              whileHover={{ y: -4 }}
            >
              {tier.badge && (
                <span
                  className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-5"
                  style={{
                    background: tier.highlighted ? "#1A1A1A" : "#8B5CF6",
                    color: "#fff",
                  }}
                >
                  {tier.badge}
                </span>
              )}

              {!tier.badge && <div className="mb-5 h-[26px]" />}

              <h3 className="text-xl font-bold mb-1 tracking-tight">{tier.name}</h3>

              <p className="text-sm mb-6" style={{ color: "#A0A0A0" }}>
                {tier.price}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#E8C840" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: "#6B6B6B" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={tier.highlighted ? "btn-primary w-full !py-3 !px-0 text-center" : "btn-secondary w-full text-center"}
              >
                Купить
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
