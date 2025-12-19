import React from 'react';
import { Button } from '../components/Button';
import { Screen } from '../types';
import { ArrowLeft, Copy, Share2, MessageSquare, Bot, Plus, Check, Zap } from 'lucide-react';

interface WaitingScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const WaitingScreen: React.FC<WaitingScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-gray-900">
        {/* Dark Jungle Background */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/193/1920/1080?blur=4')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/80 to-black opacity-95"></div>

        {/* Top Bar */}
        <div className="relative z-10 p-4 flex justify-between items-center mt-2">
            <Button variant="wood" size="sm" onClick={() => onNavigate(Screen.LOBBY)} className="w-12 h-12 !p-0 rounded-xl shadow-lg">
                <ArrowLeft size={24} strokeWidth={3} />
            </Button>
            <div className="text-white font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">Waiting for Opponents...</div>
            <div className="bg-[#451a03] text-[#fcd34d] px-4 py-2 rounded-xl border-2 border-[#78350f] font-mono font-bold text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                8629
            </div>
        </div>

        {/* Center Table Area */}
        <div className="flex-1 relative flex items-center justify-center z-10 perspective-1000">
            {/* The Table - High Fidelity */}
            <div className="w-[85vw] md:w-[600px] aspect-square rounded-full relative flex items-center justify-center transform-gpu">
                 {/* Table Rim (Wood) */}
                 <div className="absolute inset-0 rounded-full bg-[#3f1f0e] border-[8px] border-[#2a1307] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] rounded-full"></div>
                 </div>

                 {/* Table Felt (Gradient + Texture) */}
                 <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#ea580c] via-[#c2410c] to-[#7c2d12] shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden border-4 border-[#7c2d12]">
                     {/* Felt Texture */}
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-30 mix-blend-overlay"></div>
                     
                     {/* Inner Vignette */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)]"></div>
                     
                     {/* Center Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-orange-500 rounded-full blur-[60px] opacity-30"></div>
                 </div>

                 {/* Center Info */}
                 <div className="relative z-20 flex flex-col items-center">
                     <div className="bg-black/50 px-8 py-3 rounded-2xl border border-white/10 backdrop-blur-md text-white font-mono text-3xl font-bold mb-6 shadow-xl flex items-center gap-2">
                         8629
                         <Copy size={16} className="text-white/50 cursor-pointer hover:text-white" />
                     </div>
                     <div className="relative group animate-[float_4s_ease-in-out_infinite]">
                        <div className="w-28 h-36 bg-white rounded-xl shadow-2xl border-[3px] border-gray-200 transform rotate-6"></div>
                        <div className="w-28 h-36 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-2xl border-[3px] border-white absolute top-0 left-0 transform -rotate-6 flex items-center justify-center overflow-hidden">
                            <span className="text-yellow-400 font-black text-4xl -rotate-45 drop-shadow-md z-10">UNO</span>
                             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] animate-[shine_3s_infinite]"></div>
                        </div>
                     </div>
                 </div>

                 {/* --- PLAYER SLOTS --- */}
                 
                 {/* Top - Empty Slot (Scanning/Radar) */}
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 group cursor-pointer">
                     <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#4ade80]/10 group-hover:border-[#4ade80] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                         <div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] group-hover:border-[#4ade80]/30"></div>
                         <Plus className="text-white/60 group-hover:text-[#4ade80] transition-colors" size={32} />
                         
                         {/* Invite Badge */}
                         <div className="absolute -bottom-3 bg-[#22c55e] text-white text-[10px] font-bold px-3 py-0.5 rounded-full border-2 border-[#14532d] shadow-lg flex items-center gap-1 group-hover:bg-[#4ade80] group-hover:border-[#166534] transition-colors">
                            INVITE
                         </div>
                     </div>
                 </div>

                 {/* Right - David (BOT) - Metallic/Industrial Look */}
                 <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <div className="w-20 h-20 bg-slate-800 rounded-2xl border-[3px] border-slate-400 p-0.5 shadow-[0_10px_20px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 group-hover:border-slate-200 group-hover:shadow-[0_0_25px_rgba(148,163,184,0.6)]">
                            <img src="https://picsum.photos/id/91/100/100" className="w-full h-full rounded-xl object-cover filter grayscale-[20%] contrast-125" />
                            {/* Metallic Glint */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                        </div>
                        
                        {/* Bot Badge */}
                        <div className="absolute -top-2 -right-2 bg-slate-600 text-slate-100 text-[9px] font-black px-1.5 py-0.5 rounded border border-slate-400 flex items-center gap-1 shadow-md z-10 group-hover:bg-slate-500 transition-colors">
                            <Bot size={10} /> BOT
                        </div>

                        {/* Name Tag */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-700 text-slate-100 text-xs font-bold px-3 py-0.5 rounded-full border border-slate-500 shadow-lg whitespace-nowrap min-w-[60px] text-center group-hover:bg-slate-600 transition-colors">
                            David
                        </div>
                    </div>
                 </div>

                 {/* Left - Anna (PLAYER) - Premium Gold Look */}
                 <div className="absolute top-1/2 -left-8 -translate-y-1/2 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {/* Avatar */}
                        <div className="w-20 h-20 bg-[#2a1307] rounded-2xl border-[3px] border-[#fcd34d] p-0.5 shadow-[0_0_20px_rgba(250,204,21,0.4)] relative transition-all duration-300 group-hover:border-[#fef08a] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.7)]">
                            <img src="https://picsum.photos/id/65/100/100" className="w-full h-full rounded-xl object-cover" />
                        </div>
                        
                        {/* Ready Indicator */}
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center z-10 animate-bounce">
                            <Check size={14} strokeWidth={4} />
                        </div>

                        {/* Name Tag */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-0.5 rounded-full border border-white/20 shadow-lg whitespace-nowrap min-w-[60px] text-center group-hover:from-orange-400 group-hover:to-red-500 transition-all">
                            Anna
                        </div>
                    </div>
                 </div>

                 {/* Bottom - You (PLAYER) - Hero Look */}
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="relative transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                         {/* Glow effect behind */}
                        <div className="absolute inset-0 bg-green-500 blur-md opacity-50 rounded-2xl transition-opacity duration-300 group-hover:opacity-80"></div>
                        
                        <div className="w-20 h-20 bg-[#2a1307] rounded-2xl border-[3px] border-[#4ade80] p-0.5 shadow-[0_0_25px_rgba(74,222,128,0.5)] relative z-10 transition-all duration-300 group-hover:border-[#86efac] group-hover:shadow-[0_0_35px_rgba(74,222,128,0.7)]">
                            <img src="https://picsum.photos/id/64/100/100" className="w-full h-full rounded-xl object-cover" />
                        </div>

                        {/* Host/You Badge */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#4ade80] text-[#064e3b] text-[10px] font-black px-2 py-0.5 rounded-md border-2 border-white shadow-lg z-20 flex items-center gap-1 group-hover:bg-[#86efac] transition-colors">
                            <Zap size={10} fill="currentColor" /> YOU
                        </div>
                    </div>
                 </div>
            </div>
            
            <div className="absolute bottom-24 z-30">
                <Button variant="green" size="lg" className="px-16 text-xl shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-pulse hover:scale-105 active:scale-95 transition-transform" onClick={() => onNavigate(Screen.GAME)}>
                    START GAME
                </Button>
            </div>
        </div>

        {/* Bottom Actions - Wood Texture */}
        <div className="p-4 flex justify-between items-center z-10 bg-[#2a1307] border-t-4 border-[#451a03] shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
            <Button variant="wood" size="sm" className="shadow-lg">
                <div className="flex items-center gap-2"><span className="text-lg">📜</span> Rules</div>
            </Button>
            
            <div className="flex gap-3">
                <Button variant="wood" size="sm" className="shadow-lg active:translate-y-1">
                   <div className="flex items-center gap-1"><Copy size={16}/> Code</div>
                </Button>
                <Button variant="wood" size="sm" className="shadow-lg active:translate-y-1">
                   <div className="flex items-center gap-1"><Share2 size={16}/> Invite</div>
                </Button>
            </div>

            <Button variant="wood" size="sm" className="w-10 !px-0 flex items-center justify-center shadow-lg active:translate-y-1">
                <MessageSquare size={20} />
            </Button>
        </div>
    </div>
  );
};