import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PREVIEW_DIR = join(__dirname, '../public/previews');

const styles = [
  // Landing Page Styles
  'hero-centric-design',
  'conversion-optimized',
  'feature-rich-showcase',
  'minimal-direct',
  'social-proof-focused',
  'interactive-product-demo',
  'trust-authority',
  'storytelling-driven',
  // BI & Analytics Styles
  'data-dense-dashboard',
  'heat-map-style',
  'executive-dashboard',
  'real-time-monitoring',
  'drill-down-analytics',
  'comparative-analysis-dashboard',
  'predictive-analytics',
  'user-behavior-analytics',
  'financial-dashboard',
  'sales-intelligence-dashboard',
];

async function main() {
  await mkdir(PREVIEW_DIR, { recursive: true });
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const slug of styles) {
    const url = `http://localhost:5173/style/${slug}`;
    console.log(`Capturing ${slug}...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait a bit for any animations
      await page.evaluate(() => new Promise(r => setTimeout(r, 500)));
      
      const outputPath = join(PREVIEW_DIR, `${slug}.png`);
      await page.screenshot({ path: outputPath, type: 'png' });
      console.log(`  ✓ Saved ${outputPath}`);
    } catch (err) {
      console.error(`  ✗ Error capturing ${slug}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
