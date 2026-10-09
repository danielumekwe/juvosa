const services = [
  {
    title: "Real estate",
    description: "We are a real estate development, management and consultancy company.",
    icon: "⌂",
  },
  {
    title: "Fashion Industry",
    description: "We are also leading interior design/decorating company in Nigeria.",
    icon: "♧",
  },
  {
    title: "Interior decor and design",
    description: "Our forte includes residential interior design, office decor and hospitality designs and finishing.",
    icon: "✓",
  },
  {
    title: "Importation of Heavy duty equipment and cars",
    description: "We are also a importation, cargo freight, logistics and warehousing services provider in Nigeria",
    icon: "♧",
  },
];

export default function Services() {
  return (
    <>
      <section className="services-heading" id="service" aria-labelledby="services-title">
        <div className="section-wrap section-heading">
          <p className="eyebrow">Choose Us</p>
          <h2 id="services-title">Our Services</h2>
        </div>
      </section>
      <section className="services-section" aria-label="Juvosa services">
        <div className="section-wrap services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
