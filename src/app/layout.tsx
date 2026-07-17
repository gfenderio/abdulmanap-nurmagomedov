import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SIAS MI Sirojul Falah",
  description: "Sistem Informasi Akademik Sekolah MI Sirojul Falah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body className="antialiased text-neutral-900 bg-neutral-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
