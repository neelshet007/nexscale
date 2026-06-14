import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexScale | Website Development, Automation & AI Solutions",
  description: "NexScale helps businesses scale through website development, business automation, customer retention systems, AI solutions, trading technology, and digital transformation services.",
  metadataBase: new URL("https://nexscale.com"),
  alternates: {
    canonical: "https://nexscale.com",
  },
  openGraph: {
    title: "NexScale | Website Development, Automation & AI Solutions",
    description: "NexScale helps businesses scale through website development, business automation, customer retention systems, AI solutions, trading technology, and digital transformation services.",
    url: "https://nexscale.com",
    siteName: "NexScale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexScale | Website Development, Automation & AI Solutions",
    description: "NexScale helps businesses scale through website development, business automation, customer retention systems, AI solutions, trading technology, and digital transformation services.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexScale",
    "image": "https://nexscale.com/og-image.jpg",
    "description": "Premium technology agency specializing in custom software development, website development, business automation, and trading systems for businesses in India.",
    "url": "https://nexscale.com",
    "telephone": "+917709215976",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dadar",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0178",
      "longitude": "72.8478"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Mahad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Raigad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Maharashtra"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mumbai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "India"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/nexscale",
      "https://instagram.com/nexscale",
      "https://facebook.com/nexscale",
      "https://youtube.com/nexscale"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 selection:bg-violet-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
