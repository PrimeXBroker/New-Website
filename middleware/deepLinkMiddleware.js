import { NextResponse } from "next/server";

const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const scheme = "myapp";

export function deepLinkMiddleware(request) {
  const url = request.nextUrl;
  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  console.log("Is Deep Link Path?", isDeepLinkPath);

  if (isDeepLinkPath) {
    const userAgent = request.headers.get("user-agent") || "";
    const isAndroid = userAgent.includes("Android");
    const isIOS = userAgent.includes("iPhone") || userAgent.includes("iPad");

    // Extract post ID from path
    const pathParts = url.pathname.split("/");
    const postId = pathParts[pathParts.length - 1];
    console.log("User Agent:", postId);

    let redirectUrl = null;

    // 1. Check OS and set the redirect URL
    if (isAndroid) {
      const intentUrl = `intent://community/posts/detail/${postId}#Intent;scheme=${scheme};package=com.primex.primexmobileapp;S.browser_fallback_url=${encodeURIComponent(
        androidStoreUrl
      )};end`;
      redirectUrl = intentUrl;
      console.log("Android detected, redirecting to:", intentUrl);
    } else if (isIOS) {
      return NextResponse.redirect(new URL(`/deeplink/${postId}`, url));
    } else {
      console.log("Not a mobile device, no redirect");
    }

    if (redirectUrl) {
      return NextResponse.redirect(redirectUrl);
    }
  }

  console.log("No redirect needed, passing to next middleware");
  return undefined;
}
