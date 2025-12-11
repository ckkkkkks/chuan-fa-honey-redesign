export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  // New fields for detail view
  manufacturingDate: string;
  shelfLife: string;
  capacity: string;
  features: string[];
}

export enum Page {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  AI_SOMMELIER = 'AI_SOMMELIER',
  STORY = 'STORY'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type Language = 'zh-TW' | 'en' | 'ja' | 'ko';