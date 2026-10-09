import About from "@/components/original/about";
import Contact from "@/components/original/contact";
import Footer from "@/components/original/footer";
import Header from "@/components/original/header";
import Hero from "@/components/original/hero";
import Portfolio from "@/components/original/portfolio";
import Services from "@/components/original/services";
import WhyChooseUs from "@/components/original/why-choose-us";

export default function OriginalHomePage() {
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
