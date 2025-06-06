import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build order assistant",
  keywords: [
    "build order",
    "aoe2",
    "age of empires 2",
    "assistant",
    "game",
    "strategy",
    "gaming",
    "real-time strategy",
    "RTS",
    "village",
    "villager",
    "resource management",
    "game assistant",
    "game guide",],
  authors: [{ name: "Samuel Arenas" }],
  description: "Build order assistant for Age of Empires II",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
