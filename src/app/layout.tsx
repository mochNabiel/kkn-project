import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mangesti Sejahtera",
  description: "Website Mangesti Sejahtera",
  icons: "/kabupaten-sukoharjo.png",
  authors: [
    {name: "ITB AAS KKN 2024"}
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased max-w-screen min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
