// middleware.ts
import createMiddleware from "next-intl/middleware";
import { deepLinkMiddleware } from "./middleware/deepLinkMiddleware";

export default createMiddleware({
  middleware: deepLinkMiddleware,

  locales: ["en", "ar", "ku", "es", "ps", "pt", "fa"],

  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/", // Root
    "/(en|ar|ku|es|ps|pt|fa)/:path*",
    "/community/posts/detail/:path*",
  ],
};
