const { test, expect } = require('@playwright/test');

test('Verify Discord Icon and Link', async ({ page }) => {
  // Navigate to the webpage containing the Discord icon
  await page.goto('https://example.com');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Wait for the Discord icon to appear and click it
  const discordIcon = await page.waitForSelector('img[src="../../public/assets/Icon/discord.svg"]');
  await discordIcon.click();

  // Wait for the new tab to open and switch to it
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.waitForNavigation(),
  ]);
  await newTab.bringToFront();

  // Wait for the new tab to load
  await newTab.waitForLoadState('networkidle');

  // Verify that the new tab contains the Discord server invite link
  const discordLink = await newTab.waitForSelector('a[href="https://discord.gg/ht5d5RUf"]');
  expect(await discordLink.innerText()).toBe('Join our Discord server');
});
