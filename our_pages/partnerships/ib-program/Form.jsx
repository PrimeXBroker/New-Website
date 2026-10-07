"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

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
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

function Form() {
  const locale = useLocale();
  const t = useTranslations("ibProgram.ibForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      contact: "",
      social_media_portals: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("full_name_validation_error"),
        )
        .required(t("full_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      social_media_portals: Yup.string().required(t("question_required_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const updatedValues = {
        full_name: values.full_name,
        email: values.email,
        contact: values.contact,
        social_media_portals: values.social_media_portals,
      };
      try {
        const res = await axios.post(
          `https://primexbroker.com/api/add/ib-application`,
          updatedValues,
        );
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
  return (
    <section className="container px-0">
      <div
        className={`bg-cc dark:bg-cc-dark rounded-xl p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="md:flex w-full justify-between">
            <div className="w-full mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("full_name_label")}
                <input
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  placeholder={t("full_name_placeholder")}
                  className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("email_label")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email_placeholder")}
                  className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="w-full ib-contact">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("contact_label")}
              <PhoneInput
                international
                defaultCountry={countryCode}
                onChange={(value) => formik.setFieldValue("contact", value)}
                onBlur={formik.handleBlur}
                name="contact"
                value={formik.values.contact}
                className={`ib-phone-input appearance-none rounded-[4px] w-full py-[16px] border border-e1 dark:border-e1-dark px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.contact && formik.errors.contact
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
                placeholder={t("number")}
              />
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("question_label")}
              <textarea
                name="social_media_portals"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.social_media_portals}
                rows="4"
                placeholder={t("question_placeholder")}
                className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.social_media_portals &&
                  formik.errors.social_media_portals
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full">
            <button
              disabled={loading}
              className={`py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full justify-between sm:justify-center transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center gap-3 group bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/Button+BG.png')] bg-cover bg-center text-nb dark:text-nb-dark group`}
            >
              {loading ? (
                <div className="spinner inline-block"></div>
              ) : (
                <span>{t("submit_btn")}</span>
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
}

export default Form;
