"use client";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";
import Image from "next/image";

export interface Technology {
  name: string;
  image: string;
  lightimg?: string;
}

function TechnologySlider({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <section
      aria-labelledby="technologies-heading"
      className="w-full"
    >
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-3"
          >
            {/* Section heading */}
            <div className="flex justify-center text-center py-3 md:py-4">
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="hidden md:block h-px w-32 bg-linear-to-l from-muted-foreground to-transparent opacity-30" />

                <div>
                  <p
                    id="technologies-heading"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Technologies we use
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground/70">
                    Modern tools for building reliable digital solutions
                  </p>
                </div>

                <div className="hidden md:block h-px w-32 bg-linear-to-r from-muted-foreground to-transparent opacity-30" />
              </div>
            </div>

            {/* Technology marquee */}
            {technologies && technologies.length > 0 && (
              <div className="py-4">
                <Marquee
                  pauseOnHover
                  className="[--duration:25s] p-0"
                >
                  {technologies.map((technology, index) => (
                    <div
                      key={`${technology.name}-${index}`}
                      className="flex items-center justify-center gap-3 mx-6 lg:mx-10"
                    >
                      {/* Light mode logo */}
                      <Image
                        src={technology.image}
                        alt={`${technology.name} technology`}
                        width={120}
                        height={32}
                        className="h-8 w-auto object-contain dark:hidden"
                      />

                      {/* Dark mode logo */}
                      {technology.lightimg && (
                        <Image
                          src={technology.lightimg}
                          alt={`${technology.name} technology`}
                          width={120}
                          height={32}
                          className="hidden dark:block h-8 w-auto object-contain"
                        />
                      )}

                      {/* Text fallback when no dark logo exists */}
                      {!technology.lightimg && (
                        <span className="text-sm font-medium text-foreground">
                          {technology.name}
                        </span>
                      )}
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySlider;