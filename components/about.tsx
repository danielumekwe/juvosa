import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner section-wrap">
        <Image
          className="about-image"
          src="/images/about-building.jpg"
          alt="Juvosa residential development"
          width={640}
          height={480}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <div className="about-copy">
          <p className="eyebrow">Our Mission</p>
          <h2 id="about-title">About us</h2>
          <p className="mission">
            Our mission is to go global and expand our frontiers to international exposure. We hope to go into
            construction on a large scale.
          </p>
          <p>
            We are passionate about quality, hence we take a holistic approach to the development process; from
            land sourcing and planning, to design, build and sales. Given our expertise, we are able to assist our
            clients through the full life cycle of buildings, whether it is maintenance, upgrades or investments.
          </p>
          <p>
            The Company is established on the ethos of quality, innovation and unrivalled customer services as a
            guiding principle.
          </p>
        </div>
      </div>
    </section>
  );
}
