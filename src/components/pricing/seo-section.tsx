"use client";

import { motion } from "motion/react";
import { Check, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { growthPlans } from "@/lib/pricing";

export default function SeoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Badge variant="outline" className="rounded-full"><Search className="mr-2 h-4 w-4" />SEO & Digital Growth</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Keep growing after launch.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">Your website should not become a digital brochure that nobody finds. Our ongoing growth packages focus on search visibility, technical health, content and measurable improvements.</p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><ShieldCheck className="h-5 w-5 text-orange-500" />Monthly reporting and measurable work</div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {growthPlans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
              <Card className="h-full rounded-3xl">
                <CardContent className="p-7">
                  <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                  <div className="mt-3 flex items-baseline"><span className="text-2xl font-semibold">{plan.price}</span><span className="ml-1 text-sm text-muted-foreground">{plan.period}</span></div>
                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  <div className="my-6 h-px bg-border" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />{feature}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
