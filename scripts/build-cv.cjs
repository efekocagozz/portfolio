// Renders cv/cv.html to public/Efe-Kodzhagioz-CV.pdf (A4) using Playwright's Chromium.
// Usage: npm run cv   (requires `playwright` to be resolvable, e.g. `npm i -D playwright`)
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const root = path.resolve(__dirname, "..");
  const src = path.join(root, "cv", "cv.html");
  const out = path.join(root, "public", "Efe-Kodzhagioz-CV.pdf");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + src, { waitUntil: "load" });
  await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log("Wrote " + path.relative(root, out));
})();
