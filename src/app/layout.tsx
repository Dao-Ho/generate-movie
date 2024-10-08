import type { Metadata } from "next";
import Head from "next/head";
import { Manrope } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Generate Movies',
  description:
    'Watch your favorite movies! Generated by Dao Ho',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-Midnight h-full text-white">
      <body className={`${manrope.className} bg-Midnight h-full flex flex-col`}>
        <Navbar />
        <main className="bg-Midnight h-full flex-grow">{children}</main>
      </body>
    </html>
  );
}
