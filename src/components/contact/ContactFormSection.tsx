"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { enquirySteps, formspreeEndpoint, projectStages, services } from "@/lib/contact";

const inputClass = "h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";
const selectClass = inputClass;

export default function ContactFormSection() {
  return (
    <section id="contact-form" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Badge variant="secondary" className="rounded-full">Project Enquiry</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Tell us about your project.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">The more context you provide, the better we can understand what you&apos;re trying to accomplish. Don&apos;t worry if your idea is still rough.</p>

          <div className="mt-10 space-y-6">
            {enquirySteps.map(([number, title, description]) => (
              <div key={number} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">{number}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-muted/30 p-6">
            <p className="text-sm font-semibold">Not sure what you need?</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">That&apos;s completely fine. Select &quot;Other / Not Sure&quot; and describe the business problem you&apos;re trying to solve.</p>
          </div>
        </div>

        <Card className="rounded-[2rem] shadow-xl">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <form action={formspreeEndpoint} method="POST" className="space-y-6">
              <Field label="Full name" htmlFor="name"><input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} /></Field>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email address" htmlFor="email"><input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} /></Field>
                <Field label="Phone / WhatsApp" htmlFor="phone"><input id="phone" name="phone" type="tel" placeholder="+254..." className={inputClass} /></Field>
              </div>
              <Field label="Business / organisation" htmlFor="company"><input id="company" name="company" type="text" placeholder="Your business name" className={inputClass} /></Field>
              <Field label="What do you need?" htmlFor="service"><select id="service" name="service" required defaultValue="" className={selectClass}><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></Field>
              <Field label="Where are you with the project?" htmlFor="stage"><select id="stage" name="project_stage" defaultValue="" className={selectClass}><option value="" disabled>Select an option</option>{projectStages.map((stage) => <option key={stage}>{stage}</option>)}</select></Field>
              <Field label={<><span>Estimated budget</span><span className="ml-2 font-normal text-muted-foreground">(optional)</span></>} htmlFor="budget"><select id="budget" name="budget" defaultValue="" className={selectClass}><option value="" disabled>Select a range</option><option>Below KSh 50,000</option><option>KSh 50,000 – 100,000</option><option>KSh 100,000 – 250,000</option><option>KSh 250,000 – 500,000</option><option>KSh 500,000+</option><option>Not sure yet</option></select></Field>
              <Field label="Tell us about your project" htmlFor="message"><textarea id="message" name="message" required rows={6} placeholder="Tell us about your business, what you want to build, the problem you're trying to solve, or the results you're looking for..." className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" /></Field>
              <Button type="submit" size="lg" className="h-12 w-full rounded-xl">Send Project Enquiry<ArrowRight className="ml-2 h-4 w-4" /></Button>
              <p className="text-center text-xs leading-5 text-muted-foreground">By submitting this form, you agree to be contacted about your enquiry. We don&apos;t sell your information to third parties.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: React.ReactNode; htmlFor: string; children: React.ReactNode }) {
  return <div><label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">{label}</label>{children}</div>;
}