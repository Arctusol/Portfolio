import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, ChevronRight } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border border-white/10 hover:border-neon transition-all">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge 
          variant="outline" 
          className="absolute top-4 right-4 border-neon/50 bg-black/50 backdrop-blur-sm"
        >
          {project.category}
        </Badge>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-neon transition-colors">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <p className="text-gray-400 mb-6 line-clamp-2">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-neon">
              <TrendingUp className="h-4 w-4" />
              <span>Métriques clés</span>
            </div>
            <ul className="space-y-1">
              {project.metrics.slice(0, 2).map((metric, index) => (
                <li key={index} className="text-sm text-gray-400">
                  • {metric}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/5 hover:bg-white/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm text-neon hover:underline"
        >
          En savoir plus
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
