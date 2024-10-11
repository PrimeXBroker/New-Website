"use client";
import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { LocationContext } from "@/context/location-context";
import axios from "axios";
import toast from "react-hot-toast";
import nationality from "../../public/assets/data/nationality.json";
import { Select, SelectItem } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CustomSelect from "./CustomSelect";

function BookSession() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("newAcademy.academyForm");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");

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

  const webinarTypes = [
    {
      id: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      name: "09:00 AM - 12:00 AM ( GST + 3 Time )",
      value: "12:00 PM - 03:00 PM ( GST + 3 Time )",
    },
    {
      id: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      name: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      value: "12:00 PM - 03:00 PM ( GST + 3 Time )",
    },
    {
      id: "03:00 PM - 05:00 PM ( GST + 3 Time )",
      name: "03:00 PM - 05:00 PM ( GST + 3 Time )",
      value: "03:00 PM - 05:00 PM ( GST + 3 Time )",
    },
  ];

  const handleSelectChange = (selectedValue) => {
    formik.setFieldValue("time", selectedValue);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      accountId: "",
      time: "",
      appointmentFor: "6638c57d544c48054fa68135",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("full_name_validation_error")
        )
        .required(t("full_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      time: Yup.string().required(t("availability_error")),
      accountId: Yup.number().required(t("account_number_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // setLoading(true);
        // const response = await axios.post(
        //     `https://primexbroker.com/api/contact`,
        //     JSON.stringify(values)
        // );
        setLoading(true);

        const res = await axios.post(
          "https://primexbroker.com/api/book-schedule",
          values
        );
        if (res.data.success) {
          formik.resetForm();
          setLoading(false);
          onOpen();
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });

  return (
    <section className="container px-0">
      <div
        className={`bg-[#111111] border-[#1d1d1d] border-3 md:w-[80%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              {t("session_title1")}{" "}
              <span className="text-[#c6c6c6] font-normal">
                {t("session_title2")}
              </span>
            </h2>
            <p className="text-xs text-[#c6c6c6]">{t("session_desc")}</p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("full_name")}
                <input
                  type="text"
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  placeholder={t("full_name")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-[#c6c6c6]">
                {t("account_number")}
                <input
                  type="text"
                  name="accountId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accountId}
                  placeholder={t("account_number")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.accountId && formik.errors.accountId
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-[#c6c6c6]">
                {t("phoneNumber")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) =>
                    formik.setFieldValue("phoneNumber", value)
                  }
                  onBlur={formik.handleBlur}
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  className={`ib-phone-input appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-b border-red-600"
                      : ""
                  }`}
                  placeholder={t("phoneNumber")}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("email")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border-b border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <label className="text-xs text-[#c6c6c6]">
              {t("availability_label")}
              <CustomSelect
                label={t("availability_label")}
                options={webinarTypes}
                value={formik.values.time}
                onChange={handleSelectChange}
              />
              {formik.errors.time && formik.touched.time && (
                <div className="text-red-600 text-xs">{formik.errors.time}</div>
              )}
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-[#c6c6c6] mb-1">{t("condition")}</p>

            <button
              disabled={loading}
              className="font-semibold py-[16px] px-[10px] text-[#111111] w-full custom-button"
              style={{ borderRadius: "5px" }}
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span> {t("form_btn")}</span>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("success_title")}
              </ModalHeader>
              <ModalBody>
                <p>{t("session_success_desc1")}</p>
                <p>{t("session_success_desc2")}</p>
                {/* <p>Thank you for choosing PrimeX Capital</p> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close_btn")}
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

export default BookSession;
