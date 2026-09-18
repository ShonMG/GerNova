"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

const services = [
  "Website Development",
  "Mobile Application",
  "E-commerce",
  "API & Integrations",
  "SEO & Digital Growth",
  "Business Automation",
  "Cloud Solutions",
  "AI Solutions",
  "Other / Not Sure",
];

const projectStages = [
  "Just an idea",
  "Planning / researching",
  "Ready to start",
  "Existing project that needs improvement",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-4 py-2"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Let's build something meaningful
              </Badge>

              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Have an idea?
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                  Let's turn it into reality.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                Whether you need a website, mobile application, automation
                system, AI solution or complete digital platform, tell us
                what you're trying to achieve and we'll help you figure out
                the right technology.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="#contact-form" className="flex items-center gap-4"> 
                        <span>Start a Conversation</span>
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
            </motion.div>

            {/* HERO INFO CARD */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="relative overflow-hidden rounded-[2rem] border bg-card/80 shadow-2xl backdrop-blur">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

                <CardContent className="relative p-8 sm:p-10">
                  <p className="text-sm font-medium text-muted-foreground">
                    Start with a conversation
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    Tell us what you want to build.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    You don't need to have everything figured out. Give us
                    the basics and we'll help shape the next step.
                  </p>

                  <div className="my-8 h-px bg-border" />

                  <div className="space-y-5">
                    <a
                      href="mailto:support@gernova.com"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                        <Mail className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
                          support@gernova.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/254769848012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                        <MessageCircle className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
                          +254 769 848 012
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                        <Globe2 className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">Availability</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Kenya & international clients
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/5">
                        <Clock3 className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          Response time
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Usually within 1 business day
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <div>
            <Badge variant="secondary" className="rounded-full">
              Project Enquiry
            </Badge>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us about your project.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The more context you provide, the better we can understand what
              you're trying to accomplish. Don't worry if your idea is still
              rough.
            </p>

            <div className="mt-10 space-y-6">
              {[
                [
                  "01",
                  "Tell us the idea",
                  "What are you trying to build or improve?",
                ],
                [
                  "02",
                  "Tell us the goal",
                  "What should the technology help your business achieve?",
                ],
                [
                  "03",
                  "We'll discuss the next step",
                  "We'll review your enquiry and discuss the appropriate scope.",
                ],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border bg-muted/30 p-6">
              <p className="text-sm font-semibold">
                Not sure what you need?
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                That's completely fine. Select "Other / Not Sure" and describe
                the business problem you're trying to solve.
              </p>
            </div>
          </div>

          {/* FORM */}
          <Card className="rounded-[2rem] shadow-xl">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone / WhatsApp
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254..."
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* COMPANY */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Business / organisation
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your business name"
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium"
                  >
                    What do you need?
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROJECT STAGE */}
                <div>
                  <label
                    htmlFor="stage"
                    className="mb-2 block text-sm font-medium"
                  >
                    Where are you with the project?
                  </label>

                  <select
                    id="stage"
                    name="project_stage"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {projectStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BUDGET */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium"
                  >
                    Estimated budget
                    <span className="ml-2 font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>Below KSh 50,000</option>
                    <option>KSh 50,000 – 100,000</option>
                    <option>KSh 100,000 – 250,000</option>
                    <option>KSh 250,000 – 500,000</option>
                    <option>KSh 500,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business, what you want to build, the problem you're trying to solve, or the results you're looking for..."
                    className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl"
                >
                  Send Project Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  By submitting this form, you agree to be contacted about
                  your enquiry. We don't sell your information to third
                  parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHY GER NOVA */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full">
              Why Work With GerNova
            </Badge>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Technology with a purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              We don't build technology simply because we can. Every project
              starts with understanding the business problem and ends with a
              solution designed around real-world use.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Business-first thinking",
                description:
                  "We connect technology decisions to business goals, customer experience and operational needs.",
              },
              {
                title: "Built to evolve",
                description:
                  "Your first version doesn't have to contain everything. We build foundations that can grow with you.",
              },
              {
                title: "One digital partner",
                description:
                  "Web, mobile, APIs, automation, cloud, AI and digital growth can be brought together under one strategy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full rounded-3xl">
                  <CardContent className="p-8">
                    <CheckCircle2 className="h-6 w-6 text-orange-500" />

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <Mail className="h-6 w-6 text-orange-500" />

              <h3 className="mt-5 text-xl font-semibold">
                Email us
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                For project enquiries, proposals and general questions.
              </p>

              <a
                href="mailto:support@gernova.com"
                className="mt-5 inline-flex items-center text-sm font-medium"
              >
                support@gernova.com
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <MessageCircle className="h-6 w-6 text-green-600" />

              <h3 className="mt-5 text-xl font-semibold">
                WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Prefer a quick conversation? Start with WhatsApp.
              </p>

              <a
                href="https://wa.me/254769848012"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium"
              >
                Start WhatsApp chat
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <Globe2 className="h-6 w-6 text-purple-500" />

              <h3 className="mt-5 text-xl font-semibold">
                Work with us remotely
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Based in Kenya and available for projects across Africa and
                international markets.
              </p>

              <div className="mt-5 inline-flex items-center text-sm font-medium">
                Kenya • Remote
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Your next digital product could start today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Tell us where you want to go. We'll help you work out how
            technology can get you there.
          </p>

          <div className="mt-8 items-center justify-center gap-4 sm:flex">
            <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
              <a href="#contact-form" className="flex items-center gap-4"> 
                  <span>Start Your Project</span>
                  <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                  <ArrowUpRight size={16} /> 
                  </div>
              </a> 
              </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}