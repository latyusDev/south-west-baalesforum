// components/WhatsAppButton.jsx

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const message = encodeURIComponent(
    "Hello Chief (Dr) Seyi Bamigbade, I would like to make enquiry about the baale forum"
  );
    const phoneNumber = '+2348162046944'


  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


     // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
 
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
      
      <div className={isVisible ? "block" : "hidden"}
    >
          <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        cursor-pointer
      p-3
      rounded-lg
      fixed
      bottom-6
      right-6
      z-50
      flex
      gap-2
      font-bold
      items-center
      justify-center
       rounded-fulbl
        bg-green-500
        text-white
        transition
        duration-300
        hover:scale-110
        hover:bg-green-600
        shadow-sm
      
      "
    >
      <MessageCircle size={28} className="font-bold" />
     <p> WhatsApp</p>
    </a>

  </div>
  )
};

export default WhatsAppButton;