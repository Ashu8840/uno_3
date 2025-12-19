import React from 'react';
import { CardColor, CardData, CardType } from '../types';
import { Ban, RotateCw, Plus } from 'lucide-react';

interface UnoCardProps {
  card: CardData;
  isHidden?: boolean;
  isPlayable?: boolean;
  scale?: number;
  rotation?: number;
  onClick?: () => void;
  className?: string;
}

export const UnoCard: React.FC<UnoCardProps> = ({ 
  card, 
  isHidden = false, 
  isPlayable = false,
  scale = 1,
  rotation = 0,
  onClick,
  className = ''
}) => {
  
  const getColorClasses = (color: CardColor) => {
    switch (color) {
      case CardColor.RED: return 'bg-gradient-to-br from-[#ef4444] via-[#dc2626] to-[#991b1b]';
      case CardColor.BLUE: return 'bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1e40af]';
      case CardColor.GREEN: return 'bg-gradient-to-br from-[#22c55e] via-[#16a34a] to-[#15803d]';
      case CardColor.YELLOW: return 'bg-gradient-to-br from-[#facc15] via-[#eab308] to-[#ca8a04]';
      case CardColor.BLACK: return 'bg-gradient-to-br from-gray-700 via-gray-800 to-black';
      default: return 'bg-gray-500';
    }
  };

  const renderContent = () => {
    if (card.type === CardType.NUMBER) {
      return <span className="text-5xl font-black drop-shadow-lg italic transform -skew-x-6">{card.value}</span>;
    }
    if (card.type === CardType.SKIP) {
      return <Ban size={36} strokeWidth={3} className="drop-shadow-md" />;
    }
    if (card.type === CardType.REVERSE) {
      return <RotateCw size={36} strokeWidth={3} className="drop-shadow-md" />;
    }
    if (card.type === CardType.DRAW_TWO) {
      return (
        <div className="relative">
            <Plus size={24} strokeWidth={4} className="absolute -top-3 -left-2 text-white/90 drop-shadow-sm" />
            <span className="text-5xl font-black drop-shadow-lg italic ml-2 transform -skew-x-6">2</span>
        </div>
      );
    }
    if (card.type === CardType.WILD) {
       return (
        <div className="w-14 h-14 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500 border-4 border-white shadow-inner flex items-center justify-center">
        </div>
       )
    }
    if (card.type === CardType.WILD_DRAW_FOUR) {
        return (
         <div className="relative">
            <div className="absolute top-0 left-0 w-9 h-11 bg-[#2563eb] rounded border-2 border-white transform -rotate-12 z-10 shadow-sm"></div>
            <div className="absolute top-1 left-2 w-9 h-11 bg-[#dc2626] rounded border-2 border-white transform rotate-6 z-20 shadow-sm"></div>
             <span className="absolute top-3 left-4 text-2xl font-black text-white z-30 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">+4</span>
         </div>
        )
     }
    return null;
  };

  const smallIcon = () => {
      if(card.type === CardType.NUMBER) return card.value;
      if(card.type === CardType.SKIP) return <Ban size={12} />;
      if(card.type === CardType.REVERSE) return <RotateCw size={12} />;
      if(card.type === CardType.DRAW_TWO) return "+2";
      if(card.type === CardType.WILD_DRAW_FOUR) return "+4";
      return "W";
  }

  return (
    <div 
      onClick={onClick}
      style={{ 
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'bottom center',
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' // Spring-like bounce
      }}
      className={`
        relative w-24 h-36 rounded-xl transition-all will-change-transform transform-gpu
        ${isHidden ? 'bg-black' : getColorClasses(card.color)}
        ${isPlayable ? 'cursor-pointer hover:-translate-y-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10 ring-4 ring-yellow-400' : 'shadow-xl'}
        border-2 border-white/10
        select-none
        flex items-center justify-center
        ${className}
      `}
    >
      {/* Card Texture Overlay (Subtle noise) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none rounded-xl"></div>

      {/* Glossy Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 rounded-xl pointer-events-none"></div>

      {/* Back of card design */}
      {isHidden && (
        <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-[#b91c1c] to-black relative">
           {/* Inner pattern */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/50 to-transparent"></div>
          <div className="w-20 h-32 border-4 border-[#eab308] rounded-lg flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            <span className="text-[#eab308] font-black text-2xl -rotate-45 drop-shadow-md">UNO</span>
          </div>
        </div>
      )}

      {/* Front of card */}
      {!isHidden && (
        <>
            {/* Center Oval with Depth */}
            <div className={`
                w-20 h-28 bg-white rounded-[50%] flex items-center justify-center 
                transform rotate-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)] 
                border-[3px] border-white
            `} style={{color: card.color === CardColor.BLACK ? 'black' : card.color}}>
                {renderContent()}
            </div>

            {/* Corner Indicators */}
            <div className="absolute top-1.5 left-1.5 text-white font-black drop-shadow-md text-lg leading-none">
                {smallIcon()}
            </div>
            <div className="absolute bottom-1.5 right-1.5 text-white font-black drop-shadow-md text-lg leading-none transform rotate-180">
                {smallIcon()}
            </div>
        </>
      )}
    </div>
  );
};