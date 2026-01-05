// app/open-app/[id]/page.tsx
"use client";
import { useEffect } from "react";

export default function OpenApp({ params }) {
  useEffect(() => {
    const { id } = params;
    const appUrl = `myapp://community/posts/detail/${id}`;
    const storeUrl =
      "https://apps.apple.com/ae/app/primex-online-trading/id6741466188";

    // Try to open app
    window.location.href = appUrl;

    // Fallback to App Store after 2s
    const t = setTimeout(() => (window.location.href = storeUrl), 1000);
    return () => clearTimeout(t);
  }, [params.id]);

  return <div style={{ padding: 20 }}>Opening PrimeX app…</div>;
}
