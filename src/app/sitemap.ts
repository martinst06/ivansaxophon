import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivansaxophon.ch'
  const lastModified = new Date()
  const languages = ['en', 'de']
  const pages = ['', '/about', '/offer', '/media', '/teaching', '/privacy', '/terms']

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add language-specific pages
  languages.forEach(lang => {
    pages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: lastModified,
        changeFrequency: page === '' ? 'weekly' : page === '/privacy' || page === '/terms' ? 'yearly' : 'monthly',
        priority: page === '' ? 1 : page === '/teaching' || page === '/offer' ? 0.8 : page === '/privacy' || page === '/terms' ? 0.3 : 0.7,
      })
    })
  })

  return sitemapEntries
} 