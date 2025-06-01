import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onSelectGame }) => {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No games found</h3>
        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard 
          key={game.id} 
          game={game} 
          onClick={() => onSelectGame(game)}
        />
      ))}
    </div>
  );
};

export default GameGrid;