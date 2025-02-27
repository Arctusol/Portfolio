import SectionLayout from '../common/SectionLayout';
import ProjectCard from '../ProjectCard';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  // Obtenir les catégories uniques
  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <SectionLayout
      id="projects"
      title="Projets Récents"
      className="max-w-7xl"
    >
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="border-neon/50 px-4 py-2"
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;