"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  PlugZap,
  SearchCheck,
  Smartphone,
  Workflow,
  Zap,
  ShieldCheck,
  BarChart3,
  Users,
  Settings2,
  Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

type Service = {
  number: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  accent: string;
  accentBg: string;
  deliverables: string[];
  idealFor: string[];
};

const services: Service[] = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Development",
    shortDescription:
      "Fast, responsive and scalable websites that turn your digital presence into a powerful business tool.",
    description:
      "We design and develop modern websites that combine strong visual design, intuitive user experiences and reliable technology. Whether you need a corporate website, business platform, landing page or custom web application, we build digital experiences around your business objectives.",
    image: "/images/web_development.png",
    accent: "text-orange-500",
    accentBg: "bg-orange-500/10",
    deliverables: [
      "Corporate & business websites",
      "Landing pages",
      "Custom web applications",
      "E-commerce experiences",
      "CMS-powered websites",
      "Responsive UI development",
      "Website redesigns",
      "Performance optimization",
    ],
    idealFor: [
      "Growing businesses",
      "Startups",
      "Professional firms",
      "Organizations",
      "E-commerce businesses",
    ],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    shortDescription:
      "Modern mobile applications designed to help businesses engage customers and deliver better digital experiences.",
    description:
      "We create mobile applications that make products, services and business processes accessible wherever your customers and teams are. From customer-facing applications to internal business tools, our approach focuses on usability, performance and scalability.",
    image: "/images/services/mobile-apps.jpg",
    accent: "text-purple-500",
    accentBg: "bg-purple-500/10",
    deliverables: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "Customer portals",
      "Business management apps",
      "Mobile dashboards",
      "API-connected applications",
      "Application maintenance",
    ],
    idealFor: [
      "Startups",
      "Service businesses",
      "Financial organizations",
      "Education platforms",
      "Customer-facing businesses",
    ],
  },
  {
    number: "03",
    icon: PlugZap,
    title: "APIs & Integrations",
    shortDescription:
      "Connect your systems, platforms and third-party services with reliable APIs and seamless integrations.",
    description:
      "Modern businesses rely on multiple digital systems. We help those systems communicate with each other through APIs and integrations, reducing manual work, improving data flow and creating a more connected technology environment.",
    image: "/images/services/api-integration.jpg",
    accent: "text-blue-500",
    accentBg: "bg-blue-500/10",
    deliverables: [
      "REST API development",
      "Third-party API integrations",
      "Payment integrations",
      "CRM integrations",
      "Database integrations",
      "Authentication systems",
      "Webhook integrations",
      "System-to-system connectivity",
    ],
    idealFor: [
      "Digital businesses",
      "SaaS companies",
      "Financial platforms",
      "Organizations with multiple systems",
      "Businesses replacing manual processes",
    ],
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "SEO & Digital Growth",
    shortDescription:
      "Improve your visibility, attract qualified visitors and grow your business through data-driven SEO strategies.",
    description:
      "A great website needs to be discoverable. GerNova combines technical SEO, content structure, website performance and digital growth strategies to help businesses build a stronger presence across search engines and digital channels.",
    image: "/images/services/seo.jpg",
    accent: "text-teal-500",
    accentBg: "bg-teal-500/10",
    deliverables: [
      "Technical SEO",
      "On-page SEO",
      "Website performance optimization",
      "Keyword research",
      "SEO content structure",
      "Local SEO foundations",
      "Search visibility analysis",
      "Digital performance reporting",
    ],
    idealFor: [
      "Local businesses",
      "Professional services",
      "E-commerce brands",
      "Startups",
      "Businesses launching new websites",
    ],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Business Automation",
    shortDescription:
      "Automate repetitive workflows and connect your business processes so your team can focus on what matters.",
    description:
      "We identify repetitive processes that consume time and turn them into streamlined digital workflows. From notifications and data processing to approvals, customer onboarding and internal operations, automation can help your team work more efficiently.",
    image: "/images/services/automation.jpg",
    accent: "text-red-500",
    accentBg: "bg-red-500/10",
    deliverables: [
      "Workflow automation",
      "Form & data automation",
      "Email automation",
      "Notification systems",
      "Approval workflows",
      "Customer onboarding flows",
      "Document processing",
      "Business process integrations",
    ],
    idealFor: [
      "Operations teams",
      "Growing businesses",
      "Service companies",
      "Organizations with repetitive workflows",
      "Businesses managing large amounts of data",
    ],
  },
  {
    number: "06",
    icon: Cloud,
    title: "Cloud Solutions",
    shortDescription:
      "Secure, scalable cloud infrastructure and applications built to support growing digital businesses.",
    description:
      "We help businesses move applications and workloads into reliable cloud environments. Our approach focuses on scalability, availability, performance and practical infrastructure that supports your technology without unnecessary complexity.",
    image: "/images/services/cloud-solutions.jpg",
    accent: "text-sky-500",
    accentBg: "bg-sky-500/10",
    deliverables: [
      "Cloud application deployment",
      "Cloud infrastructure setup",
      "Application hosting",
      "Database deployment",
      "Cloud migrations",
      "Environment configuration",
      "Deployment workflows",
      "Performance optimization",
    ],
    idealFor: [
      "Startups",
      "Web applications",
      "Growing digital businesses",
      "Organizations modernizing infrastructure",
      "Teams moving from traditional hosting",
    ],
  },
  {
    number: "07",
    icon: BrainCircuit,
    title: "AI Solutions",
    shortDescription:
      "Practical AI solutions that help businesses automate decisions, improve customer experiences and work smarter.",
    description:
      "We help businesses identify practical opportunities for artificial intelligence. Rather than adding AI for the sake of it, we focus on solutions that can improve productivity, customer interactions, information processing and business decision-making.",
    image: "/images/services/ai-solutions.jpg",
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    deliverables: [
      "AI-powered assistants",
      "Intelligent search",
      "Document analysis",
      "AI workflow automation",
      "Customer support solutions",
      "AI integrations",
      "Business intelligence workflows",
      "AI prototypes & MVPs",
    ],
    idealFor: [
      "Forward-looking businesses",
      "Customer service teams",
      "Knowledge-intensive organizations",
      "Digital platforms",
      "Businesses exploring AI adoption",
    ],
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "Turn ideas into reliable digital products through thoughtful design and modern development.",
  },
  {
    icon: Layers3,
    title: "Digital Platforms",
    description:
      "Build connected platforms that bring customers, teams, data and business processes together.",
  },
  {
    icon: Settings2,
    title: "Process Optimization",
    description:
      "Identify opportunities to simplify operations through integrations and automation.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Technology",
    description:
      "Introduce practical AI capabilities where they can create measurable business value.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, challenges and objectives before recommending technology.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We translate your goals into a clear technical direction, scope and implementation roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive experiences and interfaces designed around how your customers and teams actually work.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the solution using modern technologies with attention to performance, security and scalability.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy, test and prepare your digital product for real-world users and business operations.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "We continuously improve your technology as your business, customers and opportunities change.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Built for performance",
    description:
      "We prioritize responsive experiences, efficient architecture and technology that can support growth.",
  },
  {
    icon: ShieldCheck,
    title: "Designed with reliability in mind",
    description:
      "Our solutions are structured to provide dependable experiences for customers and internal teams.",
  },
  {
    icon: BarChart3,
    title: "Focused on business outcomes",
    description:
      "Technology decisions are connected to practical business objectives rather than technology for its own sake.",
  },
  {
    icon: Users,
    title: "Designed around people",
    description:
      "We create experiences that are understandable, accessible and useful to the people who actually use them.",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8 xl:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs"
                >
                  Our Services
                </Badge>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Technology built around{" "}
                <span className="text-muted-foreground">
                  your business.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                GerNova Digital Technologies helps businesses design, build
                and improve digital products through web development, mobile
                apps, APIs, automation, cloud and AI solutions.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="/services" className="flex items-center gap-4"> 
                        <span>Explore our services</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="/contact" className="flex items-center gap-4"> 
                    <span>Start a conversation</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />

                <img
                  src="/images/gernova-hero-bg.png"
                  alt="GerNova digital technology services"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/70 p-5 text-white backdrop-blur-xl">
                  <p className="text-sm font-medium text-white/60">
                    GerNova approach
                  </p>

                  <p className="mt-2 text-xl font-medium">
                    Build. Connect. Automate. Grow.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                    <Rocket size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Digital transformation
                    </p>
                    <p className="font-medium">From idea to impact</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / CAPABILITIES
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  What we do
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                One technology partner for the digital journey.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Digital transformation is rarely about one website, one app
                or one technology. It is about creating connected systems
                that help your business serve customers, operate efficiently
                and create new opportunities.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                GerNova brings product development, integrations, automation,
                cloud technology, SEO and AI together so businesses can build
                digital ecosystems rather than disconnected technology
                projects.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-6 text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="border-y border-border bg-muted/20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our expertise
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Digital solutions designed to solve real business problems.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Explore the technology capabilities GerNova can bring together
              to create a complete digital solution for your business.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 !== 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.65 }}
                >
                  <Card className="group overflow-hidden rounded-[2rem] border-border bg-background">
                    <div
                      className={cn(
                        "grid lg:grid-cols-2",
                        reversed && "lg:[&>*:first-child]:order-2"
                      )}
                    >
                      {/* Image */}
                      <div className="relative min-h-[330px] overflow-hidden lg:min-h-[500px]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg">
                          <Icon
                            size={22}
                            className={service.accent}
                            strokeWidth={1.8}
                          />
                        </div>

                        <div className="absolute bottom-6 left-6">
                          <span className="text-sm font-medium text-white/70">
                            SERVICE {service.number}
                          </span>
                        </div>

                        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                        <div>
                          <div
                            className={cn(
                              "flex h-11 w-11 items-center justify-center rounded-xl",
                              service.accentBg,
                              service.accent
                            )}
                          >
                            <Icon size={21} />
                          </div>

                          <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                            {service.title}
                          </h3>

                          <p
                            className={cn(
                              "mt-3 text-base font-medium",
                              service.accent
                            )}
                          >
                            {service.shortDescription}
                          </p>

                          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-10 grid gap-8 sm:grid-cols-2">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              What we deliver
                            </p>

                            <ul className="mt-4 space-y-2.5">
                              {service.deliverables.slice(0, 5).map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check
                                    size={16}
                                    className={cn(
                                      "mt-0.5 shrink-0",
                                      service.accent
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              Ideal for
                            </p>

                            <ul className="mt-4 space-y-2.5">
                              {service.idealFor.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span
                                    className={cn(
                                      "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                                      service.accentBg
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10 flex items-center gap-2 border-t border-border pt-6 text-sm font-medium">
                          <span>Discuss this service</span>

                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTCOMES
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Why GerNova
              </span>

              <span className="h-px w-8 bg-border" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology should create progress, not complexity.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              We focus on creating digital systems that are useful today and
              flexible enough to evolve tomorrow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border">
                    <CardContent className="flex gap-5 p-7">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-border bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Our process
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                From idea to digital product.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                Every project is different, but our process gives us a clear
                framework for turning business goals into useful technology.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="border-t border-border pt-5"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE COMBINATIONS
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="rounded-[2rem] border border-border bg-card p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em]"
                >
                  Connected solutions
                </Badge>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Your project may need more than one service.
                </h2>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  The strongest digital solutions often combine several
                  capabilities. GerNova can bring them together under one
                  technology strategy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Website + SEO", "Build your website and improve its search visibility."],
                  ["App + API", "Connect your mobile application to business systems."],
                  ["Automation + AI", "Combine intelligent technology with automated workflows."],
                  ["Cloud + Development", "Deploy scalable applications on modern infrastructure."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <h3 className="font-medium">{title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                  Let's build something useful
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have a digital idea?
                  <br />
                  Let&apos;s turn it into reality.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Tell us what you want to build, improve or automate.
                  GerNova can help you define the right technology approach
                  and turn your idea into a practical digital solution.
                </p>
              </div>

              
              <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col">
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
                    <span>Explore Our services</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;