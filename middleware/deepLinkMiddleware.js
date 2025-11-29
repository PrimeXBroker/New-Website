// middleware/deepLinkMiddleware.ts (CORRECTED)
import { NextResponse } from "next/server";

// IMPORTANT: The APP_URI_SCHEME is NOT needed here for the store fallback.
// It's only needed if you use a client-side JS handler.

const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const iosStoreUrl =
  "https://apps.apple.com/ae/app/primex-online-trading/id6741466188"; // Ensure this ID is correct

export function deepLinkMiddleware(request) {
  const url = request.nextUrl;

  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  if (isDeepLinkPath) {
    const userAgent = request.headers.get("user-agent") || "";
    let redirectUrl = null;

    // 1. Check OS and set the redirect URL
    if (userAgent.includes("Android")) {
      redirectUrl = androidStoreUrl;
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
      redirectUrl = iosStoreUrl;
    }

    if (redirectUrl) {
      // 2. CRITICAL CHANGE: Use redirect() to force the browser to navigate away.
      // This happens ONLY if the native OS failed to intercept the link (i.e., app not installed).
      return NextResponse.redirect(redirectUrl);
    }
  }

  // If not a mobile device or not a deep link path, proceed to the next middleware (next-intl)
  return undefined;
}
