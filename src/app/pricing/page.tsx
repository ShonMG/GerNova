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
    "website development prices Kenya",
    "website development cost Kenya",
    "mobile app development cost Kenya",
    "software development pricing Kenya",
    "SEO pricing Kenya",
    "business automation cost Kenya",
    "AI development cost Kenya",
    "GerNova pricing",
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