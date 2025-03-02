import { ReactNode } from 'react';

interface ProjectLayoutProps {
  children: ReactNode;
  className?: string;
}

const ProjectLayout = ({
  children,
  className = ''
}: ProjectLayoutProps) => {
  return (
    <section className="min-h-screen bg-background">
      <div className={`w-full px-4 md:px-6 lg:px-8 mx-auto ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default ProjectLayout;