const { test, expect } = require('@playwright/test');

test('testimonials names are unique', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const names = await page.$$eval('.testimonial .name', names => names.map(name => name.textContent.trim()));
  const uniqueNames = new Set(names);
  expect(uniqueNames.size).toBe(names.length);
});
