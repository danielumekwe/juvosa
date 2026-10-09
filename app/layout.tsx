import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://juvosaltd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juvosa Limited – Expanding our frontiers to international exposure",
  description:
    "Juvosa Limited is a real estate development, management and consultancy company based in Nigeria, with interests in fashion, interior design and importation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Juvosa Limited – Expanding our frontiers to international exposure",
    description:
      "Juvosa Limited is a real estate development, management and consultancy company based in Nigeria.",
    siteName: "Juvosa Limited",
    images: [{ url: "/images/homebuy-banner.jpg", width: 2000, height: 855, alt: "Homes in a residential development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juvosa Limited – Expanding our frontiers to international exposure",
    description:
      "Juvosa Limited is a real estate development, management and consultancy company based in Nigeria.",
    images: ["/images/homebuy-banner.jpg"],
  },
  icons: {
    icon: "/icons/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dd3333",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
