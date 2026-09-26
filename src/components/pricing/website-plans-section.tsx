"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { websitePlans } from "@/lib/pricing";

export default function WebsitePlansSection() {
  return (
    <section id="plans" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-4 rounded-full">Website Packages</Badge>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Start where your business is.</h2>
        <p className="mt-5 text-lg text-muted-foreground">Choose a starting point and scale your digital presence as your business grows.</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {websitePlans.map((plan, index) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="h-full">
            <Card className={`relative h-full overflow-hidden rounded-3xl border ${plan.popular ? "border-orange-500/50 shadow-2xl shadow-orange-500/10" : ""}`}>
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${plan.accent}`} />
              {plan.popular && <div className="absolute right-5 top-5"><Badge className="rounded-full bg-orange-500 text-white hover:bg-orange-500">Most Popular</Badge></div>}
              <CardContent className="relative flex h-full flex-col p-8">
                <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                <h3 className="mt-3 text-3xl font-semibold">{plan.price}</h3>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">{plan.description}</p>
                <div className="my-7 h-px bg-border" />
                <p className="mb-4 text-sm font-semibold">What's included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
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
      <p className="mt-8 text-center text-sm text-muted-foreground">* Prices are starting points. Final pricing depends on scope, functionality, content, integrations and project complexity.</p>
    </section>
  );
}
