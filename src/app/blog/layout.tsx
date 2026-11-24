import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | NexScale",
  description:
    "Technical case studies, architectural breakdowns, and strategic guides on custom software engineering, business automation, and scalable cloud infrastructure.",
  alternates: {
    canonical: "https://www.teamnexscale.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | NexScale",
    description:
      "Technical case studies, architectural breakdowns, and strategic guides on custom software engineering and business automation.",
    url: "https://www.teamnexscale.com/blog",
    images: [
      {
        url: "https://www.teamnexscale.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexScale Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Technical Insights | NexScale",
    description:
      "Technical case studies and guides on software engineering and business automation.",
    images: ["https://www.teamnexscale.com/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
