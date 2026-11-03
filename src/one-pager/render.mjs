// Renders the one-pager HTML to downloads/EDJ-Premier-League-Cybersecurity-Rules.pdf
// Run from the repo root: node src/one-pager/render.mjs
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const src = resolve('src/one-pager/EDJ-Premier-League-Cybersecurity-Rules.html');
const out = resolve('downloads/EDJ-Premier-League-Cybersecurity-Rules.pdf');

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
await page.goto('file://' + src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: 'Letter', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log('Wrote', out);
