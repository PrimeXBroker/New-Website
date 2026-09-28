/**
 * Tracking / campaign query params (utm_*, pid, lid, ...) ko client-side
 * navigation ke dauran zinda rakhne ke helpers.
 *
 * Next.js App Router har navigation par sirf naya pathname likhta hai
 * (history.pushState(canonicalUrl)) — search params wipe ho jate hain.
 * In helpers se har history write par stored tracking params wapas jud jate hain
 * aur landing URL ke params sessionStorage me save ho jate hain.
 */

const STORAGE_KEY = "primex:tracking-params";

const TRACKING_PREFIXES = ["utm_"];

const TRACKING_KEYS = new Set([
  "pid",
  "lid",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "dclid",
  "yclid",
  "srsltid",
  "mc_eid",
  "mc_cid",
  "igshid",
]);

/** Kya ye query param carry-forward ke layak (tracking) hai? */
export function isTrackingKey(key) {
  if (!key) return false;
  const lower = String(key).toLowerCase();
  if (TRACKING_KEYS.has(lower)) return true;
  return TRACKING_PREFIXES.some((prefix) => lower.startsWith(prefix));
}

/**
 * Query string (ya URLSearchParams) se sirf tracking params nikaal kar
 * naya URLSearchParams return karta hai.
 */
export function extractTrackingParams(search) {
  const source =
    search instanceof URLSearchParams
      ? search
      : new URLSearchParams(search || "");
  const out = new URLSearchParams();
  source.forEach((value, key) => {
    if (isTrackingKey(key)) out.append(key, value);
  });
  return out;
}

function hasParams(params) {
  return Array.from(params.keys()).length > 0;
}

/** SessionStorage se stored tracking params parhna. */
export function readStoredTrackingParams() {
  if (typeof window === "undefined") return new URLSearchParams();
  try {
    return new URLSearchParams(
      window.sessionStorage.getItem(STORAGE_KEY) || "",
    );
  } catch {
    return new URLSearchParams();
  }
}

function writeStoredTrackingParams(params) {
  if (typeof window === "undefined") return;
  try {
    const value = params.toString();
    if (value) window.sessionStorage.setItem(STORAGE_KEY, value);
    else window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* sessionStorage unavailable (private mode) — ignore */
  }
}

/**
 * Diye gaye query string ke tracking params ko session me save karta hai.
 * Naye (incoming) params purane par override karte hain — last touch wins.
 */
export function captureTrackingParams(search) {
  if (typeof window === "undefined") return;
  const incoming = extractTrackingParams(search);
  if (!hasParams(incoming)) return;
  const stored = readStoredTrackingParams();
  incoming.forEach((value, key) => {
    stored.set(key, value);
  });
  writeStoredTrackingParams(stored);
}

/**
 * Kisi bhi URL (relative ya absolute, same origin) me stored tracking params
 * jod deta hai — jo params pehle se URL me maujood hain unhe override nahi karta.
 * External (doosre origin) URLs ko bilkul nahi chhoota.
 * Agar kuch add nahi karna to asal value hi wapas mil jati hai.
 */
export function withTrackingParams(href) {
  if (href === null || href === undefined) return href;
  if (typeof window === "undefined") return href;

  const stored = readStoredTrackingParams();
  if (!hasParams(stored)) return href;

  let url;
  try {
    url = new URL(String(href), window.location.href);
  } catch {
    return href;
  }
  if (url.origin !== window.location.origin) return href;

  let changed = false;
  stored.forEach((value, key) => {
    if (!url.searchParams.has(key)) {
      url.searchParams.append(key, value);
      changed = true;
    }
  });
  if (!changed) return href;

  const raw = String(href);
  // Absolute URL diya gaya ho to absolute hi wapas karo, warna path form.
  if (/^[a-zA-Z][a-zA-Z+\-.]*:/.test(raw)) return url.toString();
  return `${url.pathname}${url.search}${url.hash}`;
}

/**
 * history.pushState / history.replaceState ko wrap karta hai taake Next.js
 * router jab bhi naya URL likhe, usme tracking params apne aap jud jayen.
 * Idempotent hai — dobara call karne par dobara wrap nahi hota.
 */
export function installTrackingParamsPatch() {
  if (typeof window === "undefined") return;
  if (window.__primexTrackingParamsPatch) return;
  window.__primexTrackingParamsPatch = true;

  const originalPushState = window.history.pushState.bind(window.history);
  const originalReplaceState = window.history.replaceState.bind(window.history);

  window.history.pushState = function pushState(data, unused, url) {
    return originalPushState(data, unused, withTrackingParams(url));
  };

  window.history.replaceState = function replaceState(data, unused, url) {
    return originalReplaceState(data, unused, withTrackingParams(url));
  };
}

/**
 * Register form waghera ke liye: current URL me tracking params ho to wo,
 * warna session me stored params. Query string (? ke baghair) wapas deti hai.
 */
export function getTrackingQueryString() {
  if (typeof window === "undefined") return "";
  const fromUrl = extractTrackingParams(window.location.search);
  if (hasParams(fromUrl)) return fromUrl.toString();
  return readStoredTrackingParams().toString();
}
