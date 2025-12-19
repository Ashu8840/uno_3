import React from 'react';
import { ShoppingBag, Users, Mail, Map } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const navItemClass = `
    flex items-center gap-2 px-4 py-3 rounded-2xl 
    bg-gradient-to-b from-[#5d4037] to-[#3e2723] 
    border-t border-[#8d6e63]/50 border-b border-[#2d1b0e]
    shadow-[0_4px_10px_rgba(0,0,0,0.4)] 
    text-[#fde68a] font-bold text-xs md:text-sm tracking-wide
    hover:brightness-110 active:translate-y-1 active:shadow-none 
    transition-all duration-200 transform-gpu
    group relative overflow-hidden
  `;

  return (
    <div className="absolute bottom-0 left-0 w-full z-40 flex justify-center pb-6 pt-10 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        {/* Floating Dock Container */}
        <div className="pointer-events-auto flex gap-3 md:gap-4 bg-black/30 backdrop-blur-xl p-2 rounded-3xl border border-white/10 shadow-2xl">
            <button className={navItemClass}>
                <div className="relative z-10 flex items-center gap-2">
                    <ShoppingBag size={20} className="text-[#facc15] drop-shadow-md" />
                    <span className="hidden md:inline drop-shadow-sm">Shop</span>
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
            </button>
            <button className={navItemClass}>
                <div className="relative z-10 flex items-center gap-2">
                    <Users size={20} className="text-[#60a5fa] drop-shadow-md" />
                    <span className="hidden md:inline drop-shadow-sm">Friends</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
            </button>
            <button className={navItemClass}>
                 <div className="relative z-10 flex items-center gap-2">
                    <Mail size={20} className="text-[#f87171] drop-shadow-md" />
                    <span className="hidden md:inline drop-shadow-sm">Inbox</span>
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse"></div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
            </button>
            <button className={navItemClass}>
                 <div className="relative z-10 flex items-center gap-2">
                    <Map size={20} className="text-[#4ade80] drop-shadow-md" />
                    <span className="hidden md:inline drop-shadow-sm">Missions</span>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
            </button>
        </div>
    </div>
  );
};