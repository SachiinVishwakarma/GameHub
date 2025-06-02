import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Archery Game',
    description: 'Aim your arrow at the target and try to hit the bullseye! Pull back the bow, release to shoot !!',
    imageUrl: 'https://t3.ftcdn.net/jpg/00/73/53/78/360_F_73537839_a7DojP10378CoxJuw9uQUHObg5guSkJt.jpg',
    category: 'Adventure',
    tags: ['Space', 'Exploration', 'Sci-Fi'],
    url: '/Archery/index.html'
  },
  {
    id: '2',
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe with smooth animations and a live scoreboard for competitive fun.!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphYlKWQX-_Rzfr-WLEXyULGLGRU5qbOQUYQ&s',
    category: 'Masti',
    tags: ['Chill', 'Relief Stress'],
    url: '/Tic-Tac-Toe/index.html'
  },
  {
    id: '3',
    title: 'Neo Pac-Man',
    description: 'A modern Pac-Man with glowing characters, smooth controls, and an immersive score popup for epic gameplay!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGJvepxhKyfZhQH66LUKAVlQVnY-bEgYHyQ&s',
    category: 'Masti',
    tags: ['Arcade', 'Classic', 'Addictive'],
    url: '/Pac-Man/index.html' // Update path if needed
  },
  {
    id: '4',
    title: 'Dot Box Duel',
    description: 'A strategic 2-player game where players connect dots to form boxes. Earn points by completing squares with smooth animations and colorful turns!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBLdXrR5d8fYY96HgIOlQzKddJrMp08IQSg&s',
    category: 'Masti',
    tags: ['Strategy', 'Multiplayer', 'Grid'],
    url: '/Dot-Box/index.html'
  },
  {
    id: '5',
    title: 'Rock Paper Scissors',
    description: 'A classic 2-player or solo game of quick thinking and luck! Choose rock, paper, or scissors and challenge your opponent with fun visuals and smooth gameplay.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZjYOceaM7jusSjD1jmBWTvfcUBD0uMlDzQ&s',
    category: 'Masti',
    tags: ['Classic', 'Multiplayer', 'Fun'],
    url: '/Rock-Paper/index.html'
  }



];

export const categories = Array.from(new Set(games.map(game => game.category)));

export const allTags = Array.from(
  new Set(games.flatMap(game => game.tags))
).sort();