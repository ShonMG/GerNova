"use client";

import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, Cloud, Globe2, Smartphone, ShoppingCart, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/pricing";

const icons = { website: Globe2, ecommerce: ShoppingCart, mobile: Smartphone, automation: Workflow, ai: BrainCircuit, cloud: Cloud };

export default function ServicesSection() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4 rounded-full">Beyond Websites</Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Build more than a website.</h2>
          <p className="mt-5 text-lg text-muted-foreground">GerNova combines design, software engineering, automation, AI and cloud technology to create connected digital systems.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <Card className="h-full rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background"><Icon className="h-5 w-5" /></div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 font-medium text-orange-500">{service.price}</p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
                    <a href="/contact" className="mt-6 inline-flex items-center text-sm font-medium hover:underline">Discuss your project<ArrowRight className="ml-2 h-4 w-4" /></a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
