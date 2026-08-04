import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabKey Digital — Engineering Digital Advantage",
  description:
    "AI-first digital transformation for ambitious businesses. Enterprise platforms, intelligent automation and scalable digital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
