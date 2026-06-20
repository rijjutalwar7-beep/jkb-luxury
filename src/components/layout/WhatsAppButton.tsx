import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = "916352265040";
  const defaultMessage = "Hello JKB Luxury, I would like to know more about your collection.";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center group"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat with us
      </span>
    </motion.button>
  );
}
