import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "What services does GerNova Digital Technologies offer?",
    answer:
      "GerNova provides end-to-end digital solutions including website development, mobile app development, API integrations, SEO and digital growth, business automation, cloud solutions, and AI-powered solutions. We can support you from the initial idea through development, launch, and ongoing improvement.",
  },
  {
    question: "How much does a website or digital solution cost?",
    answer:
      "Pricing depends on the type of solution, features, design requirements, integrations, and overall project scope. Our website projects can start from KSh 25,000, while more advanced platforms are priced according to their requirements. We provide a clear quotation before development begins.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity and scope. A straightforward business website can typically be completed within a few weeks, while larger platforms, mobile applications, automation systems, and AI solutions may require several weeks or months. We agree on milestones and delivery expectations before starting.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Yes. We can modernize an existing website while preserving important content and functionality. Depending on your needs, we can improve the UI/UX, responsiveness, performance, SEO, accessibility, security, and conversion experience.",
  },
  {
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. Our SEO and digital growth services help businesses improve their online visibility, search rankings, website performance, and ability to attract qualified customers. We can provide both one-time optimization and ongoing SEO support.",
  },
  {
    question: "Can you automate repetitive business processes?",
    answer:
      "Absolutely. We design automation solutions that reduce repetitive manual work and improve efficiency. This can include automated workflows, forms, notifications, reporting, API integrations, customer processes, data handling, and internal business operations.",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We develop modern mobile applications designed around your business requirements and target users. Applications can be connected to APIs, databases, authentication systems, payment services, and other business platforms.",
  },
  {
    question: "Do you offer AI solutions for businesses?",
    answer:
      "Yes. We help businesses identify practical opportunities for AI and implement solutions that improve productivity, customer experiences, data analysis, automation, and decision-making. The focus is on useful business outcomes rather than AI for the sake of AI.",
  },
  {
    question: "Do you provide support after the project is launched?",
    answer:
      "Yes. Our relationship does not end when your project goes live. We can provide ongoing maintenance, technical support, updates, performance improvements, security assistance, and additional features as your business grows.",
  },
  {
    question: "How do I get started with GerNova?",
    answer:
      "Simply get in touch and tell us what you are trying to build, improve, or automate. We will discuss your goals, understand your requirements, recommend an appropriate solution, and provide the next steps and quotation.",
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8 xl:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center animate-in fade-in slide-in-from-top-10 duration-1000">
          <Badge
            variant="outline"
            className="h-auto rounded-full border-0 px-4 py-1.5 text-sm font-medium outline outline-border"
          >
            FAQs
          </Badge>

          <h2 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Questions?
            <span className="block text-muted-foreground">
              We’ve got answers.
            </span>
          </h2>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Everything you need to know about working with GerNova Digital
            Technologies and turning your digital ideas into practical,
            scalable solutions.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto w-full max-w-4xl">
          <Accordion className="flex w-full flex-col gap-4">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "group/item relative overflow-hidden rounded-2xl border border-border bg-background/80 px-5 py-5 backdrop-blur-sm transition-all duration-300 sm:px-6",
                  "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
                  "data-[open]:border-primary/30 data-[open]:bg-accent/40 data-[open]:shadow-lg",
                  "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-150",
                  index === 2 && "delay-200",
                  index === 3 && "delay-250",
                  index === 4 && "delay-300",
                  index === 5 && "delay-350",
                  index === 6 && "delay-400",
                  index === 7 && "delay-450",
                  index === 8 && "delay-500",
                  index === 9 && "delay-550",
                )}
              >
                {/* Active accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-data-[open]/item:scale-y-100"
                />

                <AccordionTrigger
                  className={cn(
                    "group/trigger flex w-full items-center gap-4 p-0 text-left text-base font-medium hover:no-underline sm:text-lg",
                    "[&>svg]:hidden",
                  )}
                >
                  {/* Number */}
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-all duration-300",
                      "group-data-[open]/item:border-primary/30 group-data-[open]/item:bg-primary group-data-[open]/item:text-primary-foreground",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="flex-1 pr-2 leading-6">
                    {faq.question}
                  </span>

                  {/* Plus */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover/trigger:border-primary/40 group-data-[state=open]/trigger:rotate-45 group-data-[state=open]/trigger:bg-primary group-data-[state=open]/trigger:text-primary-foreground">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="p-0">
                  <div className="ml-[52px] max-w-3xl pr-2 pt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-2 flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground sm:text-base">
            Still have questions about your project?
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary sm:text-base"
          >
            Talk to GerNova
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}