import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FlowForge — Automation Agency",
  description:
    "Custom automation systems for ambitious companies. We eliminate repetitive work, integrate your tools, and scale your operations without scaling headcount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ fontFamily: "var(--font-geist-sans), -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
