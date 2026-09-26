import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Capabilities from "@/components/about/Capabilities";
import Approach from "@/components/about/Approach";
import TechnologyPhilosophy from "@/components/about/TechnologyPhilosophy";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title: "About GerNova Digital Technologies | Web, AI & Digital Solutions",
  description:
    "Learn about GerNova Digital Technologies a Kenya-based company, our mission, values, capabilities and approach to building websites, apps, automation, AI and digital solutions for businesses.",
  path: "/about-us",
  keywords: [
    "about GerNova",
    "GerNova Digital Technologies",
    "technology company Kenya",
    "software company Kenya",
    "digital agency Kenya",
    "web development company Kenya",
    "mobile app development Kenya",
    "business automation Kenya",
    "AI solutions Kenya",
    "API development Kenya",
    "cloud solutions Kenya",
    "SEO services Kenya",
    "website development Kenya",
    "web development Nairobi",
  ],
});

export default function AboutUsPage() {
  return (
    <main id="about" className="relative overflow-hidden bg-background">
      <AboutHero />
      <AboutStats />
      <OurStory />
      <MissionVision />
      <Values />
      <Capabilities />
      <Approach />
      <TechnologyPhilosophy />
      <AboutCTA />
      <Footer />
    </main>
  );
}