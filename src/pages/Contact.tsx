import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full">
      <div className="bg-[var(--color-forest)] pt-32 pb-20 px-4 text-center border-b border-gray-200 relative text-white">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white drop-shadow-md">Contact Us</h1>
           <div className="h-px w-24 bg-white opacity-40 mx-auto shadow-sm"></div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
               <h2 className="text-3xl font-serif mb-8 text-[var(--color-charcoal)]">Get In Touch</h2>
               <p className="text-gray-600 font-light mb-12">
                 Whether you are inquiring about a specific timepiece or require personalized sourcing advice, Uday and our concierge team are at your service.
               </p>

               <div className="space-y-8">
                  <div className="flex items-start">
                     <Phone className="text-[var(--color-forest)] mt-1 mr-4 flex-shrink-0" size={24} />
                     <div>
                        <h4 className="uppercase tracking-widest text-sm mb-1 text-gray-500">Phone & WhatsApp</h4>
                        <p className="text-lg text-[var(--color-charcoal)]">+91 6352 265 040</p>
                        <p className="text-sm text-[var(--color-forest)] mt-1">Contact Person: Uday</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <Mail className="text-[var(--color-forest)] mt-1 mr-4 flex-shrink-0" size={24} />
                     <div>
                        <h4 className="uppercase tracking-widest text-sm mb-1 text-gray-500">Email</h4>
                        <p className="text-lg text-[var(--color-charcoal)]">contact@jkbluxury.com</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <MapPin className="text-[var(--color-forest)] mt-1 mr-4 flex-shrink-0" size={24} />
                     <div>
                        <h4 className="uppercase tracking-widest text-sm mb-1 text-gray-500">Headquarters</h4>
                        <p className="text-lg text-[var(--color-charcoal)]">Global Boutique Network<br/><span className="text-sm text-gray-500">Exclusive Showroom Access by Appointment Only</span></p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-md">
               <h3 className="text-2xl font-serif mb-8 text-[var(--color-charcoal)]">Send an Inquiry</h3>
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! In a full implementation this would send an email or store the inquiry.'); }}>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)] mb-2">Name</label>
                    <input type="text" required className="w-full bg-gray-50 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-[var(--color-forest)] transition-colors text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)] mb-2">Email</label>
                    <input type="email" required className="w-full bg-gray-50 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-[var(--color-forest)] transition-colors text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)] mb-2">Message</label>
                    <textarea rows={4} required className="w-full bg-gray-50 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-[var(--color-forest)] transition-colors text-gray-800 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[var(--color-forest)] text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-forest-light)] shadow-sm transition-all mt-4 border border-[var(--color-forest)]">
                    Submit Inquiry
                  </button>
               </form>
            </div>

         </div>
      </div>
    </div>
  );
}
