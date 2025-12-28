import { describe, it, expect } from 'vitest';
import siteContent from '../content.json';

describe('2025 Menu Pricing Migration', () => {
  const getPrice = (name: string) => siteContent.menu.find(i => i.name === name)?.price;

  it('should have updated Poutine pricing', () => {
    expect(getPrice('Original Poutine')).toBe('$11.99+');
    expect(getPrice('Adobada Fries')).toBe('$17.99');
  });

  it('should have updated Sandwiches pricing', () => {
    expect(getPrice('H Bros Cheesesteak')).toBe('$19.50');
    expect(getPrice('Brisket Sandwich')).toBe('$19.20');
    expect(getPrice('Parmesan Crusted Chicken')).toBe('$17.99');
    expect(getPrice('Seafood Melt')).toBe('$20.40');
  });

  it('should have updated Wraps pricing', () => {
    expect(getPrice('Tzatziki Chicken Wrap')).toBe('$15.60');
    expect(getPrice('Buffalo Ranch Wrap')).toBe('$15.60');
    expect(getPrice('Chicken Caesar Wrap')).toBe('$15.60');
  });

  it('should have updated Munchies pricing', () => {
    expect(getPrice('Deep Fried Pickles')).toBe('$12.50');
    expect(getPrice('Truffle Fries')).toBe('$11.50');
  });
});