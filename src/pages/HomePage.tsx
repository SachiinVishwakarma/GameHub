import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import GameGrid from '../components/GameGrid';
import GameModal from '../components/GameModal';
import CategoryFilter from '../components/CategoryFilter';
import { games } from '../data/games';
import { Game } from '../types';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);

  useEffect(() => {
    const filtered = games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || game.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredGames(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex-none border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container mx-auto px-4 py-2">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>
      
      <main className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="container mx-auto px-4 py-6">
          <GameGrid 
            games={filteredGames} 
            onSelectGame={setSelectedGame}
          />
        </div>
      </main>
      
      <GameModal 
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
};

export default HomePage;