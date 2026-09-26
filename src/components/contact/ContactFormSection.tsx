"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  enquirySteps,
  formspreeEndpoint,
  projectStages,
  services,
} from "@/lib/contact";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const inputClass =
  "h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

const selectClass = inputClass;

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);

        setError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setError(
        "We couldn't send your enquiry. Please check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact-form"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        {/* LEFT SIDE */}
        <div>
          <Badge variant="secondary" className="rounded-full">
            Project Enquiry
          </Badge>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us about your project.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The more context you provide, the better we can understand what
            you&apos;re trying to accomplish. Don&apos;t worry if your idea is
            still rough.
          </p>

          <div className="mt-10 space-y-6">
            {enquirySteps.map(([number, title, description]) => (
              <div key={number} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                  {number}
                </span>

                <div>
                  <h3 className="font-semibold">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-muted/30 p-6">
            <p className="text-sm font-semibold">
              Not sure what you need?
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              That&apos;s completely fine. Select &quot;Other / Not Sure&quot;
              and describe the business problem you&apos;re trying to solve.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <Card className="rounded-[2rem] shadow-xl">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            {submitted ? (
              /* SUCCESS CARD */
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle2 className="h-11 w-11 text-green-600" />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                  Thank you!
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                  Your project enquiry has been successfully received.
                  We&apos;ll review your requirements and get back to you
                  shortly.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button 
                    type="button"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                      <span>Send another enquiry</span>
                      <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} />
                      </div>
                  
                  </Button>

                 <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                  <Link href="#contact-form" className="flex items-center gap-4"> 
                      <span>Back to Homepage</span>
                      <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                      <ArrowUpRight size={16} /> 
                    </div>
                  </Link> 
                  </Button>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  We look forward to learning more about your project.
                </p>
              </div>
            ) : (
              /* CONTACT FORM */
              <form
                action={formspreeEndpoint}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email address" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone / WhatsApp" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254..."
                      className={inputClass}
                  />
                  </Field>
                </div>

                <Field
                  label="Business / organisation"
                  htmlFor="company"
                >
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your business name"
                    className={inputClass}
                  />
                </Field>

                <Field label="What do you need?" htmlFor="service">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Where are you with the project?"
                  htmlFor="stage"
                >
                  <select
                    id="stage"
                    name="project_stage"
                    defaultValue=""
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {projectStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={
                    <>
                      <span>Estimated budget</span>

                      <span className="ml-2 font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </>
                  }
                  htmlFor="budget"
                >
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option>Below KSh 50,000</option>
                    <option>KSh 50,000 – 100,000</option>
                    <option>KSh 100,000 – 250,000</option>
                    <option>KSh 250,000 – 500,000</option>
                    <option>KSh 500,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>

                <Field
                  label="Tell us about your project"
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business, what you want to build, the problem you're trying to solve, or the results you're looking for..."
                    className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </Field>

                {/* ERROR MESSAGE */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600"
                  >
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="h-12 w-full rounded-xl"
                >
                  {submitting ? (
                    "Sending enquiry..."
                  ) : (
                    <>
                      Send Project Enquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  By submitting this form, you agree to be contacted about
                  your enquiry. We don&apos;t sell your information to third
                  parties.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: React.ReactNode;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium"
      >
        {label}
      </label>

      {children}
    </div>
  );
}
