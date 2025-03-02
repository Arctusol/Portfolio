import { LucideIcon } from 'lucide-react';

export type SkillGroup = 
  | 'Frontend'
  | 'Backend'
  | 'AI'
  | 'Data'
  | 'Automation'
  | 'Scraping'
  | 'Cloud'
  | 'Analytics'
  | 'Database';

export type SkillSubGroup =
  | 'Framework'
  | 'Language'
  | 'Core'
  | 'Provider'
  | 'Runtime'
  | 'Data'
  | 'Infrastructure'
  | 'No-Code'
  | 'Processing'
  | 'Automation'
  | 'Parsing'
  | 'Storage'
  | 'Visualization'
  | 'Integration';

export type SkillUsageType =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'ai'
  | 'scraping'
  | 'automation'
  | 'integration'
  | 'infrastructure'
  | 'analytics'
  | 'storage'
  | 'visualization';

export interface SkillMetrics {
  projects: number;
  implementations: number;
  usageTypes: SkillUsageType[];
  complexity: 1 | 2 | 3;
}

export interface SkillUseCase {
  description: string;
  projectCount: number;
  details?: string;
}

export interface SkillWithUseCases {
  name: string;
  category: string;
  icon: LucideIcon;
  useCases: SkillUseCase[];
}

export interface SkillNode {
  id: string;
  group: SkillGroup;
  subGroup: SkillSubGroup;
  icon: LucideIcon;
  relations: string[];
  metrics: SkillMetrics;
}

export interface SkillLink {
  source: string;
  target: string;
  value: number;
  type: 'dependency' | 'integration' | 'complementary' | 'core';
}

export interface SkillCluster {
  name: string;
  skills: SkillNode[];
  color: string;
}