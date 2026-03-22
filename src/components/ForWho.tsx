"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cards = [
  {
    title: "У тебя есть идея, но нет технических навыков",
    desc: "Хочешь сделать сайт, бота, сервис — но не знаешь с чего начать",
  },
  {
    title: "Ты пробовал ChatGPT и разочаровался",
    desc: "Думал «ну и хайп», получал средние ответы и забил. Сейчас всё по-другому",
  },
  {
    title: "Ты предприниматель или фрилансер",
    desc: "И хочешь делать за час то, на что раньше уходила неделя и бюджет на подрядчика",
  },
  {
    title: "Хочешь проверить бизнес-идею быстро",
    desc: "Собрать MVP, протестировать гипотезу, запустить лендинг — без команды",
  },
  {
    title: "Слышал про AI-агентов, но не понимаешь как начать",
    desc: "Cursor, Claude Code, Codex — звучит сложно, но на деле проще чем кажется",
  },
  {
    title: "Ты дизайнер, маркетолог, менеджер — кто угодно",
    desc: "И хочешь добавить себе суперсилу, которая кратно ускоряет работу",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" style={{ background: "#F0ECE4" }} ref={ref}>
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(232,200,64,0.2) 0%, rgba(232,123,53,0.08) 50%, transparent 70%)",
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
          Для кого
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-5 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Этот курс для тебя,{" "}
          <span className="gradient-text">если...</span>
        </motion.h2>

        <motion.p
          className="text-lg mb-16 max-w-lg leading-relaxed"
          style={{ color: "#666" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          Неважно кто ты по профессии. Важно, что ты хочешь{" "}
          <strong style={{ color: "#444" }}>делать больше — быстрее, проще</strong> и своими руками.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-4"
                style={{ color: "#C9A030" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold mb-2 leading-snug tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
