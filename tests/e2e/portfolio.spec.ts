import { test, expect } from '@playwright/test';

test.describe('GaborPortfolio 360 Validation', () => {

    test.beforeEach(async ({ page }) => {
        // Go to homepage before each test
        await page.goto('/');
    });

    test('Hero Section loads with Cockpit Dashboard', async ({ page }) => {
        // Check Title
        await expect(page).toHaveTitle(/Gabor Seboek | Professional Portfolio/);

        // Check Hero Text
        await expect(page.getByRole('heading', { name: 'Gabor Seboek' })).toBeVisible();
        await expect(page.getByText('QA Specialist | Master Brewer | Craftsman')).toBeVisible();

        // Check Metrics (Cockpit)
        await expect(page.getByText('Mission Control Status')).toBeVisible();
        await expect(page.getByText('Bugs Squashed')).toBeVisible();
        await expect(page.getByText('Liters Fermented')).toBeVisible();
    });

    test('Social Dock links are present', async ({ page }) => {
        // Check existence of social links
        // We check specifically for the icons or anchor tags
        const socialLinks = page.locator('header a');
        await expect(socialLinks).toHaveCount(5); // LinkedIn, Insta, FB, TikTok, X
    });

    test('Project Cards load video on click (Facade Pattern)', async ({ page }) => {
        // Locate the QA Automation card
        const qaCard = page.getByRole('heading', { name: 'QA Automation Framework' }).locator('..').locator('..');

        // Verify "Click to Initialize" button is present initially
        const playButton = qaCard.getByRole('button', { name: /Play video/i });
        await expect(playButton).toBeVisible();
        await expect(qaCard.locator('iframe')).not.toBeVisible();

        // Click to load video
        await playButton.click();

        // Verify button is gone and iframe is present
        await expect(playButton).not.toBeVisible();
        await expect(qaCard.locator('iframe')).toBeVisible();

        // Verify iframe src contains autoplay
        await expect(qaCard.locator('iframe')).toHaveAttribute('src', /autoplay=1/);
    });

    test('Responsiveness: Mobile Layout check', async ({ page, isMobile }) => {
        // If running in mobile view (Pixel 5), check stack behavior
        if (isMobile) {
            // In mobile, we just ensure the items are still visible and layout didn't break functionality
            await expect(page.getByText('Mission Control Status')).toBeVisible();
            // Check that at least one gauge is visible in viewport or exists
            await expect(page.getByText('Bugs Squashed')).toBeVisible();
        }
    });

});
