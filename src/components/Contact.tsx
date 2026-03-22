"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section relative" id="contact" ref={ref} style={{ background: "#FAFAF7" }}>
      <div
        className="absolute bottom-[-50px] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(242,217,104,0.25) 0%, rgba(232,123,53,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest mb-4"
          style={{ color: "#C9A030" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          Контакты
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Остались вопросы?
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          style={{ color: "#555" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          Напиши нам — <strong style={{ color: "#444" }}>ответим быстро</strong>
        </motion.p>

        <motion.div
          className="glass-card-strong p-8 md:p-10 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <a
            href="#"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-200 group"
            style={{ background: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.6)")}
          >
            <svg className="w-6 h-6" style={{ color: "#229ED9" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-medium">Telegram</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-200 group"
            style={{ background: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.6)")}
          >
            <svg className="w-6 h-6" style={{ color: "#555" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
