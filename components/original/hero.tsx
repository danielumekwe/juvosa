"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/homebuy-banner.jpg",
    title: "Nigeria’s No 1 Real Estate Company",
    description: "The best Real estate company based in Nigeria. The Largest Real Estate Investment Firm in Nigeria.",
  },
  {
    image: "/images/construction-silhouette.jpg",
    title: "Juvosaltd now Global",
    description:
      "Over the years the company has spread its tentacles into the fashion industry (Wholesale and Retail), importation of cars and heavy duty equipment....",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  function showSlide(direction: number) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  const slide = slides[activeSlide];

  return (
    <section
      className="hero"
      id="home"
      aria-label="Juvosa Limited introduction"
      style={{ backgroundImage: `url("${slide.image}")` }}
    >
      <div className="hero-shade" />
      <div className="hero-content section-wrap" key={slide.title}>
        <div className="hero-copy">
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <Link className="button button-light" href="#contact">Contact Us</Link>
        </div>
      </div>
      <button className="hero-arrow hero-arrow-prev" type="button" aria-label="Previous slide" onClick={() => showSlide(-1)}>
        ‹
      </button>
      <button className="hero-arrow hero-arrow-next" type="button" aria-label="Next slide" onClick={() => showSlide(1)}>
        ›
      </button>
      <div className="hero-dots" aria-label="Choose hero slide">
        {slides.map((item, index) => (
          <button
            key={item.title}
            className={index === activeSlide ? "is-active" : ""}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
