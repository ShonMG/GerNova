"use client";


import {
 
  ArrowUpRight,
  
} from "lucide-react";

import { Button } from "@/components/ui/button";



export default function CtaSection() {
  return (
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                  Let's build something useful
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have a digital idea?
                  <br />
                  Let&apos;s turn it into reality.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Tell us what you want to build, improve or automate.
                  GerNova can help you define the right technology approach
                  and turn your idea into a practical digital solution.
                </p>
              </div>

              
              <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="/contact" className="flex items-center gap-4"> 
                        <span>Get a Free Digital Audit</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="/services" className="flex items-center gap-4"> 
                    <span>Explore Our services</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
  );
}
