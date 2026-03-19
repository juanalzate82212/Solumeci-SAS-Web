import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { url } from "inspector";

const BASE_URL = "https://www.solumeci.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Solumeci SAS - Estructuras Metálicas y Obras Civiles en Medellín",
    template: "%s | Solumeci SAS",
  },
  description: "Fabricación de estructuras metálicas, mobiliario industrial y obras civiles en Medellín y todo Colombia. Más de 8 años de experiencia y 100+ proyectos ejecutados",

  keywords: [
    "estructuras metálicas Medellín",
    "obras civiles Colombia",
    "mobiliario para laboratorio",
    "instalación estructuras metálicas",
    "metalmecánica Medellín",
    "Solumeci SAS",
  ],

  authors: [{ name: "Solumeci SAS", url: BASE_URL}, { name: "Juan José Alzate García"}],

  creator: "Solumeci SAS",

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "Solumeci SAS",
    title: "Solumeci SAS — Estructuras Metálicas y Obras Civiles en Medellín",
    description: "Fabricamos e instalamos estructuras metálicas, mobiliario para laboratorio y obras civiles en Medellín y toda Colombia.",
    images: [
      {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Solumeci SAS - Estructuras Metálicas y Obras Civiles"
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Solumeci SAS — Estructuras Metálicas y Obras Civiles en Medellín",
    description:
      "Fabricamos e instalamos estructuras metálicas, mobiliario para laboratorio y obras civiles en Medellín y toda Colombia.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
