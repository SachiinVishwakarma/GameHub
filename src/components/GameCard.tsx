import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const handleCardClick = () => {
    window.location.href = game.url;
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                cursor-pointer transform transition duration-300 hover:scale-[1.02] h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {game.category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{game.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">{game.description}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {game.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                      text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button 
          className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800
                   text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;
