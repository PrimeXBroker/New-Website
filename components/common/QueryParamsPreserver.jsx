"use client";

import { useEffect } from "react";
import {
  captureTrackingParams,
  installTrackingParamsPatch,
  readStoredTrackingParams,
  withTrackingParams,
} from "@/utilities/trackingParams";

// Module scope par hi patch laga do taake Next.js ka router patch (jo uske
// useEffect me lagta hai) hamare patch ko wrap kare — dono order me kaam karta hai.
installTrackingParamsPatch();
if (typeof window !== "undefined") {
  captureTrackingParams(window.location.search);
}

export default function QueryParamsPreserver() {
  useEffect(() => {
    // Landing params session me save karo (defensive — module scope par bhi hota hai)
    captureTrackingParams(window.location.search);
    installTrackingParamsPatch();

    // Agar kisi full page load (hard navigation) ne params hata diye hon to
    // wapas URL me jod do — lekin sirf ek baar, har render par nahi.
    const stored = readStoredTrackingParams();
    if (Array.from(stored.keys()).length > 0) {
      const current =
        window.location.pathname + window.location.search + window.location.hash;
      const merged = withTrackingParams(current);
      if (merged !== current) {
        // history.state ko preserve karo taake Next.js ka tree intact rahe
        window.history.replaceState(window.history.state, "", merged);
      }
    }
  }, []);

  return null;
}
