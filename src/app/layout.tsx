

import type { Metadata } from "next";
import localFont from 'next/font/local';

const gilroyDisplay = localFont({ src: '../../public/Gilroy-Medium.woff2', variable: '--font-display' });
const gilroy = localFont({ src: '../../public/Gilroy-Medium.woff2', variable: '--font-sans' });
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AuroraBg from "@/components/ui/AuroraBg";
import ParticleSystem from "@/components/ui/ParticleSystem";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: {
    default: "Maxora Tech Solutions | Premium Luxury Digital Solutions Agency",
    template: "%s | Maxora Tech Solutions",
  },
  description:
    "We craft elite digital experiences that drive exponential growth. Specialists in Custom Next.js Apps, Shopify & WordPress development, Branding, Digital Marketing, and high-conversion Creative Design.",
  keywords: [
    "Digital Agency",
    "Luxury Web Design",
    "Custom Web Development",
    "WordPress Development",
    "Shopify Development",
    "Branding",
    "Digital Marketing",
    "Social Media Management",
    "Poster Design",
    "Enterprise UI/UX Design",
    "Next.js Developer India",
  ],
  authors: [{ name: "Maxora Tech Solutions", url: "https://maxoratech.com" }],
  creator: "Maxora Tech Solutions",
  publisher: "Maxora Tech Solutions",
  metadataBase: new URL("https://maxoratech.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxoratech.com",
    title: "Maxora Tech Solutions | Premium Luxury Digital Solutions Agency",
    description:
      "Elite website design, branding, and digital marketing engineered for exponential business growth.",
    siteName: "Maxora Tech Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxora Tech Solutions Agency Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxora Tech Solutions | Premium Digital Agency",
    description:
      "Elite website design, branding, and digital marketing engineered for exponential business growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`h-full scroll-smooth ${gilroy.variable} ${gilroyDisplay.variable}`}
    >
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-[#B03DFF]/30 selection:text-[#D9B3FF] relative">
        <Preloader />
        <AuroraBg />
        <ParticleSystem />
        <Navbar />
        <main className="flex-grow relative z-10 pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
