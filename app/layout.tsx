export const runtime = "edge";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { site_config } from "@/config/site.config";
import { Navigation } from "@/components/Navigaton";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: site_config.title,
  description: site_config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-center gap-10 px-10 pt-6 md:px-16 lg:px-24 container mx-auto">
          {children}
          <span className="fixed -right-20 -top-40 w-[300px] h-[300px] bg-secondary rounded-full blur-3xl opacity-60 -z-50 animate-pulse" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
