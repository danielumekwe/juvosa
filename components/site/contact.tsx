import EnquiryForm from "@/components/site/enquiry-form";
import { ArrowIcon, SectionLabel } from "@/components/site/ui";
import { company } from "@/lib/site";

const linkStyles = "group inline-flex items-center gap-2 font-serif text-2xl leading-snug transition-colors hover:text-brand";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-sand py-20 sm:py-28 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>Contact</SectionLabel>
          <h2 id="contact-title" className="mt-5 text-[2.5rem] leading-[1.05] sm:text-[3.25rem]">
            Let’s talk about your property.
          </h2>
          <p className="mt-6 max-w-md text-lg text-stone">
            Whether you are buying, building, managing or investing, send us a message or visit our office in Oregun.
          </p>

          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="label text-stone">Call or WhatsApp</dt>
              <dd className="mt-2 grid gap-1">
                <a href={company.phoneHref} className={linkStyles}>{company.phoneDisplay}</a>
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Message on WhatsApp
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-stone">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${company.email}`} className={linkStyles}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt className="label text-stone">Office</dt>
              <dd className="mt-2">
                <address className="font-serif text-2xl leading-snug not-italic">
                  {company.addressLines[0]}
                  <br />
                  {company.addressLines[1]}
                </address>
                <a href={company.mapHref} target="_blank" rel="noopener noreferrer" className="group mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Get directions
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="label text-stone">Opening hours</dt>
              <dd className="mt-2">
                <table className="w-full max-w-sm text-[0.9375rem] whitespace-nowrap">
                  <tbody>
                    {company.hours.map((row) => (
                      <tr key={row.days}>
                        <th scope="row" className="py-0.5 pr-4 text-left font-normal text-stone">{row.days}</th>
                        <td className="py-0.5 text-right">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-paper p-6 sm:p-10 lg:col-span-7 lg:p-12">
          <h3 className="text-3xl leading-tight">Send an enquiry</h3>
          <p className="mt-2 mb-8 text-stone">Tell us a little about what you need and the right person will get back to you.</p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
