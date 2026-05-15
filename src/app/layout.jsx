import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Merienda } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust - A Travel Booking Application",
  description: "A travel booking application built with Next.js, allowing users to explore and book their dream vacations with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${merienda.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>

        <main className="bg-slate-50">
          {children}
        </main>
        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
