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
  description:
    "Welcome to Neel and Jasifa’s Wedding Website! We are beyond excited to have you with us as we celebrate the love we've found in each other and the incredible blessing of having family and friends like you by our side. This website is your one-stop shop for all the details you’ll need to join us in making this day unforgettable—from the wedding schedule to RSVP instructions. We are so grateful for the support, joy, and memories you bring into our lives. Your presence means the world to us, and we can’t wait to celebrate this special chapter with you. Thank you for being part of our journey. We can’t wait to share this beautiful moment with you!",
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
