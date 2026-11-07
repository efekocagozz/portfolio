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

const TITLE = "Efe Kodzhagioz — IT Student & Developer";
const SHARE_DESCRIPTION =
  "IT student and developer at Inholland, exploring backend, cybersecurity, cloud and AI.";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "IT student and developer at Inholland. I build backend-focused projects and I'm learning the fundamentals of cybersecurity, cloud and AI.",
  keywords: [
    "IT student",
    "developer",
    "backend",
    "cybersecurity",
    "cloud",
    "AI",
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
    title: TITLE,
    description: SHARE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHARE_DESCRIPTION,
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
