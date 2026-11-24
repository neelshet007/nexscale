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
  title: "NexScale — Custom Software Engineering & Technology Consulting",
  description:
    "NexScale is a premier technology solutions and software engineering company. We engineer custom web applications, business management systems (ERP, CRM, HRM), workflow automation, REST APIs, and scalable cloud infrastructure.",
  metadataBase: new URL("https://www.teamnexscale.com"),
  alternates: {
    canonical: "https://www.teamnexscale.com",
  },
  keywords: [
    "NexScale",
    "teamnexscale",
    "custom software development",
    "business automation systems",
    "CRM software India",
    "ERP software solutions",
    "REST API development",
    "cloud deployment services",
    "DevOps consulting Mumbai",
    "software engineering company",
    "technology solutions",
    "algorithmic trading software",
    "custom web applications Mumbai",
    "enterprise workflow automation",
    "full stack engineering"
  ],
  authors: [{ name: "NexScale", url: "https://www.teamnexscale.com" }],
  creator: "NexScale",
  publisher: "NexScale",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ]
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
  openGraph: {
    title: "NexScale — Custom Software Engineering & Technology Consulting",
    description:
      "Helping Businesses Scale Through Technology. We build custom software, connect business operations, automate workflows, and engineer reliable digital infrastructure.",
    url: "https://www.teamnexscale.com",
    siteName: "NexScale",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "NexScale — Built on Trust. Driven by Technology.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexScale — Custom Software Engineering & Technology Consulting",
    description:
      "Custom software development, business management systems, workflow automation, APIs, and cloud infrastructure. Built on Trust. Driven by Technology.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Structured Data (JSON-LD) for LocalBusiness, Organization & ProfessionalService
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.teamnexscale.com/#organization",
        "name": "NexScale",
        "url": "https://www.teamnexscale.com",
        "logo": "https://www.teamnexscale.com/icon.svg",
        "slogan": "Built on Trust. Driven by Technology.",
        "description": "Technology solutions and custom software engineering company specializing in business management systems, web applications, workflow automation, APIs, and cloud infrastructure.",
        "telephone": "+919356626189",
        "email": "neelshet@teamnexscale.com",
        "sameAs": [
          "https://linkedin.com/company/nexscale",
          "https://www.instagram.com/nexscale77",
          "https://www.facebook.com/share/1jfjBviydp/",
          "https://youtube.com/@nexscale77"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919356626189",
          "contactType": "customer service",
          "areaServed": ["IN", "US", "GB", "AE"],
          "availableLanguage": ["English", "Hindi", "Marathi"]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.teamnexscale.com/#service",
        "name": "NexScale Technology Consulting",
        "url": "https://www.teamnexscale.com",
        "image": "https://www.teamnexscale.com/icon.svg",
        "telephone": "+919356626189",
        "priceRange": "$$",
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "NexScale Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications",
                "description": "Full-stack web engineering, business portals, and database-driven digital platforms."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Systems & Automation",
                "description": "Custom CRM, ERP, HRM, and lead management systems connecting sales and operations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Development",
                "description": "REST APIs, backend microservices, third-party integrations, and database architecture."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Deployment",
                "description": "Managed cloud hosting, VPS infrastructure hardening, and auto-scaling setups."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DevOps, Cloud & Cybersecurity",
                "description": "CI/CD automation, Docker containerization, system observability, and infrastructure security."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.teamnexscale.com/#website",
        "url": "https://www.teamnexscale.com",
        "name": "NexScale",
        "publisher": {
          "@id": "https://www.teamnexscale.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
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
