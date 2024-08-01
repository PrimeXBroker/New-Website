"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from "../../public/assets/data/nationality.json";
import { LocationContext } from "@/context/location-context";
import { useContext, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";

const questionTypes = [
  { id: 1, name: "General Inquiry", value: "general" },
  { id: 2, name: "Account Funding", value: "account_funding" },
  { id: 3, name: "Withdrawal Query", value: "withdrawal_query" },
  { id: 4, name: "Deposit Query", value: "deposit_query" }
];


const ContactForm = () => {
  const t = useTranslations("contact.contactForm");

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
          const response = await axios.post(`https://primexbroker.com/api/contact`, JSON.stringify(updatedValues));
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
    <section className="bg-accent">
      <h1 className="text-secondary text-lg md:text-2xl text-center font-semibold mb-5">
        {t("title")}
      </h1>
      <p className="text-secondary text-md md:text-lg text-center font-light max-w-xl mx-auto">
        {t("description")}
      </p>
      <div className="contact_form_wrapper container py-8">
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
                  className={`bg-white text-secondary   placeholder:text-accent py-2 px-4 rounded-[3px] w-full ${
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
          <div className="flex flex-cols-1">
            <select
              className={`bg-white text-secondary w-full placeholder:text-accent capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] ${
                formik.touched.qtype && formik.errors.qtype
                  ? "border-2 border-red-600"
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
          <div className="flex flex-col-1">
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder={t("message")}
              rows="8"
              cols="24"
              className={`w-full outline-none border-none px-4 py-2 rounded-md ${
                formik.touched.message && formik.errors.message
                  ? "border-2 border-red-600"
                  : ""
              }  `}
            />
          </div>
          <div className="text-center">
            <button className="bg-primary rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg">
            <div className="flex gap-1 items-center justify-center">{loading && <div className="spinner inline-block"></div>} {loading ? <span className="text-center">Sending...</span> : <span>Submit</span>}</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
