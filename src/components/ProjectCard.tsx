import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, ChevronRight } from 'lucide-react';
import type { TranslatedProject } from '@/types/project';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: TranslatedProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className="group overflow-hidden border border-input-border bg-input-bg hover:border-neon hover:shadow-neon/20 hover:scale-[1.01] transition-all duration-300 relative flex flex-col h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="block absolute inset-0 z-10"
        aria-label={`${t('projects.view')} ${project.title}`}
      />
      
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/10 to-transparent" />
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
          {project.categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-input-border bg-background/80 backdrop-blur-sm text-foreground"
            >
              {t(`projects.categories.${category.toLowerCase().replace(/\s+/g, '_')}`)}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-neon transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background-alt hover:text-neon hover:scale-110 transition-all duration-300 relative z-20"
              aria-label={`${t('projects.live_demo')} ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="text-muted mb-6 text-base md:text-lg line-clamp-2">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-neon mb-3">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
              <span>{t('projects.metrics')}</span>
            </div>
            <ul className="space-y-2">
              {project.metrics.slice(0, 2).map((metric, index) => (
                <li key={index} className="text-sm md:text-base text-muted flex items-start gap-2">
                  <span className="text-neon">•</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-background-alt hover:bg-background-alt2 text-foreground transition-colors px-3 py-1 text-sm md:text-base"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center text-sm md:text-base text-neon mt-auto">
          <span className="group-hover:underline">{t('projects.view')}</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">{t('projects.view')} {project.title}</span>
    </Card>
  );
};

export default ProjectCard;
