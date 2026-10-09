import { getImageProps } from "next/image";
import { ArrowIcon, buttonStyles } from "@/components/site/ui";

const alt = "Aerial view of the Lagos lagoon, with a bridge, marina and residential neighbourhoods";

export default function Hero() {
  const common = { alt, sizes: "100vw", priority: true } as const;
  const {
    props: { srcSet: mobileSrc },
  } = getImageProps({ ...common, src: "/images/redesign/lagos-lagoon-aerial-mobile.jpg", width: 1000, height: 750 });
  const { props: desktopProps } = getImageProps({
    ...common,
    src: "/images/redesign/lagos-lagoon-aerial.jpg",
    width: 2200,
    height: 1650,
  });

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink text-white">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        {/* eslint-disable-next-line @next/next/no-img-element -- art-directed <picture> built with getImageProps */}
        <img {...desktopProps} alt={alt} className="absolute inset-0 -z-20 size-full object-cover object-[50%_40%]" />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(20_22_25/0.15)_0%,rgb(20_22_25/0.55)_32%,rgb(20_22_25/0.88)_100%)] md:bg-[linear-gradient(90deg,rgb(20_22_25/0.7)_0%,rgb(20_22_25/0.3)_45%,rgb(20_22_25/0)_75%),linear-gradient(180deg,rgb(20_22_25/0)_50%,rgb(20_22_25/0.85)_100%)]"
      />

      <div className="shell flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pt-28 pb-10 sm:min-h-[40rem] lg:min-h-[min(calc(100svh-7.5rem),52rem)] lg:pb-14">
        <div className="max-w-4xl animate-rise">
          <p className="label flex items-center gap-3 text-white/85">
            <span aria-hidden="true" className="h-px w-8 bg-brand-bright" />
            Established 2003 · Lagos, Nigeria
          </p>
          <h1 id="hero-title" className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem]">
            Property, developed and cared for since&nbsp;2003.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Juvosa Limited is a real estate development, management and consultancy company — guiding clients from
            land sourcing and design through to build, sales and the life of every building.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonStyles.primary}>
              Start an enquiry
              <ArrowIcon />
            </a>
            <a href="#services" className={buttonStyles.outlineLight}>
              Explore our services
            </a>
          </div>
        </div>

        <dl className="mt-14 hidden grid-cols-3 border-t border-white/25 pt-6 md:grid lg:mt-20">
          {[
            ["Development", "Land sourcing, planning, design and build"],
            ["Management", "Maintenance and upgrades across a building’s life"],
            ["Consultancy", "Advice on property sales and investment"],
          ].map(([term, detail]) => (
            <div key={term} className="pr-8">
              <dt className="font-serif text-2xl">{term}</dt>
              <dd className="mt-1 text-sm text-white/70">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
