import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Remplacer par votre ID GA4

export const initializeGA = () => {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
};

interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

const useAnalytics = () => {
  const location = useLocation();

  // Suivi des changements de page
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Événement générique
  const trackEvent = useCallback((name: string, params: Record<string, any> = {}) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', name, params);
    }
  }, []);

  // Événements prédéfinis
  const analytics = {
    trackEvent,

    trackProjectView: (projectTitle: string) => {
      trackEvent('project_view', {
        project_title: projectTitle,
      });
    },

    trackServiceClick: (serviceName: string) => {
      trackEvent('service_click', {
        service_name: serviceName,
      });
    },

    trackSocialClick: (platform: string) => {
      trackEvent('social_click', {
        platform,
      });
    },

    trackContactSubmit: () => {
      trackEvent('contact_submit');
    },

    trackDemoAccess: (projectTitle: string) => {
      trackEvent('demo_access', {
        project_title: projectTitle,
      });
    },

    trackDownload: (fileName: string) => {
      trackEvent('file_download', {
        file_name: fileName,
      });
    },

    trackSearch: (searchTerm: string) => {
      trackEvent('search', {
        search_term: searchTerm,
      });
    },

    trackFilter: (filterCategory: string, filterValue: string) => {
      trackEvent('filter_use', {
        filter_category: filterCategory,
        filter_value: filterValue,
      });
    },

    trackScroll: (depth: number) => {
      trackEvent('scroll_depth', {
        depth: depth,
      });
    },

    trackEngagement: (section: string, timeSpent: number) => {
      trackEvent('section_engagement', {
        section,
        time_spent: timeSpent,
      });
    }
  };

  return analytics;
};

export default useAnalytics;