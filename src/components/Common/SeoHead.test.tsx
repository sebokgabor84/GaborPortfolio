import { render, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { SeoHead } from './SeoHead';

describe('SeoHead Component', () => {
  const defaultProps = {
    title: 'Test SEO Title',
    description: 'Test SEO Description with exactly fifty characters',
    canonicalUrl: 'https://gaborseboek.com/test',
    ogImage: 'https://gaborseboek.com/assets/og-image.webp',
    locale: 'en',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage' },
  };

  beforeEach(() => {
    // Clear head tags injected by tests
    document.head.innerHTML = '';
  });

  afterEach(() => {
    cleanup();
  });

  it('updates document.title and document.documentElement.lang', () => {
    render(<SeoHead {...defaultProps} />);
    expect(document.title).toBe(defaultProps.title);
    expect(document.documentElement.lang).toBe(defaultProps.locale);
  });

  it('injects standard meta description', () => {
    render(<SeoHead {...defaultProps} />);
    const metaDesc = document.head.querySelector('meta[name="description"]');
    expect(metaDesc).not.toBeNull();
    expect(metaDesc?.getAttribute('content')).toBe(defaultProps.description);
  });

  it('injects Open Graph tags', () => {
    render(<SeoHead {...defaultProps} />);
    const ogTitle = document.head.querySelector('meta[property="og:title"]');
    const ogImage = document.head.querySelector('meta[property="og:image"]');
    expect(ogTitle?.getAttribute('content')).toBe(defaultProps.title);
    expect(ogImage?.getAttribute('content')).toBe(defaultProps.ogImage);
  });

  it('injects canonical link', () => {
    render(<SeoHead {...defaultProps} />);
    const canonicalLink = document.head.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe(defaultProps.canonicalUrl);
  });

  it('renders json-ld script correctly', () => {
    const { container } = render(<SeoHead {...defaultProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    expect(scriptTag).not.toBeNull();
    expect(scriptTag?.innerHTML).toBe(JSON.stringify(defaultProps.jsonLd));
  });

  it('safely updates existing tags instead of duplicating them', () => {
    render(<SeoHead {...defaultProps} />);
    let metaDescs = document.head.querySelectorAll('meta[name="description"]');
    expect(metaDescs.length).toBe(1);

    // Re-render with new props
    const newProps = { ...defaultProps, description: 'Updated SEO Description' };
    render(<SeoHead {...newProps} />);
    
    metaDescs = document.head.querySelectorAll('meta[name="description"]');
    expect(metaDescs.length).toBe(1);
    expect(metaDescs[0].getAttribute('content')).toBe('Updated SEO Description');
  });
});
