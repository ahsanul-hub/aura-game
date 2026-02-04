import { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const pages = [
  "", // homepage
  "top-up-ml",
  "top-up-free-fire",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pakargaming.id";

  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: page === "" ? 1 : 0.9,
    })),
  );
}
