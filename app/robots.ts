import { MetadataRoute } from "next";

const BASE_URL = "https://www.solumeci.com"; // reemplaza con el dominio real cuando lo tengas

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}