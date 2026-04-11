"use client";

import { useState, useEffect } from "react";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    // Phase 1: Intro animation plays for 2.5s
    const timer1 = setTimeout(() => {
      setIntroVisible(false); // start fade out
    }, 2500);

    // Phase 2: Remove intro from DOM after fade
    const timer2 = setTimeout(() => {
      setIntroDone(true);
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Intro animation overlay */}
      {!introDone && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#FAFAF7] transition-opacity duration-700 ${
            introVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="intro-container text-center">
            <div className="flex items-center justify-center gap-2 font-sans">
              <span className="intro-vibe text-6xl sm:text-8xl md:text-9xl font-black bg-gradient-to-b from-[#E8C738] to-[#DE802E] bg-clip-text text-transparent">
                ВАЙБ
              </span>
              <span className="intro-dash text-6xl sm:text-8xl md:text-9xl font-light text-[#A0A0A0]">
                —
              </span>
              <span className="intro-coding text-6xl sm:text-8xl md:text-9xl font-black text-[#1A1A1A]">
                КОДИНГ
              </span>
            </div>
          </div>

          <style>{`
            .intro-vibe {
              animation: vibeGrow 2.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
              filter: drop-shadow(0 0 40px rgba(232, 199, 56, 0.4)) drop-shadow(0 0 80px rgba(222, 128, 46, 0.2));
            }
            .intro-dash {
              animation: dashFade 1s 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            }
            .intro-coding {
              animation: codingFall 1.2s 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            }

            @keyframes vibeGrow {
              0%, 30% { transform: scale(1); }
              100% { transform: scale(1.3); }
            }
            @keyframes dashFade {
              to { opacity: 0; filter: blur(10px); transform: scaleX(2); }
            }
            @keyframes codingFall {
              to { opacity: 0; transform: translateY(120px); filter: blur(4px); }
            }
          `}</style>
        </div>
      )}

      {/* Hero Section */}
      <BackgroundGradientAnimation
        size="60%"
        containerClassName="min-h-screen w-full"
        className="min-h-screen flex flex-col"
      >
        {/* Navigation */}
        <nav className="w-full px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-[#1A1A1A]">
            AGI AGE
          </a>
          <div className="hidden md:flex items-center gap-2">
            {["Программа", "Тарифы", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-[#1A1A1A] hover:bg-white/60 transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#записаться"
              className="ml-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#E8C738] to-[#DE802E] hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Записаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden glass rounded-xl p-2.5" aria-label="Меню">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center stagger">
          {/* ВАЙБ badge */}
          <div className="animate-float mb-8">
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black bg-gradient-to-b from-[#E8C738] to-[#DE802E] bg-clip-text text-transparent leading-none"
              style={{
                filter: "drop-shadow(0 4px 0 rgba(200, 140, 30, 0.3)) drop-shadow(0 8px 0 rgba(180, 120, 20, 0.15)) drop-shadow(0 0 40px rgba(232, 199, 56, 0.4)) drop-shadow(0 0 80px rgba(222, 128, 46, 0.2))",
              }}
            >
              ВАЙБ
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] max-w-4xl leading-tight tracking-tight">
            Зарабатывай больше{" "}
            <br className="hidden sm:block" />
            с помощью ИИ —{" "}
            <span className="bg-gradient-to-r from-[#E8C738] to-[#DE802E] bg-clip-text text-transparent">
              на вайбе
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-[#6B6B6B] max-w-2xl leading-relaxed">
            Неважно, чем ты занимаешься — ИИ усилит тебя в разы.
            <br className="hidden md:block" />
            Создавай, автоматизируй, запускай новое.
            <br className="hidden md:block" />
            Без кода, без опыта — и с кайфом от процесса.
          </p>

          {/* Info pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["7 уроков", "живые эфиры", "результат с первого занятия"].map(
              (pill) => (
                <span
                  key={pill}
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium text-[#1A1A1A]"
                >
                  {pill}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <button className="mt-10 rounded-full px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#E8C738] to-[#DE802E] hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
            Хочу на курс
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pb-8 flex justify-center">
          <div className="w-6 h-10 rounded-full border-2 border-[#A0A0A0]/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-[#A0A0A0]/60 animate-bounce" />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
