"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner section-wrap">
          <div className="topbar-contact">
            <a href="mailto:info@juvosaltd.com"><span aria-hidden="true">✉</span> info@juvosaltd.com</a>
            <a href="tel:+2348030833931"><span aria-hidden="true">☎</span> (+234) 08030833931</a>
          </div>
          <div className="topbar-hours">
            <span>Mon - Fri: 9:00 am - 06.00pm</span>
            <span className="topbar-social" aria-hidden="true">f&nbsp;&nbsp;𝕏&nbsp;&nbsp;◎</span>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner section-wrap">
          <Link className="brand" href="#home" aria-label="Juvosa Limited home" onClick={closeMenu}>
            <Image src="/images/juvosa.png" alt="Juvosa Limited" width={300} height={92} priority />
          </Link>
          <nav
            id="mobile-navigation"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
            <Link className="nav-contact-mobile" href="#contact" onClick={closeMenu}>Contact Us</Link>
          </nav>
          <div className="header-actions">
            <Link className="header-contact" href="#contact">Contact Us</Link>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
