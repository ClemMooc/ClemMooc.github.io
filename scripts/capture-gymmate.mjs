// Captures sharp (3x) screenshots of GymMate's demo, screen by screen and component by component.
// Run: npm run capture:gymmate   (first time: npx playwright install chromium)
// Output: media/gymmate/shots/*.png  (local only; upload with npm run media:upload)
import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";

const URL = process.env.GYMMATE_URL || "https://warm-up-and-lift.lovable.app/demo";
const OUT = process.env.GYMMATE_OUT || "media/gymmate/shots"; // GYMMATE_OUT=folder to capture somewhere else first
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ ...devices["iPhone 14 Pro"], deviceScaleFactor: 3, colorScheme: "dark" });
const saved = [];
const shot = async (name, locator) => {
  try {
    const el = locator ?? page;
    if (locator) await locator.first().scrollIntoViewIfNeeded();
    await (locator ? locator.first() : page).screenshot({ path: `${OUT}/${name}.png`, animations: "disabled" });
    saved.push(name);
  } catch (e) { console.log(`skipped ${name}: ${e.message.split("\n")[0]}`); }
};
const tap = async (locator) => { try { await locator.first().click({ timeout: 3000 }); await page.waitForTimeout(500); return true; } catch { return false; } };
const esc = async () => { await page.keyboard.press("Escape"); await page.waitForTimeout(400); };

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await shot("screen-tracker-with-tips");
// Dismiss demo tips / banner if present, then hide Lovable's badge
for (let i = 0; i < 3; i++) await tap(page.getByRole("button", { name: /got it|dismiss|close tip|skip|close tour|end tour/i }));
await page.addStyleTag({ content: "#lovable-badge,[id*=lovable],a[href*='lovable.dev']{display:none!important}" });
await page.evaluate(() => window.scrollTo(0, 0));
await shot("screen-tracker-empty");
await shot("component-header", page.locator("header"));
await shot("component-date-nav", page.getByRole("button", { name: /open calendar/i }).locator(".."));

// If the demo starts on an empty day, add a preset routine so cards, timer and history appear
if ((await page.locator("[data-exercise-card]").count()) === 0 && await tap(page.getByRole("button", { name: /add exercise/i }))) {
  if (!(await tap(page.getByRole("dialog").getByText(/^Leg \(1\)/)))) await esc();
  await page.waitForTimeout(800);
}
await page.evaluate(() => window.scrollTo(0, 0));
await shot("screen-tracker");

const cards = page.locator("[data-exercise-card]");
const n = await cards.count();
for (let i = 0; i < n; i++) await shot(`component-exercise-card-${i + 1}`, cards.nth(i));

if (await tap(page.getByRole("button", { name: /mark complete|not completed/i }))) {
  await shot("component-rest-timer", page.getByRole("region", { name: /rest timer/i }));
  await tap(page.getByRole("button", { name: /dismiss timer/i }));
}
if (await tap(page.getByRole("button", { name: /history/i }))) { await shot("component-history-popup", page.getByRole("dialog")); await esc(); }
if (await tap(page.getByRole("button", { name: /open calendar/i }))) { await shot("component-calendar", page.getByRole("dialog")); await esc(); }
if (await tap(page.getByRole("button", { name: /add exercise/i }))) { await shot("component-add-exercise", page.getByRole("dialog")); await esc(); }

if (await tap(page.getByRole("tab", { name: "Warmup", exact: true }))) {
  await shot("screen-warmup");
  await shot("component-warmup-table", page.locator("table"));
}
if (await tap(page.getByRole("tab", { name: "Routines", exact: true }))) await shot("screen-routines");
if (await tap(page.getByRole("button", { name: /open settings/i }))) {
  const settings = page.getByRole("dialog");
  await shot("screen-settings", settings);
  await shot("component-export", settings.locator("div").filter({ has: page.getByText("Export Data", { exact: true }) }).last());
  // The panel scrolls on its own: jump to the bottom so the export and account sections show
  await settings.evaluate((el) => { for (const e of [el, ...el.querySelectorAll("*")]) e.scrollTop = e.scrollHeight; });
  await page.waitForTimeout(400);
  await shot("screen-settings-bottom", settings);
  await esc();
}

await page.goto(URL.replace(/\/demo$/, "/login"), { waitUntil: "networkidle" });
await shot("screen-login");

await browser.close();
console.log(`Saved ${saved.length} images to ${OUT}:\n- ${saved.join("\n- ")}`);
