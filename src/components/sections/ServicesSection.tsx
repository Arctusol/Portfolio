import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '../common/SectionLayout';
import { ArrowRight } from 'lucide-react';
import { useServices } from '@/data/services-data';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const { services } = useServices();

  return (
    <SectionLayout
      id="services"
      title={t('services.title')}
      description={t('services.description')}
      className="max-w-[1920px]"
      backgroundClass="bg-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-4 lg:px-8 xl:px-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="p-6 md:p-8 border border-white/10 hover:border-neon hover:shadow-neon/10 hover:scale-[1.01] transition-all duration-300"
            >
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