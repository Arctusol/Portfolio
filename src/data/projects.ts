import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    titleKey: "projects.medcap.title",
    title: "MedCap",
    slug: "medical-analysis",
    descriptionKey: "projects.medcap.description",
    description: "Plateforme d'analyse médicale développée avec Streamlit, facilitant l'interprétation des données médicales pour les professionnels de santé.",
    longDescriptionKey: "projects.medcap.longDescription",
    longDescription: "Une plateforme complète permettant aux professionnels de santé d'analyser et d'interpréter efficacement les données médicales. Intégration de modèles d'IA pour l'aide à la décision et la détection précoce de pathologies.",
    link: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    demoUrl: "https://medicalanalysis.azurewebsites.net/Vue_globale",
    githubUrl: "https://github.com/Arctusol/medical_data_analysis",
    tech: ["Streamlit", "Python", "Azure", "Langchain", "OpenAI"],
    categories: ["data_analysis"],
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
      {
        src: "/projects/medical-analysis/evolution_data.webp",
        alt: "Evolution des pathologies",
        caption: "Graphique montrant l'évolution des pathologies dans le temps"
      }
    ],
    video: {
      src: "/projects/medical-analysis/medical_langchain_flow_ia.mp4",
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
    metrics: [
      "Partage de photos historiques",
      "Analyse des clichés par IA pour une classification intelligente",
      "Interface fluide et intuitive pour une expérience utilisateur optimale",
      "Création d'albums et partage avec une communauté"
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
      }
    ],
    video: {
      src: "/projects/photomad/flow_photomad.mp4",
      caption: "Démonstration du flow de navigation sur Photomad",
      posterImage: "/projects/photomad/landing_page.png"
    },
    date: "2024-12"
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
    date: "2025-03"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, categories: string[]): Project[] => {
  return projects
    .filter(project => 
      project.slug !== currentSlug && 
      project.categories.some(cat => categories.includes(cat))
    )
    .slice(0, 2);
};