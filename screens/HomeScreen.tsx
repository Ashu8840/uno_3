import React from 'react';
import { Button } from '../components/Button';
import { Screen } from '../types';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';
import { Crown, Trophy, Map } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-sky-300">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
         {/* Sky with gradient */}
         <div className="absolute top-0 w-full h-2/3 bg-gradient-to-b from-[#0ea5e9] via-[#38bdf8] to-[#bae6fd]"></div>
         {/* Ocean with shine */}
         <div className="absolute top-[60%] w-full h-full bg-gradient-to-b from-[#0284c7] to-[#0369a1]"></div>
         {/* Sand with texture */}
         <div className="absolute bottom-0 w-full h-[35%] bg-[#fcd34d] bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] rounded-t-[100%] scale-x-150 border-t-[12px] border-[#f59e0b] shadow-[0_-10px_30px_rgba(0,0,0,0.2)]"></div>
         
         {/* Atmospheric Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

         {/* Decorative Elements */}
         <div className="absolute top-24 right-[-40px] opacity-90 pointer-events-none transform rotate-[-10deg]">
            <div className="w-4 h-64 bg-[#5d4037] rounded-full ml-20 shadow-lg"></div>
            <div className="absolute -top-10 left-[-40px] w-48 h-48 bg-green-500 rounded-full blur-xl opacity-60"></div>
         </div>
      </div>

      <TopBar />

      {/* Main Content - Improved spacing and scroll handling */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-28 px-4 pb-28 overflow-y-auto no-scrollbar w-full">
          
          {/* Logo Container with Glow - Added margin to prevent overlap */}
          <div className="relative mb-8 transform hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
             <div className="absolute inset-0 bg-yellow-400 blur-[60px] opacity-40 rounded-full"></div>
             <div className="text-[90px] md:text-[110px] leading-none font-black italic text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#fbbf24] to-[#ea580c] drop-shadow-[0_8px_0_rgba(0,0,0,0.5)] transform -rotate-6 relative z-10" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', WebkitTextStroke: '4px #451a03' }}>
               UNO
             </div>
             <div className="bg-[#dc2626] text-white font-black px-5 py-1.5 rounded-full absolute -bottom-2 -right-6 rotate-[-12deg] shadow-[0_4px_10px_rgba(0,0,0,0.4)] border-2 border-white z-20 tracking-wider">
               WORLD
             </div>
          </div>

          <div className="text-white font-bold text-lg shadow-lg mb-8 bg-black/40 px-8 py-2.5 rounded-full border border-white/20 backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite]">
             Welcome Back, <span className="text-[#facc15]">Player!</span>
          </div>

          {/* Big Play Button - Sized correctly for mobile */}
          <div className="w-full max-w-xs mb-10 z-20">
             <Button variant="green" size="xl" fullWidth onClick={() => onNavigate(Screen.LOBBY)} className="text-4xl tracking-widest shadow-[0_10px_0_#14532d,0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200">
                PLAY
             </Button>
          </div>

          {/* Mode Cards - Floating Effect - Improved container width and padding */}
          <div className="flex gap-4 w-full max-w-3xl justify-center overflow-x-auto pb-6 px-4 no-scrollbar items-stretch">
              {[
                { icon: Map, color: 'from-orange-400 to-red-500', title: 'Adventure' },
                { icon: Trophy, color: 'from-purple-500 to-indigo-600', title: 'Tournament' },
                { icon: Crown, color: 'from-emerald-400 to-teal-600', title: 'Create Room' },
              ].map((item, i) => (
                <div key={i} className={`
                    flex-1 min-w-[120px] max-w-[160px] h-36 
                    bg-gradient-to-br ${item.color} 
                    rounded-3xl border-[3px] border-white/30 
                    shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
                    flex flex-col items-center justify-center p-3 
                    relative group cursor-pointer 
                    transition-all duration-300 ease-out 
                    hover:-translate-y-3 hover:shadow-[0_20px_30px_rgba(0,0,0,0.4)] hover:border-white/60
                `}>
                    <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm shadow-inner">
                        <item.icon className="text-white drop-shadow-md" size={28} strokeWidth={3} />
                    </div>
                    <span className="text-white font-black text-center leading-tight drop-shadow-md text-sm uppercase tracking-wide">{item.title}</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              ))}
          </div>
      </div>

      <BottomNav />
    </div>
  );
};