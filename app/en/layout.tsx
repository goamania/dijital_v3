import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dijitalv3.com'),
  title: {
    default: "Dijital V3 | Award-Winning Web Design & Digital Agency",
    template: "%s | Dijital V3",
  },
  description: "Transform your vision into stunning websites that captivate, convert, and elevate your brand. Premium web design, e-commerce, and digital marketing services.",
  keywords: ["web design", "digital agency", "e-commerce", "SEO optimization", "brand identity", "web development"],
  alternates: {
    canonical: "https://www.dijitalv3.com/en",
    languages: {
      "tr": "https://www.dijitalv3.com",
      "en": "https://www.dijitalv3.com/en",
    },
  },
  openGraph: {
    title: "Dijital V3 | Award-Winning Web Design & Digital Agency",
    description: "Transform your vision into stunning websites that captivate, convert, and elevate your brand.",
    url: "https://www.dijitalv3.com/en",
    siteName: "Dijital V3",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dijital V3 | Award-Winning Web Design & Digital Agency",
    description: "Transform your vision into stunning websites that captivate, convert, and elevate your brand.",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
