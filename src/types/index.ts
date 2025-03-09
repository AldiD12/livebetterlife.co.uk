export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  unit: string;
  description: string;
  category: string;
}

export interface EstimateFormData {
  serviceType: string;
  projectSize: string;
  timeline: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  area?: number;
  services: Record<string, number>;
}