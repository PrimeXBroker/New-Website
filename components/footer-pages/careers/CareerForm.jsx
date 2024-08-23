"use client";

import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from "@/public/assets/data/nationality.json";
import { LocationContext } from "@/context/location-context";
import { useTranslations, useLocale } from "next-intl";
import axios from "axios";

const CareerForm = () => {
  const locale = useLocale();
  const t = useTranslations("careers.careersForm");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [portfolioName, setPortfolioName] = useState("");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
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

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      country: "",
      current_salary: "",
      expected_salary: "",
      years_of_experience: "",
      current_designation: "",
      resume: null,
      portfolio: "",
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
      current_salary: Yup.number().required(t("portfolio_required_error")),
      expected_salary: Yup.number().required(t("portfolio_required_error")),
      years_of_experience: Yup.number().required(t("portfolio_required_error")),
      current_designation: Yup.string().required(t("country_required_error")),
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
        current_salary: values.current_salary,
        expected_salary: values.expected_salary,
        years_of_experience: values.years_of_experience,
        current_designation: values.current_designation,
        resume: values.resume,
        portfolio: values.portfolio,
      };
      try {
        setLoading(true);
        const res = await axios.post(
          `https://primexbroker.com/api/add/candidate`,
          updatedValues
        );
        if (res.data.success) {
          setFormSubmitted(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        formik.resetForm();
        setResumeName("");
      }
    },
  });

  const handleFileChange = async (file) => {
    if (file) {
      setResumeName(file.name);
      const _id = "1"; // Assuming this is a placeholder or test value
      const formData = new FormData();
      formData.append("action", "attachments");
      formData.append("_id", _id);
      formData.append("files[]", file);

      try {
        const imageSendRes = await axios.post(
          `https://primexbroker.com/api/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        formik.setFieldValue("resume", imageSendRes.data.result.file_path);
      } catch (err) {
        console.log(err.message);
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
        {formSubmitted ? (
          <div className="text-center text-lg">{t("success_message")}</div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="flex flex-col">
                <input
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-md ${
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
                  className={`bg-white text-[#A0A7B2]  placeholder:text-[#A0A7B2] capitalize py-2 px-4 rounded-md ${
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
                    className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-[3px] w-full ${
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
            <div
              className={`flex items-center gap-2 bg-white px-5 placeholder:text-[#A0A7B2] ${
                formik.touched.contact && formik.errors.contact
                  ? "border-2 border-red-600"
                  : ""
              }`}
            >
              <PhoneInput
                international
                defaultCountry={countryCode}
                onChange={(value) => formik.setFieldValue("contact", value)}
                onBlur={formik.handleBlur}
                name="contact"
                value={formik.values.contact}
                className="w-[100%] custom-placeholder"
                placeholder="Phone Number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="flex flex-col">
                <input
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-md ${
                    formik.touched.current_salary &&
                    formik.errors.current_salary
                      ? "border-2 border-red-600"
                      : ""
                  }`}
                  type="number"
                  name="current_salary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.current_salary}
                  placeholder={"Current Salary in USD*"}
                />
              </div>
              <div className="flex flex-col">
                <input
                  className={`bg-white text-[#A0A7B2]  placeholder:text-[#A0A7B2] capitalize py-2 px-4 rounded-md ${
                    formik.touched.expected_salary &&
                    formik.errors.expected_salary
                      ? "border-2 border-red-600"
                      : ""
                  } `}
                  type="number"
                  name="expected_salary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.expected_salary}
                  placeholder={"Expected Salary in USD*"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex flex-col">
                <input
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-md ${
                    formik.touched.current_designation &&
                    formik.errors.current_designation
                      ? "border-2 border-red-600"
                      : ""
                  }`}
                  type="text"
                  name="current_designation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.current_designation}
                  placeholder={"Current Designation*"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex flex-col">
                <input
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-md ${
                    formik.touched.years_of_experience &&
                    formik.errors.years_of_experience
                      ? "border-2 border-red-600"
                      : ""
                  }`}
                  type="number"
                  name="years_of_experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.years_of_experience}
                  placeholder={"Years Of Experience*"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 ">
              <div
                className={`flex flex-col pr-5 bg-white ${
                  formik.touched.country && formik.errors.country
                    ? "border-2 border-red-600"
                    : ""
                } `}
              >
                <select
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] capitalize  py-2 px-4  rounded-[5px]`}
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
                <div
                  className={`flex items-center gap-2   ${
                    formik.touched.resume && formik.errors.resume
                      ? "border-2 border-red-600"
                      : ""
                  } `}
                >
                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    className="hiddenInput"
                    onChange={(event) =>
                      handleFileChange(event.target.files[0])
                    }
                    style={{ display: "none" }}
                    accept=".pdf"
                  />
                  <button
                    type="button"
                    onClick={() => handleButtonClick("resume")}
                    className={`bg-white text-[#A0A7B2] py-2 px-4 capitalize rounded-md cursor-pointer shadow-sm w-full ${
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
                  className={`bg-white text-[#A0A7B2] placeholder:text-[#A0A7B2] py-2 px-4 capitalize rounded-md ${
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
                <div className="flex gap-1 items-center justify-center">
                  {loading && <div className="spinner inline-block"></div>}{" "}
                  {loading ? (
                    <span className="text-center">Sending...</span>
                  ) : (
                    <span>{t("submit_btn")}</span>
                  )}
                </div>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CareerForm;
