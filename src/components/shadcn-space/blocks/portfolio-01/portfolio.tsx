
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type PortfolioData = {
  portfolio_image: string;
  portfolio_title: string;
  portfolio_category: string;
  portfolio_description: string;
  portfolio_tags: string[];
};

const portfolioData: PortfolioData[] = [
  {
    portfolio_image: "/images/portfolio/business-website.jpg",
    portfolio_title: "Business Website Solutions",
    portfolio_category: "Web Development",
    portfolio_description:
      "A modern, responsive business website designed to establish a strong digital presence and convert visitors into customers.",
    portfolio_tags: ["React", "Responsive Design", "SEO"],
  },
  {
    portfolio_image: "/images/portfolio/mobile-app.jpg",
    portfolio_title: "Mobile Business Platform",
    portfolio_category: "Mobile Application",
    portfolio_description:
      "A scalable mobile experience designed to simplify customer interactions and bring essential business services to users.",
    portfolio_tags: ["Mobile App", "UX/UI", "API"],
  },
  {
    portfolio_image: "/images/portfolio/automation.jpg",
    portfolio_title: "Business Automation System",
    portfolio_category: "Automation",
    portfolio_description:
      "A custom workflow solution that connects business processes, reduces repetitive tasks and improves operational efficiency.",
    portfolio_tags: ["Automation", "APIs", "Workflows"],
  },
  {
    portfolio_image: "/images/portfolio/ai-solutions.jpg",
    portfolio_title: "AI-Powered Business Solution",
    portfolio_category: "Artificial Intelligence",
    portfolio_description:
      "An intelligent digital solution using AI to help businesses process information, improve customer experiences and work smarter.",
    portfolio_tags: ["AI", "Automation", "Cloud"],
  },
];

const Portfolio = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.12,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">

        <div className="flex flex-col gap-12 sm:gap-16 w-full">
           <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border sm:w-12" />

            <span
              className="
                rounded-full
                border
                border-border
                bg-background
                px-4
                py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-muted-foreground
                sm:text-xs
              "
            >
              Our Services
            </span>

            <span className="h-px w-8 bg-border sm:w-12" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-8">

            <div className="flex flex-col text-center mx-auto gap-5">

              

              <div className="max-w-3xl">
                <h2 className="text-foreground text-2xl sm:text-5xl font-semibold tracking-tight">
                  Digital products built to make an impact
                </h2>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-7 max-w-2xl">
                Explore how GerNova transforms ideas into modern websites,
                applications, automated workflows and intelligent digital
                solutions.
              </p>

            </div>

            {/* Portfolio link */}
            <div className="flex md:flex-row flex-col items-center gap-4 shrink-0 justify-center">
             <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
               <a href="#portfolio" className="flex items-center gap-4"> 
                <span>View All Projects</span>
                 <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                   <ArrowUpRight size={16} /> 
                 </div>
               </a> 
              </Button>
          </div>

          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12">

            {portfolioData.map((item, index) => (
              <motion.div
                key={item.portfolio_title}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                custom={index}
                variants={cardVariants}
                className="group"
              >

                <Card className="p-0 ring-0 overflow-hidden border-0 shadow-none bg-transparent">

                  <CardContent className="p-0">

                    {/* Image container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">

                      <a
                        href="#"
                        className="block h-full w-full"
                        aria-label={`View ${item.portfolio_title}`}
                      >

                        <img
                          src={item.portfolio_image}
                          alt={item.portfolio_title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                      </a>

                      {/* Project number */}
                      <div className="absolute top-5 left-5">

                        <span className="inline-flex items-center justify-center h-9 min-w-9 px-3 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* Category */}
                      <div className="absolute bottom-5 left-5">

                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-black text-xs font-medium">
                          {item.portfolio_category}
                        </span>

                      </div>

                      {/* Floating arrow */}
                      <div className="absolute top-5 right-5">

                        <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white text-black shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:scale-105">

                          <ArrowUpRight size={19} />

                        </div>

                      </div>

                    </div>

                    {/* Project information */}
                    <div className="flex flex-col gap-4 pt-5">

                      <div className="flex flex-col gap-2">

                        <div className="flex items-start justify-between gap-4">

                          <h3 className="text-foreground text-2xl sm:text-3xl font-medium tracking-tight">
                            {item.portfolio_title}
                          </h3>

                          <ExternalLink
                            size={18}
                            className="text-muted-foreground mt-1 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                          />

                        </div>

                        <p className="text-muted-foreground text-sm sm:text-base leading-6 max-w-xl">
                          {item.portfolio_description}
                        </p>

                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">

                        {item.portfolio_tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs font-normal px-3 py-1 h-7"
                          >
                            {tag}
                          </Badge>
                        ))}

                      </div>

                    </div>

                  </CardContent>

                </Card>

              </motion.div>
            ))}

          </div>

          {/* Bottom CTA */}

          <div className="bg-gray-950 border rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

            <div className="text-center md:text-start">

              <p className="text-2xl sm:text-3xl font-medium text-white">
                Have a project idea?
              </p>

              <p className="text-2xl sm:text-3xl font-medium text-white">
                Let&apos;s build something meaningful together.
              </p>

              <p className="text-sm text-white/60 mt-3 max-w-xl">
                Tell us what you want to build, improve or automate and
                GerNova will help you find the right technology solution.
              </p>

            </div>

            <div className="flex md:flex-row flex-col items-center gap-4 shrink-0">

              <Button 
                className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                <a href="#contact" className="flex items-center gap-4"> 
                  <span>Start a Project</span> 
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
};

export default Portfolio;

