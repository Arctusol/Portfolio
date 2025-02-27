import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "Medical Analysis",
    slug: "medical-analysis",
    description: "Plateforme d'analyse médicale développée avec Streamlit, facilitant l'interprétation des données médicales pour les professionnels de santé.",
    longDescription: "Une plateforme complète permettant aux professionnels de santé d'analyser et d'interpréter efficacement les données médicales. Intégration de modèles d'IA pour l'aide à la décision et la détection précoce de pathologies.",
    link: "https://medicalanalysis.azurewebsites.net",
    demoUrl: "https://medicalanalysis.azurewebsites.net",
    githubUrl: "https://github.com/Arctusol/medical-analysis",
    tech: ["Streamlit", "Python", "Azure"],
    category: "Analyse de Données",
    metrics: [
      "Réduction de 40% du temps d'analyse",
      "Précision de détection > 95%",
      "+200 utilisateurs actifs"
    ],
    coverImage: "/projects/medical-analysis/cover.jpg",
    features: [
      "Analyse automatique des données médicales",
      "Détection précoce des pathologies",
      "Interface intuitive pour les professionnels",
      "Rapports détaillés générés automatiquement"
    ],
    images: [
      {
        src: "/projects/medical-analysis/dashboard.jpg",
        alt: "Dashboard principal d'analyse",
        caption: "Interface principale montrant les analyses en temps réel"
      },
      {
        src: "/projects/medical-analysis/detection.jpg",
        alt: "Système de détection",
        caption: "Visualisation des résultats de détection"
      }
    ],
    date: "2024-01"
  },
  {
    title: "Photomad",
    slug: "photomad",
    description: "Application web permettant aux utilisateurs de partager et de découvrir des photographies, mettant en avant une communauté de passionnés.",
    longDescription: "Une plateforme sociale dédiée aux passionnés de photographie, offrant des fonctionnalités avancées de partage, de découverte et d'interaction. Intégration d'outils d'édition et d'analyse d'images.",
    link: "https://photomad-web.azurewebsites.net",
    demoUrl: "https://photomad-web.azurewebsites.net",
    githubUrl: "https://github.com/Arctusol/photomad",
    tech: ["React", "Azure", "Node.js"],
    category: "Solutions IA Spécialisées",
    metrics: [
      "IA de classification d'images",
      "10k+ photos analysées",
      "Temps de traitement < 2s"
    ],
    coverImage: "/projects/photomad/cover.jpg",
    features: [
      "Upload et partage de photos",
      "Édition d'image intégrée",
      "Classification automatique par IA",
      "Système de tags intelligent"
    ],
    images: [
      {
        src: "/projects/photomad/feed.jpg",
        alt: "Feed principal",
        caption: "Page d'accueil avec flux de photos"
      },
      {
        src: "/projects/photomad/editor.jpg",
        alt: "Éditeur de photo",
        caption: "Interface d'édition avancée"
      }
    ],
    date: "2024-02"
  },
  {
    title: "Tracking Budget",
    slug: "tracking-budget",
    description: "Outil de gestion budgétaire personnel avec intégration Azure Document pour l'analyse des relevés bancaires et tickets de caisse.",
    longDescription: "Solution innovante de gestion financière personnelle utilisant l'IA pour automatiser la catégorisation des dépenses et générer des insights pertinents sur les habitudes de consommation.",
    link: "https://tracking-budget-ten.vercel.app/auth",
    demoUrl: "https://tracking-budget-ten.vercel.app/demo",
    githubUrl: "https://github.com/Arctusol/tracking-budget",
    tech: ["React", "Azure", "Document AI"],
    category: "Data Scraping & Automation",
    metrics: [
      "Précision OCR > 98%",
      "5000+ documents traités",
      "Économie de 2h/semaine/utilisateur"
    ],
    coverImage: "/projects/tracking-budget/cover.jpg",
    features: [
      "Scan automatique de tickets",
      "Catégorisation intelligente",
      "Analyse des tendances",
      "Prévisions budgétaires"
    ],
    images: [
      {
        src: "/projects/tracking-budget/dashboard.jpg",
        alt: "Dashboard principal",
        caption: "Vue d'ensemble des dépenses"
      },
      {
        src: "/projects/tracking-budget/scan.jpg",
        alt: "Scanner de tickets",
        caption: "Interface de scan et analyse"
      }
    ],
    date: "2024-01"
  },
  {
    title: "Mac-P'AI",
    slug: "mac-pai",
    description: "Plateforme proposant des agents autonomes pour automatiser les tâches et optimiser les processus décisionnels en temps réel.",
    longDescription: "Système avancé d'agents autonomes basé sur l'IA, capable d'automatiser des tâches complexes et d'optimiser les processus de prise de décision en temps réel. Intégration de technologies d'IA de pointe.",
    link: "https://mac-pai.com",
    demoUrl: "https://demo.mac-pai.com",
    githubUrl: "https://github.com/Arctusol/mac-pai",
    tech: ["Python", "Autogen", "CrewAI"],
    category: "Solutions IA Spécialisées",
    metrics: [
      "Automatisation de 75% des tâches",
      "ROI moyen de 300%",
      "Réduction des erreurs de 90%"
    ],
    coverImage: "/projects/mac-pai/cover.jpg",
    features: [
      "Agents IA autonomes",
      "Orchestration de tâches",
      "Optimisation en temps réel",
      "Interface de contrôle avancée"
    ],
    images: [
      {
        src: "/projects/mac-pai/agents.jpg",
        alt: "Vue des agents",
        caption: "Interface de gestion des agents"
      },
      {
        src: "/projects/mac-pai/tasks.jpg",
        alt: "Gestion des tâches",
        caption: "Dashboard d'orchestration"
      }
    ],
    date: "2024-03"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter(project => project.slug !== currentSlug && project.category === category)
    .slice(0, 2);
};