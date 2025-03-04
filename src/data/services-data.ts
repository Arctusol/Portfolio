import { Bot, Database, LineChart, Code, Cloud, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Service {
  titleKey: string;
  icon: any;
  descriptionKey: string;
  featuresKeys: string[];
  technologies: string[];
}

const servicesList: Service[] = [
    {
    titleKey: "services.list.ai.title",
    icon: Bot,
    descriptionKey: "services.list.ai.description",
    featuresKeys: [
        "services.list.ai.features.agents",
        "services.list.ai.features.voice",
        "services.list.ai.features.automation",
        "services.list.ai.features.decision"
    ],
    technologies: ["OpenAI", "HuggingFace", "LiveKit", "Elevenlabs", "Langchain", "Autogen", "CrewAI"]
    },

  {
    titleKey: "services.list.scraping.title",
    icon: Code,
    descriptionKey: "services.list.scraping.description",
    featuresKeys: [
      "services.list.scraping.features.extraction",
      "services.list.scraping.features.cleaning",
      "services.list.scraping.features.integration",
      "services.list.scraping.features.automation"
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Make", "Zapier", "PhantomBuster"]
  },
  {
    titleKey: "services.list.data.title",
    icon: LineChart,
    descriptionKey: "services.list.data.description",
    featuresKeys: [
      "services.list.data.features.dashboards",
      "services.list.data.features.reports",
      "services.list.data.features.visualizations",
      "services.list.data.features.kpis"
    ],
    technologies: ["BigQuery", "PowerBI", "Looker", "Python", "SQL"]
  },

  {
    titleKey: "services.list.growth.title",
    icon: ArrowRight,
    descriptionKey: "services.list.growth.description",
    featuresKeys: [
      "services.list.growth.features.scraping",
      "services.list.growth.features.campaigns",
      "services.list.growth.features.conversion",
      "services.list.growth.features.segmentation"
    ],
    technologies: ["Lemlist", "La Growth Machine", "Sales Navigator", "Web Scraping", "Zapier", "Make"]
  },
  {
    titleKey: "services.list.crm.title",
    icon: Database,
    descriptionKey: "services.list.crm.description",
    featuresKeys: [
      "services.list.crm.features.agile",
      "services.list.crm.features.training",
      "services.list.crm.features.audit",
      "services.list.crm.features.optimization"
    ],
    technologies: ["HubSpot", "Airtable", "Jira", "Notion", "Asana", "Monday"]
  },
  {
    titleKey: "services.list.cloud.title",
    icon: Cloud,
    descriptionKey: "services.list.cloud.description",
    featuresKeys: [
      "services.list.cloud.features.webapps",
      "services.list.cloud.features.cognitive",
      "services.list.cloud.features.infrastructure",
      "services.list.cloud.features.containers"
    ],
    technologies: ["Azure Web Apps", "Azure Functions", "Azure Document Intelligence", "Azure VM"]
  },
];

export const useServices = () => {
  const { t } = useTranslation();

  const getTranslatedServices = () => {
    return servicesList.map(service => ({
      ...service,
      title: t(service.titleKey),
      description: t(service.descriptionKey),
      features: service.featuresKeys.map(key => t(key))
    }));
  };

  return {
    services: getTranslatedServices()
  };
};

export default servicesList;