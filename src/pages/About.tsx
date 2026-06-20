export default function About() {
  return (
    <div className="w-full">
      <div className="bg-[var(--color-forest)] pt-32 pb-20 px-4 text-center border-b border-gray-200 relative text-white">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white drop-shadow-md">Our Story</h1>
           <div className="h-px w-24 bg-white opacity-40 mx-auto shadow-sm"></div>
         </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-24 prose font-light text-gray-700">
         <p className="text-xl leading-relaxed mb-8 text-[var(--color-charcoal)]">
           Since our inception, JKB Luxury has stood as a beacon of uncompromising quality and timeless elegance in the world of high-end horology.
         </p>
         <h2 className="text-2xl font-serif text-[var(--color-forest)] mt-12 mb-6">Our Vision</h2>
         <p className="leading-relaxed">
           To be the ultimate destination for connoisseurs who seek exclusivity, authenticity, and a deeply personalized luxury experience. We curate only the most exceptional timepieces.
         </p>
         <h2 className="text-2xl font-serif text-[var(--color-forest)] mt-12 mb-6">The Luxury Philosophy</h2>
         <p className="leading-relaxed">
           Luxury is not mass-produced. It is carefully crafted, meticulously verified, and personally delivered. At JKB, every interaction is tailored to your unique preferences, supported by our unwavering commitment to authentication and trust.
         </p>
      </div>
    </div>
  );
}
