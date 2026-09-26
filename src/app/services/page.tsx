import HeroSection from "@/components/services/hero-section";
import CapabilitiesSection from "@/components/services/capabilities-section";
import ServicesSection from "@/components/services/services-section";
import OutcomesSection from "@/components/services/outcomes-section";
import ProcessSection from "@/components/services/process-section";
import CombinationsSection from "@/components/services/combinations-section";
import CtaSection from "@/components/services/cta-section";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title: "Web Development, AI, Automation & Digital Services",
  description:
    "Explore GerNova Digital Technologies services including web development, mobile apps, AI solutions, business automation, cloud solutions, API integrations and SEO & digital growth.",
  path: "/services",
  keywords: [
    "web development services Kenya",
    "mobile app development Kenya",
    "AI development Kenya",
    "business automation Kenya",
    "cloud solutions Kenya",
    "API integration Kenya",
    "SEO services Kenya",
    "digital marketing Kenya",
  ],
});

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <CapabilitiesSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <CombinationsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}