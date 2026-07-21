import { NextResponse } from "next/server";

const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const scheme = "myapp";

export function deepLinkMiddleware(request) {
  const url = request.nextUrl;
  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  if (isDeepLinkPath) {
    const userAgent = request.headers.get("user-agent") || "";
    const isAndroid = userAgent.includes("Android");
    const isIOS = userAgent.includes("iPhone") || userAgent.includes("iPad");

    // Extract post ID from path
    const pathParts = url.pathname.split("/");
    const postId = pathParts[pathParts.length - 1];
    let redirectUrl = null;

    // 1. Check OS and set the redirect URL
    if (isAndroid) {
      const intentUrl = `intent://community/posts/detail/${postId}#Intent;scheme=${scheme};package=com.primex.primexmobileapp;S.browser_fallback_url=${encodeURIComponent(
        androidStoreUrl,
      )};end`;
      redirectUrl = intentUrl;
    } else if (isIOS) {
      return NextResponse.redirect(new URL(`/deeplink/${postId}`, url));
    }

    if (redirectUrl) {
      return NextResponse.redirect(redirectUrl);
    }
  }

  return undefined;
}
