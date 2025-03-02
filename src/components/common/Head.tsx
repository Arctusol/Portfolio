import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES, Language } from '../../types/language';
import { useLocation } from 'react-router-dom';

interface HeadProps {
  title?: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({
  title = 'Antonin Bourdelle - Full Stack Developer & Software Engineer',
  description = 'Portfolio of Antonin Bourdelle, Full Stack Developer and Software Engineer specializing in modern web technologies.',
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Language alternates for SEO */}
      {SUPPORTED_LANGUAGES.map((lang: Language) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${window.location.origin}${location.pathname}${location.search}`}
        />
      ))}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={language} />
      {SUPPORTED_LANGUAGES.filter(lang => lang !== language).map(lang => (
        <meta key={lang} property="og:locale:alternate" content={lang} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Head;