import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="text-2xl font-serif text-[var(--color-charcoal)] tracking-widest uppercase mb-6 inline-block">
                JKB <span className="text-[var(--color-forest)]">Luxury</span>
             </Link>
             <p className="text-gray-500 mt-2 leading-relaxed font-light">
               Experience time beyond measure. The ultimate showcase for premium and exclusive timepieces.
             </p>
          </div>

          <div>
            <h4 className="font-serif text-[var(--color-forest)] tracking-widest uppercase mb-6 drop-shadow-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/collection" className="text-gray-500 hover:text-[var(--color-charcoal)] transition-colors">Our Collection</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-[var(--color-charcoal)] transition-colors">About Brand</Link></li>
              <li><Link to="/authentication" className="text-gray-500 hover:text-[var(--color-charcoal)] transition-colors">Authentication</Link></li>
              <li><Link to="/testimonials" className="text-gray-500 hover:text-[var(--color-charcoal)] transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[var(--color-forest)] tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Uday</li>
              <li>+91 6352 265 040</li>
              <li>Email: contact@jkbluxury.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[var(--color-forest)] tracking-widest uppercase mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[var(--color-forest)] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-[var(--color-forest)] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-[var(--color-forest)] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JKB Luxury. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/admin" className="hover:text-gray-600 transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
