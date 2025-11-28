export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'ai' | 'seo';
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    age: number;
    location: string;
    email: string;
    phone?: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: WorkExperience[];
  socialLinks: SocialLink[];
}
