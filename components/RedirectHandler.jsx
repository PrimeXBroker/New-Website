"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath.includes("/ar/undefined/ar/forex")) {
        router.replace(
          "https://primexcapital.com/en/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
        );
      }
    }
  }, []);

  return null;
}
