import { useTranslation } from 'react-i18next';
import { projects as projectsData } from '@/data/projects';
import { Project, TranslatedProject } from '@/types/project';

export const useProjects = () => {
  const { t } = useTranslation();

  const translateProject = (project: Project): TranslatedProject => {
    // Get base translations
    const translatedProject = {
      ...project,
      title: t(project.titleKey),
      description: t(project.descriptionKey),
      longDescription: t(project.longDescriptionKey),
    } as TranslatedProject;

    // Translate metrics if keys are provided
    if (project.metricsKeys) {
      translatedProject.metrics = project.metricsKeys.map(key => t(key));
    }

    // Translate features if keys are provided
    if (project.featuresKeys && project.features) {
      translatedProject.features = project.featuresKeys.map(key => t(key));
    }

    return translatedProject;
  };

  const getTranslatedProjects = () => {
    return projectsData.map(translateProject);
  };

  const getProjectBySlug = (slug: string): TranslatedProject | undefined => {
    const project = projectsData.find(p => p.slug === slug);
    return project ? translateProject(project) : undefined;
  };

  const getRelatedProjects = (currentSlug: string, categories: string[]): TranslatedProject[] => {
    return projectsData
      .filter(project => 
        project.slug !== currentSlug && 
        project.categories.some(cat => categories.includes(cat))
      )
      .map(translateProject)
      .slice(0, 2);
  };

  const getUniqueCategories = (): string[] => {
    const allCategories = projectsData.flatMap(project => project.categories);
    return Array.from(new Set(allCategories));
  };

  const translateCategory = (category: string): string => {
    return t(`projects.categories.${category}`);
  };

  return {
    projects: getTranslatedProjects(),
    getProjectBySlug,
    getRelatedProjects,
    getUniqueCategories,
    translateCategory,
  };
};

export default useProjects;