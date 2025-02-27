import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/routes';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Générer le sitemap.xml
const generateSitemapFile = () => {
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully');
};

// Générer le robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://votre-domaine.com/sitemap.xml`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully');
};

// Générer le manifest.json
const generateManifest = () => {
  const manifest = {
    name: 'Antonin Bourdelle - Portfolio',
    short_name: 'AB Portfolio',
    description: 'Expert en IA générative, data science et automatisation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00ffb9',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✅ manifest.json generated successfully');
};

// Script principal
const main = () => {
  console.log('🚀 Generating SEO files...');

  try {
    // S'assurer que le dossier public existe
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    generateSitemapFile();
    generateRobotsTxt();
    generateManifest();

    console.log('✨ All SEO files generated successfully!');
  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
};

main();