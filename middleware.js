// middleware.ts
import createMiddleware from "next-intl/middleware";
import { deepLinkMiddleware } from "./middleware/deepLinkMiddleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar", "ku", "es", "ps", "pt", "fa"],
  defaultLocale: "en",
});

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/graph")) {
    return NextResponse.next();
  }

  // Only run deep link middleware for deep link paths
  if (pathname.includes("/community/posts/detail")) {
    const deepLinkResponse = deepLinkMiddleware(request);
    if (deepLinkResponse) {
      return deepLinkResponse;
    }
  }

  // Then, handle internationalization
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
