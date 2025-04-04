import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google"; // Import Cormorant Garamond

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"], // Select the weights you need
  style: ["normal", "italic"], // Optional: add italic if needed
  variable: "--font-serif", // Variable for serif font
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hacienda La Palma",
  description: "Costa Rica Luxury Vacation Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
