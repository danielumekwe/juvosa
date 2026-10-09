import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/original/back-to-top";

const latestPosts = [
  { title: "Hello world!", date: "March 14, 2021", image: "/images/latest-post-01.jpg" },
  { title: "Whale be raised, it must be in a month", date: "January 18, 2021", image: "/images/latest-post-02.jpg" },
  { title: "Career Tips For Emerging Photographers", date: "January 18, 2021", image: "/images/latest-post-01.jpg" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-about">
          <Link href="#home" aria-label="Juvosa Limited home">
            <Image src="/images/juvosa.png" alt="Juvosa Limited" width={300} height={92} />
          </Link>
          <p>
            Juvosa Ltd was set up with the primary aim of real estate but over the years the company has spread its
            tentacles into the fashion industry (Wholesale and Retail), importation of cars and heavy duty equipment,
            purchase of luxury watches and jewellery,interior decor and design and so much more.
          </p>
          <Link className="footer-discover" href="#about">Discover More</Link>
        </div>
        <div className="footer-contact">
          <h2>Contact Info</h2>
          <ul>
            <li><span aria-hidden="true">⌖</span><p>16 Ikosi Road Oregun,<br />Lagos, Nigeria</p></li>
            <li><span aria-hidden="true">☎</span><a href="tel:+2348030833931">(+234) 08030833931</a></li>
            <li><span aria-hidden="true">✉</span><a href="mailto:info@juvosaltd.com">info@juvosaltd.com</a></li>
            <li><span aria-hidden="true">◉</span><a href="https://wa.me/2348030833931">08030833931</a></li>
            <li><span aria-hidden="true">◷</span><p>Mon - Fri: 9:00 am - 06.00pm</p></li>
          </ul>
        </div>
        <div className="footer-posts">
          <h2>Latest Posts</h2>
          {latestPosts.map((post) => (
            <article className="footer-post" key={post.title}>
              <Image src={post.image} alt="" width={80} height={68} />
              <div>
                <h3>{post.title}</h3>
                <time>{post.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <p>© Copyright 2021 Juvosa Ltd. All Rights Reserved.</p>
          <div className="footer-social" aria-label="Social networks">
            <span aria-label="Facebook">f</span>
            <span aria-label="X">𝕏</span>
            <span aria-label="Pinterest">p</span>
            <span aria-label="LinkedIn">in</span>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
