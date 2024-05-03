import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Renuka Prasad Portfolio | Full Stack Web Developer",
  description:
    "Renuka is a full stack web developer with 2+ years of experience working on enterprise projects with big MNCs and US clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-poppins`}>{children}</body>
    </html>
  );
}
