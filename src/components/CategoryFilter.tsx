import React from 'react';
import { categories } from '../data/games';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                   ${selectedCategory === null 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                     ${selectedCategory === category 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;