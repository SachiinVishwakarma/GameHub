import React from 'react';
import { TowerControl as GameController, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <GameController className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">GameHub</h1>
        </div>
        
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     transition-colors duration-200"
          />
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;