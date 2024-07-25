import React from "react";
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const locale = useLocale()
  const t = useTranslations("ib")

  return <div
    className="bg-cover bg-center h-[700px] ib-mbl-bg"
    style={
      locale === "ar"
        ? {
          backgroundImage:
            "url(/assets/images/ib-new/ib-new-header-ar.png)",
        }
        : {
          backgroundImage:
            "url(/images/ib/ib-new-header.png)",
        }
    }
  >
    <div className="container">
      <div className="row h-[700px] flex flex-col  justify-center "
      >
        <div
          className="lg:w-7/12 w-11/12 signals-header-mbl"
        >
          <div className="signal-details-content">
            <div>
              <h1 className="text-secondary leading-[36px] m-0">
                Become an
              </h1>
            </div>
            <div className="">
              <h1 className="pt-1 pb-3 text-[50px] font-bold text-custom-dark inline-block leading-[56px] m-0  text-secondary relative">
                Introducing Broker
                <div className="absolute left-0 bottom-[-10px] w-full h-[8px] bg-primary mt-[10px]" ></div>
              </h1>
            </div>
            <div >
              <h1
                className="text-[50px] mt-5 text-custom-dark inline-block leading-[56px] m-0 text-[#3f3f3e] font-light"

              >
                <span style={{ fontWeight: "700" }}>
                  earn&nbsp;
                </span>
                <span>
                  up to
                </span>
              </h1>
            </div>
            <div>
              <h1
                className="text-[80px] font-[700] text-secondary inline-block leading-[100px] m-0  "
              >
                $23 per lot
              </h1>
            </div>
          </div>
          <div className="relative inline-block px-[48px] py-[16px] text-[22px] font-bold text-[#3f3f3e] bg-[#fccd0a] border border-[#fccd0a] rounded-full overflow-hidden mt-[58px]"
          >
            <div  >
              <Link
                legacyBehavior
                href={`https://client.primexbroker.com/${locale}/register`}
                target="_blank"
              >
                <a
                  className="flex justify-center items-center"
                  legacyBehavior
                  href={`https://client.primexbroker.com/${locale}/register`}
                  target="_blank"
                >
                  SIGN UP NOW

                  {locale === "ar" ? (
                    <FaArrowLeftLong
                      size={"25px"}
                      style={{ marginRight: "16px" }}
                    />
                  ) : (
                    <FaArrowRightLong
                      size={"25px"}
                      style={{ marginLeft: "16px" }}
                    />
                  )}
                </a>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Banner;
