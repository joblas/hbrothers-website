
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
    category: 'specials',
    imageUrl: `${BASE_URL}images/menu-special-brisket.jpg`
  },
  {
    id: 'classic-1',
    name: 'Classic Burger',
    description: 'Half-pound Angus beef, melted cheddar, secret sauce on a toasted brioche bun.',
    price: '$14.95',
    category: 'entrees',
    imageUrl: `${BASE_URL}images/item-classic-burger.jpg`
  },
  {
    id: 'classic-2',
    name: 'Original Poutine',
    description: 'Crispy fries, fresh cheese curds, and our signature savory gravy. A North American favorite.',
    price: '$11.50',
    category: 'starters',
    imageUrl: `${BASE_URL}images/item-poutine.jpg`
  },
  {
    id: 'classic-3',
    name: 'Chicken Sandwich',
    description: 'Crispy fried chicken, pickles, spicy mayo on a brioche bun. Simple and perfect.',
    price: '$13.50',
    category: 'sandwiches',
    imageUrl: `${BASE_URL}images/item-chicken-sandwich.jpg`
  },
  {
    id: 'classic-4',
    name: 'Parmesan Chicken',
    description: 'Tender chicken breast with a golden parmesan crust, served with fresh seasonal sides.',
    price: '$15.95',
    category: 'entrees',
    imageUrl: `${BASE_URL}images/item-parmesan-chicken.jpg`
  },
  {
    id: 'classic-5',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with bacon, melted cheese, and fresh green onions.',
    price: '$10.95',
    category: 'sides',
    imageUrl: `${BASE_URL}images/item-loaded-fries.jpg`
  },
  {
    id: 'classic-6',
    name: 'Shrimp Po-Boy',
    description: 'Crispy fried shrimp with lettuce, tomato, and remoulade sauce.',
    price: '$15.25',
    category: 'sandwiches',
    imageUrl: `${BASE_URL}images/item-shrimp-poboy.jpg`
  },
  {
    id: 'classic-7',
    name: 'Mac & Cheese',
    description: 'Creamy three-cheese blend with a toasted breadcrumb topping.',
    price: '$9.90',
    category: 'sides',
    imageUrl: `${BASE_URL}images/item-mac-cheese.jpg`
  },
  {
    id: 'classic-8',
    name: 'Buffalo Chicken Wrap',
    description: 'Spicy buffalo chicken with ranch, lettuce, and cheese.',
    price: '$13.25',
    category: 'sandwiches',
    imageUrl: `${BASE_URL}images/item-buffalo-wrap.jpg`
  }
];
