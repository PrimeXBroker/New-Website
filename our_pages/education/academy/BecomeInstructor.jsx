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
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/slices/locationSlice";

function BecomeInstructor() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const t = useTranslations("academy.academyForm");
  const countryCode = useSelector((state) => state.location.location);
  const locale = useLocale();

  useEffect(() => {
    const fetchLocation = async () => {
      if (countryCode) return;

      try {
        const response = await axios.get("https://ipapi.co/country/");
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
        className={`bg-cc dark:bg-cc-dark md:w-[80%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-tm dark:text-tm-dark">
              {t("instructor_title1")}{" "}
              <span className="text-ts dark:text-ts-dark font-normal">
                {t("instructor_title2")}
              </span>
            </h2>
            <p className="text-xs text-ts dark:text-ts-dark">
              {t("instructor_desc")}
            </p>
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("full_name")}
              <input
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder={t("full_name")}
                className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("phoneNumber")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("number", value)}
                  onBlur={formik.handleBlur}
                  name="number"
                  value={formik.values.number}
                  className={`ib-phone-input appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.number && formik.errors.number
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                  placeholder={t("phoneNumber")}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("email")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("experience_year")}
                <input
                  type="number"
                  name="experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.experience}
                  placeholder={t("experience_year")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.experience && formik.errors.experience
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("speciality")}
                <input
                  type="text"
                  name="specialty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.specialty}
                  placeholder={t("speciality")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.specialty && formik.errors.specialty
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("advantages")}
              <textarea
                name="advantages"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.advantages}
                rows="4"
                placeholder={t("write_adv")}
                className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.advantages && formik.errors.advantages
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full appearance-none rounded text-ts dark:text-ts-dark mb-3">
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
                  className={`flex items-center space-x-2 rounded-md px-4 py-2 cursor-pointer transition-all ${
                    formik.values.workedWithCompanies === option.value
                      ? "bg-tm dark:bg-tm-dark text-p dark:text-p-dark"
                      : "bg-e1 dark:bg-e1-dark text-ts dark:text-ts-dark"
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
                          ? "text-p dark:text-p-dark"
                          : "text-ts dark:text-ts-dark"
                      }`}
                    />
                  ) : (
                    <FaTimesCircle
                      className={`text-lg ${
                        formik.values.workedWithCompanies === "No"
                          ? "text-p dark:text-p-dark"
                          : "text-ts dark:text-ts-dark"
                      }`}
                    />
                  )}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {formik.touched.workedWithCompanies &&
            formik.errors.workedWithCompanies ? (
              <div className="text-rc dark:text-rc-dark">
                {formik.errors.workedWithCompanies}
              </div>
            ) : null}
          </div>

          <div className="w-full appearance-none rounded text-ts dark:text-ts-dark mb-3">
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
                  className={`flex items-center space-x-2 rounded-md px-4 py-2 cursor-pointer transition-all ${
                    formik.values.doneWebinar === option.value
                      ? "bg-tm dark:bg-tm-dark text-p dark:text-p-dark"
                      : "bg-e1 dark:bg-e1-dark text-ts dark:text-ts-dark"
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
                          ? "text-p dark:text-p-dark"
                          : "text-ts dark:text-ts-dark"
                      }`}
                    />
                  ) : (
                    <FaTimesCircle
                      className={`text-lg ${
                        formik.values.doneWebinar === "No"
                          ? "text-p dark:text-p-dark"
                          : "text-ts dark:text-ts-dark"
                      }`}
                    />
                  )}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {formik.touched.doneWebinar && formik.errors.doneWebinar ? (
              <div className="text-rc dark:text-rc-dark">
                {formik.errors.doneWebinar}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <p className="text-xs text-ts dark:text-ts-dark mb-1">
              {t("condition")}
            </p>
            <button
              disabled={loading}
              className="transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group py-4 px-3"
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
