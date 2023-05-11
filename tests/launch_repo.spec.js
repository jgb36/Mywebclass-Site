const { test, expect } = require('@playwright/test');

test('Verify "Join Our Program" button', async ({ page }) => {
  // Navigate to the webpage
  await page.goto('http://localhost:3000/');

  // Check that the "Join our program" button exists
  const joinButton = await page.waitForSelector('button:has-text("Join our program")');
  expect(joinButton).toBeTruthy();
});