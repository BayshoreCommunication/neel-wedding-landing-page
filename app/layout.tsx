import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "N and J",
  description: "Welcome to Neel and Jasifa’s Wedding Website!",
  metadataBase: new URL("https://www.neelandjasifa.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-white text-secondary pt-6 px-[1rem] md:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[10rem]"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth font-poppinsRegular `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
