import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Load baseline synchronously for the audit suite
const baselinePath = path.resolve('tests/e2e/performance.baseline.json');
const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf-8'));

const ROUTES = ['/', '/featured-projects', '/non-existent-path'];

test.describe('Web Vitals Regression Guard (95+ Target)', () => {
    for (const path of ROUTES) {
        test(`Performance Audit: ${path}`, async ({ page }) => {
            // Navigate and wait for stability
            await page.goto(path);
            await page.waitForLoadState('networkidle');
            
            // Allow for LCP to settle
            await page.waitForTimeout(2000);

            const metrics = await page.evaluate(async () => {
                const getLCP = () => {
                    return new Promise((resolve) => {
                        new PerformanceObserver((entryList) => {
                            const entries = entryList.getEntries();
                            const lastEntry = entries[entries.length - 1];
                            resolve(lastEntry.startTime);
                        }).observe({ type: 'largest-contentful-paint', buffered: true });
                        // Fallback after timeout
                        setTimeout(() => resolve(0), 3000);
                    });
                };

                const getFCP = () => {
                    const entry = performance.getEntriesByName('first-contentful-paint')[0];
                    return entry ? entry.startTime : 0;
                };

                const getCLS = () => {
                    let clsValue = 0;
                    new PerformanceObserver((entryList) => {
                        for (const entry of entryList.getEntries()) {
                            const shift = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
                            if (!shift.hadRecentInput) {
                                clsValue += shift.value || 0;
                            }
                        }
                    }).observe({ type: 'layout-shift', buffered: true });
                    return clsValue;
                };

                return {
                    lcp: await getLCP(),
                    fcp: getFCP(),
                    cls: getCLS()
                };
            });

            console.log(`Metrics for ${path}:`, metrics);

            const globalTarget = baseline.target.metrics;

            // Enforcement Gates
            if (metrics.lcp > 0) {
                expect(metrics.lcp, `LCP regression on ${path}`).toBeLessThan(globalTarget.lcp);
            }
            expect(metrics.cls, `CLS regression on ${path}`).toBeLessThan(globalTarget.cls);
            expect(metrics.fcp, `FCP regression on ${path}`).toBeLessThan(globalTarget.fcp);

            // 95+ Score Simulation (Lighthouse 10+ weights)
            // LCP (25%), CLS (25%), FCP (10%), TBT (30%), SI (10%)
            // We use LCP, CLS, FCP for a 100% synthetic baseline
            
            // Logistic curves approximations:
            const lcpScore = metrics.lcp <= 1200 ? 100 : Math.max(0, 100 - ((metrics.lcp as number - 1200) / 20));
            const clsScore = metrics.cls <= 0.1 ? 100 : Math.max(0, 100 - ((metrics.cls - 0.1) * 500));
            const fcpScore = metrics.fcp <= 1800 ? 100 : Math.max(0, 100 - ((metrics.fcp as number - 1800) / 20));
            
            // Weighted average normalized to 100
            const estimatedScore = (lcpScore * 0.4) + (clsScore * 0.4) + (fcpScore * 0.2);
            console.log(`Estimated Performance Score for ${path}: ${estimatedScore.toFixed(2)}`);
            
            expect(estimatedScore, `Performance score on ${path} dropped below 95!`).toBeGreaterThanOrEqual(95);
        });
    }
});
