import { NextResponse } from "next/server";

const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const iosStoreUrl =
  "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";

export function deepLinkMiddleware(request) {
  const url = request.nextUrl;

  const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

  if (isDeepLinkPath) {
    const userAgent = request.headers.get("user-agent") || "";

    if (userAgent.includes("Android")) {
      return NextResponse.redirect(androidStoreUrl);
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
      return NextResponse.redirect(iosStoreUrl);
    }
  }

  return undefined;
}
