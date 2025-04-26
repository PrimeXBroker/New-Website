"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import nationality from "../../../public/assets/data/nationality.json";

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

function Form() {
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
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      country: "",
      question: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("first_name_validation_error")
        )
        .required(t("first_name_required_error")),
      last_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("last_name_validation_error")
        )
        .required(t("last_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      country: Yup.string().required(t("country_required_error")),
      question: Yup.string().required(t("question_required_error")),
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
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        contact: values.contact,
        country: values.country,
        question: values.question,
      };
      try {
        const res = await axios.post(
          `https://primexbroker.com/api/ib_form`,
          updatedValues
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
        className={`bg-cc dark:bg-cc-dark md:w-[74%] lg:w-[100%] rounded-xl p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-tm dark:text-tm-dark">
              {t("title")}
            </h2>
            <p className="text-xs text-ts dark:text-ts-dark">{t("desc")}</p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("first_name_label")}
                <input
                  type="text"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  placeholder={t("first_name_placeholder")}
                  className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.first_name && formik.errors.first_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("last_name_label")}
                <input
                  type="text"
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder={t("last_name_label")}
                  className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.last_name && formik.errors.last_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
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
            <div className="w-full md:w-[48%] ib-contact">
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
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("country_label")}
              <select
                className={`capitalize py-[16px] px-[12px] w-full text-base focus:outline-none border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark ${
                  formik.touched.country && formik.errors.country
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" className="text-ts dark:text-ts-dark">
                  {t("country_placeholder")}
                </option>
                {nationality.map((country, index) => {
                  return (
                    <option
                      key={index}
                      value={country.en_short_name}
                      className="text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark"
                    >
                      {country.en_short_name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("question_label")}
              <textarea
                name="question"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.question}
                rows="4"
                placeholder={t("question_placeholder")}
                className={`appearance-none rounded-[4px] w-full py-[16px] px-[12px] border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.question && formik.errors.question
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-ts dark:text-ts-dark mb-1">
              {t("condition")}
            </p>
            <button
              disabled={loading}
              className="transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark hover:bg-tm dark:hover:bg-tm-dark text-nb dark:text-nb-dark group py-4 px-3"
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span>{t("submit_btn")}</span>
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
