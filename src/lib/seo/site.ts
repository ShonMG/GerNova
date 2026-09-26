import type { Metadata } from "next";

export const SITE_NAME = "GerNova Digital Technologies";

export const SITE_URL = "https://gernova.net";

export const DEFAULT_DESCRIPTION =
  "GerNova Digital Technologies builds professional websites, mobile apps, automation agents, AI solutions, cloud systems, APIs and SEO strategies that help businesses grow.";

export const DEFAULT_KEYWORDS = [
  "GerNova Digital Technologies",
  "web development Kenya",
  "website development Kenya",
  "mobile app development Kenya",
  "business automation Kenya",
  "AI solutions Kenya",
  "cloud solutions Kenya",
  "API integration Kenya",
  "SEO Kenya",
  "digital solutions Kenya",
  "software development Kenya",
  "technology company Kenya",
];

export const DEFAULT_OG_IMAGE = "/images/gernova-og-image.png";

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "en_KE",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}