import Image from "next/image";

const services = [
  { label: "Real Estate", percent: 55 },
  { label: "Fashion Industry", percent: 47 },
  { label: "Interior decor and design", percent: 47 },
  { label: "Importation of Heavy duty equipment and cars", percent: 47 },
];

const projects = [
  { src: "/images/project-01.jpg", alt: "Juvosa real estate project" },
  { src: "/images/project-02.jpg", alt: "Juvosa building development" },
  { src: "/images/project-03.jpg", alt: "Juvosa design project" },
  { src: "/images/project-04.jpg", alt: "Juvosa property project" },
  { src: "/images/project-05.jpg", alt: "Juvosa interior project" },
  { src: "/images/project-06.jpg", alt: "Juvosa construction project" },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="section-wrap">
        <div className="portfolio-intro">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="portfolio-title">Recent Portfolios</h2>
          </div>
          <div className="portfolio-description">
            <p>
              At Juvosa LTD, for each project we establish relationships with partners who we know will help us
              create added value for your project. As well as bringing together the public and private sectors, we
              make sector-overarching links to gather knowledge and to learn from each other.
            </p>
            <p>Our next project: 500-600 capacity school for Children&apos;s Homestead Schools</p>
          </div>
        </div>
        <div className="portfolio-progress">
          {services.map((service) => (
            <div className="progress-item" key={service.label}>
              <div className="progress-label">
                <span>{service.label}</span>
                <span>{service.percent}%</span>
              </div>
              <div className="progress-track" aria-label={`${service.label} ${service.percent}%`}>
                <span style={{ width: `${service.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="project-gallery" aria-label="Project photographs">
          {projects.map((project, index) => (
            <div className="project-image" key={project.src}>
              <Image
                src={project.src}
                alt={project.alt}
                width={640}
                height={480}
                sizes="(max-width: 767px) 88vw, (max-width: 1100px) 46vw, 31vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
