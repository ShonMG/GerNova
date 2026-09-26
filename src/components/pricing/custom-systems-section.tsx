"use client";

import { ArrowUpRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { customSystemItems } from "@/lib/pricing";

export default function CustomSystemsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border bg-foreground px-8 py-14 text-background sm:px-12 lg:px-16 lg:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-background/20 text-background"><Zap className="mr-2 h-4 w-4" />Custom Digital Systems</Badge>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Have a bigger digital idea?</h2>
            <p className="mt-5 text-lg leading-8 text-background/70">Build a custom platform, business management system, SaaS product, marketplace, AI solution or connected ecosystem around your exact requirements.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {customSystemItems.map((item) => <span key={item} className="rounded-full border border-background/15 bg-background/5 px-4 py-2 text-sm text-background/80">{item}</span>)}
            </div>
          </div>
          <div className="lg:text-right">
            <p className="text-sm text-background/60">Projects starting from</p>
            <p className="mt-2 text-4xl font-semibold">KSh 250,000+</p>
            <Button className="group mt-12 text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
              <a href="/contact" className="flex items-center gap-4">
                <span>Request a Custom Quote</span>
                <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"><ArrowUpRight size={16} /></div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
