import { getTestimonials } from '../lib/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <div className="w-full">
      <div className="bg-[var(--color-forest)] pt-32 pb-20 px-4 text-center border-b border-gray-200 relative text-white">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white drop-shadow-md">Client Experience</h1>
           <p className="text-white/80 max-w-2xl mx-auto font-light">
             Discover what our esteemed clientele has to say about their journey with JKB Luxury.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(t => (
               <div key={t.id} className="bg-white p-10 border border-gray-200 shadow-md relative hover:border-[var(--color-forest)] transition-colors">
                  <div className="flex mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[var(--color-forest)] fill-[var(--color-forest)]" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 italic">
                     "{t.content}"
                  </p>
                  <p className="uppercase tracking-widest text-sm text-[var(--color-charcoal)] font-medium">
                    — {t.name}
                  </p>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
