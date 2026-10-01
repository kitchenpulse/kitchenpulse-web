import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kitchenpulse.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
    template: "%s | Kitchen Pulse",
  },
  description:
    "One partner for restaurant & cloud kitchen setup — real estate, civil, HVAC, equipment, staffing & aggregator growth. Mumbai-based, pan-India. 25–30% cost savings.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Kitchen Pulse",
    title: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
    description:
      "One partner for restaurant & cloud kitchen setup — real estate, civil, HVAC, equipment, staffing & aggregator growth across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Pulse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
    description:
      "One partner for restaurant & cloud kitchen setup across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
