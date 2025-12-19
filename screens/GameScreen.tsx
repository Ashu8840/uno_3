import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { UnoCard } from '../components/UnoCard';
import { Avatar } from '../components/Avatar';
import { Screen, Player, CardData, CardColor, CardType } from '../types';
import { ArrowLeft, MessageCircle, Settings, Menu } from 'lucide-react';

interface GameScreenProps {
  onNavigate: (screen: Screen) => void;
}

const PLAYERS: Player[] = [
    { id: '1', name: 'You', avatar: 'https://picsum.photos/id/64/100/100', level: 24, cardCount: 7, isBot: false },
    { id: '2', name: 'Anna', avatar: 'https://picsum.photos/id/65/100/100', level: 19, cardCount: 4, isBot: true },
    { id: '3', name: 'David', avatar: 'https://picsum.photos/id/91/100/100', level: 12, cardCount: 12, isBot: true },
    { id: '4', name: 'Mike', avatar: 'https://picsum.photos/id/103/100/100', level: 14, cardCount: 2, isBot: true },
];

const INITIAL_HAND: CardData[] = [
    { id: 'h1', color: CardColor.RED, type: CardType.NUMBER, value: 7 },
    { id: 'h2', color: CardColor.YELLOW, type: CardType.NUMBER, value: 2 },
    { id: 'h3', color: CardColor.GREEN, type: CardType.NUMBER, value: 9 },
    { id: 'h4', color: CardColor.GREEN, type: CardType.NUMBER, value: 9 },
    { id: 'h5', color: CardColor.BLACK, type: CardType.WILD },
    { id: 'h6', color: CardColor.BLUE, type: CardType.SKIP },
    { id: 'h7', color: CardColor.BLUE, type: CardType.REVERSE },
];

