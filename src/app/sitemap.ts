import { MetadataRoute } from "next";
import { projectsData, blogData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maxoratech.com";
  
  // Static route records
  const staticPaths = ["", "/about", "/services", "/portfolio", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog post article routes
  const blogPaths = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...blogPaths];
}
