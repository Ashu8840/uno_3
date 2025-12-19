import React from 'react';
import { Button } from '../components/Button';
import { Screen } from '../types';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

interface InviteScreenProps {
  onNavigate: (screen: Screen) => void;
}

const FRIENDS = [
    { id: '1', name: 'Anna', level: 19, avatar: 'https://picsum.photos/id/65/100/100' },
    { id: '2', name: 'David', level: 12, avatar: 'https://picsum.photos/id/91/100/100' },
    { id: '3', name: 'Mike', level: 14, avatar: 'https://picsum.photos/id/103/100/100' },
    { id: '4', name: 'Sarah', level: 22, avatar: 'https://picsum.photos/id/111/100/100' },
];

export const InviteScreen: React.FC<InviteScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4 z-50 absolute inset-0">
        
        {/* Main Panel */}
        <div className="w-full max-w-2xl bg-[#5d4037] rounded-3xl border-[6px] border-[#3e2723] shadow-[0_25px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative transform-gpu animate-[scale-in_0.3s_ease-out]">
            {/* Wood Texture Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
            
            {/* Header */}
            <div className="bg-[#2d1b0e] p-5 flex justify-between items-center border-b-4 border-[#4a2308] relative z-10 shadow-md">
                <Button variant="wood" size="sm" onClick={() => onNavigate(Screen.LOBBY)} className="w-12 h-12 !p-0 flex items-center justify-center rounded-xl">
                    <ArrowLeft size={24} strokeWidth={3} />
                </Button>
                <h2 className="text-3xl text-[#fcd34d] font-black uppercase tracking-wider drop-shadow-md text-stroke">Invite Friends</h2>
                <div className="w-12"></div>
            </div>

            <div className="p-3 relative z-10 flex justify-end bg-[#4a2308]/50">
                 <Button variant="yellow" size="sm" className="shadow-md">INVITE ALL</Button>
            </div>

            {/* Friend List */}
            <div className="p-4 flex-1 overflow-y-auto max-h-[50vh] space-y-3 relative z-10 custom-scrollbar">
                {FRIENDS.map(friend => (
                    <div key={friend.id} className="bg-[#2d1b0e]/60 rounded-2xl p-3 flex items-center justify-between border border-[#5d4037] shadow-sm hover:bg-[#2d1b0e]/80 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-[#8d6e63] overflow-hidden shadow-lg">
                                <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-[#fde68a] font-bold text-xl drop-shadow-sm">{friend.name}</div>
                                <div className="text-[#d6d3d1] text-xs font-bold bg-[#4a2308] px-2 py-0.5 rounded-md inline-block border border-[#5d4037]">Lv.{friend.level}</div>
                            </div>
                        </div>
                        <Button variant="green" size="sm" className="min-w-[100px] shadow-md">INVITE</Button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-5 bg-[#2d1b0e] border-t-4 border-[#4a2308] flex justify-center relative z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
                <Button variant="green" size="xl" fullWidth onClick={() => onNavigate(Screen.WAITING)} className="text-xl shadow-[0_4px_0_#14532d,0_8px_15px_rgba(0,0,0,0.5)]">
                    START GAME
                </Button>
            </div>
        </div>
        
        <BottomNav />
    </div>
  );
};