const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  // 1. ParentKin (our app)
  try {
    const page = await context.newPage();
    await page.goto('http://localhost:3002/en', { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-parentkin-home.png', fullPage: false });
    console.log('✓ ParentKin home');
    
    // Try to get past any onboarding/empty state - look for the main content
    // Scroll down to see more
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-parentkin-scrolled.png', fullPage: false });
    console.log('✓ ParentKin scrolled');
    
    await page.close();
  } catch (e) { console.error('ParentKin:', e.message); }

  // 2. BabyCenter
  try {
    const page = await context.newPage();
    await page.goto('https://www.babycenter.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-babycenter.png', fullPage: false });
    console.log('✓ BabyCenter');
    await page.close();
  } catch (e) { console.error('BabyCenter:', e.message); }

  // 3. Lovevery
  try {
    const page = await context.newPage();
    await page.goto('https://lovevery.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-lovevery.png', fullPage: false });
    console.log('✓ Lovevery');
    await page.close();
  } catch (e) { console.error('Lovevery:', e.message); }

  // 4. Wonder Weeks
  try {
    const page = await context.newPage();
    await page.goto('https://thewonderweeks.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-wonderweeks.png', fullPage: false });
    console.log('✓ Wonder Weeks');
    await page.close();
  } catch (e) { console.error('Wonder Weeks:', e.message); }

  // 5. Brightwheel
  try {
    const page = await context.newPage();
    await page.goto('https://brightwheel.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-brightwheel.png', fullPage: false });
    console.log('✓ Brightwheel');
    await page.close();
  } catch (e) { console.error('Brightwheel:', e.message); }

  // 6. Headspace (for calming/mental wellness UI comparison)
  try {
    const page = await context.newPage();
    await page.goto('https://www.headspace.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-headspace.png', fullPage: false });
    console.log('✓ Headspace');
    await page.close();
  } catch (e) { console.error('Headspace:', e.message); }

  // 7. Calm (for calming UI comparison)
  try {
    const page = await context.newPage();
    await page.goto('https://www.calm.com', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/Users/harry/.openclaw/workspace-gomglm_2/comp-calm.png', fullPage: false });
    console.log('✓ Calm');
    await page.close();
  } catch (e) { console.error('Calm:', e.message); }

  await browser.close();
  console.log('Done');
})();
