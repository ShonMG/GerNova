"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Globe2,
  Smartphone,
  ShoppingCart,
  Workflow,
  BrainCircuit,
  Search,
  Cloud,
  ShieldCheck,
  Zap,
  HelpCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

const websitePlans = [
  {
    name: "Launch",
    price: "KSh 35,000",
    description:
      "A professional digital presence for startups, professionals and small businesses ready to get online.",
    popular: false,
    features: [
      "Up to 5 pages",
      "Premium responsive design",
      "Mobile-first experience",
      "Contact & enquiry forms",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic on-page SEO",
      "Google Analytics setup",
      "Social media integration",
      "30 days post-launch support",
    ],
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "Growth",
    price: "KSh 75,000",
    description:
      "A conversion-focused website for businesses that need more leads, stronger branding and better visibility.",
    popular: true,
    features: [
      "Up to 10 custom pages",
      "Custom UI/UX design",
      "Conversion-focused layouts",
      "Advanced contact forms",
      "WhatsApp lead integration",
      "Blog / resources section",
      "Technical SEO foundation",
      "Schema markup",
      "Google Analytics & Search Console",
      "Performance optimisation",
      "Basic content guidance",
      "90 days post-launch support",
    ],
    accent: "from-purple-500/20 to-orange-500/10",
  },
  {
    name: "Scale",
    price: "KSh 150,000+",
    description:
      "A sophisticated digital platform for established businesses that need advanced functionality and integrations.",
    popular: false,
    features: [
      "Custom website architecture",
      "Advanced UI/UX",
      "Unlimited core pages",
      "CMS / dynamic content",
      "Advanced forms & workflows",
      "CRM integrations",
      "API integrations",
      "Advanced SEO architecture",
      "Conversion tracking",
      "Advanced analytics",
      "Performance & security optimisation",
      "90 days post-launch support",
    ],
    accent: "from-orange-500/15 to-purple-500/15",
  },
];

const services = [
  {
    icon: Globe2,
    title: "Business Websites",
    price: "From KSh 35,000",
    description:
      "Modern, responsive websites designed around your brand, customers and business objectives.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    price: "From KSh 120,000",
    description:
      "Online stores with product management, payments, customer journeys and business integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    price: "From KSh 150,000",
    description:
      "Custom Android, iOS or cross-platform applications for customer and internal business use.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    price: "From KSh 50,000",
    description:
      "Automate repetitive processes, notifications, approvals, reporting and customer workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    price: "From KSh 50,000",
    description:
      "AI assistants, intelligent workflows, business knowledge systems and AI-powered experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & APIs",
    price: "From KSh 75,000",
    description:
      "Cloud infrastructure, APIs, third-party integrations and scalable digital systems.",
  },
];

const growthPlans = [
  {
    name: "Starter SEO",
    price: "KSh 20,000",
    period: "/ month",
    description: "For small businesses targeting local visibility.",
    features: [
      "SEO audit",
      "Technical SEO fixes",
      "On-page optimisation",
      "Local SEO setup",
      "Keyword tracking",
      "Monthly report",
    ],
  },
  {
    name: "Growth SEO",
    price: "KSh 40,000",
    period: "/ month",
    description: "For businesses actively competing for search traffic.",
    features: [
      "Everything in Starter",
      "Expanded keyword strategy",
      "Content optimisation",
      "Content recommendations",
      "Competitor analysis",
      "Technical monitoring",
      "Monthly strategy review",
    ],
  },
  {
    name: "Scale SEO",
    price: "KSh 80,000+",
    period: "/ month",
    description: "For competitive brands and multi-location businesses.",
    features: [
      "Everything in Growth",
      "Advanced technical SEO",
      "Content strategy",
      "Authority building",
      "Advanced competitor research",
      "Conversion optimisation",
      "Advanced reporting",
    ],
  },
];

const addOns = [
  ["Additional website page", "From KSh 5,000"],
  ["M-Pesa integration", "From KSh 15,000"],
  ["Booking / appointment system", "From KSh 15,000"],
  ["Advanced lead-generation form", "From KSh 7,500"],
  ["Business email setup", "From KSh 5,000"],
  ["Google Business Profile setup", "From KSh 7,500"],
  ["Website maintenance", "From KSh 7,500/mo"],
  ["AI chatbot", "From KSh 25,000"],
];

