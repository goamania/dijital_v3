import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Dijital V3 | Premium Web Design & Digital Agency",
    template: "%s | Dijital V3",
  },
  description: "Award-winning web design agency specializing in high-converting websites, e-commerce solutions, and digital transformation. Serving businesses across Turkey with cutting-edge design and SEO optimization.",
  keywords: ["web design", "digital agency", "e-commerce", "SEO optimization", "brand identity", "web development"],
  authors: [{ name: "Dijital V3 Agency" }],
  creator: "Dijital V3",
  publisher: "Dijital V3 Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dijital V3 | Premium Web Design & Digital Agency",
    description: "Award-winning web design agency specializing in high-converting websites, e-commerce solutions, and digital transformation.",
    url: "https://www.dijitalv3.com",
    siteName: "Dijital V3",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dijital V3 - Premium Web Design Agency",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dijital V3 | Premium Web Design & Digital Agency",
    description: "Award-winning web design agency specializing in high-converting websites, e-commerce solutions, and digital transformation.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.dijitalv3.com/#organization",
    name: "Dijital V3 Agency",
    alternateName: ["Dijital V3", "DijitalV3"],
    url: "https://www.dijitalv3.com",
    logo: "https://www.dijitalv3.com/logo.png",
    image: "https://www.dijitalv3.com/agency-photo.jpg",
    description: "Award-winning web design agency specializing in high-converting websites, e-commerce solutions, and digital transformation.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Example Street, No: 123",
      addressLocality: "Istanbul",
      addressRegion: "Istanbul",
      postalCode: "34000",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 28.9784,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/dijitalv3",
      "https://twitter.com/dijitalv3",
      "https://www.instagram.com/dijitalv3",
      "https://www.facebook.com/dijitalv3",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design & Digital Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Web Design Services",
          itemListElement: [
            {
              "@type": "Service",
              name: "Custom Website Design",
              description: "Bespoke, high-converting website designs tailored to your brand",
            },
            {
              "@type": "Service",
              name: "E-commerce Development",
              description: "Full-featured online stores with optimized checkout flows",
            },
            {
              "@type": "Service",
              name: "Landing Page Design",
              description: "High-conversion landing pages for campaigns",
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: [
            {
              "@type": "Service",
              name: "SEO Optimization",
              description: "Search engine optimization for maximum visibility",
            },
            {
              "@type": "Service",
              name: "Brand Identity Design",
              description: "Complete branding packages including logo and guidelines",
            },
          ],
        },
      ],
    },
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.dijitalv3.com/#professional-service",
    name: "Dijital V3 Web Design Services",
    image: "https://www.dijitalv3.com/services-image.jpg",
    url: "https://www.dijitalv3.com/services",
    telephone: "+90-555-123-4567",
    priceRange: "$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.9334,
        longitude: 32.8597,
      },
      geoRadius: 1000,
      description: "Serving all of Turkey with remote capabilities",
    },
    serviceType: "Web Design and Development",
    provider: {
      "@id": "https://www.dijitalv3.com/#organization",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Web Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Web Design Package",
            description: "Complete website design and development with SEO optimization",
          },
      price: "15000",
      priceCurrency: "TRY",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "E-commerce Solution",
        description: "Full e-commerce platform with payment integration",
      },
      price: "25000",
      priceCurrency: "TRY",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SEO & Digital Marketing",
        description: "Comprehensive SEO and marketing strategy",
      },
      price: "5000",
      priceCurrency: "TRY",
      billingIncrement: "Monthly",
    },
  ],
},
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
  worstRating: "1",
},
};

// WebSite Schema with SearchAction
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dijitalv3.com/#website",
  url: "https://www.dijitalv3.com",
  name: "Dijital V3 Agency Website",
  description: "Professional web design and digital services agency",
  publisher: {
    "@id": "https://www.dijitalv3.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.dijitalv3.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// FAQPage Schema
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.dijitalv3.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a professional website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our custom website design packages start from 15,000 TRY and vary based on complexity, features, and requirements. E-commerce solutions start from 25,000 TRY. We provide detailed quotes after initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical project timelines range from 4-8 weeks for standard business websites and 8-12 weeks for complex e-commerce platforms. We prioritize quality and thorough testing at each stage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SEO optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our websites come with foundational SEO optimization including technical SEO, on-page optimization, schema markup, and performance optimization. We also offer advanced SEO packages for ongoing optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and priority support to keep your website running smoothly.",
      },
    },
  ],
};

return (
  <html lang="tr" className={`${inter.variable} ${plusJakarta.variable}`}>
    <head>
      <link rel="canonical" href="https://www.dijitalv3.com" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
    </head>
    <body className="antialiased">
      {children}
    </body>
  </html>
);
}
