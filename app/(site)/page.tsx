import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Hero from "@/components/site/hero";
import Projects from "@/components/site/projects";
import Services from "@/components/site/services";
import SiteFooter from "@/components/site/site-footer";
import SiteHeader from "@/components/site/site-header";
import WhyJuvosa from "@/components/site/why-juvosa";
import { company, siteUrl } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/images/juvosa.png`,
  image: `${siteUrl}/images/redesign/lagos-lagoon-aerial.jpg`,
  email: company.email,
  telephone: "+2348030833931",
  foundingDate: String(company.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 Ikosi Road, Oregun",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  openingHours: ["Mo-Fr 10:00-18:00", "Sa 09:00-14:00"],
};

export default function HomePage() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyJuvosa />
        <Contact />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </div>
  );
}