const faqs = [
  {
    question: "Why doesn't GerNova have one fixed price for everything?",
    answer:
      "Digital products are not all the same. A five-page business website and a platform connected to M-Pesa, a CRM and an internal database require very different levels of design, engineering and testing. Our prices therefore provide clear starting points while complex projects are scoped individually.",
  },
  {
    question: "Do I have to pay the full amount upfront?",
    answer:
      "No. Website and software projects can be divided into milestones. A typical project may use an initial deposit, a design/build milestone and a final payment before launch. The exact payment schedule is agreed in the proposal.",
  },
  {
    question: "Do your prices include domain and hosting?",
    answer:
      "Domain, hosting, premium third-party services and other external costs can be included where appropriate, but they are normally listed separately so you can clearly see what you are paying for.",
  },
  {
    question: "Can I start with a smaller package and upgrade later?",
    answer:
      "Yes. GerNova solutions are designed to evolve. You can launch with a focused website and later add e-commerce, automation, AI, integrations, analytics or other capabilities.",
  },
  {
    question: "Do you work with businesses outside Nairobi?",
    answer:
      "Yes. GerNova can work remotely with businesses throughout Kenya and internationally.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-4 py-2"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Transparent Kenyan Pricing
              </Badge>

              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Technology that fits your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                  ambition.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                From your first professional website to a complete digital
                platform, GerNova creates technology around your business
                goals, customers and growth plans.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="/contact" className="flex items-center gap-4"> 
                        <span>Get a Free Digital Audit</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="#plans" className="flex items-center gap-4"> 
                    <span>View Packages</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEBSITE PLANS */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full">
            Website Packages
          </Badge>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Start where your business is.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Choose a starting point and scale your digital presence as your
            business grows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {websitePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="h-full"
            >
              <Card
                className={`relative h-full overflow-hidden rounded-3xl border ${
                  plan.popular
                    ? "border-orange-500/50 shadow-2xl shadow-orange-500/10"
                    : ""
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${plan.accent}`}
                />

                {plan.popular && (
                  <div className="absolute right-5 top-5">
                    <Badge className="rounded-full bg-orange-500 text-white hover:bg-orange-500">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="relative flex h-full flex-col p-8">
                  <p className="text-sm font-medium text-muted-foreground">
                    {plan.name}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {plan.price}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="my-7 h-px bg-border" />

                  <p className="mb-4 text-sm font-semibold">
                    What's included
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                  <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="/contact" className="flex items-center gap-4"> 
                        <span>Discuss This Package</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Prices are starting points. Final pricing depends on scope,
          functionality, content, integrations and project complexity.
        </p>
      </section>

      {/* SERVICES */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 rounded-full">
              Beyond Websites
            </Badge>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Build more than a website.
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              GerNova combines design, software engineering, automation, AI
              and cloud technology to create connected digital systems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-7">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-2 font-medium text-orange-500">
                        {service.price}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>

                      <a
                        href="/contact"
                        className="mt-6 inline-flex items-center text-sm font-medium hover:underline"
                      >
                        Discuss your project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge variant="outline" className="rounded-full">
              <Search className="mr-2 h-4 w-4" />
              SEO & Digital Growth
            </Badge>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Keep growing after launch.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Your website should not become a digital brochure that nobody
              finds. Our ongoing growth packages focus on search visibility,
              technical health, content and measurable improvements.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-orange-500" />
              Monthly reporting and measurable work
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {growthPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Card className="h-full rounded-3xl">
                  <CardContent className="p-7">
                    <p className="text-sm font-medium text-muted-foreground">
                      {plan.name}
                    </p>

                    <div className="mt-3 flex items-baseline">
                      <span className="text-2xl font-semibold">
                        {plan.price}
                      </span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>

                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="my-6 h-px bg-border" />

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDONS */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="rounded-full">
              Flexible Add-ons
            </Badge>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Add what you need.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              You don't need to pay for functionality you aren't ready for.
              Add individual capabilities to your project as required.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border bg-background">
            {addOns.map(([name, price], index) => (
              <div
                key={name}
                className={`flex items-center justify-between gap-6 px-6 py-5 ${
                  index !== addOns.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-sm font-medium">{name}</span>

                <span className="whitespace-nowrap text-sm font-semibold text-orange-500">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-foreground px-8 py-14 text-background sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <Badge
                variant="outline"
                className="border-background/20 text-background"
              >
                <Zap className="mr-2 h-4 w-4" />
                Custom Digital Systems
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a bigger digital idea?
              </h2>

              <p className="mt-5 text-lg leading-8 text-background/70">
                Build a custom platform, business management system, SaaS
                product, marketplace, AI solution or connected ecosystem
                around your exact requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Custom platforms",
                  "SaaS products",
                  "Business systems",
                  "APIs",
                  "AI solutions",
                  "Cloud infrastructure",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-background/15 bg-background/5 px-4 py-2 text-sm text-background/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:text-right">
              <p className="text-sm text-background/60">Projects starting from</p>

              <p className="mt-2 text-4xl font-semibold">
                KSh 250,000+
              </p>

              <Button className="group mt-12 text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                <a href="/contact" className="flex items-center gap-4"> 
                <span>Request a Custom Quote</span> 
                <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                    <ArrowUpRight size={16} /> 
                </div> 
                </a> 
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="rounded-full">
              Simple Process
            </Badge>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              No pricing surprises.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We scope the work before development begins so you understand
              what you're paying for.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Discover", "Tell us about your business and goals."],
              ["02", "Scope", "We define features, pages and integrations."],
              ["03", "Build", "Design and development happen in milestones."],
              ["04", "Launch", "We test, deploy and support your launch."],
            ].map(([number, title, description]) => (
              <Card key={number} className="rounded-3xl">
                <CardContent className="p-7">
                  <span className="text-sm font-semibold text-orange-500">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="rounded-full">
            <HelpCircle className="mr-2 h-4 w-4" />
            Pricing FAQ
          </Badge>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            Questions before you start?
          </h2>
        </div>

        <div className="mt-12 divide-y rounded-3xl border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold">
                {faq.question}
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-orange-500" />

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Not sure which package fits?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Tell us what you want to build. We'll help you identify the right
            scope and provide a clear proposal based on your actual needs.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                <a href="/contact" className="flex items-center gap-4"> 
                    <span>Get a Free Digital Audit</span>
                    <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                    <ArrowUpRight size={16} /> 
                    </div>
                </a> 
            </Button>

            <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                <a href="/services" className="flex items-center gap-4"> 
                <span>Explore Our Services</span> 
                <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                    <ArrowUpRight size={16} /> 
                </div> 
                </a> 
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Serving businesses across Kenya and beyond.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}