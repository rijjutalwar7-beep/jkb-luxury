import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, MessageCircle } from 'lucide-react';
import { getProducts, getCategories } from '../lib/data';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = getProducts();
  const categories = getCategories();

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery, products]);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="bg-[var(--color-forest)] pt-32 pb-20 px-4 text-center border-b border-gray-200 relative text-white">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-md text-white">Our Collection</h1>
           <p className="text-white/80 max-w-2xl mx-auto font-light">
             Explore our curated selection of premium timepieces. Each item is authenticated and maintained to the highest standards.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
           <div className="flex flex-wrap gap-4">
             <button 
               onClick={() => setActiveCategory('All')}
               className={`uppercase tracking-widest text-sm pb-1 border-b-2 transition-colors ${activeCategory === 'All' ? 'border-[var(--color-forest)] text-[var(--color-forest)]' : 'border-transparent text-gray-500 hover:text-[var(--color-charcoal)]'}`}
             >
               All Timepieces
             </button>
             {categories.map(c => (
               <button 
                 key={c.id}
                 onClick={() => setActiveCategory(c.name)}
                 className={`uppercase tracking-widest text-sm pb-1 border-b-2 transition-colors ${activeCategory === c.name ? 'border-[var(--color-forest)] text-[var(--color-forest)]' : 'border-transparent text-gray-500 hover:text-[var(--color-charcoal)]'}`}
               >
                 {c.name}
               </button>
             ))}
           </div>

           <div className="relative w-full md:w-64">
             <input 
               type="text" 
               placeholder="Search collection..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-white border border-gray-200 text-[#111111] px-4 py-2 pl-10 focus:outline-none focus:border-[var(--color-forest)] transition-colors rounded-none placeholder:text-gray-400 font-light text-sm shadow-sm"
             />
             <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
           </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id} 
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white border border-gray-100 shadow-sm">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                     <Link to={`/product/${product.id}`} className="bg-[var(--color-forest)] text-white px-6 py-3 uppercase text-xs tracking-widest font-medium hover:bg-[var(--color-forest-light)] transition-all w-full text-center shadow-md">
                       View Details
                     </Link>
                  </div>
                </div>
                <div>
                   <div className="flex justify-between items-start mb-2">
                     <p className="text-xs uppercase tracking-widest text-[var(--color-forest)]">{product.category}</p>
                   </div>
                   <h3 className="font-serif text-xl mb-3 pr-4 text-[var(--color-charcoal)]">{product.name}</h3>
                   <p className="text-sm text-gray-500 font-light mb-4 line-clamp-2">{product.shortDescription}</p>
                   <a 
                     href={`https://wa.me/916352265040?text=I am interested in purchasing the ${product.name}`} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="text-sm text-gray-500 hover:text-[var(--color-charcoal)] transition-colors uppercase tracking-wider inline-flex items-center gap-2 border-b border-gray-300 pb-1 mt-2"
                   >
                     <MessageCircle size={14} className="text-[#25D366]" /> Purchase on WhatsApp
                   </a>
                </div>
              </motion.div>
            ))
          ) : (
             <div className="col-span-full text-center py-24 text-gray-500 font-light bg-gray-50 border border-gray-200">
               No timepieces found matching your criteria.
             </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
