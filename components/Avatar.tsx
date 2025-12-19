import React from 'react';
import { Player } from '../types';

interface AvatarProps {
  player: Player;
  isActive?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showCardsCount?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  player, 
  isActive = false, 
  position = 'bottom',
  showCardsCount = true
}) => {
  return (
    <div className={`relative flex flex-col items-center transition-all duration-300 ease-out ${isActive ? 'scale-110 z-20' : 'scale-100 z-10'}`}>
      
      {/* Avatar Image Container */}
      <div className={`
        relative w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px]
        transition-all duration-300
        ${isActive ? 'border-[#facc15] shadow-[0_0_25px_rgba(250,204,21,0.5)]' : 'border-white/80 shadow-lg'}
        bg-gray-800 overflow-hidden
      `}>
        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
        
        {/* Timer Animation (only if active) - Smoother SVG */}
        {isActive && (
          <div className="absolute inset-0 rounded-full border-4 border-transparent">
             <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible">
              <circle
                cx="50%"
                cy="50%"
                r="54%" 
                fill="none"
                stroke="#facc15"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="280"
                strokeDashoffset="0"
                className="animate-[dash_15s_linear_forwards] drop-shadow-[0_0_4px_#facc15]"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Level Badge */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-md z-30">
        Lv.{player.level}
      </div>

      {/* Name Tag - Glassmorphism */}
      <div className="absolute -bottom-3 bg-black/60 backdrop-blur-md text-white text-xs md:text-sm px-3 py-0.5 rounded-full border border-white/10 shadow-lg whitespace-nowrap z-30">
        {player.name}
      </div>

      {/* Cards Remaining Bubble - 3D Pop */}
      {showCardsCount && (
        <div className={`
          absolute z-40
          ${position === 'left' ? '-right-4 top-1/2 -translate-y-1/2' : ''}
          ${position === 'right' ? '-left-4 top-1/2 -translate-y-1/2' : ''}
          ${position === 'top' ? '-bottom-8 left-1/2 -translate-x-1/2' : ''}
          ${position === 'bottom' ? '-top-4 left-1/2 -translate-x-1/2' : ''}
          w-9 h-11 bg-gradient-to-b from-[#fb923c] to-[#dc2626] rounded-lg border-2 border-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] flex items-center justify-center transform hover:scale-110 transition-transform
        `}>
            {/* Gloss */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-md pointer-events-none"></div>
            <div className="flex flex-col items-center leading-none">
                <span className="text-[8px] text-yellow-100 font-bold uppercase tracking-wider">Cards</span>
                <span className="text-white font-black text-xl drop-shadow-sm">{player.cardCount}</span>
            </div>
        </div>
      )}
    </div>
  );
};