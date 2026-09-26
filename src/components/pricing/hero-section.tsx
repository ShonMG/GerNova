"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/pricing-hero-bg.png')",
        }}
      />

      {/* Background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/75"
      />

      {/* Orange / purple glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.10),transparent_30%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge
              variant="outline"
              className="mb-6 rounded-full px-4 py-2"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Transparent Kenyan Pricing
            </Badge>

            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Technology that fits your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                ambition.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              From your first professional website to a complete digital
              platform, GerNova creates technology around your business goals,
              customers and growth plans.
            </p>

            {/* Buttons — unchanged */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                <a href="/contact" className="flex items-center gap-4">
                  <span>Get a Free Digital Audit</span>

                  <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </Button>

              <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                <a href="#plans" className="flex items-center gap-4">
                  <span>View Packages</span>

                  <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}