import React from 'react';
import { Button } from '../components/Button';
import { Screen } from '../types';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';
import { ArrowLeft, Users, Lock } from 'lucide-react';

interface LobbyScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const LobbyScreen: React.FC<LobbyScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-[#1e293b]">
       {/* Background Depth */}
       <div className="absolute inset-0 bg-[#0f172a]"></div>
       <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-[#14532d] via-[#1e293b] to-[#0f172a] opacity-80"></div>

       <TopBar />

       {/* Header */}
       <div className="relative z-10 mt-20 px-6 flex items-center mb-4">
           <Button variant="wood" size="sm" onClick={() => onNavigate(Screen.HOME)} className="mr-5 rounded-xl w-12 h-12 !p-0">
               <ArrowLeft size={24} strokeWidth={3} />
           </Button>
           <h1 className="text-4xl font-black text-[#fcd34d] drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] text-stroke tracking-wider">
               LOBBY
           </h1>
       </div>

       {/* Game Mode Cards - Grid */}
       <div className="relative z-10 flex-1 flex flex-col md:flex-row gap-8 px-8 overflow-y-auto pb-28 items-center justify-center pt-4">
           
           {/* 2 Player Match */}
           <div className="w-full max-w-[300px] bg-gradient-to-b from-[#fdba74] to-[#ef4444] rounded-[2rem] border-4 border-[#ffedd5] shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-center p-1 relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_40px_rgba(0,0,0,0.6)]">
               <div className="w-full h-full bg-black/10 rounded-[1.7rem] p-5 flex flex-col items-center backdrop-blur-[2px]">
                   <div className="text-white font-black text-center leading-none drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] mb-4">
                      <span className="text-7xl block mb-2 filter drop-shadow-lg">2</span>
                      <span className="text-xl uppercase tracking-widest opacity-90">Player</span>
                   </div>
                   
                   {/* Decorative Cards */}
                   <div className="flex-1 w-full h-32 relative flex justify-center perspective-1000 my-4">
                       <div className="w-16 h-24 bg-red-600 rounded-lg border-2 border-white absolute transform -rotate-12 -translate-x-6 shadow-lg transition-transform group-hover:-rotate-[20deg] group-hover:-translate-x-8"></div>
                       <div className="w-16 h-24 bg-yellow-400 rounded-lg border-2 border-white absolute transform rotate-6 translate-x-4 shadow-lg transition-transform group-hover:rotate-[15deg] group-hover:translate-x-6"></div>
                       <div className="w-16 h-24 bg-black rounded-lg border-2 border-white z-10 flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                           <span className="text-yellow-500 font-bold -rotate-45">UNO</span>
                       </div>
                   </div>

                   <div className="w-full mt-auto">
                      <div className="bg-black/30 rounded-xl p-3 flex justify-between text-white font-bold border border-white/10 shadow-inner">
                          <span className="text-xs text-white/70 uppercase">Entry</span>
                          <span className="text-[#fcd34d]">$100</span>
                      </div>
                   </div>
               </div>
           </div>

           {/* 4 Player Match - Featured */}
           <div className="w-full max-w-[300px] bg-gradient-to-b from-[#38bdf8] to-[#2563eb] rounded-[2rem] border-4 border-[#bae6fd] shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col items-center p-1 relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_rgba(0,0,0,0.6)] z-20 transform scale-105">
               <div className="absolute -top-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-black px-6 py-1.5 rounded-full border-2 border-white shadow-lg uppercase text-xs tracking-widest z-30">
                   Popular
               </div>
               <div className="w-full h-full bg-black/10 rounded-[1.7rem] p-5 flex flex-col items-center backdrop-blur-[2px]">
                   <div className="text-white font-black text-center leading-none drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] mb-4">
                      <span className="text-7xl block mb-2 filter drop-shadow-lg">4</span>
                      <span className="text-xl uppercase tracking-widest opacity-90">Player</span>
                   </div>
                   
                   <div className="flex-1 w-full h-32 relative flex justify-center items-center perspective-1000 my-4">
                       {[0, 1, 2, 3].map((i) => (
                           <div key={i} className={`
                                w-12 h-18 absolute border-2 border-white rounded shadow-md transform transition-all duration-500 ease-out
                                ${['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'][i]}
                           `}
                           style={{ 
                               transform: `translateX(${(i-1.5)*20}px) rotate(${(i-1.5)*10}deg) translateY(${Math.abs(i-1.5)*5}px)`,
                               zIndex: i
                           }}
                           ></div>
                       ))}
                   </div>

                   <div className="w-full mt-auto">
                      <Button variant="green" fullWidth onClick={() => onNavigate(Screen.INVITE)} className="shadow-lg">Start Match</Button>
                   </div>
               </div>
           </div>

           {/* Create Room */}
           <div className="w-full max-w-[300px] bg-gradient-to-b from-[#fcd34d] to-[#d97706] rounded-[2rem] border-4 border-[#fef3c7] shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-center p-1 relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_40px_rgba(0,0,0,0.6)]">
               <div className="w-full h-full bg-black/10 rounded-[1.7rem] p-5 flex flex-col items-center backdrop-blur-[2px]">
                   <div className="text-white font-black text-center leading-tight drop-shadow-md mb-6 pt-2">
                      <span className="text-3xl uppercase">Create<br/>Room</span>
                   </div>
                   
                   <div className="flex-1 flex items-center justify-center my-4 group-hover:scale-110 transition-transform">
                       <Lock size={64} className="text-white drop-shadow-lg opacity-90" />
                   </div>

                   <div className="w-full mt-auto">
                      <Button variant="wood" fullWidth size="sm" onClick={() => onNavigate(Screen.WAITING)} className="text-sm">
                          Custom Rules
                      </Button>
                   </div>
               </div>
           </div>

       </div>

       <BottomNav />
    </div>
  );
};