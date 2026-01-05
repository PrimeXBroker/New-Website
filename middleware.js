// middleware.ts
import createMiddleware from "next-intl/middleware";
import { deepLinkMiddleware } from "./middleware/deepLinkMiddleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar", "ku", "es", "ps", "pt", "fa"],
  defaultLocale: "en",
});

export default function middleware(request) {
  console.log("=== MAIN MIDDLEWARE ENTRY ===");

  // First, try deep link handling
  const deepLinkResponse = deepLinkMiddleware(request);
  if (deepLinkResponse) {
    console.log("Deep link middleware returned a response");
    return deepLinkResponse;
  }

  console.log("Passing to intl middleware");
  // Then, handle internationalization
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except static files
    "/((?!_next|_vercel|.*\\..*).*)",
    "/", // Root
    "/(en|ar|ku|es|ps|pt|fa)/:path*", // Locale paths
    "/community/posts/detail/:path*", // Your deep link path
  ],
};
