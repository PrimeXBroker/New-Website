"use client";

import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from "@/public/assets/data/nationality.json";
import { LocationContext } from "@/context/location-context";
import { useTranslations, useLocale } from "next-intl";

const CareerForm = () => {
  const locale = useLocale();
  const t = useTranslations("careers.careersForm");
  const [resumeName, setResumeName] = useState("");
  const [portfolioName, setPortfolioName] = useState("");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      country: "",
      resume: null,
      portfolio: null,
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
      resume: Yup.mixed().required(t("resume_required_error")),
      portfolio: Yup.mixed().required(t("portfolio_required_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("phone_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      const updatedValues = {
        name: `${values.first_name} ${values.last_name}`,
        email: values.email,
        contact: values.contact,
        country: values.country,
        resume: values.resume,
        portfolio: values.resume,
      };
      console.log(updatedValues);
    },
  });

  const handleFileChange = (fileType) => (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      if (fileType === "resume") {
        setResumeName(file.name);
        formik.setFieldValue("resume", file);
      }
    }
  };

  const handleButtonClick = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <section className="bg-accent">
      <div className="container pt-8 max-w-xl flex flex-col gap-2">
        <h1
          className="text-2xl md:text-3xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          {t("title")}
        </h1>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          {t("description")}
        </p>
      </div>
      <div className="careers_form_wrapper container py-8">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="flex flex-col">
              <input
                className={`bg-white text-secondary placeholder:text-accent py-2 px-4 capitalize rounded-md ${
                  formik.touched.first_name && formik.errors.first_name
                    ? "border-2 border-red-600"
                    : ""
                }`}
                type="text"
                name="first_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                placeholder={t("first_name")}
              />
            </div>
            <div className="flex flex-col">
              <input
                className={`bg-white text-secondary  placeholder:text-accent capitalize py-2 px-4 rounded-md ${
                  formik.touched.last_name && formik.errors.last_name
                    ? "border-2 border-red-600"
                    : ""
                } `}
                type="text"
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                placeholder={t("last_name")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <input
                  className={`bg-white text-secondary   placeholder:text-accent py-2 px-4 capitalize rounded-[3px] w-full ${
                    formik.touched.email && formik.errors.email
                      ? "border-2 border-red-600"
                      : ""
                  }`}
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email")}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PhoneInput
              onChange={(value) => formik.setFieldValue("contact", value)}
              onBlur={formik.handleBlur}
              name="contact"
              value={formik.values.contact}
              defaultCountry={originCountry}
              className="w-[100%]"
            />
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <select
                className={`bg-white text-secondary placeholder:text-accent capitalize  py-2 px-4 rounded-[5px] ${
                  formik.touched.country && formik.errors.country
                    ? "border-2 border-red-600"
                    : ""
                }`}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">{t("country")}</option>
                {nationality.map((country, index) => {
                  return (
                    <option key={index} value={country.en_short_name}>
                      {country.en_short_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <input
                  id="resume"
                  type="file"
                  name="resume"
                  className="hiddenInput"
                  onChange={handleFileChange("resume")}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={() => handleButtonClick("resume")}
                  className={`bg-white text-secondary py-2 px-4 capitalize rounded-md cursor-pointer shadow-sm w-full ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {resumeName || t("upload_resume")}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <input
                className={`bg-white text-secondary placeholder:text-accent py-2 px-4 capitalize rounded-md ${
                  formik.touched.portfolio && formik.errors.portfolio
                    ? "border-2 border-red-600"
                    : ""
                }`}
                type="text"
                name="portfolio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.portfolio}
                placeholder={t("upload_portfolio")}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="bg-primary rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg">
              {t("submit_btn")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
