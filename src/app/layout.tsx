import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                url: siteConfig.url,
              },
              {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: {
                  "@id": `${siteConfig.url}/#organization`,
                },
              },
            ],
          }}
        />

        {/* Keyboard users can bypass global navigation */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        <Header />

        {/*
          Individual pages already contain their own <main>.
          Therefore this remains a div rather than another <main>.
        */}
        <div
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}