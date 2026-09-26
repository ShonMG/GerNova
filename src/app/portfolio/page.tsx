import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioOverview from "@/components/portfolio/PortfolioOverview";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
import PortfolioProcess from "@/components/portfolio/PortfolioProcess";
import PortfolioPrinciples from "@/components/portfolio/PortfolioPrinciples";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

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