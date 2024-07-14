import { useState, useEffect, useContext } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { LocationContext } from "@/context/location-context";

const CookieBanner = () => {
  const t = useTranslations("home.cookie");
  const [show, setShow] = useState(false);
  const location = useContext(LocationContext);
  useEffect(() => {
    const cookieValue = getCookie("primex_cookie");
    setShow(cookieValue !== "true");
  }, []);
  const handleApiCall = () => {
    const payload = { newUser: true, ...location };
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
    console.log(payload);
  };
  return (
    <>
      {show && (
        <div className="w-full bg-secondary z-50 fixed bottom-0 text-white p-4">
          <div className="container">
            <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-4">
              <p className="text-[13px] ltr:text-left rtl:text-right col-span-1 md:col-span-10">
                {t("text")}
              </p>
              <div className="md:text-right text-center col-span-1 md:col-span-2">
                <button
                  className="text-white uppercase bg-primary text-sm px-3 py-[6px] gap-2 items-center hover:bg-white hover:text-primary"
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
