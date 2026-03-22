"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const perks = [
  { title: "Делись проектами", desc: "Показывай работы и получай фидбек" },
  { title: "Задавай вопросы", desc: "Помощь от комьюнити и автора" },
  { title: "Будь в курсе", desc: "Новые инструменты и лайфхаки" },
  { title: "Находи людей", desc: "Идеи, партнёры, проекты" },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section relative" ref={ref} style={{ background: "#FAFAF7" }}>
      <div
        className="absolute top-[10%] right-[-50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,92,198,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-6 text-center"
          style={{ color: "#A0A0A0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Комьюнити
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          После курса{" "}
          <span className="gradient-text">ты не один</span>
        </motion.h2>

        <motion.p
          className="text-base mb-14 text-center max-w-lg mx-auto"
          style={{ color: "#6B6B6B" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Все выпускники попадают в закрытую группу
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <h3 className="text-sm font-semibold mb-1 tracking-tight">{perk.title}</h3>
              <p className="text-xs" style={{ color: "#A0A0A0" }}>{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card-strong p-6 md:p-8 text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-base font-semibold mb-1 tracking-tight">Закрытый Telegram-чат</p>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Автор курса регулярно на связи.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
