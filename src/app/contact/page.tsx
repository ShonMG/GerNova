import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import WhyGerNova from "@/components/contact/WhyGerNova";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createMetadata({
  title: "Contact GerNova Digital Technologies | Web, AI & Digital Solutions",
  description:
    "Contact GerNova Digital Technologies for website development, mobile apps, business automation, AI solutions, cloud systems, API integrations and SEO services.",
  path: "/contact",
  keywords: [
    "contact GerNova",
    "GerNova Digital Technologies contact",
    "web development Kenya",
    "software development Kenya",
    "AI solutions Kenya",
    "business automation Kenya",
    "SEO services Kenya",
    "AI solutions Kenya",
    "API development Kenya",
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <ContactFormSection />
      <WhyGerNova />
      <ContactOptions />
      <ContactCTA />
      <Footer />
    </main>
  );
}