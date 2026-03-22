import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGI Age — Вайб. Научись решать любые задачи с помощью ИИ",
  description:
    "Курс для всех, кто хочет использовать AI-агентов для решения любых задач — без кода, без опыта, без запары.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
