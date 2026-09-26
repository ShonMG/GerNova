import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/lib/pricing";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <Badge variant="outline" className="rounded-full"><HelpCircle className="mr-2 h-4 w-4" />Pricing FAQ</Badge>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight">Questions before you start?</h2>
      </div>
      <div className="mt-12 divide-y rounded-3xl border">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-6">
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold">{faq.question}</summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
