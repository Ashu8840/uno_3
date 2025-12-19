import React from 'react';
import { Button } from '../components/Button';
import { Screen } from '../types';
import { Home, Repeat } from 'lucide-react';

interface ResultScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden">
        {/* Confetti Background (Simulated with simple dots for now, normally use canvas-confetti) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute w-3 h-3 rounded-full animate-bounce"
                     style={{
                         backgroundColor: ['#ef4444', '#3b82f6', '#22c55e', '#eab308'][i % 4],
                         left: `${Math.random() * 100}%`,
                         top: `${Math.random() * 100}%`,
                         animationDuration: `${1 + Math.random() * 2}s`,
                         animationDelay: `${Math.random()}s`
                     }}
                ></div>
            ))}
        </div>

        {/* Winner Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[100px] animate-pulse"></div>

        <div className="z-10 flex flex-col items-center text-center">
            <h1 className="text-6xl font-black text-white mb-8 drop-shadow-[0_4px_0_#000] text-stroke">VICTORY!</h1>
            
            <div className="relative mb-12">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-6xl">👑</div>
                <div className="w-40 h-40 rounded-full border-8 border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.5)] overflow-hidden">
                    <img src="https://picsum.photos/id/64/200/200" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-yellow-900 font-bold px-6 py-1 rounded-full border-2 border-white shadow-lg whitespace-nowrap">
                    Level Up! 25
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 w-80 border border-white/20">
                <div className="flex justify-between text-white mb-2">
                    <span>Rank Points</span>
                    <span className="font-bold text-yellow-400">+120</span>
                </div>
                <div className="flex justify-between text-white">
                    <span>Coins Earned</span>
                    <span className="font-bold text-yellow-400">500</span>
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant="danger" onClick={() => onNavigate(Screen.HOME)}>
                    <Home size={20} className="mr-2" /> Exit
                </Button>
                <Button variant="primary" onClick={() => onNavigate(Screen.LOBBY)} className="animate-pulse">
                    <Repeat size={20} className="mr-2" /> Play Again
                </Button>
            </div>
        </div>
    </div>
  );
};