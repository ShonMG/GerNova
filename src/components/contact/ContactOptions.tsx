import { ArrowUpRight, Globe2, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contactDetails } from "@/lib/contact";

export default function ContactOptions() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        <ContactCard icon={<Mail className="h-6 w-6 text-orange-500" />} title="Email us" description="For project enquiries, proposals and general questions."><a href={contactDetails.emailHref} className="mt-5 inline-flex items-center text-sm font-medium">{contactDetails.email}<ArrowUpRight className="ml-2 h-4 w-4" /></a></ContactCard>
        <ContactCard icon={<MessageCircle className="h-6 w-6 text-green-600" />} title="WhatsApp" description="Prefer a quick conversation? Start with WhatsApp."><a href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center text-sm font-medium">Start WhatsApp chat<ArrowUpRight className="ml-2 h-4 w-4" /></a></ContactCard>
        <ContactCard icon={<Globe2 className="h-6 w-6 text-purple-500" />} title="Work with us remotely" description="Based in Kenya and available for projects across Africa and international markets."><div className="mt-5 inline-flex items-center text-sm font-medium">{contactDetails.location}</div></ContactCard>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, description, children }: { icon: React.ReactNode; title: string; description: string; children: React.ReactNode }) {
  return <Card className="rounded-3xl"><CardContent className="p-8">{icon}<h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>{children}</CardContent></Card>;
}