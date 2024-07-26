"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from '../../public/assets/data/nationality.json';
import { LocationContext } from "@/context/location-context";
import { useContext } from "react";


const questionTypes = [
  { id: 1, name: "General Inquiry", value: "general" },
  { id: 2, name: "Account Funding", value: "account_funding" },
  { id: 3, name: "Withdrawal Query", value: "withdrawal_query" },
  { id: 3, name: "Deposit Query", value: "deposit_query" }
];


const ContactForm = () => {
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country: "",
      question_type: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "first name can only contain letters."
        )
        .required("first name is required!"),
      last_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "last name can only contain letters."
        )
        .required("last name is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required!"),
      country: Yup.string().required("country is required!"),
      question_type: Yup.string().required("question type is required!"),
      message: Yup.string().required("message is required!"),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = "phone is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <section className="bg-accent">
      <h1 className="text-secondary text-lg md:text-2xl text-center font-semibold mb-5">
        Send Us A Message
      </h1>
      <p className="text-secondary text-md md:text-lg text-center font-light max-w-xl mx-auto">
        You may also leave your contact information here, and a Primex
        representative will contact you within 1 working day
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
                placeholder={"first name"}
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
                placeholder="last name"
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
                  placeholder={"email"}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PhoneInput
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry={originCountry}
              className="w-[100%]"
            />
          </div>
          <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <select
                    className={`bg-white text-secondary placeholder:text-accent capitalize  py-2 px-4 rounded-[3  px] ${formik.touched.country && formik.errors.country
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">{"Select your Country"}</option>
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
                    className={`bg-white text-secondary w-full placeholder:text-accent capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[3px] ${formik.touched.platform && formik.errors.platform
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="question_type"
                    value={formik.values.platform}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">{"Select Query Category"}</option>
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
            <textarea placeholder="Message" rows='8' cols='24' className="w-full outline-none border-none px-4 py-2 rounded-md"/>          
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
