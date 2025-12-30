import { describe, it, expect } from 'vitest';
import siteContent from '../content.json';

describe('Social Media Integration', () => {
  it('should have Facebook metadata in content.json', () => {
    // @ts-ignore - Properties might not exist yet
    expect(siteContent.restaurant).toHaveProperty('facebookUrl');
    // @ts-ignore
    expect(siteContent.restaurant.facebookUrl).toBe('https://www.facebook.com/HBROTHERSESCO/');
    
    // @ts-ignore
    expect(siteContent.restaurant).toHaveProperty('facebookRating');
    // @ts-ignore
    expect(siteContent.restaurant).toHaveProperty('facebookReviewCount');
  });
});
