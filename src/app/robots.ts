import { MetadataRoute } from 'next';
import { ENV } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = ENV.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
