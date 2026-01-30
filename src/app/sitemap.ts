import { MetadataRoute } from 'next';
import { ENV } from '@/lib/constants';
import { getAllRoutineSlugs } from '@/data/routines';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ENV.siteUrl;

  // Static pages
  const staticPages = [
    '',
    '/como-funciona',
    '/diagnostico',
    '/rutinas',
    '/como-comprar',
    '/testimonios',
    '/contacto',
    '/legal',
  ];

  // Routine pages
  const routineSlugs = getAllRoutineSlugs();
  const routinePages = routineSlugs.map((slug) => `/rutinas/${slug}`);

  const allPages = [...staticPages, ...routinePages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/rutinas/') ? 0.8 : 0.7,
  }));
}
