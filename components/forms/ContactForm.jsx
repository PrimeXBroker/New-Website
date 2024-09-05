"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from "../../public/assets/data/nationality.json";
import { LocationContext } from "@/context/location-context";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import { BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { IoIosGlobe } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";

const questionTypes = [
  { id: 1, name: "General Inquiry", value: "general" },
  { id: 2, name: "Account Funding", value: "account_funding" },
  { id: 3, name: "Withdrawal Query", value: "withdrawal_query" },
  { id: 4, name: "Deposit Query", value: "deposit_query" },
];

const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations("contact.contactForm");
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

  const questionTypes = [
    { id: 1, name: t("general_inquiry"), value: "general" },
    { id: 2, name: t("account_funding"), value: "account_funding" },
    { id: 3, name: t("withdrawal_query"), value: "withdrawal_query" },
    { id: 3, name: t("deposit_query"), value: "deposit_query" },
  ];

  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      country: "",
      qtype: "",
      message: "",
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
      qtype: Yup.string().required(t("query_required_error")),
      message: Yup.string().required(t("message_required_error")),
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
        qtype: values.qtype,
        message: values.message,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `https://primexbroker.com/api/contact`,
          updatedValues
        );
        console.log("Response", response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        formik.resetForm();
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <p
        className={`sectionPara text-sm mb-6 ${
          locale === "ar"
            ? "text-right md:pl-[100px]"
            : "text-left md:pr-[100px]"
        }`}
      >
        {t("complaints_form_desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 capitalize w-full text-sm focus:outline-none border-b border-accent ${
              formik.touched.first_name && formik.errors.first_name
                ? "border-b border-red-600"
                : ""
            }`}
            type="text"
            name="first_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
            placeholder={t("first_name")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <BiUser size={20} className="text-accent" />
            <i className="fas fa-user"></i>
          </span>
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] capitalize py-2 pl-10 pr-4 w-full text-sm focus:outline-none border-b border-accent ${
              formik.touched.last_name && formik.errors.last_name
                ? "border-b border-red-600"
                : ""
            } `}
            type="text"
            name="last_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
            placeholder={t("last_name")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <BiUser size={20} className="text-accent" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 w-full text-sm focus:outline-none border-b border-accent ${
              formik.touched.email && formik.errors.email
                ? "border-b border-red-600"
                : ""
            }`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder={t("email")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <TfiEmail size={20} className="text-accent" />
            <i className="fas fa-user"></i>
          </span>
        </div>
        <div className="flex flex-col p-1 relative">
          <PhoneInput
            international
            defaultCountry={countryCode}
            onChange={(value) => formik.setFieldValue("phoneNumber", value)}
            onBlur={formik.handleBlur}
            name="phoneNumber"
            value={formik.values.phoneNumber}
            className={`w-full text-sm border-b border-accent ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "border-b border-red-600"
                : ""
            }`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <CiGlobe size={20} className="text-accent" />
              <i className="fas fa-globe"></i>
            </span>
            <select
              className={`bg-white text-accent placeholder-[#7f7f7f] capitalize py-2 pl-10 pr-4 w-full text-sm focus:outline-none border-b border-accent ${
                formik.touched.country && formik.errors.country
                  ? "border-b border-red-600"
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
        <div className="flex flex-col p-1 relative">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <CiGlobe size={20} className="text-accent" />
              <i className="fas fa-globe"></i>
            </span>
            <select
              className={`bg-white text-[#7f7f7f] placeholder-[#7f7f7f] capitalize py-2 pl-10 pr-4 w-full text-sm focus:outline-none border-b border-accent ${
                formik.touched.qtype && formik.errors.qtype
                  ? "border-b border-red-600"
                  : ""
              }`}
              name="qtype"
              value={formik.values.qtype}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">{t("query_category")}</option>
              {questionTypes.map((query, el) => {
                return (
                  <option key={query.id} value={query.value}>
                    {query.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-[1px] border-accent rounded-md relative">
        <span className="absolute left-0 top-2 flex items-center pl-3 text-gray-500">
          <AiOutlineMessage size={20} className="text-accent" />
        </span>
        <textarea
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder={t("message")}
          rows="8"
          cols="24"
          className={`placeholder-[#7f7f7f] w-full outline-none border-none px-10 py-2 rounded-md text-sm ${
            formik.touched.message && formik.errors.message
              ? "border-2 border-red-600"
              : ""
          }`}
        />
      </div>
      <div className="text-right mt-6">
        <button className="bg-transparent border-1 border-secondary hover:bg-secondary rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg group">
          <div className="flex gap-1 items-center justify-center text-secondary group-hover:text-white">
            {loading && <div className="spinner inline-block"></div>}{" "}
            {loading ? (
              <span className="text-center">Sending...</span>
            ) : (
              <span>{t("reset_btn")}</span>
            )}
          </div>
        </button>
        <button className="bg-primary rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg ml-2">
          <div className="flex gap-1 items-center justify-center text-white">
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
  );
};

export default ContactForm;
