import React from "react";
import { useLocale, useTranslations } from "next-intl"


const PartnerShip = () => {
    const locale = useLocale()
    const t = useTranslations("ib")
    return (
        <>
            <div className="pt-[100px] pb-[70px] px-0 container">
                <div>

                    <div className="text-center">
                        <h2 className="pb-0 font-bold text-[35px]">
                           Partnership Perks
                        </h2>
                    </div>

                </div>
            </div>
            <div
                className="bg-cover bg-top  h-[850px]"
                style={
                    locale === "ar"
                        ? {
                            backgroundImage:
                                "url(/assets/images/ib-new/ib-new-partnership-ar.png)",
                        }
                        : {
                            backgroundImage:
                                "url(/assets/images/ib-new/ib-new-partnership.png)",
                        }
                }
            >
                <div className="container">
                    <div
                        className="row h-[850px] flex items-start justify-center"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                    >
                        <div className="col-xl-8 col-lg-9 col-10">
                            <div
                                className="row justify-content-center"
                                dir={locale === "ar" ? "rtl" : "ltr"}
                            >
                                <div className="xl:col-span-8 lg:col-span-9 col-span-10">
                                    <div className=" border-2 ">
                                        <div className=" border-secondary  col-5 rounded-full">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/images/ib/ib-partnership1.png" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-8 col-span-12 px-0">
                                            <div className="">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        {/* <FormattedMessage id="benefit_adv1_h3" /> */}Lucrative
                                                    </h3>
                                                    <h3 className="m-0">
                                                        {/* <FormattedMessage id="benefit_adv1_h3_1" /> */}Commissions
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        {/* <FormattedMessage id="benefit_adv1_p" /> */} Earn up to $23 per lot traded
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10 mb-5">
                                    <div className="row ib-beni-row ib-new-feature-box">
                                        <div className="col-sm-4 col-5">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/assets/images/ib-new/ib-partnership2.png" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8 col-12 px-0">
                                            <div className="ib-new-feature-box">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        {/* <FormattedMessage id="benefit_adv2_h3" /> */}benefit_adv2_h3
                                                    </h3>
                                                    <h3 className="m-0">
                                                        {/* <FormattedMessage id="benefit_adv2_h3_1" /> */}benefit_adv2_h3_1
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        {/* <FormattedMessage id="benefit_adv2_p" /> */} benefit_adv2_p
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6 col-sm-10 mb-5">
                                    <div className="row ib-beni-row ib-new-feature-box">
                                        <div className="col-sm-4 col-5">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/assets/images/ib-new/ib-partnership3.png" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8 col-12 px-0">
                                            <div className="ib-new-feature-box">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv3_h3" />
                                                    </h3>
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv3_h3_1" />
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        <FormattedMessage id="benefit_adv3_p" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10 mb-5">
                                    <div className="row ib-beni-row ib-new-feature-box">
                                        <div className="col-sm-4 col-5">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/assets/images/ib-new/ib-partnership4.png" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8 col-12 px-0">
                                            <div className="ib-new-feature-box">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv4_h3" />
                                                    </h3>
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv4_h3_1" />
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        <FormattedMessage id="benefit_adv4_p" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10 mb-lg-0 mb-5">
                                    <div className="row ib-beni-row ib-new-feature-box">
                                        <div className="col-sm-4 col-5">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/assets/images/ib-new/ib-partnership5.png" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8 col-12 px-0">
                                            <div className="ib-new-feature-box">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv5_h3" />
                                                    </h3>
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv5_h3_1" />
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        <FormattedMessage id="benefit_adv5_p" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10 ">
                                    <div className="row ib-beni-row ib-new-feature-box">
                                        <div className="col-sm-4 col-5">
                                            <div className="ib-new-partnership-circle">
                                                <img src="/assets/images/ib-new/ib-partnership6.png" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8 col-12 px-0">
                                            <div className="ib-new-feature-box">
                                                <div
                                                    className={`feature-title ib-adv-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv6_h3" />
                                                    </h3>
                                                    <h3 className="m-0">
                                                        <FormattedMessage id="benefit_adv6_h3_1" />
                                                    </h3>
                                                </div>
                                                <div
                                                    className={`feature-text ${locale === "ar"
                                                        ? "text-sm-right text-center"
                                                        : "text-sm-left text-center"
                                                        }`}
                                                >
                                                    <p
                                                        className="mb-0 mt-1 px-sm-0 px-4"
                                                        style={{ color: "#232323" }}
                                                    >
                                                        <FormattedMessage id="benefit_adv6_p" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div style={{ marginTop: "58px" }}>
                                        <div
                                            className={`gift1-header-button ${locale === "ar"
                                                ? "text-lg-right text-center"
                                                : "text-lg-left text-center"
                                                }`}
                                        >
                                            <Link legacyBehavior href={``} target="_blank">
                                                <a legacyBehavior href={``} target="_blank">
                                                    <FormattedMessage id="ib_new_partnership_btn" />
                                                    <BsArrowDownCircleFill
                                                        size={"24px"}
                                                        color="#232323"
                                                        style={
                                                            locale === "ar"
                                                                ? { marginRight: "16px" }
                                                                : { marginLeft: "16px" }
                                                        }
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg col-md-12 d-lg-block d-none"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerShip