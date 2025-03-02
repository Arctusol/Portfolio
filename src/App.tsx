import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ProjectPage from './pages/ProjectPage';
import { initializeGA } from './hooks/useAnalytics';
import Head from './components/common/Head';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import LoadingTranslations from './components/common/LoadingTranslations';
import { useLanguage } from './contexts/LanguageContext';
import './i18n';

// Wrap routes with language loading state
const RoutesWithLanguage = () => {
  const { isLoading } = useLanguage();

  if (isLoading) {
    return <LoadingTranslations />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {process.env.NODE_ENV === 'development'}
    </>
  );
};

function App() {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          {/* Base SEO for all pages */}
          <Head />
          
          <Suspense fallback={<LoadingTranslations />}>
            <RoutesWithLanguage />
          </Suspense>
        </Router>
        <Analytics />
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
