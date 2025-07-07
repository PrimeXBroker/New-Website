"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const RedirectionHandler = () => {
  const pathname = usePathname();
  useEffect(() => {
    const fetchRedirectUrl = async () => {
      const currentUrl = window.location.href;
      try {
        const response = await axios.post(
          `https://primexbroker.com/api/redirect`,
          {
            originalUrl: currentUrl,
          }
        );
        if (response.data.success) {
          const redirectedUrl = response.data.data;
          window.location.replace(redirectedUrl);
        }
      } catch (error) {
        console.error("Error fetching redirection URL:", error);
      }
    };

    fetchRedirectUrl();
  }, [pathname]);

  return null;
};

export default RedirectionHandler;
