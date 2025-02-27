import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { initializeGA } from './hooks/useAnalytics';
import Head from './components/common/Head';

function App() {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {/* SEO de base pour toutes les pages */}
        <Head />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
