import { BrainCircuit, Cloud, Database, Code, Layout, Terminal, Network, FileCode, Bot } from 'lucide-react';
import { SkillNode, SkillLink } from '../types/skills';

export interface HierarchicalSkill extends SkillNode {
  children?: HierarchicalSkill[];
  isExpanded?: boolean;
  level: number;
}

// Fonction auxiliaire pour éviter les références circulaires
const createSkillNode = (
  id: string,
  group: SkillNode['group'],
  subGroup: SkillNode['subGroup'],
  icon: SkillNode['icon'],
  level: number,
  metrics: SkillNode['metrics']
): HierarchicalSkill => ({
  id,
  group,
  subGroup,
  icon,
  level,
  relations: [],
  metrics
});

export const hierarchicalSkills: HierarchicalSkill[] = [
  {
    ...createSkillNode("Backend", "Backend", "Core", Code, 0, {
      projects: 30,
      implementations: 50,
      usageTypes: ["backend"],
      complexity: 3
    }),
    relations: ["Frontend", "AI"],
    children: [
      {
        ...createSkillNode("Python", "Backend", "Language", Code, 1, {
          projects: 25,
          implementations: 40,
          usageTypes: ["backend", "data"],
          complexity: 3
        }),
        relations: [],
        children: [
          {
            ...createSkillNode("FastAPI", "Backend", "Framework", Code, 2, {
              projects: 12,
              implementations: 20,
              usageTypes: ["backend"],
              complexity: 2
            }),
            relations: ["SQLAlchemy"]
          },
          {
            ...createSkillNode("SQLAlchemy", "Backend", "Framework", Database, 2, {
              projects: 10,
              implementations: 18,
              usageTypes: ["backend"],
              complexity: 2
            }),
            relations: ["FastAPI", "PostgreSQL"]
          }
        ]
      },
      {
        ...createSkillNode("Pandas", "Backend", "Data", Code, 1, {
          projects: 15,
          implementations: 25,
          usageTypes: ["data"],
          complexity: 2
        }),
        relations: ["NumPy", "Scikit-learn"],
        children: [
          {
            ...createSkillNode("NumPy", "Backend", "Data", Code, 2, {
              projects: 12,
              implementations: 20,
              usageTypes: ["data"],
              complexity: 2
            }),
            relations: ["Scikit-learn"]
          },
          {
            ...createSkillNode("Scikit-learn", "Backend", "Data", Code, 2, {
              projects: 10,
              implementations: 18,
              usageTypes: ["data"],
              complexity: 2
            }),
            relations: ["NumPy"]
          }
        ]
      }
    ]
  },
  {
    ...createSkillNode("Frontend", "Frontend", "Core", FileCode, 0, {
      projects: 25,
      implementations: 45,
      usageTypes: ["frontend"],
      complexity: 3
    }),
    relations: ["Backend", "AI"],
    children: [
      {
        ...createSkillNode("React", "Frontend", "Framework", FileCode, 1, {
          projects: 15,
          implementations: 25,
          usageTypes: ["frontend"],
          complexity: 3
        }),
        relations: ["TypeScript", "Next.js"],
        children: [
          {
            ...createSkillNode("Next.js", "Frontend", "Framework", FileCode, 2, {
              projects: 8,
              implementations: 15,
              usageTypes: ["frontend"],
              complexity: 3
            }),
            relations: ["React"]
          },
          {
            ...createSkillNode("TypeScript", "Frontend", "Language", FileCode, 2, {
              projects: 12,
              implementations: 20,
              usageTypes: ["frontend"],
              complexity: 2
            }),
            relations: ["React"]
          }
        ]
      },
      {
        ...createSkillNode("shadcn/radix ui", "Frontend", "Framework", FileCode, 1, {
          projects: 10,
          implementations: 18,
          usageTypes: ["frontend"],
          complexity: 2
        }),
        relations: ["React"]
      }
    ]
  },
  {
    ...createSkillNode("AI", "AI", "Core", Bot, 0, {
      projects: 5,
      implementations: 35,
      usageTypes: ["ai"],
      complexity: 3
    }),
    relations: ["Frontend", "Backend"],
    children: [
      {
        ...createSkillNode("LangChain", "AI", "Framework", Bot, 1, {
          projects: 8,
          implementations: 15,
          usageTypes: ["ai"],
          complexity: 3
        }),
        relations: ["OpenAI", "Autogen"],
        children: [
          {
            ...createSkillNode("Autogen", "AI", "Framework", Bot, 2, {
              projects: 5,
              implementations: 10,
              usageTypes: ["ai"],
              complexity: 3
            }),
            relations: ["CrewAI"]
          },
          {
            ...createSkillNode("CrewAI", "AI", "Framework", Bot, 2, {
              projects: 4,
              implementations: 8,
              usageTypes: ["ai"],
              complexity: 3
            }),
            relations: ["Autogen"]
          }
        ]
      },
      {
        ...createSkillNode("OpenAI", "AI", "Provider", Bot, 1, {
          projects: 12,
          implementations: 20,
          usageTypes: ["ai"],
          complexity: 3
        }),
        relations: ["LangChain", "Elevenlabs"],
        children: [
          {
            ...createSkillNode("Elevenlabs", "AI", "Provider", Bot, 2, {
              projects: 6,
              implementations: 12,
              usageTypes: ["ai"],
              complexity: 2
            }),
            relations: ["Deepgram"]
          },
          {
            ...createSkillNode("Deepgram", "AI", "Provider", Bot, 2, {
              projects: 5,
              implementations: 10,
              usageTypes: ["ai"],
              complexity: 2
            }),
            relations: ["Elevenlabs"]
          }
        ]
      }
    ]
  }
];

export const generateLinks = (skills: HierarchicalSkill[]): SkillLink[] => {
  const links: SkillLink[] = [];
  const allNodes = new Set<string>();
  
  // First, collect all node IDs
  const collectNodes = (skill: HierarchicalSkill) => {
    allNodes.add(skill.id);
    if (skill.children) {
      skill.children.forEach(collectNodes);
    }
  };
  skills.forEach(collectNodes);

  // Then generate links only for existing nodes
  const processSkill = (skill: HierarchicalSkill) => {
    if (skill.relations) {
      skill.relations.forEach(targetId => {
        if (allNodes.has(targetId)) {
          links.push({
            source: skill.id,
            target: targetId,
            value: skill.level === 0 ? 3 : 2,
            type: skill.level === 0 ? 'core' : 'integration'
          });
        }
      });
    }
    
    if (skill.children) {
      skill.children.forEach(child => {
        links.push({
          source: skill.id,
          target: child.id,
          value: 2,
          type: 'dependency'
        });
        processSkill(child);
      });
    }
  };

  skills.forEach(processSkill);
  return links;
};