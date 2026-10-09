import ContactForm from "@/components/contact-form";

const contactDetails = [
  { icon: "⌖", title: "Office Address", content: <>16 Ikosi Road Oregun,<br />Lagos, Nigeria</> },
  { icon: "☎", title: "Telephone", content: <a href="tel:+2348030833931">(+234)-08030833931</a> },
  { icon: "✉", title: "Mail Us", content: <a href="mailto:info@juvosaltd.com">info@juvosaltd.com</a> },
  { icon: "◷", title: "Opening Hours", content: <>Mon-Fri: 10:00a.m-18:00p.m<br />Sat: 09:00a.m- 02:00pm<br />Sun: Closed</> },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap contact-inner">
        <div className="contact-form-column">
          <div className="section-heading section-heading-left">
            <p className="eyebrow">Contact us</p>
            <h2 id="contact-title">Get In Touch</h2>
          </div>
          <ContactForm />
        </div>
        <aside className="contact-info">
          <h2>Contact Info</h2>
          <div className="contact-detail-list">
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.title}>
                <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.content}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
