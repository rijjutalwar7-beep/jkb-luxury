import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Check, Info, MessageCircle } from 'lucide-react';
import { getProducts } from '../lib/data';
import { useState } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const products = getProducts();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.imageUrl || '');

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4 text-[var(--color-charcoal)]">Product Not Found</h2>
        <Link to="/collection" className="text-[var(--color-forest)] uppercase tracking-widest text-sm hover:text-[var(--color-charcoal)] transition-colors">
          Return to Collection
        </Link>
      </div>
    );
  }

  const defaultMessage = `Hello JKB Luxury,\nI am interested in [${product.name}].\nPlease share details.`;
  const whatsappUrl = `https://wa.me/916352265040?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="w-full pb-16 md:pb-24">
       {/* Breadcrumbs */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
         <Link to="/collection" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-[var(--color-forest)] transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Collection
         </Link>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                          {/* Left: Images */}
             <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="aspect-square bg-gray-50 border border-gray-200 mb-6 overflow-hidden max-h-[700px]"
                >
                  <img src={activeImage} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-all duration-500" />
                </motion.div>
                
                {product.galleryUrls && product.galleryUrls.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.galleryUrls.map((url, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(url)}
                        className={`aspect-square overflow-hidden border ${activeImage === url ? 'border-[var(--color-forest)]' : 'border-gray-200'} hover:border-[var(--color-forest)] transition-colors bg-gray-50`}
                      >
                         <img src={url} alt={`${product.name} ${idx}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" />
                      </button>
                    ))}
                  </div>
                )}
             </div>

             {/* Right: Details */}
             <div className="flex-1 lg:py-10">
                <div className="mb-2">
                   <span className="text-[var(--color-forest)] uppercase tracking-widest text-xs font-semibold drop-shadow-sm">{product.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-[var(--color-charcoal)]">{product.name}</h1>
                
                <div className="flex items-center gap-2 mb-8 bg-green-50 inline-flex px-4 py-2 border border-green-200 rounded-sm">
                   <ShieldCheck size={18} className="text-[#25D366]" />
                   <span className="text-sm tracking-wide text-green-800">Verified Authentic</span>
                </div>

                <div className="prose text-gray-600 font-light mb-10">
                   <p className="text-lg leading-relaxed">{product.fullDescription}</p>
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="mb-12">
                    <h3 className="uppercase tracking-widest text-sm mb-6 flex items-center border-b border-gray-200 pb-2 text-[var(--color-charcoal)]">
                      <Info size={16} className="mr-2 text-[var(--color-forest)]" /> Specifications
                    </h3>
                    <ul className="space-y-4">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-center text-gray-600 font-light">
                          <Check size={16} className="text-[var(--color-forest)] mr-4 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-200">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--color-forest)] text-white text-center flex items-center justify-center py-4 md:py-5 uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-forest-light)] shadow-md transition-all"
                  >
                    <MessageCircle size={18} className="mr-3 text-white" /> Purchase on WhatsApp
                  </a>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-[var(--color-forest)] text-[var(--color-forest)] text-center py-4 md:py-5 uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-forest)] hover:text-white transition-colors bg-white mt-2 sm:mt-0"
                  >
                    Contact Us
                  </Link>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
}
