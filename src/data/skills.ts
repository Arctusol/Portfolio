import { BrainCircuit, Cloud, Database, Code, Layout, Terminal, Network, FileCode, Bot } from 'lucide-react';
import { SkillWithUseCases } from '../types/skills';

export const skillsData: SkillWithUseCases[] = [
  {
    category: "Développement Backend",
    icon: Code,
    name: "Backend Stack",
    useCases: [
      {
        description: "APIs haute performance FastAPI",
        projectCount: 5,
        details: "REST, WebSockets, architectures microservices"
      },
      {
        description: "Automatisation Python",
        projectCount: 9,
        details: "Scripts, web scraping, intégrations"
      },
      {
        description: "Solutions Cloud Native",
        projectCount: 5,
        details: "Azure, Docker, Kubernetes"
      }
    ]
  },
  {
    category: "Développement Frontend",
    icon: FileCode,
    name: "Frontend Stack",
    useCases: [
      {
        description: "Applications React modernes",
        projectCount: 6,
        details: "SPA, SSR avec Next.js, TailwindCSS"
      },
      {
        description: "Interfaces TypeScript",
        projectCount: 6,
        details: "Types stricts, meilleure maintenabilité"
      },
      {
        description: "Déploiement Vercel",
        projectCount: 3,
        details: "CI/CD, optimisation des performances"
      }
    ]
  },
  {
    category: "IA & Machine Learning",
    icon: Bot,
    name: "AI Solutions",
    useCases: [
      {
        description: "Intégrations LLM avancées",
        projectCount: 7,
        details: "OpenAI, Anthropic, modèles personnalisés"
      },
      {
        description: "Agents autonomes",
        projectCount: 2,
        details: "Autogen, CrewAI, orchestration"
      },
      {
        description: "Solutions vocales",
        projectCount: 1,
        details: "Elevenlabs, Deepgram, reconnaissance vocale"
      }
    ]
  },
  {
    category: "Web Scraping & Automation",
    icon: Terminal,
    name: "Data Collection",
    useCases: [
      {
        description: "Scraping à grande échelle",
        projectCount: 10,
        details: "Selenium, BeautifulSoup, monitoring de prix"
      },
      {
        description: "Automatisation complexe",
        projectCount: 3,
        details: "Make, Zapier, intégrations multi-services"
      },
      {
        description: "Collecte de données structurées",
        projectCount: 12,
        details: "APIs, bases de données, transformation"
      }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    name: "Azure Services",
    useCases: [
      {
        description: "Architecture Cloud Native",
        projectCount: 5,
        details: "Web Apps, Functions, Containers"
      },
      {
        description: "Services cognitifs",
        projectCount: 6,
        details: "Form Recognizer, Computer Vision, LLMs"
      },
      {
        description: "Infrastructure as Code",
        projectCount: 2,
        details: "Terraform, ARM templates, automatisation"
      }
    ]
  },
  {
    category: "Data & Analytics",
    icon: Database,
    name: "Data Processing",
    useCases: [
      {
        description: "Visualisation avancée",
        projectCount: 10,
        details: "PowerBI, Looker Studio, tableaux de bord"
      },
      {
        description: "Pipelines de données",
        projectCount: 8,
        details: "BigQuery, MongoDB, ETL automatisé"
      },
      {
        description: "Analyse prédictive",
        projectCount: 2,
        details: "Machine Learning, séries temporelles"
      }
    ]
  }
];

export default skillsData;