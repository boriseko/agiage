import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AGI Age — Вайб. Научись решать любые задачи с помощью ИИ",
  description:
    "Курс для всех, кто хочет использовать AI-агентов для решения любых задач — без кода, без опыта, без запары. 7 уроков от нуля до своего продукта.",
  openGraph: {
    title: "AGI Age — Вайб",
    description:
      "Научись решать любые задачи с помощью ИИ — без кода, без опыта, без запары",
    type: "website",
    locale: "ru_RU",
    siteName: "AGI Age",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGI Age — Вайб",
    description:
      "Научись решать любые задачи с помощью ИИ — без кода, без опыта, без запары",
  },
  metadataBase: new URL("http://5.129.251.26/agiage"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#FAFAF7" />
      </head>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
