export interface Project {
  titleKey: string;
  title: string;
  slug: string;
  descriptionKey: string;
  description: string;
  longDescriptionKey: string;
  longDescription: string;
  link: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
  categories: string[];  // Changed from category to categories for clarity
  metrics: string[];
  coverImage: string;
  features?: string[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  video?: {
    src: string;
    caption?: string;
    posterImage?: string;
  };
  date: string;
  advantages?: string[];
}

export interface TranslatedProject extends Omit<Project, 'titleKey' | 'descriptionKey' | 'longDescriptionKey'> {
  title: string;
  description: string;
  longDescription: string;
}

export interface ProjectPreview extends Pick<Project, 
  'title' | 
  'titleKey' |
  'slug' | 
  'description' | 
  'descriptionKey' |
  'tech' | 
  'categories' | 
  'coverImage'
> {}