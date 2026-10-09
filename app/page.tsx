import type { Metadata } from "next";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";

export const metadata: Metadata = {
  title: "Juvosa Limited – Expanding our frontiers to international exposure",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="intro section-wrap" aria-labelledby="intro-title">
          <h1 id="intro-title">
            <span className="watermark" aria-hidden="true">JUVOSA LTD</span>
            Juvosa Limited is a real estate development, management and consultancy company
          </h1>
          <p>
            It was established in 2003 by the Charles Osa Uzamere and Juventus Uzamere which
            informed the name Juvosa. It was set up with the primary aim of real estate but over
            the years the company has spread its tentacles into the fashion industry (Wholesale
            and Retail), importation of cars and heavy duty equipment, purchase of luxury watches
            and jewellery,interior decor and design and so much more
          </p>
        </section>
        <About />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
