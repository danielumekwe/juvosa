import Image from "next/image";

const reasons = [
  { title: "Solution Focused", icon: "/icons/process.png" },
  { title: "Customer Oriented", icon: "/icons/consulting.png" },
  { title: "99.99% Success", icon: "/icons/security.png" },
  { title: "Decision Maker", icon: "/icons/target.png" },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Choose Us</p>
          <h2 id="why-title">Why Choose Us</h2>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <Image src={reason.icon} alt="" width={65} height={65} />
              <h3>{reason.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
