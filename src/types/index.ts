export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  url: string; // URL for iframe embedding
}

export type ThemeMode = 'light' | 'dark';