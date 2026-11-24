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
  title: "NexScale | Helping Businesses Scale Through Technology",
  description:
    "NexScale engineers custom software, integrated business systems, automation, APIs, cloud infrastructure, and DevOps to help businesses operate smarter and scale.",
  metadataBase: new URL("https://nexscale.com"),
  alternates: {
    canonical: "https://nexscale.com",
  },
  openGraph: {
    title: "NexScale | Helping Businesses Scale Through Technology",
    description:
      "Custom software development, business management systems (ERP, CRM, HRM), workflow automation, APIs, and cloud infrastructure.",
    url: "https://nexscale.com",
    siteName: "NexScale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexScale | Helping Businesses Scale Through Technology",
    description:
      "Custom software development, business management systems, workflow automation, APIs, and cloud infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for LocalBusiness / ProfessionalService
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexScale",
    "image": "https://nexscale.com/og-image.jpg",
    "description":
      "Technology solutions and custom software engineering company specializing in business management systems, web applications, workflow automation, APIs, and cloud infrastructure.",
    "url": "https://nexscale.com",
    "telephone": "+917709215976",
    "email": "nexscale7@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dadar",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400014",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/nexscale",
      "https://www.instagram.com/nexscale77",
      "https://www.facebook.com/share/1jfjBviydp/",
      "https://youtube.com/@nexscale77"
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#030712] text-[#f3f4f6] antialiased">
        {children}
      </body>
    </html>
  );
}
