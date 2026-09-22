"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { FiArrowUpLeft, FiArrowUpRight, FiUploadCloud } from "react-icons/fi";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/slices/locationSlice";

const InitiativeRegistration = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccountPage.initiativeRegistration");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const countryCode = useSelector((state) => state.location.location);

  useEffect(() => {
    const fetchLocation = async () => {
      if (countryCode) return;

      try {
        const response = await axios.get(`https://ipapi.co/country/`);
        if (response.data) {
          dispatch(setLocation(response.data.toUpperCase()));
        } else {
          console.error("Failed to fetch country code");
        }
      } catch (error) {
        console.error("Error fetching location", error);
      }
    };
    fetchLocation();
  }, []);

  const ALLOWED_FILE_TYPES = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      full_name: "",
      email: "",
      contact: "",
      trading_history: null,
      language: locale,
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, t("full_name_validation_error"))
        .required(t("full_name_required_error")),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          t("email_validation_error"),
        )
        .required(t("email_required_error")),
      trading_history: Yup.mixed()
        .required(t("trading_history_required_error"))
        .test("fileType", t("upload_subtitle"), (value) => {
          if (!value) return false;
          const fileName = value.name || "";
          const isValidExtension = /\.(xlsx|xls)$/i.test(fileName);
          const isValidMime = ALLOWED_FILE_TYPES.includes(value.type);
          return isValidExtension || isValidMime;
        }),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("contact_required_error");
      } else {
        const cleanNumber = values.contact.replace(/^\+/, "");
        if (!/^\d+$/.test(cleanNumber)) {
          errors.contact = t("contact_required_error");
        }
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", values.full_name);
      formData.append("email", values.email);
      formData.append("contact", values.contact);
      formData.append("trading_history", values.trading_history);
      formData.append("language", locale || values.language);
      try {
        const res = await axios.post(
          "https://primexbroker.com/api/add/funded-account",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log(res, "funded account form");
        if (res.data.success) {
          formik.resetForm();
          setLoading(false);
          onOpen();
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (locale) {
      formik.setFieldValue("language", locale);
    }
  }, [locale]);

  const handleNameChange = (e) => {
    const cleanValue = e.target.value.replace(/[^A-Za-z\s]/g, "");
    formik.setFieldValue("full_name", cleanValue);
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      formik.setFieldValue("trading_history", file, true);
    }
  };

  return (
    <section
      id="initiative-registration"
      className="bg-p dark:bg-p-dark scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("title")}
          </h2>
        </div>
        <div className="bg-cc dark:bg-cc-dark w-full md:w-[80%] lg:w-[50%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center items-center relative gap-4"
          >
            {/* Full Name */}
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("full_name_label")}
                <input
                  type="text"
                  name="full_name"
                  onChange={handleNameChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  placeholder={t("full_name_placeholder")}
                  className={`appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
              {formik.touched.full_name && formik.errors.full_name && (
                <p className="text-xs text-rc dark:text-rc-dark mt-1">
                  {formik.errors.full_name}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("email_label")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email_placeholder")}
                  className={`appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-rc dark:text-rc-dark mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="w-full mb-3 ib-contact">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("contact_label")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("contact", value)}
                  onBlur={() => formik.setFieldTouched("contact", true)}
                  onKeyDown={handlePhoneKeyDown}
                  name="contact"
                  value={formik.values.contact}
                  className={`ib-phone-input appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.contact && formik.errors.contact
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                  placeholder={t("contact_placeholder")}
                />
              </label>
              {formik.touched.contact && formik.errors.contact && (
                <p className="text-xs text-rc dark:text-rc-dark mt-1">
                  {formik.errors.contact}
                </p>
              )}
            </div>

            {/* 3-Month Trading History */}
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("trading_history_label")}

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className={`relative mt-1 border-[2px] border-dashed border-pcp/[0.302] dark:border-pcp-dark/[0.302] rounded-[4px] p-6 text-center cursor-pointer transition-all duration-200 bg-e1 dark:bg-e1-dark ${
                    formik.touched.trading_history &&
                    formik.errors.trading_history
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                >
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        formik.setFieldValue("trading_history", file, true);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1 text-pcp dark:text-pcp-dark">
                      <FiUploadCloud className="w-8 h-8" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-tm dark:text-tm-dark mb-1">
                      {formik.values.trading_history
                        ? formik.values.trading_history.name
                        : t("upload_title")}
                    </span>
                    <span className="text-xs sm:text-sm text-ts dark:text-ts-dark">
                      {t("upload_subtitle")}
                    </span>
                  </div>
                </div>
              </label>
              {formik.touched.trading_history &&
                formik.errors.trading_history && (
                  <p className="text-xs text-rc dark:text-rc-dark mt-1">
                    {formik.errors.trading_history}
                  </p>
                )}
            </div>

            <div className="w-full">
              <button
                disabled={loading}
                type="submit"
                className={`py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full justify-between sm:justify-center transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center gap-3 group bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/Button+BG.png')] bg-cover bg-center text-nb dark:text-nb-dark group`}
              >
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span>{t("apply_btn")}</span>
                )}
                {locale === "ar" ||
                locale === "ku" ||
                locale === "ps" ||
                locale === "fa" ? (
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                  >
                    <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                  >
                    <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("success_title")}
              </ModalHeader>
              <ModalBody>
                <p>{t("success_desc")}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close_btn")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default InitiativeRegistration;
