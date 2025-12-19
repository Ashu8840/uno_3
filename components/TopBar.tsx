import React from 'react';
import { Settings, Plus } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-2 md:p-4 z-50 flex justify-between items-start pointer-events-none">
      {/* Left: Placeholder */}
      <div className="pointer-events-auto"></div>

      {/* Right: Currency & Settings */}
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        <div className="flex items-center gap-3">
           {/* Coins */}
           <div className="relative group bg-black/40 backdrop-blur-md rounded-full pl-9 pr-2 py-1 border border-[#fbbf24]/30 shadow-lg flex items-center min-w-[110px] h-10 transition-transform hover:scale-105">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#fcd34d] to-[#d97706] w-11 h-11 rounded-full border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-[#78350f]">
                 $
              </div>
              <span className="text-white font-black text-sm ml-3 tracking-wide drop-shadow-sm">1,230</span>
              <button className="bg-[#22c55e] hover:bg-[#16a34a] rounded-full w-6 h-6 flex items-center justify-center ml-2 text-white border border-[#86efac] shadow-sm transition-colors">
                  <Plus size={14} strokeWidth={4} />
              </button>
           </div>

           {/* Gems */}
           <div className="relative group bg-black/40 backdrop-blur-md rounded-full pl-9 pr-2 py-1 border border-[#f472b6]/30 shadow-lg flex items-center min-w-[110px] h-10 transition-transform hover:scale-105">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#f9a8d4] to-[#db2777] w-11 h-11 rounded-full border-2 border-white shadow-md flex items-center justify-center text-xs font-bold">
                 💎
              </div>
              <span className="text-white font-black text-sm ml-3 tracking-wide drop-shadow-sm">10</span>
              <span className="text-gray-300 text-xs font-bold ml-0.5">/10</span>
              <button className="bg-[#22c55e] hover:bg-[#16a34a] rounded-full w-6 h-6 flex items-center justify-center ml-2 text-white border border-[#86efac] shadow-sm transition-colors">
                  <Plus size={14} strokeWidth={4} />
              </button>
           </div>
           
           {/* Settings Button */}
           <button className="w-11 h-11 bg-gradient-to-b from-[#15803d] to-[#14532d] rounded-xl border-t border-[#86efac]/50 border-b border-[#14532d] text-white flex items-center justify-center shadow-lg active:translate-y-1 active:shadow-none transition-all">
               <Settings size={22} className="drop-shadow-sm" />
           </button>
        </div>
      </div>
    </div>
  );
};