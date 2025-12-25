
import { MenuItem } from './types';

const BASE_URL = import.meta.env.BASE_URL;

export const COLORS = {
  primary: '#182C2D',
  accent: '#DCB48D',
  background: '#FFFFFF',
  text: '#333333',
  link: '#DCB48D'
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'special-1',
    name: 'Brisket Mac & Cheese',
    description: 'Our signature 12-hour smoked brisket served over a double-cream three-cheese blend mac. Limited availability!',
    price: '$16.95',
    category: 'savory',
    imageUrl: `${BASE_URL}images/menu-special-brisket.jpg`
  },
  {
    id: 'classic-1',
    name: 'Classic Burger',
    description: 'Freshly made from scratch. Half-pound Angus beef, melted cheddar, secret sauce on a toasted brioche bun.',
    price: '$14.95',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-classic-burger.jpg`
  },
  {
    id: 'classic-2',
    name: 'Original Poutine',
    description: 'Crispy fries, fresh cheese curds, and our signature savory gravy. Available in original or country style with chicken bits.',
    price: '$11.50',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-poutine.jpg`
  },
  {
    id: 'classic-3',
    name: 'Monte Cristo Sandwich',
    description: 'A classic sandwich deep-fried in pancake batter. Frequently highlighted as the best in town.',
    price: '$15.50',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-monte-cristo.jpg`
  },
  {
    id: 'classic-4',
    name: 'Smoked Brisket Sandwich',
    description: 'Smoked for six hours for maximum flavor. Served on a toasted bun with house-made BBQ sauce.',
    price: '$16.25',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-brisket-sandwich.jpg`
  },
  {
    id: 'classic-5',
    name: 'Beignets',
    description: 'Freshly made and served with a choice of dipping sauces. The perfect sweet ending.',
    price: '$8.95',
    category: 'sweet',
    imageUrl: `${BASE_URL}images/item-beignets.jpg`
  },
  {
    id: 'classic-6',
    name: 'Hush Puppies & Onion Rings',
    description: 'Handcrafted sides that are frequently praised as the best in downtown Escondido.',
    price: '$7.95',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-hush-puppies.jpg`
  },
  {
    id: 'classic-7',
    name: 'Chicken Sandwich',
    description: 'Crispy fried chicken, pickles, spicy mayo on a brioche bun. Simple and perfect.',
    price: '$13.50',
    category: 'savory',
    imageUrl: `${BASE_URL}images/item-chicken-sandwich.jpg`
  }
];
