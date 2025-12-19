import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'yellow' | 'blue' | 'red' | 'wood';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'green', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Premium Game Button Styles
  // - GPU accelerated transitions
  // - "Press" effect using translate-y instead of scale for better feel
  // - Richer shadows
  const baseStyles = `
    relative font-black rounded-2xl flex items-center justify-center uppercase tracking-wide 
    transition-all duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform-gpu will-change-transform
    active:translate-y-[4px] active:shadow-none outline-none select-none
    border-t border-white/20
  `;
  
  const variants = {
    green: `
      bg-gradient-to-b from-[#86efac] via-[#22c55e] to-[#15803d] 
      text-white text-shadow-sm
      shadow-[0_4px_0_#14532d,0_8px_15px_rgba(0,0,0,0.3)]
      hover:brightness-110
    `,
    yellow: `
      bg-gradient-to-b from-[#fde047] via-[#fbbf24] to-[#b45309] 
      text-[#78350f] text-shadow-none
      shadow-[0_4px_0_#78350f,0_8px_15px_rgba(0,0,0,0.3)]
      hover:brightness-110
    `,
    blue: `
      bg-gradient-to-b from-[#7dd3fc] via-[#0ea5e9] to-[#0369a1] 
      text-white text-shadow-sm
      shadow-[0_4px_0_#075985,0_8px_15px_rgba(0,0,0,0.3)]
      hover:brightness-110
    `,
    red: `
      bg-gradient-to-b from-[#fca5a5] via-[#ef4444] to-[#991b1b] 
      text-white text-shadow-sm
      shadow-[0_4px_0_#7f1d1d,0_8px_15px_rgba(0,0,0,0.3)]
      hover:brightness-110
    `,
    wood: `
      bg-[#8B4513] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] 
      text-[#fef3c7] text-shadow-sm border-2 border-[#78350f]
      shadow-[0_4px_0_#451a03,0_8px_15px_rgba(0,0,0,0.4)]
      hover:brightness-105
    `,
  };

  const sizes = {
    sm: "py-1 px-3 text-xs min-h-[36px] active:translate-y-[2px] shadow-[0_2px_0_rgba(0,0,0,0.3)]",
    md: "py-2 px-6 text-sm min-h-[48px]",
    lg: "py-3 px-8 text-lg min-h-[60px]",
    xl: "py-4 px-12 text-2xl min-h-[80px]"
  };

  // Shadow adjustments based on size for consistent depth
  const shadowSizeOverride = size === 'sm' 
    ? {
        green: "shadow-[0_2px_0_#14532d]",
        yellow: "shadow-[0_2px_0_#78350f]",
        blue: "shadow-[0_2px_0_#075985]",
        red: "shadow-[0_2px_0_#7f1d1d]",
        wood: "shadow-[0_2px_0_#451a03]"
      } 
    : {};

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${shadowSizeOverride[variant] || ''}
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {/* Specular highlight for plastic feel */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent rounded-t-xl pointer-events-none"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">{children}</span>
    </button>
  );
};