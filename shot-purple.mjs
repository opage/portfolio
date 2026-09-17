import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const errors = []
page.on('pageerror', (err) => errors.push(String(err).slice(0, 300)))
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle', timeout: 45000 })
await page.waitForTimeout(1500)
await page.screenshot({ path: 'theme-purple.png', fullPage: false })
await page.goto('http://localhost:4321/blog/en/', { waitUntil: 'networkidle', timeout: 45000 })
await page.waitForTimeout(800)
await page.screenshot({ path: 'theme-purple-blog.png', fullPage: false })
console.log('ERRORS:', errors.length === 0 ? 'none' : errors)
await browser.close()
