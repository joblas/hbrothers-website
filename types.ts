
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'entrees' | 'sandwiches' | 'sides' | 'specials' | 'drinks';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Category {
  Starters = 'starters',
  Entrees = 'entrees',
  Sandwiches = 'sandwiches',
  Sides = 'sides',
  Specials = 'specials',
  Drinks = 'drinks'
}
