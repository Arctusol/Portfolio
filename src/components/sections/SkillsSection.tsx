import { useState } from 'react';
import SectionLayout from '../common/SectionLayout';
import PracticalSkillsView from './skills/PracticalSkillsView';
import InteractiveSkillsView from './skills/InteractiveSkillsView';
import { skillsData } from '../../data/skills';
import { hierarchicalSkills, generateLinks, HierarchicalSkill } from '../../data/skills-hierarchy';

const SkillsSection = () => {
  const [activeView, setActiveView] = useState<'practical' | 'interactive'>('practical');
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['Backend', 'Frontend', 'LLM']);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  // Fonction récursive pour obtenir tous les nœuds visibles
  const getVisibleNodes = (skills: HierarchicalSkill[]): HierarchicalSkill[] => {
    return skills.reduce((acc: HierarchicalSkill[], skill) => {
      if (expandedNodes.includes(skill.id)) {
        acc.push(skill);
        if (skill.children) {
          acc.push(...getVisibleNodes(skill.children));
        }
      } else {
        acc.push(skill);
      }
      return acc;
    }, []);
  };

  // Fonction récursive pour obtenir tous les IDs des nœuds
  const getAllNodeIds = (skills: HierarchicalSkill[]): string[] => {
    return skills.reduce((acc: string[], skill) => {
      acc.push(skill.id);
      if (skill.children) {
        acc.push(...getAllNodeIds(skill.children));
      }
      return acc;
    }, []);
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => 
      prev.includes(nodeId)
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const toggleAllNodes = () => {
    if (isAllExpanded) {
      setExpandedNodes(['Backend', 'Frontend', 'LLM']);
    } else {
      setExpandedNodes(getAllNodeIds(hierarchicalSkills));
    }
    setIsAllExpanded(!isAllExpanded);
  };

  const visibleNodes = getVisibleNodes(hierarchicalSkills);
  const visibleLinks = generateLinks(visibleNodes);

  return (
    <SectionLayout
      id="skills"
      title="Compétences"
      className="max-w-[1920px]"
      backgroundClass="bg-white/5"
    >
      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveView('practical')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'practical'
                ? 'bg-neon text-black'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            Vue pratique
          </button>
          <button
            onClick={() => setActiveView('interactive')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'interactive'
                ? 'bg-neon text-black'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            Vue interactive
          </button>
        </div>
        
        {activeView === 'interactive' && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleAllNodes}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isAllExpanded ? 'Tout rétracter' : 'Tout déployer'}
            </button>
          </div>
        )}
      </div>

      {activeView === 'practical' ? (
        <PracticalSkillsView skills={skillsData} className="px-4 lg:px-8 xl:px-12" />
      ) : (
        <div className="flex justify-center">
          <InteractiveSkillsView
            nodes={visibleNodes}
            links={visibleLinks}
            onNodeClick={toggleNode}
            className="w-full max-w-6xl aspect-[4/3] bg-black/30 rounded-xl p-4"
          />
        </div>
      )}
    </SectionLayout>
  );
};

export default SkillsSection;