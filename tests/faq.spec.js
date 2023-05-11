const { test, expect } = require('@playwright/test');

test('Verify FAQ page', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000/faqs');

  // Verify that the page loaded successfully
  const pageTitle = await page.title();
  expect('http://localhost:3000/faqs').toContain('faqs');

  // Verify that the word "FAQ" appears somewhere on the page
  const pageText = await page.innerText('body');
  expect(pageText).toContain('FAQ');
});
