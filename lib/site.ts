// Company details used across the site. Every value here comes from the existing juvosaltd.com content.

export const siteUrl = "https://juvosaltd.com";

export const company = {
  name: "Juvosa Limited",
  shortName: "Juvosa",
  founded: 2003,
  founders: "Charles Osa Uzamere and Juventus Uzamere",
  email: "info@juvosaltd.com",
  phoneDisplay: "+234 803 083 3931",
  phoneHref: "tel:+2348030833931",
  whatsappHref: "https://wa.me/2348030833931",
  addressLines: ["16 Ikosi Road, Oregun", "Lagos, Nigeria"],
  mapHref: "https://www.google.com/maps/search/?api=1&query=16+Ikosi+Road+Oregun+Lagos+Nigeria",
  hours: [
    { days: "Monday – Friday", time: "10:00 am – 6:00 pm" },
    { days: "Saturday", time: "9:00 am – 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Juvosa", href: "#why-juvosa" },
  { label: "Contact", href: "#contact" },
] as const;

export const enquiryTopics = [
  "Real estate development",
  "Property management",
  "Real estate consultancy",
  "Interior décor and design",
  "Fashion – wholesale and retail",
  "Importation of cars and heavy-duty equipment",
  "Something else",
] as const;
