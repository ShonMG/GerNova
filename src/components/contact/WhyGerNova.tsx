"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { whyGerNova } from "@/lib/contact";

export default function WhyGerNova() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="rounded-full">Why Work With GerNova</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Technology with a purpose.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">We don&apos;t build technology simply because we can. Every project starts with understanding the business problem and ends with a solution designed around real-world use.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whyGerNova.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Card className="h-full rounded-3xl"><CardContent className="p-8"><CheckCircle2 className="h-6 w-6 text-orange-500" /><h3 className="mt-6 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></CardContent></Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}