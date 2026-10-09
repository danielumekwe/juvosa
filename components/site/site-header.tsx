"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buttonStyles } from "@/components/site/ui";
import { company, navigation } from "@/lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 64rem)").matches) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="hidden border-b border-line bg-paper text-stone lg:block">
        <div className="shell flex h-10 items-center justify-between text-[0.8125rem]">
          <p>Real estate development, management and consultancy · Lagos, Nigeria</p>
          <div className="flex items-center gap-7">
            <a className="transition-colors hover:text-ink" href={company.phoneHref}>{company.phoneDisplay}</a>
            <a className="transition-colors hover:text-ink" href={`mailto:${company.email}`}>{company.email}</a>
            <a className="transition-colors hover:text-ink" href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 bg-paper transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-[0_1px_0_var(--color-line)]" : ""
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <a href="#top" className="shrink-0" aria-label="Juvosa Limited, back to top" onClick={closeMenu}>
            <Image src="/images/juvosa.png" alt="Juvosa" width={300} height={92} priority className="h-auto w-[6.5rem] lg:w-[7.25rem]" />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-2 text-[0.9375rem] text-ink-soft transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className={`${buttonStyles.dark} min-h-11 max-sm:hidden`}>
              Make an enquiry
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="flex h-11 items-center gap-3 px-1 text-sm font-semibold lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>{menuOpen ? "Close" : "Menu"}</span>
              <span aria-hidden="true" className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <nav aria-label="Mobile" className="shell pt-6 pb-10">
            <ol className="divide-y divide-line border-b border-line">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu} className="flex items-baseline gap-5 py-4">
                    <span className="label w-6 text-mist">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-[2rem] leading-tight">{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <a href="#contact" onClick={closeMenu} className={`${buttonStyles.primary} mt-8 w-full`}>
              Make an enquiry
            </a>
            <div className="mt-10 grid gap-1 text-stone">
              <a href={company.phoneHref} className="py-1">{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`} className="py-1">{company.email}</a>
              <p className="py-1">{company.addressLines.join(", ")}</p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
