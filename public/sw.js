self.addEventListener("push", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const data = event.data.json();
        await self.registration.showNotification(data.title || "Notification", {
          body: data.message || "You have a new notification.",
          icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/notification-icon.webp",
          data: { url: data.url },
        });
      } catch (error) {
        console.error("Error handling push event:", error);
      }
    })()
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const { url } = event.notification.data;
  event.waitUntil(clients.openWindow(url));
});
