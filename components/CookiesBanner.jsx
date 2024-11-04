"use client";
import { useState, useEffect, useContext } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
// import { LocationContext } from "@/context/location-context";
import axios from "axios";
import { useSelector } from "react-redux";

const CookieBanner = () => {
  const t = useTranslations("home.cookie");
  const [show, setShow] = useState(false);
  // const location = useContext(LocationContext);
  const locationState = useSelector((state) => state.location);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let country;
        if (!locationState?.location) {
          const location = await axios.get("https://ipapi.co/country/");
          country = location.data;
        }
        if (country === "ZA" || locationState?.location === "ZA") {
          window.location.href = "https://www.primexcapital.co.za";
        }
      } catch (error) {
        console.error("Error fetching location", error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const cookieValue = getCookie("primex_cookie");
    setShow(cookieValue !== "true");
  }, []);

  const handleApiCall = () => {
    // const payload = { newUser: true, ...location };
    // axios
    //   .post(
    //     "url",
    //     JSON.stringify(payload)
    //   )
    //   .then((res) => {
    //     console.log("Response:", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err);
    //   });
  };
  return (
    <>
      {show && (
        <div className="w-full bg-[#000000] z-50 fixed bottom-0 text-white p-2">
          <div className="container">
            <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-4">
              <p className="text-[11px] text-center md:ltr:text-left md:rtl:text-right col-span-1 md:col-span-10">
                {t("text")}
              </p>
              <div className="md:text-right text-center col-span-1 md:col-span-2">
                <button
                  className="text-[#111111] uppercase bg-primary text-[11px] rounded-full px-3 py-[5px] gap-2 items-center hover:bg-white hover:text-[#111111]"
                  onClick={() => {
                    setCookie("primex_cookie", "true", { maxAge: 2592000 }); // 30 days
                    setShow(false);
                    handleApiCall();
                  }}
                >
                  {t("btnTxt")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
