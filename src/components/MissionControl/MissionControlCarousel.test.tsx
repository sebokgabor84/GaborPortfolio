import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MissionControlCarousel } from './MissionControlCarousel';
import { kpis } from '../../data/kpis';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('MissionControlCarousel', () => {

  it('renders the header correctly', () => {
    render(<MissionControlCarousel />);
    expect(screen.getByText('cockpit.title 3D')).toBeInTheDocument();
  });

  it('renders the correct number of static tiles', () => {
    render(<MissionControlCarousel />);
    
    // Check how many active static KPIs there are in the data layer
    const staticKpiCount = kpis.filter(k => k.enabled && !k.isDynamic).length;

    // Fast check: we know that 'cockpit.kpi_bugs' is one of the titles for instance.
    const bugsTitle = screen.getByText('cockpit.kpi_bugs');
    expect(bugsTitle).toBeInTheDocument();
    
    // We expect the carousel to render one article per static KPI
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(staticKpiCount);
  });

  it('does not crash when simulating pointer interactions', () => {
    render(<MissionControlCarousel />);
    
    // Get the scene container
    // We can find it by finding the header and going to next sibling, or querying by class
    const { container } = render(<MissionControlCarousel />);
    const scene = container.querySelector('.mc-scene');
    
    expect(scene).toBeInTheDocument();
    
    if (scene) {
      // Start drag
      fireEvent.pointerDown(scene, { clientX: 100, pointerId: 1 });
      
      // Move drag
      fireEvent.pointerMove(scene, { clientX: 50, pointerId: 1 });
      
      // End drag
      fireEvent.pointerUp(scene, { pointerId: 1 });
    }
  });
});
