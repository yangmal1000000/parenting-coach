const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });

  // Try US app store with desktop UA
  const urls = [
    { url: 'https://apps.apple.com/us/app/huckleberry-baby-sleep/id1227294688', name: 'huckleberry-us' },
    { url: 'https://apps.apple.com/us/app/peanut-dating-make-friends/id1377067782', name: 'peanut-us' },
    { url: 'https://apps.apple.com/us/app/the-happy-child-parenting/id1456276976', name: 'happychild-us' },
    { url: 'https://apps.apple.com/us/app/ourpact-parental-control/id931488059', name: 'ourpact-us' },
  ];

  for (const { url, name } of urls) {
    try {
      const page = await context.newPage();
      await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `/Users/harry/.openclaw/workspace-gomglm_2/comp-${name}.png`, fullPage: false });
      console.log(`✓ ${name}`);
      await page.close();
    } catch (e) {
      console.error(`${name}:`, e.message);
    }
  }

  // Also try Product Hunt / design galleries for parenting app screenshots
  const galleryUrls = [
    { url: 'https://www.mobbin.com/apps/huckleberry-baby-sleep/id1227294688', name: 'mobbin-huckleberry' },
  ];

  for (const { url, name } of galleryUrls) {
    try {
      const page = await context.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
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
