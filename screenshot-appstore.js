const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  // Apple App Store search for parenting apps - get screenshots
  const urls = [
    { url: 'https://apps.apple.com/gb/app/babycenter-baby-tracking-app/id336613493', name: 'babycenter-app' },
    { url: 'https://apps.apple.com/gb/app/huckleberry-baby-sleep/id1227294688', name: 'huckleberry' },
    { url: 'https://apps.apple.com/gb/app/peanut-dating-make-friends/id1377067782', name: 'peanut' },
    { url: 'https://apps.apple.com/gb/app/wonder-weeks/id491983018', name: 'wonderweeks-app' },
    { url: 'https://apps.apple.com/gb/app/lovevery-play-kit-matcher/id1522757922', name: 'lovevery-app' },
    { url: 'https://apps.apple.com/gb/app/brightwheel-child-care/id952465345', name: 'brightwheel-app' },
  ];

  for (const { url, name } of urls) {
    try {
      const page = await context.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(3000);
      
      // Try to find and screenshot the app screenshots section
      // App store has screenshot carousels - grab the first screenshot
      const screenshots = page.locator('picture source, .we-screenshot-viewer__screenshots-list img, .screenshot');
      const count = await screenshots.count();
      console.log(`${name}: found ${count} screenshot elements`);
      
      // Just capture the whole page above the fold which usually shows icon + screenshots
      await page.screenshot({ path: `/Users/harry/.openclaw/workspace-gomglm_2/comp-${name}.png`, fullPage: false });
      console.log(`✓ ${name}`);
      await page.close();
    } catch (e) {
      console.error(`${name}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done');
})();
