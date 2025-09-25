import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentina Bentancor | Desarrolladora & Analista de Datos | Power BI | Genexus",
  description:
    "Portfolio de Valentina Bentancor - Desarrolladora de software especializada en Genexus y análisis de datos. Creando soluciones digitales innovadoras con Power BI, SQL y tecnologías modernas.",
  keywords: [
    "Valentina Bentancor",
    "desarrolladora",
    "analista de datos",
    "Power BI",
    "Genexus",
    "K2BTools",
    "SQL",
    "Python",
    "Business Intelligence",
    "Uruguay",
    "Montevideo",
    "portfolio",
    "desarrollo de software",
    "dashboard",
    "data analyst"
  ],
  authors: [{ name: "Valentina Bentancor" }],
  creator: "Valentina Bentancor",
  publisher: "Valentina Bentancor",
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
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://valentina-bentancor.vercel.app",
    siteName: "Valentina Bentancor Portfolio",
    title: "Valentina Bentancor | Desarrolladora & Analista de Datos",
    description:
      "Desarrolladora de software especializada en Genexus y análisis de datos. Creando soluciones digitales innovadoras con Power BI, SQL y tecnologías modernas.",
    images: [
      {
        url: "/Valentina.jpg",
        width: 1200,
        height: 630,
        alt: "Valentina Bentancor - Desarrolladora & Analista de Datos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentina Bentancor | Desarrolladora & Analista de Datos",
    description:
      "Desarrolladora de software especializada en Genexus y análisis de datos. Creando soluciones digitales innovadoras.",
    images: ["/Valentina.jpg"],
    creator: "@valentina_bentancor",
    site: "@valentina_bentancor",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://valentina-bentancor.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Valentina Bentancor",
              "jobTitle": "Software Developer & Data Analyst",
              "description": "Desarrolladora de software especializada en Genexus y análisis de datos",
              "url": "https://valentina-bentancor.vercel.app",
              "image": "https://valentina-bentancor.vercel.app/Valentina.jpg",
              "sameAs": [
                "https://linkedin.com/in/valentina-bentancor",
                "https://github.com/valentina-bentancor"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montevideo",
                "addressCountry": "Uruguay"
              },
              "knowsAbout": [
                "Genexus",
                "K2BTools",
                "Power BI",
                "SQL",
                "Python",
                "Business Intelligence",
                "Data Analysis",
                "Software Development",
                "Dashboard Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad ORT Uruguay"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "GeneXus Consulting"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
