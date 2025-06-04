import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivansaxophon.ch'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/performances`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-me`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
} 