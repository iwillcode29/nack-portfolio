import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NACK | Creative Developer Portfolio",
  description: "Mission Control - A portfolio showcasing creative development work. Building digital experiences at the intersection of design and technology.",
  keywords: ["developer", "portfolio", "creative", "web development", "react", "next.js"],
  authors: [{ name: "Nack" }],
  openGraph: {
    title: "NACK | Creative Developer Portfolio",
    description: "Mission Control - A portfolio showcasing creative development work.",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased scanlines noise-overlay">
        {children}
      </body>
    </html>
  );
}
