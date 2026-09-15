import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";

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
        href: "#",
        isActive: true,
      },
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },    
      {
        title: "Team",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Awards",
        href: "#",
      },
    ];

export const metadata: Metadata = {
  title: "Website Development, Apps, AI & Digital Solutions | GerNova",
  description: "GerNova Digital Technologies builds professional websites, mobile apps, APIs, SEO strategies, automation, cloud and AI solutions that help businesses grow.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="relative">
          <Header navigationData={navigationData}/>
          {children}

        </div>
        
      </body>
    </html>
  );
}
