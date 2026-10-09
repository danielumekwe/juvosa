import type { Metadata } from "next";
import "./original.css";

// The pre-redesign homepage, kept for comparison. It is excluded from search engines and the sitemap.
export const metadata: Metadata = {
  title: "Juvosa Limited – Original design",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function OriginalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
