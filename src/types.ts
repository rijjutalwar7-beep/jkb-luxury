export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  galleryUrls: string[];
  isFeatured: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
