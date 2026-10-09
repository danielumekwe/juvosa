import Image from "next/image";
import { SectionLabel } from "@/components/site/ui";

// Renders supplied with the original juvosaltd.com portfolio. The source files are 640 × 480,
// so they are never displayed wider than roughly that size.
const featured = {
  src: "/images/project-03.jpg",
  alt: "Architectural render of a three-storey Juvosa building with grey and orange facade and landscaped frontage",
};

const views = [
  { src: "/images/project-01.jpg", alt: "Render of the building’s corner elevation with perimeter fence and planting" },
  { src: "/images/project-02.jpg", alt: "Render of the building entrance with parked cars in the forecourt" },
  { src: "/images/project-04.jpg", alt: "Render of the building seen across a lawn with palm trees" },
  { src: "/images/project-06.jpg", alt: "Close render of the orange-framed upper floors above the entrance" },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-ink py-20 text-paper sm:py-28 lg:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <SectionLabel tone="dark">Projects</SectionLabel>
            <h2 id="projects-title" className="mt-5 text-[2.5rem] leading-[1.05] sm:text-[3.25rem]">
              From the Juvosa portfolio.
            </h2>
            <p className="mt-6 text-lg text-mist">
              For each project, we build relationships with partners who help us create added value. As well as bringing
              together the public and private sectors, we make links across sectors to share knowledge and learn from
              each other.
            </p>

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="label text-brand-bright">Next project</p>
              <p className="mt-3 font-serif text-[1.75rem] leading-snug">
                A 500–600 capacity school for Children’s Homestead Schools.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft sm:col-span-2">
                <Image src={featured.src} alt={featured.alt} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" />
              </div>
              {views.map((view) => (
                <div key={view.src} className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                  <Image src={view.src} alt={view.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw" className="object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-mist">Architectural renders from the Juvosa portfolio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
