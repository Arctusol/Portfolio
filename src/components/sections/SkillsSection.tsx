import { BrainCircuit, Cloud, Database, Code } from 'lucide-react';
import SectionLayout from '../common/SectionLayout';

const skills = [
  {
    category: "Développement",
    icon: Code,
    items: [
      {
        name: "Python",
        level: "Expert",
      },
      {
        name: "React",
        level: "Avancé",
      },
      {
        name: "TypeScript",
        level: "Avancé",
      },
      {
        name: "FastAPI",
        level: "Avancé",
      },
      {
        name: "Docker",
        level: "Intermédiaire",
      }
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      {
        name: "Azure",
        level: "Avancé",
      },
      {
        name: "Google Cloud",
        level: "Intermédiaire",
      },
      {
        name: "CI/CD",
        level: "Intermédiaire",
      },
      {
        name: "Kubernetes",
        level: "Intermédiaire",
      }
    ],
  },
  {
    category: "IA & Data",
    icon: BrainCircuit,
    items: [
      {
        name: "Autogen",
        level: "Expert",
      },
      {
        name: "CrewAI",
        level: "Expert",
      },
      {
        name: "PowerBI",
        level: "Avancé",
      },
      {
        name: "LookerStudio",
        level: "Avancé",
      }
    ],
  },
  {
    category: "Bases de données",
    icon: Database,
    items: [
      {
        name: "Supabase",
        level: "Avancé",
      },
      {
        name: "MongoDB",
        level: "Avancé",
      },
      {
        name: "PostgreSQL",
        level: "Avancé",
      },
      {
        name: "Airtable",
        level: "Expert",
      }
    ],
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/20 text-green-500";
    case "Avancé":
      return "bg-blue-500/20 text-blue-500";
    case "Intermédiaire":
      return "bg-yellow-500/20 text-yellow-500";
    default:
      return "bg-gray-500/20 text-gray-500";
  }
};

const SkillsSection = () => {
  return (
    <SectionLayout
      id="skills"
      title="Compétences"
      className="max-w-7xl"
      backgroundClass="bg-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default SkillsSection;