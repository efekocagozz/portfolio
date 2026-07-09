import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Efe Kocagoz — IT Student & Backend Developer",
  description:
    "IT student at inHolland University focused on data engineering and backend development. Building APIs, databases, and systems in Java, Spring Boot, SQL, and MongoDB.",
  keywords: [
    "backend developer",
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "data engineering",
    "IT student",
    "Netherlands",
    "portfolio",
  ],
  authors: [{ name: "Efe Kocagoz" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Efe Kocagoz — IT Student & Backend Developer",
    description:
      "IT student at inHolland University focused on data engineering and backend development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efe Kocagoz — IT Student & Backend Developer",
    description:
      "IT student at inHolland University focused on data engineering and backend development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
