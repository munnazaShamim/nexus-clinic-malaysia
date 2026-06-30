"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

// TikTok SVG Icon component
const TikTokIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M19.589 6.686a4.993 4.993 0 0 1-3.77-4.245c-.043-.53-.048-.706-.048-1.046h-3.527v11.65c0 1.48-1.202 2.68-2.682 2.68a2.685 2.685 0 0 1-2.683-2.68c0-1.48 1.202-2.68 2.683-2.68.273 0 .538.045.785.122v-3.595a6.278 6.278 0 0 0-4.53 1.116 6.278 6.278 0 0 0-2.366 4.937c0 3.463 2.813 6.277 6.277 6.277 3.464 0 6.278-2.814 6.278-6.277V7.786c1.198.858 2.63 1.355 4.17 1.37V5.66a4.96 4.96 0 0 1-1.42-.974z"
      fill={color === "currentColor" ? "currentColor" : color}
    />
  </svg>
);

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: "light" | "dark" | "colored";
  showTooltip?: boolean;
}

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/NexusClinic/",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/nexusclinic/?hl=en",
    color: "#E4405F",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@nexusclinicklmy",
    color: "#000000",
  },
];

export default function SocialIcons({ 
  className = "", 
  iconSize = 18,
  variant = "light",
  showTooltip = true,
}: SocialIconsProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "dark":
        return "bg-brown text-cream hover:bg-wine";
      case "colored":
        return "bg-cream text-brown hover:text-white";
      default:
        return "bg-cream text-brown hover:bg-wine hover:text-light";
    }
  };

  const getIconColor = (iconName: string, originalColor: string) => {
    if (variant === "colored") {
      return originalColor;
    }
    return "currentColor";
  };

  return (
    <div className={`flex items-center mt-4 gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group rounded-full p-2.5 transition-all duration-300 ${getVariantStyles()}`}
          aria-label={`Follow us on ${social.name}`}
        >
          {social.name === "TikTok" ? (
            <social.icon
              size={iconSize}
              color={variant === "colored" ? social.color : "currentColor"}
            />
          ) : (
            <social.icon
              size={iconSize}
              style={variant === "colored" ? { color: social.color } : undefined}
              aria-hidden={true}
            />
          )}
          
          {/* Tooltip */}
          {showTooltip && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brown text-cream text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
              {social.name}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}