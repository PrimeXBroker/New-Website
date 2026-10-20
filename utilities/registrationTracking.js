import {
  getTrackingQueryString,
  readStoredTrackingParams,
} from "@/utilities/trackingParams";

export const getRegistrationTrackingData = () => {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://primexcapital.com";
  const search = typeof window !== "undefined" ? window.location.search : "";
  const queryString = search ? search.substring(1) : getTrackingQueryString();
  const url = new URL(queryString ? `/?${queryString}` : "/", origin);
  const storedParams = readStoredTrackingParams();

  const pidParam = url.searchParams.get("pid") || storedParams.get("pid");
  const lid = url.searchParams.get("lid") || storedParams.get("lid");

  const buildUtmParams = (params, fullUrl) => {
    const utm = new URLSearchParams();
    params.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm_")) {
        utm.append(key, value);
      }
    });
    if (![...utm.keys()].length) return "";
    utm.append("full_link", fullUrl);
    return utm.toString();
  };

  const fullLink = typeof window !== "undefined" ? window.location.href : "";

  const utmParams =
    buildUtmParams(url.searchParams, fullLink) ||
    buildUtmParams(storedParams, fullLink);

  return {
    ...(pidParam && { partnerId: parseInt(pidParam) }),
    ...(lid && { referralLinkId: parseInt(lid) }),
    utmParams: utmParams || "",
  };
};
