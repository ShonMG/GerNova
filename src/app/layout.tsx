import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigationData: NavigationSection[] = [
      {
        title: "Home",
        href: "/",
        isActive: true,
      },
      {
        title: "About us",
        href: "/about-us",
      },
      {
        title: "Services",
        href: "/services",
      },    
      {
        title: "Portfolio",
        href: "/portfolio",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Contact us",
        href: "/contact",
      },
    ];

export const metadata: Metadata = {
  metadataBase: new URL("https://gernova.net"),

  title: {
    default: "GerNova Digital Technologies | Digital Solutions for Modern Businesses",
    template: "%s | GerNova Digital Technologies",
  },

  description:
    "GerNova Digital Technologies builds websites, mobile apps, automation agents, AI solutions, cloud systems, APIs and SEO strategies that help businesses grow.",

  applicationName: "GerNova Digital Technologies",

  generator: "Next.js",

  keywords: [
    "GerNova Digital Technologies",
    "web development Kenya",
    "website development Kenya",
    "mobile app development Kenya",
    "business automation",
    "AI solutions Kenya",
    "cloud solutions Kenya",
    "API integration",
    "SEO Kenya",
    "digital growth",
    "software development Kenya",
  ],

  authors: [
    {
      name: "GerNova Digital Technologies",
      url: "https://gernova.net",
    },
  ],

  creator: "GerNova Digital Technologies",
  publisher: "GerNova Digital Technologies",

  category: "Technology",

  alternates: {
    canonical: "https://gernova.net",
    languages: {
      "en-KE": "https://gernova.net",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://gernova.net",
    siteName: "GerNova Digital Technologies",

    title:
      "GerNova Digital Technologies | Digital Solutions for Modern Businesses",

    description:
      "Websites, mobile apps, automation, AI, cloud, APIs and SEO solutions designed to help businesses grow.",

    images: [
      {
        url: "https://gernova.net/images/gernova-og-image.png",
        width: 1200,
        height: 630,
        alt: "GerNova Digital Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "GerNova Digital Technologies | Digital Solutions for Modern Businesses",

    description:
      "Websites, mobile apps, automation, AI, cloud, APIs and SEO solutions designed to help businesses grow.",

    images: ["https://gernova.net/images/gernova-og-image.png"],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <div className="relative">
          <Header navigationData={navigationData}/>
          {children}

        </div>
        
      </body>
    </html>
  );
}
