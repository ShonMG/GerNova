"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="relateive overflow-hidden border-t">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Your next digital product could start today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Tell us where you want to go. We'll help you work out how
            technology can get you there.
          </p>

          <div className="mt-8 items-center justify-center gap-4 sm:flex">
            <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
              <Link href="#contact-form" className="flex items-center gap-4"> 
                  <span>Start Your Project</span>
                  <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                  <ArrowUpRight size={16} /> 
                </div>
              </Link> 
              </Button>
          </div>
        </div>
      </section>
  );
}