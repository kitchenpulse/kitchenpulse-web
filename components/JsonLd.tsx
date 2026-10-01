export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kitchenpulse.in/#organization",
        name: "Kitchen Pulse",
        url: "https://kitchenpulse.in",
        logo: "https://kitchenpulse.in/apple-touch-icon.png",
        email: "info@kitchenpulse.in",
        telephone: "+91-91676-36653",
        description:
          "End-to-end F&B and D2C growth partner: restaurant real estate, civil and HVAC, commercial kitchen equipment, staffing, culinary innovation, and aggregator digital marketing across India.",
        sameAs: [
          "https://www.linkedin.com/company/kitchen-pulse",
          "https://www.instagram.com/kitchenpulse_official/",
        ],
        founder: [
          { "@type": "Person", name: "Shubham Gupta", jobTitle: "Director" },
          { "@type": "Person", name: "Sushant Oundhakar", jobTitle: "Director" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kitchenpulse.in/#localbusiness",
        name: "Kitchen Pulse",
        url: "https://kitchenpulse.in",
        image: "https://kitchenpulse.in/apple-touch-icon.png",
        telephone: "+91-91676-36653",
        email: "info@kitchenpulse.in",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No-01, Sai Charan CO HSG, Plot No-106 & 107, Sec-21, Kamothe",
          addressLocality: "Navi Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "410209",
          addressCountry: "IN",
        },
        areaServed: { "@type": "Country", name: "India" },
        parentOrganization: { "@id": "https://kitchenpulse.in/#organization" },
      },
      {
        "@type": "WebSite",
        "@id": "https://kitchenpulse.in/#website",
        url: "https://kitchenpulse.in",
        name: "Kitchen Pulse",
        publisher: { "@id": "https://kitchenpulse.in/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
