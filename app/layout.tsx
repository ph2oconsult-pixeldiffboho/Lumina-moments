import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "../components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina",
  description: "A guided journey for parents and children.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>
        <main className="pb-20">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
