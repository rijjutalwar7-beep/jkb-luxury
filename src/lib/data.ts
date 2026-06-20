import { Category, Product, Testimonial } from '../types';

const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Automatic', imageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-2', name: 'Chronograph', imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-3', name: 'Dive', imageUrl: 'https://i.pinimg.com/1200x/b7/a4/30/b7a430e8328dbf73c9bb6c01f98f8c2d.jpg' },
  { id: 'cat-4', name: 'Dress', imageUrl: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?auto=format&fit=crop&q=80&w=800' },
];

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Royal Oak Genesis',
    category: 'Automatic',
    shortDescription: 'Precision engineering meets timeless elegance.',
    fullDescription: 'The pinnacle of luxury watchmaking. This masterpiece features a breathtaking automatic movement, encased in premium materials. Perfectly balanced for both formal events and everyday prestige.',
    features: ['Automatic Movement', 'Sapphire Crystal', 'Water Resistant to 50m', 'Hand-finished details'],
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-2',
    name: 'Deep Sea Explorer',
    category: 'Dive',
    shortDescription: 'Built for the abyss, designed for the boardroom.',
    fullDescription: 'Water resistant up to 300 meters, this robust and striking dive watch combines an engineered ceramic bezel with an ultra-legible luminescent dial.',
    features: ['300m Water Resistance', 'Ceramic Bezel', 'Glow-in-the-dark indices', 'Titanium Case'],
    imageUrl: 'https://i.pinimg.com/1200x/b7/a4/30/b7a430e8328dbf73c9bb6c01f98f8c2d.jpg',
    galleryUrls: [
      'https://i.pinimg.com/1200x/b7/a4/30/b7a430e8328dbf73c9bb6c01f98f8c2d.jpg'
    ],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-3',
    name: 'Celestial Chrono',
    category: 'Chronograph',
    shortDescription: 'Track time with absolute precision.',
    fullDescription: 'Featuring three sub-dials and a tachymeter bezel, the Celestial Chrono is for those who demand precision and style in a race against time.',
    features: ['Quartz Chronograph', 'Tachymeter scale', 'Date window', 'Rose gold accents'],
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-4',
    name: 'Heritage Classic',
    category: 'Dress',
    shortDescription: 'The definitive dress watch for evening wear.',
    fullDescription: 'Slim, understated, and incredibly elegant. Featuring a genuine alligator leather strap and an ultra-thin dial that slips perfectly under a shirt cuff.',
    features: ['Ultra-thin case', 'Alligator leather strap', 'Minimalist dial', 'Roman numerals'],
    imageUrl: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
       'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  }
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Alexandra W.',
    content: 'The level of service and quality of the pieces are completely unmatched. A truly premium experience from start to finish.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'James Reynolds',
    content: 'JKB Luxury guided me perfectly in acquiring my first luxury timepiece. The authenticity and care were exceptional.',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Sarah M.',
    content: 'Exquisite collections and deeply personalized service via WhatsApp made my purchase seamless.',
    rating: 5,
  }
];

// Data accessor functions (using localStorage for persistence in this demo environment)
export function getProducts(): Product[] {
  const stored = localStorage.getItem('jkb_watches_v4');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('jkb_watches_v4', JSON.stringify(INITIAL_PRODUCTS));
  return INITIAL_PRODUCTS;
}

export function saveProducts(products: Product[]) {
  localStorage.setItem('jkb_watches_v4', JSON.stringify(products));
}

export function getCategories(): Category[] {
  const stored = localStorage.getItem('jkb_cat_v4');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('jkb_cat_v4', JSON.stringify(INITIAL_CATEGORIES));
  return INITIAL_CATEGORIES;
}

export function saveCategories(categories: Category[]) {
  localStorage.setItem('jkb_cat_v4', JSON.stringify(categories));
}

export function getTestimonials(): Testimonial[] {
  const stored = localStorage.getItem('jkb_test_v4');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('jkb_test_v4', JSON.stringify(INITIAL_TESTIMONIALS));
  return INITIAL_TESTIMONIALS;
}

export function saveTestimonials(testimonials: Testimonial[]) {
  localStorage.setItem('jkb_test_v4', JSON.stringify(testimonials));
}
