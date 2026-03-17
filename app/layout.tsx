import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cody Dynamics",
  description:
    "Technology consulting and platform engineering for modern businesses.",
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