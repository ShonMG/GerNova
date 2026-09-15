import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Services from "@/components/shadcn-space/blocks/services-01/services";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01";

export default function page() {

  return(
    <div>
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Services />
      <Faq />
      <Portfolio />
      <Footer />
    </div>
  ); 
}
