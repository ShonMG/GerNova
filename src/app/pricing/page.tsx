import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

import HeroSection from "@/components/pricing/hero-section";
import WebsitePlansSection from "@/components/pricing/website-plans-section";
import ServicesSection from "@/components/pricing/services-section";
import SeoSection from "@/components/pricing/seo-section";
import AddonsSection from "@/components/pricing/addons-section";
import CustomSystemsSection from "@/components/pricing/custom-systems-section";
import ProcessSection from "@/components/pricing/process-section";
import FaqSection from "@/components/pricing/faq-section";
import FinalCtaSection from "@/components/pricing/final-cta-section";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title: "Website, App & Digital Solution Pricing",
  description:
    "Explore GerNova Digital Technologies pricing for websites, e-commerce, mobile apps, business automation, AI solutions, cloud systems and SEO services.",
  path: "/pricing",
  keywords: [
    // Brand
    "GerNova Digital Technologies",
    "GerNova pricing",
    "GerNova services pricing",
    "GerNova Kenya",

    // Pricing intent
    "website development prices Kenya",
    "web development pricing Kenya",
    "website design prices Kenya",
    "software development prices Kenya",
    "mobile app development prices Kenya",
    "mobile app development cost Kenya",
    "website development cost Kenya",
    "business automation pricing Kenya",
    "AI development cost Kenya",
    "AI solutions pricing Kenya",
    "SEO pricing Kenya",
    "SEO services cost Kenya",
    "API development cost Kenya",
    "cloud solutions pricing Kenya",
    "software development cost Kenya",
    "digital marketing pricing Kenya",

    // Service intent
    "web development company Kenya",
    "website development company Kenya",
    "mobile app development Kenya",
    "business automation Kenya",
    "AI solutions Kenya",
    "cloud solutions Kenya",
    "API integration Kenya",
    "SEO services Kenya",
    "digital solutions Kenya",

    // Local intent
    "web development Nairobi",
    "website development Nairobi",
    "mobile app development Nairobi",
    "software development Nairobi",
    "business automation Nairobi",
    "AI solutions Nairobi",
    "SEO services Nairobi",

    // National intent
    "affordable web development Kenya",
    "affordable website development Kenya",
    "technology solutions for businesses Kenya",
    "digital solutions for businesses Kenya",
    "custom software development Kenya",
    "custom digital solutions Kenya",
  ],
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WebsitePlansSection />
      <ServicesSection />
      <SeoSection />
      <AddonsSection />
      <CustomSystemsSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}