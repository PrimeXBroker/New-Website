import { NextResponse } from "next/server";

// IMPORTANT: Replace 'primex://' with your actual app's custom URI scheme.
const APP_URI_SCHEME = "myapp://";

// Replace these with your actual store URLs
const androidStoreUrl =
    "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const iosStoreUrl =
    "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";

/**
 * Determines the target deep link URL and app store URL based on the OS.
 * @param {string} userAgent
 * @param {string} fullPath The full path from the Next.js request (e.g., /en/community/posts/detail/123)
 */
function getDeepLinkInfo(userAgent, fullPath) {
    // 1. Remove the leading slash if present
    const cleanPath = fullPath.startsWith('/') ? fullPath.substring(1) : fullPath;

    // 2. The deep link URI will use the custom scheme and the clean path
    const deepLinkUri = `${APP_URI_SCHEME}${cleanPath}`;

    // 3. Determine OS and Store URL
    if (userAgent.includes("Android")) {
        return {
            os: "android",
            deepLinkUri: deepLinkUri,
            storeUrl: androidStoreUrl,
        };
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
        return {
            os: "ios",
            deepLinkUri: deepLinkUri,
            storeUrl: iosStoreUrl,
        };
    }

    // Not a mobile device or unknown OS, return null to proceed normally
    return null;
}

export function deepLinkMiddleware(request) {
    const url = request.nextUrl;

    // Check if the path includes the required segment (even with locale prefix)
    const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

    if (isDeepLinkPath) {
        const userAgent = request.headers.get("user-agent") || "";
        const deepLinkInfo = getDeepLinkInfo(userAgent, url.pathname);

        if (deepLinkInfo) {
            // Create the URL for the client-side deep link handler route.
            // We pass the deep link URI and store URL as search parameters.
            const handlerUrl = new URL("/deeplink-handler", url);

            // We use encodeURIComponent to ensure special characters in the path are handled correctly
            handlerUrl.searchParams.set('os', deepLinkInfo.os);
            handlerUrl.searchParams.set('uri', encodeURIComponent(deepLinkInfo.deepLinkUri));
            handlerUrl.searchParams.set('store', encodeURIComponent(deepLinkInfo.storeUrl));

            // Instead of redirecting to the store, we rewrite to our new client-side handler route.
            // The browser URL will still show the original path (e.g., /en/community/posts/detail/123).
            return NextResponse.rewrite(handlerUrl);
        }
    }

    // Return undefined (or null) to allow the request to proceed normally
    return undefined;
}
