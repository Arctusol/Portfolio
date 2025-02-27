import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
}

const defaultMeta = {
  title: 'Antonin Bourdelle - Expert IA & Data Science',
  description: 'Expert en IA générative, data science et automatisation. Services de scraping, analyse de données et solutions IA personnalisées.',
  image: '/og-image.png',
  siteUrl: 'https://votre-domaine.com',
};

const Head = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  type = 'website',
  canonicalUrl,
}: HeadProps) => {
  const fullTitle = title === defaultMeta.title 
    ? title 
    : `${title} | ${defaultMeta.title.split(' - ')[0]}`;

  const fullImage = image.startsWith('http') 
    ? image 
    : `${defaultMeta.siteUrl}${image}`;

  const canonical = canonicalUrl || defaultMeta.siteUrl;

  // Mise à jour du titre de l'onglet
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  return (
    <Helmet>
      {/* Métadonnées de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={defaultMeta.title.split(' - ')[0]} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Autres métadonnées importantes */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />

      {/* Schéma JSON-LD pour le site */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: fullTitle,
          description: description,
          url: canonical,
          image: fullImage,
          author: {
            '@type': 'Person',
            name: 'Antonin Bourdelle',
            url: defaultMeta.siteUrl,
          },
          ...(type === 'article' && {
            datePublished: new Date().toISOString(),
            publisher: {
              '@type': 'Person',
              name: 'Antonin Bourdelle',
              url: defaultMeta.siteUrl,
            },
          }),
        })}
      </script>
    </Helmet>
  );
};

export default Head;