import { ShieldCheck, Search, Award } from 'lucide-react';

export default function Authentication() {
  return (
    <div className="w-full">
      <div className="bg-[var(--color-forest)] pt-32 pb-20 px-4 text-center border-b border-gray-200 relative text-white">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white drop-shadow-md">Uncompromising Authenticity</h1>
           <p className="text-white/80 max-w-2xl mx-auto font-light">
             Every timepiece in our collection is rigorously inspected and verified by experts before it reaches you.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border border-gray-200 shadow-md text-center hover:border-[var(--color-forest)] transition-colors">
               <Search size={40} className="text-[var(--color-forest)] mx-auto mb-6" />
               <h3 className="font-serif text-2xl mb-4 text-[var(--color-charcoal)]">Meticulous Inspection</h3>
               <p className="text-gray-600 font-light">Our dedicated team examines every detail—from the serial numbers to the movement—ensuring it meets our exact standards.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 shadow-md text-center hover:border-[var(--color-forest)] transition-colors">
               <ShieldCheck size={40} className="text-[var(--color-forest)] mx-auto mb-6" />
               <h3 className="font-serif text-2xl mb-4 text-[var(--color-charcoal)]">Certified Provenance</h3>
               <p className="text-gray-600 font-light">We source exclusively from trusted networks, guaranteeing the origin and history of every luxury timepiece.</p>
            </div>
            <div className="bg-white p-10 border border-gray-200 shadow-md text-center hover:border-[var(--color-forest)] transition-colors">
               <Award size={40} className="text-[var(--color-forest)] mx-auto mb-6" />
               <h3 className="font-serif text-2xl mb-4 text-[var(--color-charcoal)]">The Trust Promise</h3>
               <p className="text-gray-600 font-light">Your peace of mind is paramount. We stand behind the authenticity of our entire catalog, unconditionally.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
