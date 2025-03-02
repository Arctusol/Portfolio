import { useTranslation } from 'react-i18next';
import { projects as projectsData } from '@/data/projects';
import { Project, TranslatedProject } from '@/types/project';

export const useProjects = () => {
  const { t } = useTranslation();

  const translateProject = (project: Project): TranslatedProject => ({
    ...project,
    title: t(project.titleKey || project.title),
    description: t(project.descriptionKey || project.description),
    longDescription: t(project.longDescriptionKey || project.longDescription),
  });

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
    return t(`projects.categories.${category.toLowerCase().replace(/\s+/g, '_')}`);
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