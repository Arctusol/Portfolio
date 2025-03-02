import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '../common/SectionLayout';
import { ArrowRight, Bot, Database, LineChart, Code, Cloud } from 'lucide-react';

export const services = [
  {
    title: "Solutions Cloud Azure",
    icon: Cloud,
    description: "Implémentation et gestion de solutions cloud Azure",
    features: [
      "Azure Web Apps & Functions",
      "Services Cognitifs & OCR",
      "Infrastructure Cloud",
      "Machines Virtuelles & Containers"
    ],
    technologies: ["Azure Web Apps", "Azure Functions", "Azure Document Intelligence", "Azure VM"]
  },
  {
    title: "Data Scraping & Automation",
    icon: Code,
    description: "Solutions personnalisées de collecte et d'automatisation de données",
    features: [
      "Extraction de données web",
      "Nettoyage et structuration",
      "Intégration API",
      "Automatisation des processus"
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Make", "Zapier", "PhantomBuster"]
  },
  {
    title: "Stratégie Data & Reporting",
    icon: LineChart,
    description: "Transformation de vos données en insights actionnables",
    features: [
      "Dashboards interactifs",
      "Rapports automatisés",
      "Visualisations personnalisées",
      "KPIs et métriques"
    ],
    technologies: ["BigQuery", "PowerBI", "Looker", "Python", "SQL"]
  },
  {
    title: "IA & Automatisation des Processus",
    icon: Bot,
    description: "Implémentation d'agents IA et automatisation des workflows",
    features: [
      "Agents IA autonomes",
      "Solutions vocales IA",
      "Automatisation intelligente",
      "Aide à la décision"
    ],
    technologies: ["OpenAI","HuggingFace", "LiveKit", "Elevenlabs", "Langchain", "Autogen", "CrewAI"]
  },
  {
    title: "Growth Hacking & Prospection Digitale",
    icon: ArrowRight,
    description: "Automatisation des campagnes et acquisition digitale efficace",
    features: [
      "Scraping et enrichissement de données",
      "Campagnes multicanales automatisées",
      "Optimisation du tunnel de conversion",
      "Segmentation avancée des prospects"
    ],
    technologies: ["PhantomBuster", "La Growth Machine", "Sales Navigator", "Web Scraping", "Zapier"]
  },
  {
    title: "Gestion & Optimisation CRM",
    icon: Database,
    description: "Accompagnement expert en gestion de projet et CRM",
    features: [
      "Gestion de projet Agile",
      "Formation des équipes",
      "Audit & optimisation",
      "Optimisation CRM & Automatisation"
    ],
    technologies: ["HubSpot", "Airtable", "Jira", "Notion", "Asana", "Monday"]
  }
];

const ServicesSection = () => {
  return (
    <SectionLayout
      id="services"
      title="Mes services"
      className="max-w-[1920px]"
      backgroundClass="bg-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-4 lg:px-8 xl:px-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="p-6 md:p-8 border border-white/10 hover:border-neon hover:shadow-neon/10 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-neon/10">
                  <Icon className="h-6 w-6 text-neon" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-neon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="border-neon/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default ServicesSection;