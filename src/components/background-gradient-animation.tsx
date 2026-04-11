"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundGradientAnimation({
  firstColor = "232, 199, 56",
  secondColor = "222, 128, 46",
  thirdColor = "235, 163, 158",
  fourthColor = "133, 199, 184",
  fifthColor = "158, 194, 224",
  pointerColor = "222, 128, 46",
  size = "50%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const el = document.body.style;
    el.setProperty("--gradient-background-start", "#FAFAF7");
    el.setProperty("--gradient-background-end", "#FAFAF7");
    el.setProperty("--first-color", firstColor);
    el.setProperty("--second-color", secondColor);
    el.setProperty("--third-color", thirdColor);
    el.setProperty("--fourth-color", fourthColor);
    el.setProperty("--fifth-color", fifthColor);
    el.setProperty("--pointer-color", pointerColor);
    el.setProperty("--size", size);
    el.setProperty("--blending-value", blendingValue);
  }, [firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) return;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }
      curXRef.current += (tgXRef.current - curXRef.current) / 20;
      curYRef.current += (tgYRef.current - curYRef.current) / 20;
      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    animationFrameRef.current = requestAnimationFrame(animateMovement);
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName ?? ""}`}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Content layer */}
      <div className={`relative z-10 ${className ?? ""}`}>{children}</div>

      {/* Gradient blobs */}
      <div
        className={`absolute inset-0 ${
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        }`}
      >
        {/* Blob 1 — Gold */}
        <div
          className="absolute animate-first opacity-100"
          style={{
            background: `radial-gradient(circle at center, rgba(${firstColor}, 0.8) 0%, rgba(${firstColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
          }}
        />
        {/* Blob 2 — Orange */}
        <div
          className="absolute animate-second opacity-100"
          style={{
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.8) 0%, rgba(${secondColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 400px)",
          }}
        />
        {/* Blob 3 — Rose */}
        <div
          className="absolute animate-third opacity-100"
          style={{
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.8) 0%, rgba(${thirdColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% + 400px)",
          }}
        />
        {/* Blob 4 — Teal */}
        <div
          className="absolute animate-fourth opacity-70"
          style={{
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.8) 0%, rgba(${fourthColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 200px)",
          }}
        />
        {/* Blob 5 — Sky */}
        <div
          className="absolute animate-fifth opacity-100"
          style={{
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.8) 0%, rgba(${fifthColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
          }}
        />
        {/* Interactive pointer blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute opacity-70"
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0%, rgba(${pointerColor}, 0) 50%) no-repeat`,
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
            }}
          />
        )}
      </div>
    </div>
  );
}
