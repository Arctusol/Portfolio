import { ReactNode } from 'react';

interface SectionLayoutProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  backgroundClass?: string;
}

const SectionLayout = ({
  id,
  title,
  description,
  children,
  className = '',
  backgroundClass = ''
}: SectionLayoutProps) => {
  return (
    <section id={id} className={`section-padding ${backgroundClass}`}>
      <div className={`w-full mx-auto ${className}`}>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;