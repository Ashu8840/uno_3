import React, { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { LobbyScreen } from './screens/LobbyScreen';
import { InviteScreen } from './screens/InviteScreen';
import { WaitingScreen } from './screens/WaitingScreen';
import { GameScreen } from './screens/GameScreen';
import { ResultScreen } from './screens/ResultScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case Screen.LOBBY:
        return <LobbyScreen onNavigate={setCurrentScreen} />;
      case Screen.INVITE:
        return <InviteScreen onNavigate={setCurrentScreen} />;
      case Screen.WAITING:
        return <WaitingScreen onNavigate={setCurrentScreen} />;
      case Screen.GAME:
        return <GameScreen onNavigate={setCurrentScreen} />;
      case Screen.RESULT:
        return <ResultScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="w-full h-screen bg-black font-sans overflow-hidden select-none">
      {renderScreen()}
    </div>
  );
};

export default App;