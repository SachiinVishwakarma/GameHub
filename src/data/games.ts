import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Archery Game',
    description: 'Aim your arrow at the target and try to hit the bullseye! Pull back the bow, release to shoot !!',
    imageUrl: 'https://t3.ftcdn.net/jpg/00/73/53/78/360_F_73537839_a7DojP10378CoxJuw9uQUHObg5guSkJt.jpg',
    category: 'Adventure',
    tags: ['Space', 'Exploration', 'Sci-Fi'],
    url: '/src/Games/Archery/index.html'
  },
  {
    id: '2',
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe with smooth animations and a live scoreboard for competitive fun.!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphYlKWQX-_Rzfr-WLEXyULGLGRU5qbOQUYQ&s',
    category: 'Masti',
    tags: ['Chill', 'Relief Stress'],
    url: '/src/Games/Tic-Tac-Toe/index.html'
  },
  {
    id: '3',
    title: 'Neo Pac-Man',
    description: 'A modern Pac-Man with glowing characters, smooth controls, and an immersive score popup for epic gameplay!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGJvepxhKyfZhQH66LUKAVlQVnY-bEgYHyQ&s', 
    category: 'Masti',
    tags: ['Arcade', 'Classic', 'Addictive'],
    url: '/src/Games/Pac-Man/index.html' // Update path if needed
  }

];

export const categories = Array.from(new Set(games.map(game => game.category)));

export const allTags = Array.from(
  new Set(games.flatMap(game => game.tags))
).sort();