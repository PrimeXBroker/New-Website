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
});

export const config = {
  // Matches all paths that should be checked by the middleware
  // The deep link handler path must be included here to be rewritten.
  matcher: [
    "/", // Root
    "/(en|ar|ku|es|ps|pt|fa)/:path*",
    "/community/posts/detail/:path*",
    "/deeplink-handler", // Ensure the handler path is included
  ],
};
