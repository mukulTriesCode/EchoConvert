import { MetadataRoute } from 'next'

// Replace with your actual domain
const URL = 'https://audioforge.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/tools',
    '/tools/ai-format-tool',
    '/tools/audio-converter',
    '/tools/audio-trimmer',
    '/tools/audio-compressor',
    '/tools/volume-booster',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }))
}
