import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import fs from 'fs';
import path from 'path';

// Test that verifies JSON-LD schema exists in index.html
describe('SEO & Schema Markup', () => {
  it('should have JSON-LD schema in index.html', async () => {
    // Read the index.html file directly to verify schema markup
    const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

    // Check that JSON-LD scripts exist
    expect(indexHtml).toContain('application/ld+json');

    // Parse and verify the Restaurant schema
    const restaurantSchemaMatch = indexHtml.match(/<script type="application\/ld\+json">\s*(\{[\s\S]*?"@type":\s*"Restaurant"[\s\S]*?\})\s*<\/script>/);
    expect(restaurantSchemaMatch).not.toBeNull();

    const schema = JSON.parse(restaurantSchemaMatch![1]);
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Restaurant');
    expect(schema.name).toBe('H Brothers');
    expect(schema.priceRange).toBe('$$');
    expect(schema.telephone).toBe('+1-442-999-5542');

    // Verify images are webp
    schema.image.forEach((img: string) => {
      expect(img).toMatch(/\.webp$/);
    });
  });
});
