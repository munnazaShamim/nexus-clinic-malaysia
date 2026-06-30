"use client";

import { motion } from "framer-motion";
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

interface WhatsappProps {
  message: string;
  variant?: "light" | "dark";
}

// Regular WhatsApp button component
const Whatsapp = ({ message, variant = "dark" }: WhatsappProps) => {
  const whatsappNumber = "60168245699";

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const baseStyles = "px-8 py-4 rounded-full font-georgia text-lg transition-all shadow-lg flex items-center justify-center gap-2";
  
  const variantStyles = {
    light: "bg-light text-wine hover:bg-cream text-wine border border-wine",
    dark: "bg-wine/10 hover:bg-wine/20 text-wine border border-wine",
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      WhatsApp
    </motion.a>
  );
};

// Floating WhatsApp button component (fixed bottom right, WhatsApp style)
interface FloatingWhatsappProps {
  phoneNumber?: string;
  isActive?: boolean;
  hideOnMobile?: boolean;
  defaultMessage?: string;
}

const FloatingWhatsapp = ({ 
  phoneNumber = "60168245699", 
  isActive = true,
  hideOnMobile = true,
  defaultMessage="Hi! I’m interested in your services. Could you provide more details?" 
}: FloatingWhatsappProps) => {
  return (
    <motion.a
       href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={
        isActive
          ? {
              scale: [1, 1.15, 1],
              opacity: [1, 0.6, 1],
            }
          : { scale: 1, opacity: 1 }
      }
      transition={
        isActive
          ? {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : { duration: 0.3 }
      }
      whileHover={{ scale: 1.2 }}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-50 bg-green hover:bg-green/90 transition-colors ${hideOnMobile ? "hidden md:flex" : "flex"}`}
      aria-label="Chat on WhatsApp – Claim RM100 Voucher"
    >
      <span className="fixed bottom-3 right-12 text-xs font-bold px-3 py-1.5 whitespace-nowrap z-50" aria-hidden="true">
        CLAIM RM100 VOUCHER
      </span>
    <WhatsAppIcon className="text-white" size={30} />
    </motion.a>
  );
};

export { Whatsapp as default, FloatingWhatsapp };