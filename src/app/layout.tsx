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
  title: "Efe Kodzhagioz — Software Engineering Student",
  description:
    "IT student at Inholland University of Applied Sciences focused on software engineering. Building REST APIs and full-stack applications with Java, Spring Boot, C#, ASP.NET Core, Vue.js and SQL. Open to software engineering internships.",
  keywords: [
    "software engineer",
    "backend developer",
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "C#",
    "ASP.NET Core",
    "software engineering",
    "internship",
    "IT student",
    "Netherlands",
    "portfolio",
  ],
  authors: [{ name: "Efe Kodzhagioz" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Efe Kodzhagioz — Software Engineering Student",
    description:
      "IT student at Inholland focused on software engineering. Open to internships.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efe Kodzhagioz — Software Engineering Student",
    description:
      "IT student at Inholland focused on software engineering. Open to internships.",
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
