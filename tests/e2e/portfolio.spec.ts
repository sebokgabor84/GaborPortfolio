import { test, expect } from '@playwright/test';

test.describe('GaborPortfolio 360 Validation', () => {

    test.beforeEach(async ({ page }) => {
        // Go to homepage before each test
        await page.goto('/');
    });

    test('Hero Section loads with Cockpit Dashboard', async ({ page }) => {
        // Check Title
        await expect(page).toHaveTitle(/Professional Portfolio/i);

        // Check Hero Text
        await expect(page.locator('h1').first()).toBeVisible();
        await expect(page.getByText(/QA Specialist/i).first()).toBeVisible(); 

        // Check Metrics (Cockpit)
        await expect(page.getByText(/Mission Control Status/i).first()).toBeVisible();
        await expect(page.getByText(/Bugs Squashed/i).first()).toBeVisible();
        await expect(page.getByText(/Liters Fermented/i).first()).toBeVisible();
    });

    test('Social Dock links are present', async ({ page }) => {
        // Check existence of social links
        const socialLinksCount = await page.locator('header a').count();
        expect(socialLinksCount).toBeGreaterThanOrEqual(1);
    });

    test('Project Cards show Coming Soon overlay on click', async ({ page }) => {
        // Go to featured projects page
        await page.goto('/featured-projects');

        // Locate the QA Automation card (h3 in the content div, relative to card section)
        const qaCard = page.locator('section', { hasText: /QA Automation/i });

        // Verify "Coming Soon" is NOT visible initially
        await expect(page.getByText(/Coming Soon/i)).not.toBeVisible();

        // Click the play button area
        const playButton = qaCard.locator('button').first();
        await playButton.click();

        // Verify "Coming Soon" overlay is visible (case-insensitive)
        await expect(page.getByText(/Coming Soon/i)).toBeVisible();
    });

    test('Responsiveness: Mobile Layout check', async ({ page, isMobile }) => {
        // If running in mobile view (Pixel 5), check stack behavior
        if (isMobile) {
            // In mobile, we just ensure the items are still visible and layout didn't break functionality
            await expect(page.getByText(/Mission Control Status/i).first()).toBeVisible();
            // Check that at least one gauge is visible in viewport or exists
            await expect(page.getByText(/Bugs Squashed/i).first()).toBeVisible();
        }
    });

});
