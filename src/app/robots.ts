import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow crawling of redirect pages that could cause GSC issues
      disallow: [
        '/_next/',
        '/api/',
      ],
    },
    sitemap: 'https://ivansaxophon.ch/sitemap.xml',
  }
} 