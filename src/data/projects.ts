import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    titleKey: "projects.medcap.title",
    title: "MedCap",
    slug: "medical-analysis",
    descriptionKey: "projects.medcap.description",
    description: "Plateforme d'analyse médicale développée avec Streamlit, facilitant l'interprétation des données médicales pour les professionnels de santé.",
    longDescriptionKey: "projects.medcap.longDescription",
    longDescription: "Une plateforme complète permettant aux professionnels de santé d'analyser et d'interpréter efficacement les données médicales. Intégration d'un chatbot IA pour toutes questions relative à la base de donnée.",
    link: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    demoUrl: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    githubUrl: "https://github.com/Arctusol/medical_data_analysis",
    tech: ["Streamlit", "Python", "Azure", "Langchain", "OpenAI"],
    categories: ["data_analysis"],
    metricsKeys: [
      "projects.medcap.metrics.0",
      "projects.medcap.metrics.1",
      "projects.medcap.metrics.2",
      "projects.medcap.metrics.3"
    ],
    metrics: [
      "Facilite l'analyse des données médicales",
      "Aide à la prise de décision dans les unités médicales",
      "Optimisation du temps des professionnels de santé",
      "Amélioration du taux d'occupation des lits"
    ],
    coverImage: "/projects/medical-analysis/landing.png",
    featuresKeys: [
      "projects.medcap.features.0",
      "projects.medcap.features.1",
      "projects.medcap.features.2",
      "projects.medcap.features.3",
    ],
    features: [
      "Analyse automatique des données médicales",
      "Interface intuitive pour les professionnels",
      "Rapports détaillés générés automatiquement",
      "Discussion avec un chatbot connecté à la base de données"
    ],
    images: [
      {
        src: "/projects/medical-analysis/dashboard_2.png",
        altKey: "projects.medcap.images.dashboard.alt",
        alt: "Dashboard principal d'analyse",
        captionKey: "projects.medcap.images.dashboard.caption",
        caption: "Interface principale montrant les analyses en temps réel"
      },
      {
        src: "/projects/medical-analysis/global_view.png",
        altKey: "projects.medcap.images.detection.alt",
        alt: "Système de détection",
        captionKey: "projects.medcap.images.detection.caption",
        caption: "Carte interactive pour les données hospitalières par région"
      },
      {
        src: "/projects/medical-analysis/specific_service.png",
        altKey: "projects.medcap.images.analysis.alt",
        alt: "Dashboard principal d'analyse",
        captionKey: "projects.medcap.images.analysis.caption",
        caption: "Interface principale montrant les analyses en temps réel"
      },
      {
        src: "/projects/medical-analysis/evolution_data.webp",
        altKey: "projects.medcap.images.evolution.alt",
        alt: "Evolution des pathologies",
        captionKey: "projects.medcap.images.evolution.caption",
        caption: "Graphique montrant l'évolution des pathologies dans le temps"
      }
    ],
    video: {
      src: "/projects/medical-analysis/medical_langchain_flow_ia.mp4",
      captionKey: "projects.medcap.video.caption",
      caption: "Démonstration du flux de travail LangChain et IA",
      posterImage: "/projects/medical-analysis/global_view.png"
    },
    date: "2024-12"
  },
  {
    titleKey: "projects.photomad.title",
    title: "Photomad",
    slug: "photomad",
    descriptionKey: "projects.photomad.description",
    description: "Application web permettant aux utilisateurs de partager et de découvrir des photographies, mettant en avant une communauté de passionnés.",
    longDescriptionKey: "projects.photomad.longDescription",
    longDescription: "Une plateforme sociale dédiée aux passionnés de photographie, offrant des fonctionnalités avancées de partage, de découverte et d'interaction. Intégration d'outils d'édition et d'analyse d'images.",
    link: "https://photomad-web.azurewebsites.net",
    demoUrl: "https://photomad-web.azurewebsites.net",
    githubUrl: "https://github.com/Arctusol/photomad",
    tech: ["React", "Azure", "Node.js", "MongoDB", "FastAPI", "OpenAI"],
    categories: ["classification_and_interaction"],
    metricsKeys: [
      "projects.photomad.metrics.0",
      "projects.photomad.metrics.1",
      "projects.photomad.metrics.2",
      "projects.photomad.metrics.3",
      "projects.photomad.metrics.4",
      "projects.photomad.metrics.5"
    ],
    metrics: [
      "Partage de photos historiques",
      "Analyse des clichés par IA pour une classification intelligente",
      "Interface fluide et intuitive pour une expérience utilisateur optimale",
      "Création d'albums et partage avec une communauté",
      "Identification de personnes et lieux sur les photos",
      "Carte du monde interactive"
    ],
    coverImage: "/projects/photomad/landing_page.png",
    featuresKeys: [
      "projects.photomad.features.0",
      "projects.photomad.features.1",
      "projects.photomad.features.2",
      "projects.photomad.features.3"
    ],
    features: [
      "Upload et partage de photos",
      "Édition d'image intégrée",
      "Classification automatique par IA",
      "Système de tags intelligent"
    ],
    images: [
      {
        src: "/projects/photomad/upload_zone.png",
        altKey: "projects.photomad.images.upload.alt",
        alt: "Ajout de photos",
        captionKey: "projects.photomad.images.upload.caption",
        caption: "Interface d'ajout de photos avec description généré par IA"
      },
      {
        src: "/projects/photomad/carte_du_monde.png",
        altKey: "projects.photomad.images.worldmap.alt",
        alt: "Carte du monde interactive",
        captionKey: "projects.photomad.images.worldmap.caption",
        caption: "Visionneuse de photos avec carte interactive"
      },
      {
        src: "/projects/photomad/backend_fastapi.png",
        altKey: "projects.photomad.images.backend.alt",
        alt: "Backend FastAPI",
        captionKey: "projects.photomad.images.backend.caption",
        caption: "Interface de gestion des endpoints"
      }
    ],
    video: {
      src: "/projects/photomad/flow_photomad.mp4",
      captionKey: "projects.photomad.video.caption",
      caption: "Démonstration du flow de navigation sur Photomad",
      posterImage: "/projects/photomad/landing_page.png"
    },
    date: "2024-12"
  },
  {
    titleKey: "projects.spendwise.title",
    title: "SpendWise",
    slug: "tracking-budget",
    descriptionKey: "projects.spendwise.description",
    description: "Outil de gestion budgétaire personnel",
    longDescriptionKey: "projects.spendwise.longDescription",
    longDescription: "Solution innovante de gestion financière personnelle...",
    link: "https://tracking-budget-ten.vercel.app/",
    demoUrl: "https://tracking-budget-ten.vercel.app/",
    githubUrl: "https://github.com/Arctusol/tracking-budget",
    tech: ["Vite.js", "Azure", "Document OCR", "Supabase", "Vercel", "Data Viz"],
    categories: ["data_scraping_automation"],
    metricsKeys: [
      "projects.spendwise.metrics.0",
      "projects.spendwise.metrics.1",
      "projects.spendwise.metrics.2",
      "projects.spendwise.metrics.3",
      "projects.spendwise.metrics.4"
    ],
    metrics: [
      "Automatisation du suivi des dépenses",
      "Catégorisation intelligente pour un meilleur contrôle budgétaire",
      "Analyse des tendances pour optimiser les finances personnelles",
      "Interface intuitive facilitant l'utilisation au quotidien",
      "Lecture OCR des tickets de caisse et relevés bancaires"
    ],
    coverImage: "/projects/tracking-budget/cover.png",
    featuresKeys: [
      "projects.spendwise.features.0",
      "projects.spendwise.features.1",
      "projects.spendwise.features.2",
      "projects.spendwise.features.3"
    ],
    features: [
      "Scan automatique de tickets et relevés",
      "Catégorisation intelligente",
      "Analyse des tendances",
      "Prévisions budgétaires"
    ],
    images: [
      {
        src: "/projects/tracking-budget/dashboard.png",
        altKey: "projects.spendwise.images.dashboard.alt",
        alt: "Dashboard principal",
        captionKey: "projects.spendwise.images.dashboard.caption",
        caption: "Vue d'ensemble des dépenses"
      },
      {
        src: "/projects/tracking-budget/scan.png",
        altKey: "projects.spendwise.images.scan.alt",
        alt: "Scanner de tickets",
        captionKey: "projects.spendwise.images.scan.caption",
        caption: "Interface de scan et analyse"
      }
    ],
    date: "2025-02"
  },
  {
    titleKey: "projects.ai_call_bot.title",
    title: "AI Call Bot",
    slug: "ai-call-bot",
    descriptionKey: "projects.ai_call_bot.description",
    description: "Solution innovante de prospection automatisée utilisant l'IA conversationnelle et la synthèse vocale pour des appels naturels et efficaces.",
    longDescriptionKey: "projects.ai_call_bot.longDescription",
    longDescription: "Plateforme de prospection téléphonique automatisée combinant des technologies de pointe en IA conversationnelle, synthèse vocale et reconnaissance vocale. Le système permet des interactions naturelles et personnalisées avec les prospects, optimisant le processus de prospection tout en maintenant une approche humaine.",
    link: "https://frontend-one-delta-80.vercel.app/",
    demoUrl: "https://frontend-one-delta-80.vercel.app/",
    githubUrl: "https://github.com/Arctusol/frontend",
    tech: ["LiveKit", "Elevenlabs", "OpenAI", "Deepgram", "Twilio", "React", "TypeScript"],
    categories: ["voicebot"],
    metricsKeys: [
      "projects.ai_call_bot.metrics.0",
      "projects.ai_call_bot.metrics.1",
      "projects.ai_call_bot.metrics.2",
      "projects.ai_call_bot.metrics.3"
    ],
    metrics: [
      "Automatisation des appels de prospection",
      "Réduction de la charge de travail des commerciaux",
      "Qualification automatisé des prospects",
      "Gain de temps et réduction des coûts"
    ],
    coverImage: "/projects/ai-call-bot/cover.png",
    featuresKeys: [
      "projects.ai_call_bot.features.0",
      "projects.ai_call_bot.features.1",
      "projects.ai_call_bot.features.2",
      "projects.ai_call_bot.features.3"
    ],
    features: [
      "Conversations naturelles et fluides en français",
      "Synthèse vocale haute qualité",
      "Reconnaissance vocale en temps réel",
      "Analytics et reporting détaillé"
    ],
    images: [
      {
        src: "/projects/ai-call-bot/dashboard.png",
        altKey: "projects.ai_call_bot.images.dashboard.alt",
        alt: "Dashboard de gestion des appels",
        captionKey: "projects.ai_call_bot.images.dashboard.caption",
        caption: "Interface principale de gestion des campagnes"
      },
      {
        src: "/projects/ai-call-bot/analytics.png",
        altKey: "projects.ai_call_bot.images.analytics.alt",
        alt: "Analytics des conversations",
        captionKey: "projects.ai_call_bot.images.analytics.caption",
        caption: "Analyse détaillée des performances"
      }
    ],
    date: "2025-03"
  },
  {
    titleKey: "projects.mac_pai.title",
    title: "Mac-P'AI",
    slug: "mac-pai",
    descriptionKey: "projects.mac_pai.description",
    description: "Plateforme proposant des agents autonomes",
    longDescriptionKey: "projects.mac_pai.longDescription",
    longDescription: "Système avancé d'agents autonomes basé sur l'IA...",
    link: "https://mac-pai.com",
    demoUrl: "https://mac-pai.com/ai-agent-framework",
    githubUrl: "https://github.com/Arctusol/POC",
    tech: ["Python", "Autogen", "CrewAI", "LangChain", "MongoDB", "OpenAI"],
    categories: ["specialized_ai_solutions"],
    metricsKeys: [
      "projects.mac_pai.metrics.0",
      "projects.mac_pai.metrics.1",
      "projects.mac_pai.metrics.2",
      "projects.mac_pai.metrics.3"
    ],
    metrics: [
      "Automatisation intelligente des tâches",
      "Optimisation en temps réel pour une prise de décision efficace",
      "Réduction des erreurs et amélioration de la productivité",
      "Gestion avancée des workflows avec une interface intuitive"
    ],
    coverImage: "/projects/mac-pai/cover.png",
    featuresKeys: [
      "projects.mac_pai.features.0",
      "projects.mac_pai.features.1",
      "projects.mac_pai.features.2",
      "projects.mac_pai.features.3"
    ],
    features: [
      "Agents IA autonomes",
      "Orchestration de tâches",
      "Optimisation en temps réel",
      "Interface de contrôle avancée"
    ],
    images: [
      {
        src: "/projects/mac-pai/agents.png",
        altKey: "projects.mac_pai.images.agents.alt",
        alt: "Vue des agents",
        captionKey: "projects.mac_pai.images.agents.caption",
        caption: "Interface de gestion des agents"
      },
      {
        src: "/projects/mac-pai/agents.png",
        altKey: "projects.mac_pai.images.workspace.alt",
        alt: "Création d'un workspace",
        captionKey: "projects.mac_pai.images.workspace.caption",
        caption: "Validation des informations pour la création d'un workspace"
      },
      {
        src: "/projects/mac-pai/tasks.png",
        altKey: "projects.mac_pai.images.tasks.alt",
        alt: "Gestion des tâches",
        captionKey: "projects.mac_pai.images.tasks.caption",
        caption: "Dashboard d'orchestration"
      }
    ],
    date: "2024-12"
  }
];