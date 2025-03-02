export interface Project {
  titleKey: string;          // Translation key for title
  title: string;            // Fallback title
  slug: string;
  descriptionKey: string;   // Translation key for description
  description: string;      // Fallback description
  longDescriptionKey: string; // Translation key for long description
  longDescription: string;  // Fallback long description
  link: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
  categories: string[];     // Updated from category to categories
  metricsKeys?: string[];   // Translation keys for metrics
  metrics: string[];        // Fallback metrics
  coverImage: string;
  featuresKeys?: string[];  // Translation keys for features
  features?: string[];      // Fallback features
  images?: {
    src: string;
    altKey?: string;      // Translation key for alt text
    alt: string;          // Fallback alt text
    captionKey?: string;  // Translation key for caption
    caption?: string;     // Fallback caption
  }[];
  video?: {
    src: string;
    captionKey?: string;  // Translation key for caption
    caption?: string;     // Fallback caption
    posterImage?: string;
  };
  date: string;
}

export interface TranslatedProject extends Omit<Project, 
  'titleKey' | 
  'descriptionKey' | 
  'longDescriptionKey' | 
  'metricsKeys' | 
  'featuresKeys'
> {
  title: string;
  description: string;
  longDescription: string;
  metrics: string[];
  features?: string[];
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