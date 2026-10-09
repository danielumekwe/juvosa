import Image from "next/image";
import { company, navigation } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-mist">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Image src="/images/juvosa.png" alt="Juvosa" width={300} height={92} className="h-auto w-32" />
          <p className="mt-6 max-w-sm">
            A Lagos real estate development, management and consultancy company, established in {company.founded}, with
            interests in interior design, fashion and importation.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-7">
          <h2 className="label text-paper">Explore</h2>
          <ul className="mt-5 grid gap-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-paper">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="label text-paper">Get in touch</h2>
          <ul className="mt-5 grid gap-2.5">
            <li><a href={company.phoneHref} className="transition-colors hover:text-paper">{company.phoneDisplay}</a></li>
            <li><a href={`mailto:${company.email}`} className="transition-colors hover:text-paper">{company.email}</a></li>
            <li>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={company.mapHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
                {company.addressLines.join(", ")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Juvosa Limited. All rights reserved.</p>
          <a href="#top" className="transition-colors hover:text-paper">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
