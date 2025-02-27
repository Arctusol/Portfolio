import { ReactNode } from 'react';

interface SectionLayoutProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  backgroundClass?: string;
}

const SectionLayout = ({
  id,
  title,
  children,
  className = '',
  backgroundClass = ''
}: SectionLayoutProps) => {
  return (
    <section id={id} className={`section-padding ${backgroundClass}`}>
      <div className={`container mx-auto ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-in">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;