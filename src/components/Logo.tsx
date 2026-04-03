import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  const logoColor = light ? "white" : "#1a1a1a"; // Deep Charcoal
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Ascent Finvest Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback if image not found
          e.currentTarget.style.display = 'none';
        }}
      />
      
      {showText && (
        <div className="flex items-baseline gap-1.5">
          <span 
            className="text-2xl font-serif font-medium italic tracking-tight" 
            style={{ color: logoColor }}
          >
            Ascent
          </span>
          <span 
            className="text-xl font-serif font-medium italic tracking-wide" 
            style={{ color: logoColor, opacity: light ? 0.8 : 1 }}
          >
            Finvest
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
