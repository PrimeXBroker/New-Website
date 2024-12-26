"use client";
import { SubscribeNotificationUser } from "@/utilities/SubscribeNotificationUser";
import { useEffect } from "react";
import { useLocale } from "next-intl";

const NotificationHandler = () => {
  const locale = useLocale();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(`/${locale}/sw.js`)
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
  }, []);

  return null;
};

export default NotificationHandler;
