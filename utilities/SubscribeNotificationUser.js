export async function SubscribeNotificationUser() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BIVvxRIIIPrsa-vUU-6gUrPMOj_Agxut1TgUt6HmjD7LjGFUtHbqNtC4zftinKP_IN6tPcOSw8j5hqEqpSZ4dz4",
      });

      const response = await fetch(
        "https://primexbroker.com/api/webNotification/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscription),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe on server: ${response.statusText}`
        );
      }

      console.log("User subscribed successfully:", subscription);
      return subscription;
    } catch (error) {
      console.error("Push Notification Subscription failed:", error.message);
      throw error;
    }
  } else {
    console.warn("Service Workers are not supported in this browser.");
  }
}
