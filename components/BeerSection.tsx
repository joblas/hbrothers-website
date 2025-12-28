import React from 'react';
import siteContent from '../content.json';

/**
 * Beer/Craft Beer section with dark theme highlighting local brewery partners.
 * Features Stone, Burgeon, and Artifex brewery logos with Instagram CTA.
 */

interface Brewery {
  name: string;
  logoUrl?: string;
}

const BREWERIES: Brewery[] = [
  { name: 'Stone Brewing' },
  { name: 'Burgeon Beer Co' },
  { name: 'Artifex Brewing' },
];

const BeerSection: React.FC = () => {
  const instagramHandle = '@hbrothers_esco';
  const instagramUrl = siteContent.restaurant.instagramUrl;

  return (
    <section
      className="bg-karak-primary py-16 px-4"
      aria-labelledby="beer-section-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2
          id="beer-section-heading"
          className="text-3xl md:text-4xl font-bold text-karak-accent mb-4 font-playfair"
        >
          Local Craft Beer on Tap
        </h2>

        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          We proudly serve craft beers from San Diego's finest local breweries.
          Ask about our rotating selection!
        </p>

        {/* Brewery Logos/Names */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
          {BREWERIES.map((brewery) => (
            <div
              key={brewery.name}
              className="flex flex-col items-center gap-2"
            >
              {/* Placeholder for brewery logo - can be replaced with actual images */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 border-2 border-karak-accent/30 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-karak-accent text-3xl md:text-4xl font-bold">
                  {brewery.name.charAt(0)}
                </span>
              </div>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                {brewery.name}
              </span>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg py-6 px-8 inline-block border border-karak-accent/20">
          <p className="text-white text-lg mb-3">
            <span className="text-karak-accent font-semibold">Today's tap list?</span>
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-karak-accent hover:text-white transition-colors group"
            aria-label={`Follow ${instagramHandle} on Instagram for today's tap list`}
          >
            {/* Instagram Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-lg font-semibold group-hover:underline">
              Follow {instagramHandle} for today's tap list
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeerSection;
