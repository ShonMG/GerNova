import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioOverview from "@/components/portfolio/PortfolioOverview";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
import PortfolioProcess from "@/components/portfolio/PortfolioProcess";
import PortfolioPrinciples from "@/components/portfolio/PortfolioPrinciples";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title: "Digital Projects & Portfolio",
  description:
    "Explore GerNova Digital Technologies projects covering websites, mobile applications, business automation, AI solutions, APIs, cloud systems and connected digital products.",
  path: "/portfolio",
  keywords: [
    "GerNova portfolio",
    "web development portfolio Kenya",
    "mobile app portfolio Kenya",
    "AI projects Kenya",
    "business automation projects",
    "digital products Kenya",
    "software projects Kenya",
  ],
});

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <PortfolioHero />
      <PortfolioOverview />
      <FeaturedProjects />
      <ProjectOutcomes />
      <PortfolioProcess />
      <PortfolioPrinciples />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}