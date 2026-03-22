"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const lessons = [
  {
    num: "01",
    title: "Что произошло с ИИ и почему «вайб» — новая грамотность",
    subtitle: "Ломаем старую картину мира",
    points: [
      "Почему ваш прошлый опыт с AI уже неактуален",
      "Что изменилось за последние месяцы и почему это важно",
      "Агентные системы — не чат-бот, а цифровой исполнитель",
      "Новая грамотность: задача → контекст → проверка → результат",
      "Что теперь реально возможно — конкретные примеры",
    ],
  },
  {
    num: "02",
    title: "Интерфейс и навигация — «куда нажимать, чтобы работало»",
    subtitle: "Перестаём бояться и начинаем делать",
    points: [
      "Обзор агентных систем: что выбрать и почему",
      "Первые шаги: от установки до первого результата",
      "Как переключаться между сценариями",
      "Какие инструменты реально нужны, а какие — шум",
      "Практика: делаем первую задачу вместе",
    ],
  },
  {
    num: "03",
    title: "База для нетехнаря: домены, серверы, запуски",
    subtitle: "Снимаем блок «это не для меня»",
    points: [
      "Что такое домен, хостинг, сервер — на пальцах",
      "Как купить, арендовать, настроить — или попросить AI",
      "Что значит «задеплоить» и почему это не страшно",
      "Даёшь агенту доступ — он разворачивает всё сам",
      "Практика: запускаем что-то реальное в интернет",
    ],
  },
  {
    num: "04",
    title: "Скиллы, MCP, расширения — агент с руками",
    subtitle: "Из чат-бота в полноценную систему",
    points: [
      "Что такое MCP и зачем он нужен",
      "Расширения и внешние подключения",
      "Какие сценарии это открывает",
      "Когда подключать, а когда не усложнять",
      "Практика: подключаем и видим разницу",
    ],
  },
  {
    num: "05",
    title: "Лайв: собираем продукт с нуля",
    subtitle: "Настоящая сборка в реальном времени",
    points: [
      "Голосование: вы выбираете что собираем",
      "С нуля до работающего продукта за одну сессию",
      "Ошибки, тупики, правки — всё как в жизни",
      "Где AI справляется сам, а где нужна ваша голова",
      "Результат: работающий продукт, который можно потрогать",
    ],
  },
  {
    num: "06",
    title: "Применение, ограничения, безопасность",
    subtitle: "Зрелая позиция: мощь + ответственность",
    points: [
      "Какие задачи AI решает идеально, а какие — нет",
      "Где агент врёт, ломает и фантазирует",
      "Как не слить ключи, деньги и данные",
      "Как проверять результат перед запуском",
      "Чек-лист безопасности для каждого проекта",
    ],
  },
  {
    num: "07",
    title: "Демо-день и выпускной",
    subtitle: "Показываем результаты, планируем дальше",
    points: [
      "Участники показывают свои проекты",
      "Разбор: что получилось, где сложности",
      "Финальные рекомендации и вектор развития",
      "Доступ в закрытое комьюнити",
      "Следующий шаг: что делать после курса",
    ],
  },
];

function LessonAccordion({
  lesson,
  isOpen,
  toggle,
}: {
  lesson: (typeof lessons)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left group rounded-2xl px-4 md:px-6 transition-colors"
        style={{ background: isOpen ? "rgba(232,200,64,0.06)" : "transparent" }}
      >
        <span
          className="text-2xl md:text-4xl font-bold font-mono shrink-0 transition-colors"
          style={{ color: isOpen ? "#E8C840" : "rgba(0,0,0,0.15)" }}
        >
          {lesson.num}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold leading-snug">
            {lesson.title}
          </h3>
          <p className="text-sm mt-1" style={{ color: "#999" }}>
            {lesson.subtitle}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "#999" }}
          className="shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-8 pl-14 md:pl-24 pr-4 md:pr-12">
              <ul className="space-y-3">
                {lesson.points.map((point, pi) => (
                  <motion.li
                    key={pi}
                    className="flex items-start gap-3"
                    style={{ color: "#555" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * pi }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: "#E8C840" }}
                    />
                    <span className="text-sm md:text-base">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Program() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section relative" id="program" ref={ref} style={{ background: "#FAFAF7" }}>
      <div
        className="absolute top-[10%] right-[-50px] w-[350px] h-[350px] rounded-full pointer-events-none hero-blob"
        style={{
          background: "radial-gradient(circle, rgba(242,217,104,0.3) 0%, rgba(232,123,53,0.12) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "#C9A030" }}
          >
            Программа
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Программа курса
          </h2>
          <p className="text-lg mt-4" style={{ color: "#555" }}>
            <strong>7 уроков</strong> от нуля до своего продукта
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {isInView && (
            <div className="glass-card-strong p-4 md:p-6">
              {lessons.map((lesson, i) => (
                <LessonAccordion
                  key={i}
                  lesson={lesson}
                  isOpen={openIndex === i}
                  toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          <a href="#pricing" className="btn-primary text-lg">
            Записаться на курс
          </a>
          <p className="text-sm mt-4" style={{ color: "#999" }}>
            7 уроков, которые изменят то, как вы работаете
          </p>
        </motion.div>
      </div>
    </section>
  );
}
