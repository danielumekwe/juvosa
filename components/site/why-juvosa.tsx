import { SectionLabel } from "@/components/site/ui";

// Juvosa's stated ethos (quality, innovation, customer service) and the strengths named on the original site.
const principles = [
  {
    title: "Quality",
    detail: "We are passionate about quality. It is why we take a holistic approach to every stage of development.",
  },
  {
    title: "Innovation",
    detail: "Innovation is part of the ethos the company was founded on, alongside quality and service.",
  },
  {
    title: "Customer oriented",
    detail: "Unrivalled customer service is a guiding principle, from the first conversation to long-term aftercare.",
  },
  {
    title: "Solution focused",
    detail: "We focus on practical solutions and clear decisions that keep projects moving forward.",
  },
];

export default function WhyJuvosa() {
  return (
    <section id="why-juvosa" aria-labelledby="why-title" className="py-20 sm:py-28 lg:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>Why Juvosa</SectionLabel>
          <h2 id="why-title" className="mt-5 text-[2.5rem] leading-[1.05] sm:text-[3.25rem]">
            What guides every project.
          </h2>
          <p className="mt-6 text-lg text-stone">
            The company is established on the ethos of quality, innovation and unrivalled customer service.
          </p>
        </div>

        <ol className="grid border-t border-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="border-b border-line py-8 sm:px-8 sm:py-10 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
            >
              <span className="font-serif text-lg text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[1.875rem] leading-tight">{principle.title}</h3>
              <p className="mt-3 text-stone">{principle.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
