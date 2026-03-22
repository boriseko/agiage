"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Author() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" ref={ref} style={{ background: "#FAFAF7" }}>
      <div
        className="absolute top-[20%] left-[-50px] w-[350px] h-[350px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-4 text-center"
          style={{ color: "#C9A030" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          Автор курса
        </motion.p>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #E8C840 0%, #E87B35 50%, #8B5CF6 100%)",
            }}
          >
            <span className="text-3xl font-bold text-white">E</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Егор
          </h2>
          <p className="text-lg mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "#555" }}>
            Разработчик и предприниматель. Каждый день строю продукты с помощью AI-агентов — и учу других делать то же самое.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <div className="glass-card p-5 text-center">
            <p className="text-2xl font-bold gradient-text">5+</p>
            <p className="text-sm mt-1" style={{ color: "#777" }}>лет в разработке</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-2xl font-bold gradient-text">50+</p>
            <p className="text-sm mt-1" style={{ color: "#777" }}>проектов с AI</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-2xl font-bold gradient-text">24/7</p>
            <p className="text-sm mt-1" style={{ color: "#777" }}>на связи в чате</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
