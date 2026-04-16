import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DarkModeToggle from "@/components/dark-mode-toggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tools.rankflowhq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "100 Free AI Tools | SEO-Friendly Tool Directory",
  description:
    "Discover and use 100 Free AI Tools for content, SEO, social media, and productivity. Fast, free, and scalable.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100`}>
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold sm:text-base">100 Free AI Tools</p>
            <DarkModeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
