// middleware.ts
// import createMiddleware from "next-intl/middleware";
// import { deepLinkMiddleware } from "./middleware/deepLinkMiddleware";

// export default createMiddleware({
//   middleware: deepLinkMiddleware,

//   locales: ["en", "ar", "ku", "es", "ps", "pt", "fa"],

//   defaultLocale: "en",
// });

// export const config = {
//   matcher: [
//     "/", // Root
//     "/(en|ar|ku|es|ps|pt|fa)/:path*",
//     "/community/posts/detail/:path*",
//   ],
// };

import createMiddleware from "next-intl/middleware";
import { deepLinkMiddleware } from "./middleware/deepLinkMiddleware";

// --- Configuration ---
export default createMiddleware({
  // Use the custom deep link middleware
  middleware: deepLinkMiddleware,

  // Your list of supported locales
  locales: ["en", "ar", "ku", "es", "ps", "pt", "fa"],

  // Your default locale
  defaultLocale: "en",
  
  // SOLUTION: Tells next-intl to omit the locale prefix for the default locale ("en").
  // This will prevent the automatic redirect from /path to /en/path.
  localePrefix: 'as-needed',
});

export const config = {
  // Matches all paths that should be checked by the middleware
  matcher: [
    "/", // Root
    "/(en|ar|ku|es|ps|pt|fa)/:path*", // Catches all prefixed paths (e.g., /ar/...)
    "/community/posts/detail/:path*", // Catches the default locale path (e.g., /community/...)
    "/deeplink-handler", // Ensure the handler path is included
  ],
};