export const GameScreen: React.FC<GameScreenProps> = ({ onNavigate }) => {
  const [currentPlayerId, setCurrentPlayerId] = useState('1');
  const [myHand, setMyHand] = useState<CardData[]>(INITIAL_HAND);
  const [animatingCard, setAnimatingCard] = useState<{card: CardData, step: 'start' | 'flying' | 'end'} | null>(null);

  useEffect(() => {
    if (currentPlayerId !== '1') {
        const timer = setTimeout(() => {
            const idx = PLAYERS.findIndex(p => p.id === currentPlayerId);
            const nextIdx = (idx + 1) % PLAYERS.length;
            setCurrentPlayerId(PLAYERS[nextIdx].id);
        }, 2000);
        return () => clearTimeout(timer);
    }
  }, [currentPlayerId]);

  const drawCard = () => {
    if (animatingCard) return; // Prevent double draw

    // Create a new card to draw
    const newCard: CardData = { 
        id: `new_${Date.now()}`, 
        color: [CardColor.RED, CardColor.BLUE, CardColor.GREEN, CardColor.YELLOW][Math.floor(Math.random()*4)], 
        type: CardType.NUMBER, 
        value: Math.floor(Math.random() * 9) 
    };

    // 1. Start Animation: Card appears at deck
    setAnimatingCard({ card: newCard, step: 'start' });

    // 2. Fly Animation: Trigger CSS transition to hand position
    // Small delay to ensure browser renders 'start' position first
    setTimeout(() => {
        setAnimatingCard({ card: newCard, step: 'flying' });
    }, 50);

    // 3. End Animation: Add to hand and clear flying card
    setTimeout(() => {
        setMyHand(prev => [...prev, newCard]);
        setAnimatingCard(null);
    }, 600); // Match CSS transition duration
  };

  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-gray-950">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/28/1920/1080')] bg-cover bg-center blur-[2px] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/50 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-50 items-start">
          <Button variant="wood" size="sm" onClick={() => onNavigate(Screen.LOBBY)} className="rounded-xl w-12 h-12 !p-0 shadow-lg">
               <ArrowLeft size={24} strokeWidth={3} />
           </Button>
           <div className="flex gap-2">
               <div className="bg-black/60 text-white font-mono font-bold px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-2">
                   <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                   8629
               </div>
           </div>
           <Button variant="wood" size="sm" className="rounded-xl w-12 h-12 !p-0 shadow-lg">
               <Settings size={24} />
           </Button>
      </div>

      {/* Game Table Area - 3D Perspective */}
      <div className="flex-1 relative flex items-center justify-center perspective-[1200px] overflow-visible">
          
          {/* Wooden Table Top */}
          <div className="relative w-[95%] md:w-[650px] aspect-square transform-gpu rotate-x-[25deg] transition-transform duration-700">
              {/* Outer Rim */}
              <div className="absolute inset-0 rounded-full bg-[#3f1f0e] border-[16px] border-[#2a1307] shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
                   <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] rounded-full"></div>
              </div>

              {/* Inner Felt - Rich Gradient */}
              <div className="absolute inset-4 rounded-full border-4 border-[#7c2d12] overflow-hidden bg-gradient-to-br from-[#c2410c] via-[#9a3412] to-[#431407] shadow-[inset_0_10px_30px_rgba(0,0,0,0.6)]">
                   {/* Decorative circle line */}
                   <div className="absolute inset-16 rounded-full border-2 border-[#fdba74] opacity-20"></div>
                   
                   {/* Felt Texture */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-30 mix-blend-overlay"></div>
                   
                   {/* Center Highlight */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-orange-500 rounded-full blur-[80px] opacity-20"></div>
              </div>

              {/* Center Play Area - Flattened back against the tilt */}
              <div className="absolute inset-0 flex items-center justify-center gap-8 z-10 transform-gpu -rotate-x-[25deg] translate-y-[-20px]">
                  {/* Draw Pile */}
                  <div 
                    className="relative cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 group"
                    onClick={drawCard}
                  >
                      <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl blur-md transform translate-y-4"></div>
                      <UnoCard card={{id: 'deck', color: CardColor.BLACK, type: CardType.NUMBER}} isHidden className="shadow-2xl z-10" />
                      {/* Stack effect */}
                      <div className="absolute -top-1 -left-1 w-full h-full bg-gray-800 rounded-xl -z-10 border border-white/10"></div>
                      <div className="absolute -top-2 -left-2 w-full h-full bg-gray-800 rounded-xl -z-20 border border-white/10"></div>
                  </div>

                  {/* Discard Pile */}
                  <div className="relative transform rotate-12 transition-transform duration-500">
                      <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl blur-md transform translate-y-4"></div>
                      <UnoCard card={{id: 'top', color: CardColor.GREEN, type: CardType.NUMBER, value: 5}} className="shadow-2xl" />
                  </div>
              </div>

              {/* Direction Arrows */}
              <div className="absolute inset-24 rounded-full border-[6px] border-dashed border-[#fbbf24]/20 animate-[spin_30s_linear_infinite] pointer-events-none transform-gpu"></div>
              
              {/* Turn Indicator Overlay */}
              <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 transform-gpu -rotate-x-[25deg]">
                  {currentPlayerId === '1' && (
                    <Button variant="green" size="lg" className="px-12 text-xl shadow-[0_0_50px_rgba(34,197,94,0.6)] animate-pulse border-2 border-[#86efac]">
                        YOUR TURN
                    </Button>
                  )}
              </div>

              {/* UNO Shout Button */}
              <div className="absolute left-10 bottom-40 transform-gpu -rotate-x-[25deg]">
                  <div className="w-20 h-16 bg-gradient-to-b from-[#7c2d12] to-[#451a03] border-2 border-[#a8a29e] rounded-xl transform -rotate-12 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 active:scale-95 transition-all">
                      <div className="text-[#fcd34d] font-black text-xl drop-shadow-sm">UNO</div>
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-[#451a03] text-xs font-bold px-1.5 py-0.5 rounded border border-white shadow-sm">2</div>
                  </div>
              </div>

              {/* Opponent Avatars - Corrected Perspective Positioning */}
              {/* Using negative rotate-x to make them face the camera */}
              
              {/* Top - David */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 transform-gpu -rotate-x-[25deg]">
                  <div className={`transition-all duration-300 ${currentPlayerId === '3' ? 'scale-110 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]' : ''}`}>
                      <Avatar player={PLAYERS[2]} isActive={currentPlayerId === '3'} position="top" />
                  </div>
              </div>

              {/* Right - Mike */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 flex flex-col items-center z-20 transform-gpu -rotate-x-[25deg]">
                   <div className={`transition-all duration-300 ${currentPlayerId === '4' ? 'scale-110 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]' : ''}`}>
                      <Avatar player={PLAYERS[3]} isActive={currentPlayerId === '4'} position="right" />
                  </div>
              </div>

              {/* Left - Anna */}
              <div className="absolute top-1/2 -left-10 -translate-y-1/2 flex flex-col items-center z-20 transform-gpu -rotate-x-[25deg]">
                   <div className={`transition-all duration-300 ${currentPlayerId === '2' ? 'scale-110 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]' : ''}`}>
                      <Avatar player={PLAYERS[1]} isActive={currentPlayerId === '2'} position="left" />
                  </div>
              </div>
          </div>
      </div>

      {/* Player Hand Area */}
      <div className="h-48 w-full z-40 relative flex justify-center items-end pb-4 bg-gradient-to-t from-black/80 to-transparent">
          
          {/* My Profile Bottom Left */}
          <div className="absolute bottom-6 left-6 flex gap-3 items-center group cursor-pointer">
             <div className="w-14 h-14 rounded-2xl border-2 border-white/50 overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                 <img src={PLAYERS[0].avatar} className="w-full h-full object-cover" />
             </div>
             <div className="bg-[#1e40af] text-white text-sm font-bold px-3 py-1 rounded-lg border border-[#60a5fa] shadow-md">You</div>
          </div>

          {/* Cards Fan - Optimized */}
          <div className="relative h-32 w-full max-w-2xl flex justify-center items-end mb-2 perspective-[500px]">
             {myHand.map((card, index) => {
                 const total = myHand.length;
                 const mid = (total - 1) / 2;
                 const rotate = (index - mid) * 5; 
                 const yOffset = Math.abs(index - mid) * 10;
                 const xOffset = (index - mid) * 45;
                 
                 return (
                     <div 
                        key={card.id} 
                        className="absolute transition-all duration-300 ease-out origin-bottom cursor-pointer hover:z-50 will-change-transform"
                        style={{
                            left: '50%',
                            bottom: '0px',
                            transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${yOffset}px) rotate(${rotate}deg)`,
                            zIndex: index
                        }}
                     >
                         <div className="transition-transform duration-200 hover:-translate-y-12 hover:scale-110 hover:rotate-0">
                            <UnoCard card={card} isPlayable={currentPlayerId === '1'} onClick={() => currentPlayerId === '1' && onNavigate(Screen.RESULT)} />
                         </div>
                     </div>
                 );
             })}
          </div>

          {/* Bottom Right Actions */}
          <div className="absolute bottom-6 right-6">
              <div className="relative">
                <Button variant="wood" size="md" className="w-14 h-14 !p-0 rounded-2xl shadow-xl">
                   <MessageCircle size={28} />
                </Button>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-[#451a03] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">3</span>
                </div>
              </div>
          </div>
      </div>

      {/* FLYING CARD OVERLAY */}
      {/* This element sits on top of everything to handle the animation from deck (center) to hand (bottom) */}
      {animatingCard && (
        <div 
            className="absolute z-[100] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none"
            style={{
                top: animatingCard.step === 'start' ? '40%' : '85%',
                left: animatingCard.step === 'start' ? '50%' : '50%',
                transform: `
                    translate(-50%, -50%) 
                    scale(${animatingCard.step === 'start' ? 0.5 : 1}) 
                    rotate(${animatingCard.step === 'start' ? '180deg' : '0deg'})
                `,
                opacity: animatingCard.step === 'start' ? 0 : 1 // Start invisible briefly to avoid jump
            }}
        >
             {/* Render the card slightly smaller initially to match perspective deck size */}
             <div className={`${animatingCard.step === 'start' ? 'opacity-100' : ''}`}>
                 <UnoCard card={animatingCard.card} className="shadow-2xl" />
             </div>
        </div>
      )}
    </div>
  );
};