export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://gernova.net/#organization",

    name: "GerNova Digital Technologies",

    url: "https://gernova.net",

    logo: "https://gernova.net/images/logo.png",

    description:
      "GerNova Digital Technologies builds websites, mobile apps, business automation systems, AI solutions, cloud systems, APIs and SEO strategies.",

    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },

    knowsAbout: [
      "Web Development",
      "Mobile Application Development",
      "Business Automation",
      "Artificial Intelligence",
      "Cloud Solutions",
      "API Integrations",
      "Search Engine Optimization",
      "Digital Growth",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}