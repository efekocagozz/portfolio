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
  // Running footer on every page; the margins come from @page in cv.html.
  const footer = `
    <div style="width:100%; padding:0 18mm; display:flex; justify-content:space-between;
                font-family:Arial,'Liberation Sans',sans-serif; font-size:8pt; color:#6b7280;">
      <span>Efe Kocagoz — Curriculum Vitae</span>
      <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
    </div>`;
  await page.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: footer,
  });
  await browser.close();
  console.log("Wrote " + path.relative(root, out));
})();
