import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '../common/SectionLayout';
import { ArrowRight, Bot, Database, LineChart, Code } from 'lucide-react';

const services = [
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
    technologies: ["Python", "Selenium", "BeautifulSoup", "Airflow"]
  },
  {
    title: "Analyse de Données",
    icon: LineChart,
    description: "Transformation de vos données en insights actionnables",
    features: [
      "Dashboards interactifs",
      "Rapports automatisés",
      "Visualisations personnalisées",
      "KPIs et métriques"
    ],
    technologies: ["PowerBI", "Looker", "Python", "SQL"]
  },
  {
    title: "Solutions IA Spécialisées",
    icon: Bot,
    description: "Implémentation d'agents IA pour optimiser vos processus",
    features: [
      "Agents IA autonomes",
      "Automatisation intelligente",
      "Traitement du langage",
      "Aide à la décision"
    ],
    technologies: ["Autogen", "CrewAI", "LangChain", "OpenAI"]
  },
  {
    title: "Consulting & Formation",
    icon: Database,
    description: "Accompagnement expert pour vos projets data",
    features: [
      "Audit technique",
      "Formation personnalisée",
      "Accompagnement projet",
      "Optimisation des process"
    ],
    technologies: ["Airtable", "MongoDB", "PostgreSQL", "Python"]
  }
];

const ServicesSection = () => {
  return (
    <SectionLayout
      id="services"
      title="Mes Services"
      className="max-w-7xl"
      backgroundClass="bg-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="p-6 border border-white/10 hover:border-neon transition-colors">
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