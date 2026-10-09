import Image from "next/image";
import { SectionLabel } from "@/components/site/ui";
import { company } from "@/lib/site";

const lifecycle = [
  { title: "Land sourcing and planning", detail: "Finding the right site and shaping what it can become." },
  { title: "Design", detail: "Plans developed with quality and the end user in mind." },
  { title: "Build", detail: "Construction delivered with care at every stage." },
  { title: "Sales", detail: "Bringing finished property to the right buyers." },
  { title: "Maintenance, upgrades and investment", detail: "Support that continues for the full life of the building." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel>About Juvosa</SectionLabel>
          </div>
          <div className="lg:col-span-9">
            <h2 id="about-title" className="text-[2rem] leading-[1.15] sm:text-[2.75rem] lg:text-[3.25rem]">
              Founded in {company.founded} by {company.founders}, whose names together became <em>Juvosa</em>.
            </h2>
            <div className="mt-10 grid gap-6 text-lg text-stone md:grid-cols-2 md:gap-10">
              <p>
                Juvosa Limited is a real estate development, management and consultancy company. Real estate was the
                company’s primary aim from the start, and it remains the core of the business today.
              </p>
              <p>
                Over the years, Juvosa has also grown into interior décor and design, wholesale and retail fashion, the
                importation of cars and heavy-duty equipment, and the purchase of luxury watches and jewellery.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-start gap-12 sm:mt-28 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand lg:aspect-[4/5]">
              <Image
                src="/images/redesign/lagos-facade.jpg"
                alt="Curved glass and timber-clad facade of a contemporary building in Lagos"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone">Contemporary architecture in Lagos.</figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>Our approach</SectionLabel>
            <h3 className="mt-5 text-3xl leading-tight sm:text-[2.5rem]">One partner from first plot to finished building — and beyond.</h3>
            <p className="mt-6 text-lg text-stone">
              We are passionate about quality, so we take a holistic approach to development. Our expertise lets us
              support clients through the full life cycle of their buildings.
            </p>

            <ol className="mt-10 border-t border-line">
              {lifecycle.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-6 sm:grid-cols-[4rem_1fr]">
                  <span className="pt-1 font-serif text-xl text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-serif text-2xl leading-snug">{step.title}</p>
                    <p className="mt-1 text-stone">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="mt-12 border-l-2 border-brand pl-6">
              <p className="font-serif text-2xl leading-snug italic sm:text-[1.75rem]">
                “Our mission is to go global and expand our frontiers to international exposure. We hope to go into
                construction on a large scale.”
              </p>
              <footer className="label mt-4 text-stone">Juvosa mission</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
