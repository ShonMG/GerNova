"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock3, Globe2, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactDetails } from "@/lib/contact";

function ActionButton({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return (
    <Button
      
      className={`group h-12 w-fit rounded-full border p-1 ps-5 text-sm font-medium ${
        inverse
          ? "bg-white text-black hover:bg-white/90 hover:text-black"
          : "border-white/50 bg-gray-950 text-white hover:bg-gray-950/90 hover:text-white"
      }`}
    >
      <Link href={href} className="flex items-center gap-4">
        <span>{children}</span>
        <span className={`rounded-full p-3 transition-transform duration-300 group-hover:rotate-45 ${inverse ? "bg-black text-white" : "bg-white text-black"}`}>
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </Button>
  );
}

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gernova-about-hero-bg.png')",
        }}
      />

      {/* Background readability overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/80 dark:bg-background/70"
      />

      {/* Orange + purple ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[15%] top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-[15%] top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Subtle bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 rounded-full px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Let&apos;s build something meaningful
            </Badge>

            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                Let&apos;s turn it into reality.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you need a website, mobile application, automation system, AI solution or complete digital platform, tell us what you&apos;re trying to achieve and we&apos;ll help you figure out the right technology.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ActionButton href="#contact-form">Start a Conversation</ActionButton>
              <ActionButton href="/services" inverse>Explore Our Services</ActionButton>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="relative overflow-hidden rounded-[2rem] border bg-card/80 shadow-2xl backdrop-blur">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
              <CardContent className="relative p-8 sm:p-10">
                <p className="text-sm font-medium text-muted-foreground">Start with a conversation</p>
                <h2 className="mt-3 text-2xl font-semibold">Tell us what you want to build.</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">You don&apos;t need to have everything figured out. Give us the basics and we&apos;ll help shape the next step.</p>
                <div className="my-8 h-px bg-border" />
                <div className="space-y-5">
                  <a href={contactDetails.emailHref} className="group flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500"><Mail className="h-5 w-5" /></div>
                    <div><p className="text-sm font-medium">Email</p><p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">{contactDetails.email}</p></div>
                  </a>
                  <a href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-600"><MessageCircle className="h-5 w-5" /></div>
                    <div><p className="text-sm font-medium">WhatsApp</p><p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">{contactDetails.whatsapp}</p></div>
                  </a>
                  <InfoRow icon={<Globe2 className="h-5 w-5" />} label="Availability" value={contactDetails.availability} className="bg-purple-500/10 text-purple-500" />
                  <InfoRow icon={<Clock3 className="h-5 w-5" />} label="Response time" value={contactDetails.responseTime} className="bg-foreground/5" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, className }: { icon: React.ReactNode; label: string; value: string; className: string }) {
  return <div className="flex items-start gap-4"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${className}`}>{icon}</div><div><p className="text-sm font-medium">{label}</p><p className="mt-1 text-sm text-muted-foreground">{value}</p></div></div>;
}