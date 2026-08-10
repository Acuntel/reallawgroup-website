// Submits every URL in the generated sitemap to IndexNow (Bing, Yandex, and
// partners — Google does not consume IndexNow). Bing's index is what ChatGPT
// search retrieves from, so run this after deploying meaningful page changes:
//   node scripts/indexnow-submit.mjs
import { readFileSync } from "node:fs";

const KEY = "e4159b9f26d6c514195355b0fb3b24f7";
const HOST = "reallawgroup.com";

const xml = readFileSync("public/sitemap-0.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("No URLs found in public/sitemap-0.xml — run a build first.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Submitted ${urls.length} URLs to IndexNow: HTTP ${res.status}`);
if (!res.ok) console.error(await res.text());
