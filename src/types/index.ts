export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  logo: {
    dark: string;
    light: string;
    symbol: string;
  };
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zip: string;
    };
    whatsapp: string;
    googleMapsEmbedUrl: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    twitter?: string;
  };
  founder: {
    name: string;
    title: string;
    bio: string;
    quote: string;
    image: string;
    signature: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  image: string;
  linkText?: string;
  projectId?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Residential' | 'Healthcare' | 'Retail' | 'Commercial';
  subcategory: string;
  location: string;
  year: string;
  client: string;
  area: string;
  status: 'Completed' | 'In Progress' | 'Concept';
  shortDescription: string;
  description: string;
  thumbnail: string;
  featuredImage: string;
  isFeatured?: boolean;
  gallery: {
    url: string;
    caption: string;
    type?: 'image' | 'video';
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  image?: string;
}
