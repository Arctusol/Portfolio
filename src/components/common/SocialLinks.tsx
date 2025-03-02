import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';

interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'sidebar';
  showPreviews?: boolean;
}

const githubInfo = {
  username: 'Arctusol',
  profileUrl: 'https://github.com/Arctusol',
};

const linkedinInfo = {
  username: 'antonin-bourdelle',
  profileUrl: 'https://www.linkedin.com/in/antonin-bourdelle/',
};

const SocialLinks = ({ variant = 'header', showPreviews = true }: SocialLinksProps) => {
  const containerClasses = {
    header: 'flex items-center gap-4',
    footer: 'flex items-center gap-4',
    sidebar: 'flex flex-col gap-4',
  }[variant];

  return (
    <div className={containerClasses}>
      {/* GitHub */}
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10"
            asChild
          >
            <a
              href={githubInfo.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </HoverCardTrigger>
        {showPreviews && (
          <HoverCardContent
            align="end"
            className="w-80 bg-black/80 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">@{githubInfo.username}</h4>
                <p className="text-sm text-gray-200">
                  Expert en IA & Data Analyse
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">IA</Badge>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-white/10 transition-colors border-white/20 text-white"
                asChild
              >
                <a
                  href={githubInfo.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  Voir le profil
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>

      {/* LinkedIn */}
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10"
            asChild
          >
            <a
              href={linkedinInfo.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </HoverCardTrigger>
        {showPreviews && (
          <HoverCardContent
            align="end"
            className="w-80 bg-black/80 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Antonin Bourdelle</h4>
                <p className="text-sm text-gray-200">
                  Expert en IA Générative & Data Science | Automatisation & Analyse de Données
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">
                    🎯 Spécialisé en solutions IA & Data
                  </span>
                  <span className="text-sm">
                    🌍 Expérience internationale
                  </span>
                  <span className="text-sm">
                    💼 Projets innovants
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-white/10 transition-colors border-white/20 text-white"
                asChild
              >
                <a
                  href={linkedinInfo.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  Voir le profil
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
};

export default SocialLinks;