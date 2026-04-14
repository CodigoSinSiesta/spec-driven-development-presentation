import { test, expect } from '@playwright/test';

const HOME = '/spec-driven-development-presentation/';

test.describe('Console Errors', () => {
  test('no console errors on initial load', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(HOME);
    await page.waitForLoadState('networkidle');

    expect(consoleErrors).toHaveLength(0);
  });

  test('no console errors after navigating through all slides', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(HOME);
    await page.waitForLoadState('networkidle');

    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(100);
    }

    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('ArrowLeft');
      await page.waitForTimeout(100);
    }

    expect(consoleErrors).toHaveLength(0);
  });
});
