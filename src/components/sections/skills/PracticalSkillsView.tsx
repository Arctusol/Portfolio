import { FC } from 'react';
import { SkillWithUseCases } from '../../../types/skills';
import { cn } from '../../../lib/utils';

interface PracticalSkillsViewProps {
  skills: SkillWithUseCases[];
  className?: string;
}

const PracticalSkillsView: FC<PracticalSkillsViewProps> = ({ skills, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10", className)}>
      {skills.map((skillGroup, index) => {
        const Icon = skillGroup.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-xl card-gradient backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon/10">
                <Icon className="h-5 w-5 text-neon" />
              </div>
              <h3 className="text-xl font-semibold text-neon">
                {skillGroup.category}
              </h3>
            </div>
            <div className="space-y-4">
              {skillGroup.useCases.map((useCase, useCaseIndex) => (
                <div
                  key={useCaseIndex}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{useCase.description}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-500">
                      {useCase.projectCount} {useCase.projectCount > 1 ? 'projets' : 'projet'}
                    </span>
                  </div>
                  {useCase.details && (
                    <p className="text-xs text-gray-400 mt-1">
                      {useCase.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PracticalSkillsView;