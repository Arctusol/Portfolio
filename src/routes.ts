import type { Project } from './types/project';
import { projects } from './data/projects';

interface Route {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  type: 'website' | 'article';
}

interface DynamicRoute extends Route {
  generatePath: (params: any) => string;
}

const staticRoutes: Record<string, Route> = {
  home: {
    path: '/',
    title: 'Antonin Bourdelle - Expert IA & Data Science',
    description: 'Expert en IA générative, data science et automatisation. Services de scraping, analyse de données et solutions IA personnalisées.',
    ogImage: '/og-image.png',
    type: 'website',
  },
  notFound: {
    path: '/404',
    title: 'Page non trouvée',
    description: 'La page que vous recherchez n\'existe pas.',
    ogImage: '/og-image.png',
    type: 'website',
  },
};

const dynamicRoutes: Record<string, DynamicRoute> = {
  project: {
    path: '/projects/:slug',
    generatePath: (params: { slug: string }) => `/projects/${params.slug}`,
    title: '', // Sera rempli dynamiquement
    description: '', // Sera rempli dynamiquement
    ogImage: '', // Sera rempli dynamiquement
    type: 'article',
  },
};

export const getProjectRoute = (project: Project): Route => ({
  path: dynamicRoutes.project.generatePath({ slug: project.slug }),
  title: project.title,
  description: project.description,
  ogImage: project.coverImage,
  type: 'article',
});

export const getAllProjectRoutes = (): Route[] => {
  return projects.map(getProjectRoute);
};

export const getRouteByPath = (path: string): Route | null => {
  // Vérifier les routes statiques
  const staticRoute = Object.values(staticRoutes).find(route => route.path === path);
  if (staticRoute) return staticRoute;

  // Vérifier les routes de projet
  if (path.startsWith('/projects/')) {
    const slug = path.replace('/projects/', '');
    const project = projects.find(p => p.slug === slug);
    if (project) return getProjectRoute(project);
  }

  return null;
};

export const generateSitemap = () => {
  const baseUrl = 'https://votre-domaine.com';
  const routes = [
    ...Object.values(staticRoutes),
    ...getAllProjectRoutes(),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <changefreq>${route.type === 'article' ? 'monthly' : 'weekly'}</changefreq>
      <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
};

export { staticRoutes, dynamicRoutes };