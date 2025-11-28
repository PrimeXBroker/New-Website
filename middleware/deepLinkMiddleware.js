import { NextResponse } from "next/server";

// IMPORTANT: Replace 'myapp://' with your actual app's custom URI scheme.
const APP_URI_SCHEME = "myapp://";

// Replace these with your actual store URLs
const androidStoreUrl =
    "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
const iosStoreUrl =
    "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";

/**
 * Determines the target deep link URI and app store URL based on the OS.
 * @param {string} userAgent
 * @param {string} fullPath The full path from the Next.js request (e.g., /en/community/posts/detail/123)
 */
function getDeepLinkInfo(userAgent, fullPath) {
    // 1. Logic to strip the optional locale prefix (e.g., '/en', '/ar') from the path.
    const pathSegments = fullPath.split('/').filter(segment => segment.length > 0);
    
    let cleanPath;

    // Check if the first segment in the array (which would be the locale) is a 2-character locale
    const locales = ["en", "ar", "ku", "es", "ps", "pt", "fa"];
    const potentialLocale = pathSegments[0];
    
    if (locales.includes(potentialLocale)) {
        // If the path has a locale prefix, skip it
        cleanPath = pathSegments.slice(1).join('/');
    } else {
        // If there's no locale prefix, use the path as is.
        cleanPath = pathSegments.join('/');
    }

    // 2. The deep link URI will use the custom scheme and the cleaned path (without locale)
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

    // Check if the path includes the required segment
    const isDeepLinkPath = url.pathname.includes("/community/posts/detail");

    if (isDeepLinkPath) {
        const userAgent = request.headers.get("user-agent") || "";
        const deepLinkInfo = getDeepLinkInfo(userAgent, url.pathname);

        if (deepLinkInfo) {
            // Create the URL for the client-side deep link handler route.
            const handlerUrl = new URL("/deeplink-handler", url);

            // Pass the deep link URI and store URL as search parameters.
            handlerUrl.searchParams.set('os', deepLinkInfo.os);
            handlerUrl.searchParams.set('uri', encodeURIComponent(deepLinkInfo.deepLinkUri));
            handlerUrl.searchParams.set('store', encodeURIComponent(deepLinkInfo.storeUrl));

            // Instead of redirecting to the store, we rewrite to our new client-side handler route.
            return NextResponse.rewrite(handlerUrl);
        }
    }

    // Return undefined (or null) to allow the request to proceed normally
    return undefined;
}
