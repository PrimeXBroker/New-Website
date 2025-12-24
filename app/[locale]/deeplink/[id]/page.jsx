// app/deeplink/[id]/page.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DeepLinkRedirectPage() {
  const pathname = usePathname();

  useEffect(() => {
    const postId = pathname.split("/").pop();
    const universalLink = `https://primexcapital.com/community/posts/detail/${postId}`;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /android/i.test(navigator.userAgent);

    console.log("Attempting to open app via universal link:", universalLink);

    // For Android: try custom scheme first (more reliable fallback control)
    if (isAndroid) {
      window.location.href =
        `intent://community/posts/detail/${postId}` +
        `#Intent;scheme=primexmobileapp;package=com.primex.primexmobileapp;end`;

      // Fallback to Play Store after delay
      const fallback = setTimeout(() => {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.primex.primexmobileapp";
      }, 1500);
      return () => clearTimeout(fallback);
    }

    // For iOS: Universal Links work best when opened via user gesture
    // But since this is a redirect page, we can try direct navigation
    if (isIOS) {
      // iOS Universal Links require the page to be opened in a "trusted" context
      // Simple redirect often works if domain is properly verified
      window.location.href =
        "primexmobileapp://community/posts/detail/" + postId;

      // Fallback to App Store (note: less reliable on iOS due to Apple restrictions)
      const fallback = setTimeout(() => {
        window.location.href =
          "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";
      }, 2000);
      return () => clearTimeout(fallback);
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p>Opening PrimeX...</p>
      <p>If the app doesn’t open, you’ll be redirected shortly.</p>
    </div>
  );
}
