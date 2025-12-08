import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "966573128127";
  const message = "Hello KINZAMAX! I'm interested in your professional workwear.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg 
                        transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none">
          <div className="bg-card px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-border">
            <span className="text-sm font-medium text-foreground">Chat with us!</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
