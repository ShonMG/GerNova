import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioCTA() {
  return (
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                  Your idea could be next
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have something you want to build?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Whether you are starting from an idea, improving an
                  existing product or looking for a better way to automate
                  your business, GerNova can help turn the opportunity into a
                  practical digital solution.
                </p>
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <Link href="/contact" className="flex items-center gap-4"> 
                        <span>Start a Project</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </Link> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <Link href="/services" className="flex items-center gap-4"> 
                    <span>Explore Our Services</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </Link> 
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
  );
}
