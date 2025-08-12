import type { Metadata } from "next";
import {
  Poppins,
  Open_Sans,
  Roboto,
  Plus_Jakarta_Sans,
  Raleway,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "TechTots International School",
  description:
    "Nurturing young innovators through technology-infused early education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} font-sans`}
    >
      <body className="min-h-screen relative">
        <Navbar />
        <main className="flex-grow h-full bg-white">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
