import type { Metadata } from "next";
import { Playfair_Display, Bebas_Neue, Plus_Jakarta_Sans, Cormorant_Garamond, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const kleinCondensed = localFont({
  src: "../../public/fonts/klein/Klein-Condensed-ExtraBold-trial.ttf",
  variable: "--font-klein",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const bebas = Bebas_Neue({
  variable: "--font-condensed",
  weight: "400",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mazevisual.com"),
  title: {
    default: "Maze Visual — One Studio. Endless Possibilities.",
    template: "%s | Maze Visual",
  },
  description: "Maze Visual is a premier creative studio specializing in Branding, Architecture, Digital, Visualization, and Interior Design.",
  keywords: [
    "Maze Visual",
    "creative studio",
    "branding agency",
    "architecture studio",
    "interior design",
    "3D visualization",
    "digital experiences",
    "web architecture",
    "Pune design studio",
  ],
  authors: [{ name: "Maze Visual", url: "https://www.mazevisual.com" }],
  creator: "Maze Visual",
  publisher: "Maze Visual",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/mazevisualfavicon.avif", type: "image/avif" },
      { url: "/mazevisuallogo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/mazevisuallogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Maze Visual — One Studio. Endless Possibilities.",
    description: "Premier creative studio specializing in Branding, Architecture, Digital, Visualization, and Interior Design.",
    url: "https://www.mazevisual.com",
    siteName: "Maze Visual",
    images: [
      {
        url: "/mazevisuallogo.png",
        width: 1200,
        height: 1200,
        alt: "Maze Visual Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maze Visual — One Studio. Endless Possibilities.",
    description: "Premier creative studio specializing in Branding, Architecture, Digital, Visualization, and Interior Design.",
    images: ["/mazevisuallogo.png"],
    creator: "@mazevisual",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.mazevisual.com/#organization",
      "name": "Maze Visual",
      "url": "https://www.mazevisual.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mazevisual.com/mazevisuallogo.png",
        "contentUrl": "https://www.mazevisual.com/mazevisuallogo.png",
        "caption": "Maze Visual Logo",
      },
      "image": "https://www.mazevisual.com/mazevisuallogo.png",
      "description": "Premier creative studio specializing in Branding, Architecture, Digital, Visualization, and Interior Design.",
      "email": "sdulawat.work@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mazevisual.com/#website",
      "url": "https://www.mazevisual.com",
      "name": "Maze Visual",
      "publisher": {
        "@id": "https://www.mazevisual.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${bebas.variable} ${jakarta.variable} ${cormorant.variable} ${interTight.variable} ${kleinCondensed.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/mazevisualfavicon.avif" type="image/avif" />
        <link rel="icon" href="/mazevisuallogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
