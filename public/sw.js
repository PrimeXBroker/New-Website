self.addEventListener("push", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const data = event.data.json();
        await self.registration.showNotification(data.title || "Notification", {
          body: data.message || "You have a new notification.",
          icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/notification-icon.webp",
          data: { url: data.url, notificationId: data.notificationId },
        });
      } catch (error) {
        console.error("Error handling push event:", error);
      }
    })()
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const { url, notificationId } = event.notification.data;

  if (notificationId) {
    fetch(`https://primexbroker.com/api/notification/click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationId }),
    })
      .then(() => console.log("Click recorded successfully."))
      .catch((err) => console.error("Failed to record click:", err));
  } else {
    console.warn("No notificationId provided in notification data.");
  }
  event.waitUntil(clients.openWindow(url));
});
