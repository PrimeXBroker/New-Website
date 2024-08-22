"use client";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { LocationContext } from "@/context/location-context";
import OtpVerification from "./OtpVerification";

const BonusForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [timer, setTimer] = useState(0);
  // const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [bonusData, setBonusData] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const locale = useLocale();
  console.log(locale, "locale");

  const t = useTranslations("bonus_landing.form");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/country/");
        if (response.data) {
          setCountryCode(response.data.toUpperCase());
        } else {
          console.error("Failed to fetch country code");
        }
      } catch (error) {
        console.error("Error fetching location", error);
      }
    };
    fetchLocation();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "First Name can only contain letters."
        )
        .required("First Name is required!"),
      lastName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Last Name can only contain letters."
        )
        .required("Last Name is required!"),
      email: Yup.string()
        .email("provide valid email")
        .required("email is required"),
      // country: Yup.string().required(t("country_required_error")),
    }),
    onSubmit: async (values) => {
      const updatedValues = {
        fullName: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phoneNumber: values.phoneNumber,
        language: locale,
        source: "20% bonus campaign",
        // country: values.country,
      };

      try {
        if (values?.terms) {
          setLoading(true);
          const response = await axios.post(
            // `http://localhost:4002/api/bonus-landing-page`,
            `https://primexbroker.com/api/bonus-landing-page`,
            // JSON.stringify(updatedValues)
            updatedValues
          );
          setLoading(false);
          setBonusData(updatedValues);
          console.log("Response", response);
          if (response?.data?.success) {
            setLoading(false);
            toast.success("OTP sent to your mail");
            setIsVerified(true);
            setTimer(300);
            formik.resetForm();
          }
        } else {
          toast.error("Terms Checkbox is required");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Email not sent. Please try sending again.");
      }
    },
  });
  return (
    <>
      <section className="container my-20">
        <div className="bg-secondary p-6 sm:p-10 rounded-3xl">
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-8">
              <h1 className="sectionHeading  text-accent font-semibold text-center">
                {t("title1")}
              </h1>
            </div>
            <div className="col-span-12">
              {!isVerified ? (
                <form onSubmit={formik.handleSubmit}>
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                      <div className="w-[90%] m-auto">
                        <Input
                          classNames={{
                            label: `${
                              formik.touched.name && formik.errors.name
                                ? "text-danger"
                                : "#000"
                            }`,
                          }}
                          size="lg"
                          type="text"
                          label={"First Name"}
                          name="firstName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                      <div className="w-[90%] m-auto">
                        <Input
                          classNames={{
                            label: `${
                              formik.touched.name && formik.errors.name
                                ? "text-danger"
                                : "#000"
                            }`,
                          }}
                          size="lg"
                          type="text"
                          label={"Last Name"}
                          name="lastName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                      <div className="w-[90%] m-auto">
                        <Input
                          classNames={{
                            label: `${
                              formik.touched.email && formik.errors.email
                                ? "text-danger"
                                : "#000"
                            }`,
                          }}
                          size="lg"
                          type="email"
                          label={t("email")}
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                      <div className="w-[92%] m-auto p-1">
                        <PhoneInput
                          defaultCountry={countryCode}
                          onChange={(value) =>
                            formik.setFieldValue("phoneNumber", value)
                          }
                          onBlur={formik.handleBlur}
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          className="w-full bg-white h-16 rounded-xl"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 bonus-claim-form-mbl">
                      <div className="w-[90%] m-auto">
                        <Checkbox
                          name="terms"
                          id="terms"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="checked"
                        >
                          <span
                            className={`${
                              formik.touched.terms && formik.errors.terms
                                ? "text-danger"
                                : "text-white"
                            }`}
                          >
                            {t("condition1")}
                          </span>
                          <Link
                            href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/20%25_deposit_bonus.pdf"
                            target="_blank"
                            className="text-primary"
                          >
                            {t("condition2")}
                          </Link>
                        </Checkbox>
                      </div>
                    </div>
                    <div className="col-span-12 mt-3">
                      <div className="text-center">
                        <Button
                          disabled={loading}
                          type="submit"
                          className="text-secondary font-semibold h-12 px-10"
                          radius="full"
                          size="lg"
                          color="primary"
                        >
                          <div className="flex gap-1 items-center">
                            {loading && (
                              <div className="spinner inline-block"></div>
                            )}{" "}
                            {loading ? (
                              <span className="text-center">
                                {locale === "ar"
                                  ? "إرسال الرمز لمرة واحدة..."
                                  : "Sending OTP..."}
                              </span>
                            ) : (
                              <span>{t("form_btn")}</span>
                            )}
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <OtpVerification
                  setLoading={setLoading}
                  loading={loading}
                  onOpen={onOpen}
                  setIsVerified={setIsVerified}
                  bonusData={bonusData}
                  setTimer={setTimer}
                  timer={timer}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success</ModalHeader>
              <ModalBody>
                <p>Thank you for choosing PrimeX Capital</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BonusForm;
