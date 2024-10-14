"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function BecomeInstructor() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const t = useTranslations("academy.academyForm");
  const [countryCode, setCountryCode] = useState("");
  const locale = useLocale();

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

  const workedBefore = [
    { label: t("radio_option_1"), value: "Yes" },
    { label: t("radio_option_2"), value: "No" },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      number: "",
      experience: "",
      specialty: "",
      advantages: "",
      workedWithCompanies: "",
      doneWebinar: "",
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
      experience: Yup.number().required(t("experience_year_error")),
      specialty: Yup.string().required(t("speciality_error")),
      advantages: Yup.string().required(t("advantages_error")),
      workedWithCompanies: Yup.string().required(
        t("workedWithCompanies_error")
      ),
      doneWebinar: Yup.string().required(t("doneWebinar_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.number) {
        errors.number = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          "https://primexbroker.com/api/instructor",
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
        setLoading(false);
        console.log(error);
      }
    },
  });

  return (
    <section id="academy-form" className="container px-0">
      <div
        className={`bg-[#111111] border-[#1d1d1d] border-3 md:w-[80%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              {t("instructor_title1")}{" "}
              <span className="text-[#c6c6c6] font-normal">
                {t("instructor_title2")}
              </span>
            </h2>
            <p className="text-xs text-[#c6c6c6]">{t("instructor_desc")}</p>
          </div>
          <div className="w-full mb-3 md:mb-0">
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
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-[#c6c6c6]">
                {t("phoneNumber")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("number", value)}
                  onBlur={formik.handleBlur}
                  name="number"
                  value={formik.values.number}
                  className={`ib-phone-input appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.number && formik.errors.number
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
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-[#c6c6c6]">
                {t("experience_year")}
                <input
                  type="number"
                  name="experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.experience}
                  placeholder={t("experience_year")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.experience && formik.errors.experience
                      ? "border-b border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("speciality")}
                <input
                  type="text"
                  name="specialty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.specialty}
                  placeholder={t("speciality")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.specialty && formik.errors.specialty
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-xs text-[#c6c6c6]">
              {t("advantages")}
              <textarea
                name="advantages"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.advantages}
                rows="4"
                placeholder={t("write_adv")}
                className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                  formik.touched.advantages && formik.errors.advantages
                    ? "border-b border-red-600"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full appearance-none rounded text-[#C6C6C6] mb-3">
            <label
              className={`block mb-2 text-sm ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("workedWithCompanies")}
            </label>
            <div className="flex space-x-4">
              {workedBefore.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-2 border-2 rounded-md px-4 py-2 cursor-pointer transition-all ${
                    formik.values.workedWithCompanies === option.value
                      ? "bg-[#F9F9F9] border-[#C6C6C6] border-1 text-[#1D1D1D]"
                      : "bg-[#1D1D1D] border-[#222222] text-[#c6c6c6] border-1"
                  }`}
                >
                  <input
                    type="radio"
                    id={`workedWithCompanies${option.value}`}
                    name="workedWithCompanies"
                    value={option.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.workedWithCompanies === option.value}
                    className="hidden"
                  />
                  {option.value === "Yes" ? (
                    <FaCheckCircle
                      className={`text-lg ${
                        formik.values.workedWithCompanies === "Yes"
                          ? "text-[#1D1D1D]"
                          : "text-[#c6c6c6]"
                      }`}
                    />
                  ) : (
                    <FaTimesCircle
                      className={`text-lg ${
                        formik.values.workedWithCompanies === "No"
                          ? "text-[#1D1D1D]"
                          : "text-[#c6c6c6]"
                      }`}
                    />
                  )}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {formik.touched.workedWithCompanies &&
            formik.errors.workedWithCompanies ? (
              <div className="text-red-600">
                {formik.errors.workedWithCompanies}
              </div>
            ) : null}
          </div>

          <div className="w-full appearance-none rounded text-[#C6C6C6] mb-3">
            <label
              className={`block mb-2 text-sm ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("doneWebinar")}
            </label>
            <div className="flex space-x-4">
              {workedBefore.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-2 border-2 rounded-md px-4 py-2 cursor-pointer transition-all ${
                    formik.values.doneWebinar === option.value
                      ? "bg-[#F9F9F9] border-[#C6C6C6] border-1 text-[#1D1D1D]"
                      : "bg-[#1D1D1D] border-[#222222] text-[#c6c6c6] border-1"
                  }`}
                >
                  <input
                    type="radio"
                    id={`doneWebinar${option.value}`}
                    name="doneWebinar"
                    value={option.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.doneWebinar === option.value}
                    className="hidden"
                  />
                  {option.value === "Yes" ? (
                    <FaCheckCircle
                      className={`text-lg ${
                        formik.values.doneWebinar === "Yes"
                          ? "text-[#1D1D1D]"
                          : "text-[#c6c6c6]"
                      }`}
                    />
                  ) : (
                    <FaTimesCircle
                      className={`text-lg ${
                        formik.values.doneWebinar === "No"
                          ? "text-[#1D1D1D]"
                          : "text-[#c6c6c6]"
                      }`}
                    />
                  )}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {formik.touched.doneWebinar && formik.errors.doneWebinar ? (
              <div className="text-red-600">{formik.errors.doneWebinar}</div>
            ) : null}
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
                <p>{t("instructor_success_desc")}</p>
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

export default BecomeInstructor;
