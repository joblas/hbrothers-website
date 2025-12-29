import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import BeerSection from '../components/BeerSection';
import siteContent from '../content.json';

describe('Asset Optimization', () => {
  it('Hero component should use .webp image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/H Brothers restaurant/i);
    // Expect the src to contain .webp (handling potential base path or query params)
    expect(heroImage.getAttribute('src')).toMatch(/\.webp$/);
  });

  it('Menu component should use .webp images for specials', () => {
    render(<Menu />);
    const brisketImage = screen.getByAltText(/H Brothers Brisket Mac & Cheese/i);
    expect(brisketImage.getAttribute('src')).toMatch(/\.webp$/);
    
    const spreadImage = screen.getByAltText(/H Brothers comfort food spread/i);
    expect(spreadImage.getAttribute('src')).toMatch(/\.webp$/);
  });

  it('BeerSection component should use .webp images for brewery logos', () => {
    render(<BeerSection />);
    const stoneLogo = screen.getByAltText(/Stone Brewing logo/i);
    const burgeonLogo = screen.getByAltText(/Burgeon Beer Co logo/i);
    const artifexLogo = screen.getByAltText(/Artifex Brewing logo/i);
    
    expect(stoneLogo.getAttribute('src')).toMatch(/\.webp$/);
    expect(burgeonLogo.getAttribute('src')).toMatch(/\.webp$/);
    expect(artifexLogo.getAttribute('src')).toMatch(/\.webp$/);
  });

  it('content.json should reference .webp images', () => {
     siteContent.menu.forEach(item => {
        expect(item.imageName).toMatch(/\.webp$/);
     });
  });
});
