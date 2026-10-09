import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { siteUrl } from "@/lib/site";

const serif = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "Juvosa Limited – Real estate development, management and consultancy in Lagos";
const description =
  "Juvosa Limited is a Lagos-based real estate development, management and consultancy company, established in 2003, with interests in interior design, fashion and importation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Juvosa Limited",
    locale: "en_NG",
    images: [{ url: "/images/redesign/lagos-lagoon-aerial.jpg", width: 2200, height: 1650, alt: "Aerial view of Lagos lagoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/redesign/lagos-lagoon-aerial.jpg"],
  },
  icons: {
    icon: "/icons/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ec",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
