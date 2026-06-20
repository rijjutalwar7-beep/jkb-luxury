import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Diamond, Star, Award, MessageCircle } from 'lucide-react';
import { getCategories, getProducts, getTestimonials } from '../lib/data';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=2000"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = getCategories();
  const products = getProducts().filter(p => p.isFeatured).slice(0, 4);
  const testimonials = getTestimonials().slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              src={HERO_IMAGES[currentSlide]}
              alt="Luxury Watch Hero"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-white drop-shadow-md"
          >
            Luxury That Defines <span className="text-white italic font-light">Presence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto"
          >
            Discover an exclusive collection of premium timepieces, curated for the elite.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link 
              to="/collection"
              className="bg-[var(--color-forest)] text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-forest-light)] shadow-lg transition-all w-full sm:w-auto"
            >
              Explore Collection
            </Link>
            <a 
              href="https://wa.me/916352265040"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 text-white backdrop-blur-sm px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[var(--color-charcoal)]">Featured watch Collections</h2>
            <div className="h-px w-24 bg-[var(--color-forest)] opacity-30 mx-auto"></div>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col h-full bg-white border border-gray-200 shadow-sm cursor-pointer overflow-hidden pb-6"
              >
                  <div className="relative h-72 sm:h-80 overflow-hidden mb-6">
                    <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="px-6 flex flex-col flex-grow justify-end">
                     <h3 className="text-xl md:text-2xl font-serif text-[var(--color-charcoal)] mb-3">{cat.name}</h3>
                     <Link to={`/collection?category=${cat.name}`} className="text-[var(--color-forest)] font-medium tracking-widest uppercase text-xs md:text-sm flex items-center hover:text-gray-600 transition-colors">
                       View Collection <ArrowRight size={16} className="ml-2" />
                     </Link>
                  </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* About Brand */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
           <div className="flex-1 text-center lg:text-left">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-[var(--color-charcoal)]">Experience Time <br className="hidden md:block"/><span className="text-[var(--color-forest)] italic">Beyond Measure</span></h2>
             <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
               At JKB Luxury, we believe that true luxury is not just about the timepiece you possess, but the heritage it represents. With a foundation built on trust and an eye for exceptional horology, we curate pieces that resonate with elegance and exclusivity.
             </p>
             <Link to="/about" className="inline-flex items-center text-[var(--color-forest)] uppercase tracking-widest text-sm hover:text-[var(--color-charcoal)] transition-colors">
               Read Our Story <ArrowRight size={16} className="ml-2" />
             </Link>
           </div>
           <div className="flex-1 relative">
              <div className="absolute inset-0 border-2 border-[var(--color-forest)] translate-x-4 -translate-y-4 opacity-20"></div>
              <img src="https://i.pinimg.com/1200x/b7/a4/30/b7a430e8328dbf73c9bb6c01f98f8c2d.jpg" alt="Brand Craftsmanship" className="relative z-10 shadow-lg border border-gray-100" />
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[var(--color-charcoal)]">Curated Timepieces</h2>
              <div className="h-px w-24 bg-[var(--color-forest)] opacity-30"></div>
            </div>
            <Link to="/collection" className="hidden sm:inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-[var(--color-forest)] transition-colors">
               View All <ArrowRight size={16} className="ml-2" />
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((product) => (
             <div key={product.id} className="group flex flex-col">
               <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white border border-gray-100 shadow-sm">
                 <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link to={`/product/${product.id}`} className="bg-[var(--color-forest)] text-white px-6 py-3 uppercase text-xs tracking-widest font-medium hover:bg-[var(--color-forest-light)] shadow-md transition-all">
                      View Details
                    </Link>
                 </div>
               </div>
               <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-[var(--color-forest)] mb-2">{product.category}</p>
                  <h3 className="font-serif text-xl mb-2 text-[var(--color-charcoal)]">{product.name}</h3>
                  <a href={`https://wa.me/916352265040?text=I am interested in purchasing the ${product.name}`} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-[var(--color-charcoal)] transition-colors uppercase tracking-wider inline-flex items-center gap-2 border-b border-gray-300 pb-1 mt-2">
                    <MessageCircle size={14} className="text-[#25D366]" /> Purchase on WhatsApp
                  </a>
               </div>
             </div>
           ))}
         </div>
      </section>

      {/* Why Choose Us & Auth */}
      <section className="py-16 md:py-24 bg-[var(--color-forest)] text-white border-y border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Authenticity You Can Trust</h2>
              <p className="text-white/80 max-w-2xl mx-auto font-light">Every timepiece in our collection undergoes rigorous verification to guarantee its provenance and unmatched quality.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center border-t border-white/20 pt-16">
              {[
                { icon: ShieldCheck, title: "Verified Collection", desc: "100% authentic horological goods" },
                { icon: Award, title: "Premium Quality", desc: "Impeccable craftsmanship standards" },
                { icon: Diamond, title: "Exclusive Sourcing", desc: "Rare and coveted timepieces" },
                { icon: Star, title: "Personalized Service", desc: "Dedicated concierge via WhatsApp" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center mb-6 text-white bg-white/10 shadow-inner">
                     <feature.icon size={24} />
                   </div>
                   <h4 className="font-serif text-xl mb-3 text-white">{feature.title}</h4>
                   <p className="text-white/80 font-light text-sm">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50 border-b border-gray-200">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-[var(--color-charcoal)]">Need Details? <br/><span className="text-[var(--color-forest)] italic">Connect Instantly</span></h2>
           <a 
             href="https://wa.me/916352265040"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-[var(--color-forest)] text-white px-10 py-5 uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-forest-light)] shadow-md transition-all"
           >
             Chat on WhatsApp
           </a>
        </div>
      </section>

    </div>
  );
}
