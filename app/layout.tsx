import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exterview",
  description: "AI interview intelligence demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
