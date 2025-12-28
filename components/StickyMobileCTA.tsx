import React from 'react';
import siteContent from '../content.json';

/**
 * Sticky mobile CTA component that displays at the bottom of the screen on mobile devices.
 * Contains "Call" and "Order Online" buttons for quick access to key actions.
 */
const StickyMobileCTA: React.FC = () => {
  const phoneNumber = siteContent.restaurant.phone;
  const orderUrl = siteContent.restaurant.orderUrl;

  // Format phone for tel: link (remove parentheses and spaces)
  const phoneLink = `tel:${phoneNumber.replace(/[^\d+]/g, '')}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-karak-primary border-t border-karak-accent/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="flex items-stretch">
        {/* Call Button */}
        <a
          href={phoneLink}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white hover:bg-karak-primary/90 active:bg-karak-primary/80 transition-colors border-r border-karak-accent/20"
          aria-label={`Call H Brothers at ${phoneNumber}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-sm font-bold tracking-wide">
            Call: {phoneNumber.replace(/^\((\d{3})\)\s*/, '$1-')}
          </span>
        </a>

        {/* Order Online Button */}
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-karak-accent text-karak-primary font-bold hover:bg-karak-accent/90 active:bg-karak-accent/80 transition-colors"
          aria-label="Order online from H Brothers"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-sm font-bold tracking-wide uppercase">
            Order Online
          </span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
