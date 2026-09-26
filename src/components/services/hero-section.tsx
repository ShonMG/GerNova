"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Cloud,
  Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";




export default function HeroSection() {
  return (
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
  );
}
