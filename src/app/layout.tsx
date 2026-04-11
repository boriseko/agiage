import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AGI Age — Вайб. Зарабатывай больше с помощью ИИ",
  description:
    "Курс для всех, кто хочет зарабатывать больше с помощью ИИ — без кода, без опыта, и с кайфом от процесса. 7 уроков от нуля до результата.",
  openGraph: {
    title: "AGI Age — Вайб",
    description: "Зарабатывай больше с помощью ИИ — на вайбе",
    type: "website",
    locale: "ru_RU",
    siteName: "AGI Age",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGI Age — Вайб",
    description: "Зарабатывай больше с помощью ИИ — на вайбе",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
