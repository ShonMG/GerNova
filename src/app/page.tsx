import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Services from "@/components/shadcn-space/blocks/services-01/services";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title:
    "Gernova Digital Technologies | Web, AI & Digital Solutions for Modern Businesses",
  description:
    "GerNova Digital Technologies builds websites, mobile apps, automation agents, AI solutions, cloud systems, APIs and SEO strategies that help businesses attract customers, streamline operations and grow.",
  path: "/",
  keywords: [
    "web development Kenya",
    "mobile app development Kenya",
    "AI solutions Kenya",
    "business automation Kenya",
    "SEO Kenya",
    "digital solutions Kenya",
    "software development Kenya",
    "GerNova",
  ],
});

export default function page() {

  return(
    <div>
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  ); 
}
