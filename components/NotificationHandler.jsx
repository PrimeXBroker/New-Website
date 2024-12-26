"use client";
import { SubscribeNotificationUser } from "@/utilities/SubscribeNotificationUser";
import { useEffect } from "react";

const NotificationHandler = () => {
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (!isIOS) {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration.scope);
          })
          .catch((err) => {
            console.error("Service Worker registration failed:", err);
          });
      }

      if (Notification.permission === "default") {
        Notification.requestPermission()
          .then((permission) => {
            if (permission === "granted") {
              console.log("Notification permission granted.");
              SubscribeNotificationUser();
            } else {
              console.warn("Notification permission denied.");
            }
          })
          .catch((err) => {
            console.error("Notification permission error:", err);
          });
      }
    } else {
      console.log(
        "iOS device detected - Skipping service worker and notifications registration."
      );
    }
  }, []);

  return null;
};

export default NotificationHandler;
