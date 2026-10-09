"use client";

import { getImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon, buttonStyles } from "@/components/site/ui";

// Keep in sync with --animate-progress in app/(site)/site.css.
const SLIDE_DURATION = 7000;

type Slide = {
  name: string;
  image: { desktop: string; mobile: string; width: number; height: number; position: string };
  alt: string;
  label: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    name: "Lagos",
    image: {
      desktop: "/images/redesign/lagos-lagoon-aerial.jpg",
      mobile: "/images/redesign/lagos-lagoon-aerial-mobile.jpg",
      width: 2200,
      height: 1650,
      position: "object-[50%_40%]",
    },
    alt: "Aerial view of the Lagos lagoon, with a bridge, marina and residential neighbourhoods",
    label: "Established 2003 · Lagos, Nigeria",
    title: "Nigeria’s No 1 Real Estate Company",
    text: "The best real estate company based in Nigeria. The largest real estate investment firm in Nigeria.",
    primary: { label: "Start an enquiry", href: "#contact" },
    secondary: { label: "Explore our services", href: "#services" },
  },
  {
    name: "Real estate",
    image: {
      desktop: "/images/redesign/hero-lagos-skyline.jpg",
      mobile: "/images/redesign/hero-lagos-skyline-mobile.jpg",
      width: 2200,
      height: 1466,
      position: "object-[50%_45%]",
    },
    alt: "Lagos skyline with residential towers, homes and the Atlantic Ocean beyond",
    label: "Development · Management · Consultancy",
    title: "Real estate development, management and consultancy.",
    text: "From land sourcing and planning to design, build and sales — with support for maintenance, upgrades and investment for the full life of a building.",
    primary: { label: "Discuss a property project", href: "#contact" },
    secondary: { label: "Our approach", href: "#about" },
  },
  {
    name: "Interiors",
    image: {
      desktop: "/images/redesign/hero-interior.jpg",
      mobile: "/images/redesign/hero-interior-mobile.jpg",
      width: 2200,
      height: 1160,
      position: "object-[50%_60%]",
    },
    alt: "Warm, modern living room with a grey sofa, leather ottomans and large windows",
    label: "Interior décor and design",
    title: "Interiors finished with care.",
    text: "Residential interior design, office décor, and hospitality design and finishing — part of Juvosa’s expertise beyond property.",
    primary: { label: "Start an enquiry", href: "#contact" },
    secondary: { label: "See all services", href: "#services" },
  },
];

const controlStyles = "grid size-11 place-items-center border border-white/40 transition-colors hover:bg-white hover:text-ink";

function SlideImage({ slide, index, active }: { slide: Slide; index: number; active: boolean }) {
  const common = { alt: slide.alt, sizes: "100vw", priority: index === 0 } as const;
  const {
    props: { srcSet: mobileSrc },
  } = getImageProps({ ...common, src: slide.image.mobile, width: 900, height: 1500 });
  const { props } = getImageProps({
    ...common,
    src: slide.image.desktop,
    width: slide.image.width,
    height: slide.image.height,
  });

  return (
    <picture
      className={`absolute inset-0 -z-20 transition-opacity duration-[1200ms] ease-out-soft ${active ? "opacity-100" : "opacity-0"}`}
    >
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      {/* eslint-disable-next-line @next/next/no-img-element -- art-directed <picture> built with getImageProps */}
      <img
        {...props}
        alt={active ? slide.alt : ""}
        className={`size-full object-cover ${slide.image.position} transition-transform duration-[8000ms] ease-out ${
          active ? "scale-100" : "scale-[1.04]"
        }`}
      />
    </picture>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const playing = !paused && !interacting;

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => goTo(active + 1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, playing, goTo]);

  const slide = slides[active];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Juvosa Limited highlights"
      className="relative isolate overflow-hidden bg-ink text-white"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setInteracting(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setInteracting(false);
      }}
      onFocus={(event) => {
        // Pause for keyboard focus only, so a tap on a control does not stop the slideshow.
        if (event.target.matches(":focus-visible")) setInteracting(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goTo(active + 1);
        if (event.key === "ArrowLeft") goTo(active - 1);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 50) goTo(active + (distance < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <h1 className="sr-only">Juvosa Limited – real estate development, management and consultancy in Lagos</h1>

      {slides.map((item, index) => (
        <SlideImage key={item.name} slide={item} index={index} active={index === active} />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(20_22_25/0.15)_0%,rgb(20_22_25/0.55)_32%,rgb(20_22_25/0.88)_100%)] md:bg-[linear-gradient(90deg,rgb(20_22_25/0.72)_0%,rgb(20_22_25/0.32)_45%,rgb(20_22_25/0)_75%),linear-gradient(180deg,rgb(20_22_25/0)_50%,rgb(20_22_25/0.8)_100%)]"
      />

      <div className="shell flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pt-28 pb-8 sm:min-h-[40rem] lg:min-h-[min(calc(100svh-7.5rem),52rem)] lg:pb-12">
        <div
          key={slide.name}
          role="group"
          aria-roledescription="slide"
          aria-label={`${active + 1} of ${slides.length}: ${slide.name}`}
          aria-live={playing ? "off" : "polite"}
          className="max-w-4xl animate-rise"
        >
          <p className="label flex items-center gap-3 text-white/85">
            <span aria-hidden="true" className="h-px w-8 bg-brand-bright" />
            {slide.label}
          </p>
          <p className="mt-6 font-serif text-[2.75rem] leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl lg:text-[4.75rem]">
            {slide.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{slide.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={slide.primary.href} className={buttonStyles.primary}>
              {slide.primary.label}
              <ArrowIcon />
            </a>
            <a href={slide.secondary.href} className={buttonStyles.outlineLight}>
              {slide.secondary.label}
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 border-t border-white/25 pt-5 lg:mt-16">
          <div className="flex flex-1 gap-4 sm:gap-8" role="group" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}: ${item.name}`}
                aria-current={index === active ? "true" : undefined}
                className={`min-h-11 flex-1 text-left transition-colors sm:max-w-48 ${
                  index === active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                <span className="relative block h-0.5 overflow-hidden bg-white/25">
                  {index === active && (
                    <span
                      key={`${active}-${playing}`}
                      className={`absolute inset-0 origin-left bg-white ${playing ? "animate-progress" : ""}`}
                    />
                  )}
                </span>
                <span className="mt-3 flex items-baseline gap-2 text-sm">
                  <span className="label">{String(index + 1).padStart(2, "0")}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous slide" className={controlStyles}>
              <ArrowIcon className="rotate-180" />
            </button>
            <button type="button" onClick={() => goTo(active + 1)} aria-label="Next slide" className={controlStyles}>
              <ArrowIcon />
            </button>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className={controlStyles}
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-current">
                {paused ? <path d="M6 4l10 6-10 6z" /> : <path d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
