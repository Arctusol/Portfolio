import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ExternalLink,
  Github,
  X,
  Gauge,
  Clock,
  LineChart,
  Code,
  Database,
  Cpu,
  LayoutDashboard,
  Users,
  Monitor,
  Bot,
  FileText,
  BrainCircuit
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProjectLayout from '@/components/layouts/ProjectLayout';
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProjects } from '@/hooks/useProjects';
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getProjectBySlug } = useProjects();
  const { t } = useTranslation();
  
  const project = getProjectBySlug(slug || '');
  
  if (!project) {
    navigate('/404');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-black/50 border-b border-white/10 py-4">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('navigation.projects')}
            </Link>
          </div>
        </div>

        <ProjectLayout className="max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-12">
          <div className="grid gap-8 lg:grid-cols-[2.5fr,1fr] py-8">
            {/* Main Content */}
            <div className="space-y-12 order-2 lg:order-1">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-400 text-base md:text-lg">{project.longDescription}</p>
              </div>

              {/* Video Section */}
              {project.video && (
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold">{t('projects.live_demo')}</h2>
                  <div className="relative aspect-video bg-black/20 rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full"
                      controls
                      poster={project.video.posterImage}
                    >
                      <source src={project.video.src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                    {project.video.caption && (
                      <p className="mt-2 text-sm text-gray-400">{project.video.caption}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold">{t('projects.tech_stack')}</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {project.images.map((image, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
                        onClick={() => {
                          setSelectedImageIndex(index);
                          setIsGalleryOpen(true);
                        }}
                      >
                        <figure>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover aspect-video"
                          />
                          {image.caption && (
                            <figcaption className="p-4 text-sm text-gray-400">
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Gallery Dialog */}
              <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black/95">
                  <DialogClose className="absolute right-4 top-4 z-50">
                    <X className="h-6 w-6" />
                  </DialogClose>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Carousel
                      className="w-full max-w-5xl"
                      defaultValue={selectedImageIndex}
                    >
                      <CarouselContent>
                        {project.images?.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="h-[80vh] flex flex-col items-center justify-center p-6">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="max-h-full w-auto object-contain"
                              />
                              {image.caption && (
                                <p className="mt-4 text-center text-gray-400">
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  </div>
                </DialogContent>
              </Dialog>

            </div>

            {/* Sidebar */}
            <div className="order-1 lg:order-2">
              <Card className="p-6 space-y-6 sticky top-28 bg-black/40 backdrop-blur-sm border-white/10">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">
                    {t('projects.categories')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-neon/50"
                      >
                        {t(`projects.categories.${category.toLowerCase().replace(/\s+/g, '_')}`)}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-200 mb-2">{t('projects.date')}</h3>
                  <p>{project.date}</p>
                </div>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-200">
                      {t('projects.metrics')}
                    </h3>
                    <div className="grid gap-2">
                      {project.metrics.map((metric, index) => {
                        let Icon = Clock;
                        const text = metric.toLowerCase();
                        
                        if (text.includes('analyse') || text.includes('détection') || text.includes('tendance')) {
                          Icon = LineChart;
                        } else if (text.includes('optimisation') || text.includes('performance') || text.includes('gain')) {
                          Icon = Gauge;
                        } else if (text.includes('utilisateur') || text.includes('professionnel') || text.includes('client')) {
                          Icon = Users;
                        } else if (text.includes('temps') || text.includes('quotidien') || text.includes('charge')) {
                          Icon = Clock;
                        } else if (text.includes('coût') || text.includes('budget') || text.includes('financ')) {
                          Icon = LineChart;
                        } else if (text.includes('décision') || text.includes('qualification') || text.includes('contrôle')) {
                          Icon = BrainCircuit;
                        }
                        
                        return (
                          <div
                            key={index}
                            className="group p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-neon/30"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 rounded-md bg-neon/10 group-hover:bg-neon/20 transition-colors">
                                <Icon className="h-4 w-4 text-neon" />
                              </div>
                              <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                {metric}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-200">
                      {t('projects.features')}
                    </h3>
                    <div className="grid gap-2">
                      {project.features.map((feature, index) => {
                        let Icon = Code;
                        const text = feature.toLowerCase();

                        if (text.includes('interface') || text.includes('dashboard') || text.includes('vue')) {
                          Icon = LayoutDashboard;
                        } else if (text.includes('données') || text.includes('base') || text.includes('stockage')) {
                          Icon = Database;
                        } else if (text.includes('ia') || text.includes('automatique') || text.includes('intelligent') || text.includes('détection')) {
                          Icon = BrainCircuit;
                        } else if (text.includes('rapport') || text.includes('document') || text.includes('analyse')) {
                          Icon = FileText;
                        } else if (text.includes('bot') || text.includes('chat') || text.includes('conversation')) {
                          Icon = Bot;
                        } else if (text.includes('scan') || text.includes('catégorisation') || text.includes('reconnaissance')) {
                          Icon = Monitor;
                        } else if (text.includes('upload') || text.includes('partage') || text.includes('édition')) {
                          Icon = Code;
                        } else if (text.includes('workflow') || text.includes('processus') || text.includes('orchestration')) {
                          Icon = Cpu;
                        }

                        return (
                          <div
                            key={index}
                            className="group p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-neon/30"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 rounded-md bg-neon/10 group-hover:bg-neon/20 transition-colors">
                                <Icon className="h-4 w-4 text-neon" />
                              </div>
                              <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                {feature}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  {project.link && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t('projects.live_demo')}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        {t('projects.source_code')}
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </ProjectLayout>
      </div>
    </div>
  );
};

export default ProjectPage;