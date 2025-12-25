
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  mode?: 'full' | 'horizontal';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 md:h-16", color = "#182C2D" }) => {
  const isLight = color.toUpperCase() === '#FFFFFF' || color.toLowerCase() === 'white';
  
  return (
    <img 
      src={`${import.meta.env.BASE_URL}images/hbros-logo.png`}
      alt="H Brothers Logo" 
      className={className}
      style={{ 
        objectFit: 'contain',
        // Use invert and brightness for dark backgrounds, but avoid brightness(0) 
        // which creates a solid block if the image isn't transparent.
        filter: isLight 
          ? 'invert(1) brightness(1.5) contrast(1.1)' 
          : 'brightness(1.05) contrast(1.05)',
        display: 'block'
      }}
    />
  );
};

export default Logo;
