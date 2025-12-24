// middleware/deepLinkMiddleware.ts (CORRECTED)
import { NextResponse } from "next/server";

// IMPORTANT: The APP_URI_SCHEME is NOT needed here for the store fallback.
// It's only needed if you use a client-side JS handler.

// const androidStoreUrl =
//   "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
// const iosStoreUrl =
//   "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";
// const androidScheme = "primexmobileapp";

console.log("isDeepLinkPath", "isDeepLinkPath");
export function deepLinkMiddleware(request) {
  console.log("=== DEEP LINK MIDDLEWARE TRIGGERED ===");
  console.log("URL Pathname:", request.nextUrl.pathname);
  console.log("Full URL:", request.url);

  const url = request.nextUrl;
  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  console.log("Is Deep Link Path?", isDeepLinkPath);

  if (isDeepLinkPath) {
    // const userAgent = request.headers.get("user-agent") || "";
    // const isAndroid = userAgent.includes("Android");
    // const isIOS = userAgent.includes("iPhone") || userAgent.includes("iPad");

    // Extract post ID from path
    const pathParts = url.pathname.split("/");
    const postId = pathParts[pathParts.length - 1];
    console.log("User Agent:", postId);

    // let redirectUrl = null;

    const newPath = url.pathname.replace(
      "/community/posts/detail",
      "/deeplink"
    );
    return NextResponse.redirect(new URL(newPath, url));
    // 1. Check OS and set the redirect URL
    // if (isAndroid) {
    //   const intentUrl = `intent://community/posts/detail/${postId}#Intent;scheme=${androidScheme};package=com.primex.primexmobileapp;S.browser_fallback_url=${encodeURIComponent(
    //     androidStoreUrl
    //   )};end`;
    //   redirectUrl = intentUrl;
    //   console.log("Android detected, redirecting to:", intentUrl);
    // } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
    //   redirectUrl = iosStoreUrl;
    //   console.log("iOS detected, redirecting to:", redirectUrl);
    // } else {
    //   console.log("Not a mobile device, no redirect");
    // }

    // if (redirectUrl) {
    //   console.log("Performing redirect to:", redirectUrl);
    //   // 2. CRITICAL CHANGE: Use redirect() to force the browser to navigate away.
    //   // This happens ONLY if the native OS failed to intercept the link (i.e., app not installed).
    //   return NextResponse.redirect(redirectUrl);
    // }
  }

  console.log("No redirect needed, passing to next middleware");
  // If not a mobile device or not a deep link path, proceed to the next middleware (next-intl)
  return undefined;
}
