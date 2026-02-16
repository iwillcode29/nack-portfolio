import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NACK | Creative Frontend Developer",
  description:
    "Portfolio of Nack — A frontend developer crafting beautiful digital experiences at the intersection of design and technology.",
  keywords: [
    "developer",
    "portfolio",
    "frontend",
    "web development",
    "react",
    "next.js",
    "vue.js",
  ],
  authors: [{ name: "Nack" }],
  openGraph: {
    title: "NACK | Creative Frontend Developer",
    description:
      "Portfolio of Nack — Crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased grain">{children}</body>
    </html>
  );
}
