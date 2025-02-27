export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  link: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
  category: string;
  metrics: string[];
  coverImage: string;
  features?: string[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  date: string;
}

export interface ProjectPreview extends Pick<Project, 
  'title' | 
  'slug' | 
  'description' | 
  'tech' | 
  'category' | 
  'coverImage'
> {}