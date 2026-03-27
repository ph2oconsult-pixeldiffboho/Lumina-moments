import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NudgeSystem from "../components/NudgeSystem";
import SessionTracker from "../components/SessionTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina Moments",
  description: "Helping parents build real confidence in children through small, everyday moments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased`}>
        <SessionTracker />
        <main className="">{children}</main>
        <NudgeSystem />
      </body>
    </html>
  );
}
