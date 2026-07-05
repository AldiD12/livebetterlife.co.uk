/**
 * Google Indexing API — force a re-crawl of livebetterlife.co.uk URLs.
 *
 * WHEN TO RUN: only AFTER the vercel.json fix is deployed and pages return 200.
 * Pinging URLs that still 404 just tells Google they're dead.
 *
 * SETUP (one time):
 *   1. Google Cloud project → enable "Web Search Indexing API".
 *   2. Google Search Console → property livebetterlife.co.uk → Settings →
 *      Users and permissions → add the service-account client_email as an OWNER.
 *   3. Put the key file at scripts/service-account.json (git-ignored).
 *   4. npm i -D googleapis
 *
 * RUN:  node scripts/force-index.mjs
 *
 * NOTE: Officially this API targets JobPosting/BroadcastEvent pages. Using it for
 * general pages is unofficial but commonly triggers a fast crawl. Quota ~200/day.
 */
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://livebetterlife.co.uk";

// --- credentials ---
const keyFile = path.resolve(__dirname, "service-account.json");
if (!fs.existsSync(keyFile)) {
  console.error("❌ scripts/service-account.json not found. Copy your Google service-account key there.");
  process.exit(1);
}
const credentials = JSON.parse(fs.readFileSync(keyFile, "utf8"));

// --- collect URLs from the built sitemap (falls back to a core list) ---
function urlsFromSitemap() {
  const sitemapPath = path.resolve(__dirname, "..", "public", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) return [];
  const xml = fs.readFileSync(sitemapPath, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const coreFallback = [
  `${SITE}/`,
  `${SITE}/services`,
  `${SITE}/portfolio`,
  `${SITE}/blog`,
  `${SITE}/contact`,
];

const urlsToIndex = [...new Set([...urlsFromSitemap(), ...coreFallback])];

// --- auth + publish ---
const jwtClient = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/indexing"],
});
const indexing = google.indexing({ version: "v3", auth: jwtClient });

async function run() {
  console.log(`Authorizing as ${credentials.client_email} ...`);
  try {
    await jwtClient.authorize();
    console.log("✅ Authorized.\n");
  } catch (err) {
    console.error("❌ AUTHORIZATION FAILED:", err.message);
    console.error("\nCheck: (1) Web Search Indexing API enabled on the GCP project,");
    console.error("       (2) the service-account email is an OWNER of the GSC property.");
    if (err.response?.data) console.error(JSON.stringify(err.response.data, null, 2));
    return;
  }

  console.log(`Submitting ${urlsToIndex.length} URLs...\n`);
  let ok = 0;
  for (const url of urlsToIndex) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      console.log(`✅ ${url}`);
      ok++;
    } catch (error) {
      console.error(`❌ ${url} — ${error.message}`);
    }
  }
  console.log(`\nDone. ${ok}/${urlsToIndex.length} submitted. Quota is ~200 URLs/day.`);
}

run().catch(console.error);
