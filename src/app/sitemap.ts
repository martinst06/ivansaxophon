import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivansaxophon.ch'
  const lastModified = new Date()
  const languages = ['en', 'de']
  const pages = ['', '/lessons', '/about', '/offer']

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add language-specific pages
  languages.forEach(lang => {
    pages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: lastModified,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page === '/lessons' || page === '/offer' ? 0.8 : 0.7,
      })
    })
  })

  // Add root redirect
  sitemapEntries.push({
    url: baseUrl,
    lastModified: lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  })

  return sitemapEntries
} 