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
import { RiAccountBoxLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMessage, AiOutlineCalendar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegUser } from "react-icons/fa6";
import { PiUserRectangle } from "react-icons/pi";

const SuggestionForm = () => {
  const locale = useLocale();
  const t = useTranslations("contact.contactForm");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      contact: "",
      account_number: "",
      date_time: null,
      contested_positions: "",
      disputed_situation: "",
      disputed_settled: "",
      file: null,
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("full_name_validation_error")
        )
        .required(t("full_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      account_number: Yup.number().required(t("account_number_required_error")),
      disputed_situation: Yup.string().required(
        t("disputed_situation_required_error")
      ),
      disputed_settled: Yup.string().required(
        t("disputed_settled_required_error")
      ),
    }),
    file: Yup.mixed().required(t("file_required_error")),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("phone_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      const updatedValues = {
        full_name: values.full_name,
        email: values.email,
        contact: values.contact,
        account_number: values.account_number,
        date_time: values.date_time,
        contested_positions: values.contested_positions,
        disputed_situation: values.disputed_situation,
        disputed_settled: values.disputed_settled,
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
        {t("suggestion_form_desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 capitalize focus:outline-none w-full text-sm border-b border-accent ${
              formik.touched.full_name && formik.errors.full_name
                ? "border-b border-red-600"
                : ""
            }`}
            type="text"
            name="full_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.full_name}
            placeholder={t("full_name")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <BiUser size={16} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 focus:outline-none w-full text-sm border-b border-accent ${
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
            <TfiEmail size={16} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-1 relative">
          <PhoneInput
            international
            defaultCountry={countryCode}
            onChange={(value) => formik.setFieldValue("contact", value)}
            onBlur={formik.handleBlur}
            name="contact"
            value={formik.values.contact}
            className={`w-full text-sm border-b border-accent ${
              formik.touched.contact && formik.errors.contact
                ? "border-b border-red-600"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 focus:outline-none w-full text-sm border-b border-accent ${
              formik.touched.account_number && formik.errors.account_number
                ? "border-b border-red-600"
                : ""
            }`}
            type="number"
            name="account_number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_number}
            placeholder={t("account_number")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <PiUserRectangle size={20} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-1 relative">
          <DatePicker
            selected={formik.values.date_time}
            onChange={(date) => formik.setFieldValue("date_time", date)}
            onBlur={formik.handleBlur}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 focus:outline-none w-full text-sm border-b border-accent ${
              formik.touched.date_time && formik.errors.date_time
                ? "border-b border-red-600"
                : ""
            }`}
            placeholderText={t("date_time_placeholder")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <SlCalender size={16} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
          {formik.touched.date_time && formik.errors.date_time ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.date_time}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder-[#7f7f7f] py-2 pl-10 pr-4 focus:outline-none w-full text-sm border-b border-accent ${
              formik.touched.contested_positions &&
              formik.errors.contested_positions
                ? "border-b border-red-600"
                : ""
            }`}
            type="number"
            name="contested_positions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contested_positions}
            placeholder={t("contested_positions")}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaRegUser size={16} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col border-[1px] border-accent rounded-md relative">
          <span className="absolute left-0 top-2 flex items-center pl-3 text-gray-500">
            <AiOutlineMessage size={20} className="text-[#7f7f7f]" />
          </span>
          <textarea
            name="disputed_situation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.disputed_situation}
            placeholder={t("disputed_situation")}
            rows="8"
            cols="24"
            className={`placeholder-[#7f7f7f] w-full outline-none border-none px-10 py-2 rounded-md text-sm ${
              formik.touched.disputed_situation &&
              formik.errors.disputed_situation
                ? "border-2 border-red-600"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col border-[1px] border-accent rounded-md relative">
          <span className="absolute left-0 top-2 flex items-center pl-3 text-gray-500">
            <AiOutlineMessage size={20} className="text-[#7f7f7f]" />
          </span>
          <textarea
            name="disputed_settled"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.disputed_settled}
            placeholder={t("disputed_settled")}
            rows="8"
            cols="24"
            className={`placeholder-[#7f7f7f] w-full outline-none border-none px-10 py-2 rounded-md text-sm ${
              formik.touched.disputed_settled && formik.errors.disputed_settled
                ? "border-2 border-red-600"
                : ""
            }`}
          />
        </div>
      </div>
      <div className="mt-6">
        <p
          className={`sectionPara text-sm text-[#7f7f7f] mb-5 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {t("choose_file_desc")}
        </p>
        <div className="flex items-center relative gap-3">
          <label className="flex items-center px-4 py-1 text-secondary bg-white border border-secondary rounded-full cursor-pointer hover:bg-secondary hover:text-white">
            <span>Choose File</span>
            <input
              type="file"
              className="hidden"
              name="file"
              onChange={(event) => {
                handleFileChange(event);
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
          </label>
          <span className="text-[#7f7f7f]">{fileName}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <input
          type="checkbox"
          name="agreeToContact"
          id="agreeToContact"
          checked={formik.values.agreeToContact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-checkbox rounded text-primary focus:ring-primary h-5 w-5"
          color="primary"
        />
        <label
          htmlFor="agreeToContact"
          className="text-[#7f7f7f] text-sm cursor-pointer"
        >
          {t("checkbox")}
        </label>
        {formik.touched.agreeToContact && formik.errors.agreeToContact ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.agreeToContact}
          </div>
        ) : null}
      </div>
      <div className="flex text-center md:text-right mt-6">
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

export default SuggestionForm;
