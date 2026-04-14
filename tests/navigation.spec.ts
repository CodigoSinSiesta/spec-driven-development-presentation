import { test, expect } from '@playwright/test';

const HOME = '/spec-driven-development-presentation/';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME);
    await page.waitForSelector('.swiper-slide-active');
    await page.locator('body').click();
  });

  test('ArrowRight advances slides (counter increments)', async ({ page }) => {
    const counter = page.locator('.slide-counter');

    await expect(counter).toContainText(/1\s*\/\s*9/);

    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText(/2\s*\/\s*9/);

    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText(/3\s*\/\s*9/);
  });

  test('ArrowLeft goes back (counter decrements)', async ({ page }) => {
    const counter = page.locator('.slide-counter');

    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText(/3\s*\/\s*9/);

    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText(/2\s*\/\s*9/);

    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText(/1\s*\/\s*9/);
  });

  test('hash URL navigation works (#/closing → slide 9)', async ({ page }) => {
    await page.goto('/spec-driven-development-presentation/#/closing');

    const counter = page.locator('.slide-counter');
    await expect(counter).toContainText(/9\s*\/\s*9/);
  });

  test('cannot go below slide 1', async ({ page }) => {
    const counter = page.locator('.slide-counter');

    await expect(counter).toContainText(/1\s*\/\s*9/);
    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText(/1\s*\/\s*9/);
  });

  test('cannot go above slide 9', async ({ page }) => {
    await page.goto('/spec-driven-development-presentation/#/closing');

    const counter = page.locator('.slide-counter');
    await expect(counter).toContainText(/9\s*\/\s*9/);

    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText(/9\s*\/\s*9/);
  });
});
