import SectionLayout from '../common/SectionLayout';
import ProjectCard from '../ProjectCard';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/hooks/useProjects';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { projects, getUniqueCategories, translateCategory } = useProjects();
  const categories = getUniqueCategories();

  return (
    <SectionLayout
      id="projects"
      title={t('projects.title')}
      description={t('projects.description')}
      className="max-w-[1920px]"
    >
      <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="border-neon/50 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base whitespace-nowrap"
          >
            {translateCategory(category)}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-4 lg:px-8 xl:px-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;