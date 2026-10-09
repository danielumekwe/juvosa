import Image from "next/image";
import { ArrowIcon, SectionLabel } from "@/components/site/ui";

const realEstateLines = [
  { title: "Development", detail: "From land sourcing and planning through design, build and sales." },
  { title: "Management", detail: "Maintenance and upgrades that protect a building’s value over time." },
  { title: "Consultancy", detail: "Practical guidance on property decisions and investments." },
];

const otherServices = [
  {
    title: "Interior décor and design",
    description: "Residential interior design, office décor, and hospitality design and finishing.",
    image: "/images/redesign/interior-living-room.jpg",
    alt: "Warm, modern living room with a grey sofa, leather ottomans and large windows",
  },
  {
    title: "Fashion",
    description: "Wholesale and retail fashion, part of Juvosa’s growth beyond property.",
    image: "/images/redesign/fashion-boutique.jpg",
    alt: "Clothing boutique with garments on hanging rails under pendant lights",
  },
  {
    title: "Importation and logistics",
    description: "Importation of cars and heavy-duty equipment, with cargo freight, logistics and warehousing services.",
    image: "/images/redesign/excavator-dusk.jpg",
    alt: "Excavator working on a hillside at dusk",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-sand py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel>What we do</SectionLabel>
            <h2 id="services-title" className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl">
              Real estate first, with expertise that reaches further.
            </h2>
          </div>
          <p className="text-lg text-stone lg:col-span-4 lg:col-start-9">
            Property is at the core of Juvosa. Over the years, the company has grown into related businesses for homes,
            workplaces and everyday life.
          </p>
        </div>

        <article className="mt-14 grid overflow-hidden bg-paper sm:mt-20 lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src="/images/redesign/lagos-skyline.jpg"
              alt="Lagos skyline with residential towers, homes and the Atlantic Ocean beyond"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col p-6 sm:p-10 lg:col-span-5 lg:p-12">
            <p className="label text-stone">01 — Core business</p>
            <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">Real estate</h3>
            <p className="mt-4 text-lg text-stone">
              A real estate development, management and consultancy company, built on quality, innovation and
              customer service.
            </p>
            <dl className="mt-8 border-t border-line">
              {realEstateLines.map((line) => (
                <div key={line.title} className="border-b border-line py-4">
                  <dt className="font-serif text-xl">{line.title}</dt>
                  <dd className="mt-0.5 text-[0.9375rem] text-stone">{line.detail}</dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className="group mt-8 inline-flex items-center gap-3 self-start font-semibold text-brand lg:mt-auto lg:pt-8">
              Discuss a property project
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {otherServices.map((service, index) => (
            <article key={service.title} className="group flex flex-col bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="label text-stone">{String(index + 2).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[1.75rem] leading-tight">{service.title}</h3>
                <p className="mt-3 text-stone">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
