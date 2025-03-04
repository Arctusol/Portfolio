import { useMemo } from 'react';
import useThreeAnimation from '@/hooks/useThreeAnimation';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  const animationOptions = useMemo(() => ({
    color: theme === 'light' ? 0x8A2BE2 : 0x00ffb9,
    wireframe: true,
    rotationSpeed: 0.001
  }), [theme]);

  const canvasRef = useThreeAnimation(animationOptions);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in text-foreground">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 fade-in">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#services"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-neon text-background hover:bg-neon-muted focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-background transition-all"
            >
              {t('hero.cta.services')}
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg border-2 border-neon text-neon hover:bg-neon hover:text-background focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-background transition-all"
            >
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center h-[500px] lg:h-[800px] overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;