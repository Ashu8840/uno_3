export enum Screen {
  HOME = 'HOME',
  LOBBY = 'LOBBY',       // Match Selection (2P, 4P, Create)
  INVITE = 'INVITE',     // Invite Friends Modal/Screen
  WAITING = 'WAITING',   // Waiting for opponents at table
  GAME = 'GAME',         // Actual Gameplay
  RESULT = 'RESULT'
}

export enum CardColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  BLACK = 'black' // Wild
}

export enum CardType {
  NUMBER = 'number',
  SKIP = 'skip',
  REVERSE = 'reverse',
  DRAW_TWO = 'draw_two',
  WILD = 'wild',
  WILD_DRAW_FOUR = 'wild_draw_four'
}

export interface CardData {
  id: string;
  color: CardColor;
  type: CardType;
  value?: number | string;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  level: number;
  cardCount: number;
  isBot: boolean;
}

export interface Room {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  entryFee: number;
  mode: 'Classic' | '2v2' | 'Go Wild';
}