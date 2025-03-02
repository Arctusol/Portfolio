import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "MedCap",
    slug: "medical-analysis",
    description: "Plateforme d'analyse médicale développée avec Streamlit, facilitant l'interprétation des données médicales pour les professionnels de santé.",
    longDescription: "Une plateforme complète permettant aux professionnels de santé d'analyser et d'interpréter efficacement les données médicales. Intégration de modèles d'IA pour l'aide à la décision et la détection précoce de pathologies.",
    link: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    demoUrl: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    githubUrl: "https://github.com/Arctusol/medical_data_analysis",
    tech: ["Streamlit", "Python", "Azure", "Langchain", "OpenAI"],
    category: ["Analyse de données"],
    metrics: [
      "Facilite l'analyse des données médicales",
      "Aide à la prise de décision dans les unités médicales",
      "Optimisation du temps des professionnels de santé",
      "Amélioration du taux d'occupation des lits"
    ],
    coverImage: "/projects/medical-analysis/landing.png",
    features: [
      "Analyse automatique des données médicales",
      "Détection précoce des pathologies",
      "Interface intuitive pour les professionnels",
      "Rapports détaillés générés automatiquement",
      "Discussion avec un chatbot connecté à la base de données"
    ],
    images: [
      {
        src: "/projects/medical-analysis/dashboard_2.png",
        alt: "Dashboard principal d'analyse",
        caption: "Interface principale montrant les analyses en temps réel"
      },
      {
        src: "/projects/medical-analysis/global_view.png",
        alt: "Système de détection",
        caption: "Visualisation des résultats de détection"
      },
      {
        src: "/projects/medical-analysis/specific_service.png",
        alt: "Dashboard principal d'analyse",
        caption: "Interface principale montrant les analyses en temps réel"
      },
    ],
    video: {
      src: "/projects/medical-analysis/medical_langchain_flow_ia.mp4",
      caption: "Démonstration du flux de travail LangChain et IA",
      posterImage: "/projects/medical-analysis/global_view.png"
    },
    date: "2024-12"
  },
  {
    title: "Photomad",
    slug: "photomad",
    description: "Application web permettant aux utilisateurs de partager et de découvrir des photographies, mettant en avant une communauté de passionnés.",
    longDescription: "Une plateforme sociale dédiée aux passionnés de photographie, offrant des fonctionnalités avancées de partage, de découverte et d'interaction. Intégration d'outils d'édition et d'analyse d'images.",
    link: "https://photomad-web.azurewebsites.net",
    demoUrl: "https://photomad-web.azurewebsites.net",
    githubUrl: "https://github.com/Arctusol/photomad",
    tech: ["React", "Azure", "Node.js", "MongoDB", "FastAPI", "OpenAI"],
    category: ["Classification et interaction"],
    metrics: [
      "Partage de photos historiques",
      "Analyse des clichés par IA pour une classification intelligente",
      "Interface fluide et intuitive pour une expérience utilisateur optimale",
      "Création d'albums et partage avec une communauté",
      "Identification de personnes et lieux sur les photos",
      "Carte du monde interactive"
    ],
    coverImage: "/projects/photomad/landing_page.png",
    features: [
      "Upload et partage de photos",
      "Édition d'image intégrée",
      "Classification automatique par IA",
      "Système de tags intelligent"
    ],
    images: [
      {
        src: "/projects/photomad/upload_zone.png",
        alt: "Ajout de photos",
        caption: "Interface d'ajout de photos avec description généré par IA"
      },
      {
        src: "/projects/photomad/carte_du_monde.png",
        alt: "carte du monde interactive",
        caption: "Visionneuse de photos avec carte interactive"
      },
      {
        src: "/projects/photomad/backend_fastapi.png",
        alt: "backend fastapi",
        caption: "Interface de gestion des endpoints"
      },
    ],
    video: {
      src: "/projects/photomad/flow_photomad.mp4",
      caption: "Démonstration du flow de navigation sur Photomad",
      posterImage: "/projects/photomad/landing_page.png"
    },
    date: "2024-12"
  },
  {
    title: "AI Call Bot",
    slug: "ai-call-bot",
    description: "Solution innovante de prospection automatisée utilisant l'IA conversationnelle et la synthèse vocale pour des appels naturels et efficaces.",
    longDescription: "Plateforme de prospection téléphonique automatisée combinant des technologies de pointe en IA conversationnelle, synthèse vocale et reconnaissance vocale. Le système permet des interactions naturelles et personnalisées avec les prospects, optimisant le processus de prospection tout en maintenant une approche humaine.",
    link: "https://frontend-one-delta-80.vercel.app/",
    demoUrl: "https://frontend-one-delta-80.vercel.app/",
    githubUrl: "https://github.com/Arctusol/frontend",
    tech: ["LiveKit", "Elevenlabs", "OpenAI", "Deepgram", "Twilio", "React", "TypeScript"],
    category: ["Voicebot"],
    metrics: [
      "Automatisation des appels de prospection",
      "Réduction de la charge de travail des commerciaux",
      "Qualification automatisé des prospects",
      "Gain de temps et réduction des coûts"
    ],
    coverImage: "/projects/ai-call-bot/cover.png",
    features: [
      "Conversations naturelles et fluides en français",
      "Synthèse vocale haute qualité",
      "Reconnaissance vocale en temps réel",
      "Analytics et reporting détaillé"
    ],
    images: [
      {
        src: "/projects/ai-call-bot/dashboard.png",
        alt: "Dashboard de gestion des appels",
        caption: "Interface principale de gestion des campagnes"
      },
      {
        src: "/projects/ai-call-bot/analytics.png",
        alt: "Analytics des conversations",
        caption: "Analyse détaillée des performances"
      }
    ],
    date: "2025-03"
  },
  {
    title: "SpendWise",
    slug: "tracking-budget",
    description: "Outil de gestion budgétaire personnel avec intégration Azure Document pour l'analyse des relevés bancaires et tickets de caisse.",
    longDescription: "Solution innovante de gestion financière personnelle utilisant l'IA pour automatiser la catégorisation des dépenses et générer des insights pertinents sur les habitudes de consommation.",
    link: "https://tracking-budget-ten.vercel.app/",
    demoUrl: "https://tracking-budget-ten.vercel.app/",
    githubUrl: "https://github.com/Arctusol/tracking-budget",
    tech: ["Vite.js", "Azure", "Document OCR", "Supabase", "Vercel", "Data Viz" ],
    category: ["Data Scraping & Automation"],
    metrics: [
      "Automatisation du suivi des dépenses",
      "Catégorisation intelligente pour un meilleur contrôle budgétaire",
      "Analyse des tendances pour optimiser les finances personnelles",
      "Interface intuitive facilitant l'utilisation au quotidien",
      "Lecture OCR des tickets de caisse et relevés bancaires"
    ],
    coverImage: "/projects/tracking-budget/cover.png",
    features: [
      "Scan automatique de tickets et relevés bancaires",
      "Catégorisation intelligente",
      "Analyse des tendances",
      "Prévisions budgétaires"
    ],
    images: [
      {
        src: "/projects/tracking-budget/dashboard.png",
        alt: "Dashboard principal",
        caption: "Vue d'ensemble des dépenses"
      },
      {
        src: "/projects/tracking-budget/scan.png",
        alt: "Scanner de tickets",
        caption: "Interface de scan et analyse"
      }
    ],
    date: "2025-02"
  },
  {
    title: "Mac-P'AI",
    slug: "mac-pai",
    description: "Plateforme proposant des agents autonomes pour automatiser les tâches et optimiser les processus décisionnels en temps réel.",
    longDescription: "Système avancé d'agents autonomes basé sur l'IA, capable d'automatiser des tâches complexes et d'optimiser les processus de prise de décision en temps réel. Intégration de technologies d'IA de pointe.",
    link: "https://mac-pai.com",
    demoUrl: "https://mac-pai.com/ai-agent-framework",
    githubUrl: "https://github.com/Arctusol/POC",
    tech: ["Python", "Autogen", "CrewAI", "LangChain","MongoDB", "OpenAI"],
    category: ["Solutions IA Spécialisées"],
    metrics: [
      "Automatisation intelligente des tâches",
      "Optimisation en temps réel pour une prise de décision efficace",
      "Réduction des erreurs et amélioration de la productivité",
      "Gestion avancée des workflows avec une interface intuitive"
    ],
    coverImage: "/projects/mac-pai/cover.png",
    features: [
      "Agents IA autonomes",
      "Orchestration de tâches",
      "Optimisation en temps réel",
      "Interface de contrôle avancée"
    ],
    images: [
      {
        src: "/projects/mac-pai/agents.png",
        alt: "Vue des agents",
        caption: "Interface de gestion des agents"
      },
      {
        src: "/projects/mac-pai/agents.png",
        alt: "Création d'un workspace",
        caption: "Validation des informations pour la création d'un workspace"
      },
      {
        src: "/projects/mac-pai/tasks.png",
        alt: "Gestion des tâches",
        caption: "Dashboard d'orchestration"
      }
    ],
    date: "2024-12"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter(project => project.slug !== currentSlug && project.category[""] === category)
    .slice(0, 2);
};
