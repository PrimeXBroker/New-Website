"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import { BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegUser } from "react-icons/fa6";
import { PiUserRectangle } from "react-icons/pi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ComplaintForm = () => {
  const locale = useLocale();
  const t = useTranslations("contact.contactForm");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState(t("no_file_select"));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    setFileNames(
      selectedFiles.map((file) => file.name).join(", ") || "No file chosen"
    );
    formik.setFieldValue("files", selectedFiles);
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
      files: [],
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
        files: await Promise.all(
          values.files.map((file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result.split(",")[1]);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            });
          })
        ),
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `https://primexbroker.com/api/complaints`,
          updatedValues
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        formik.resetForm({
          values: {
            ...formik.initialValues,
            agreeToContact: false,
          },
        });
        setFiles([]);
        setFileNames(t("no_file_select"));
        onOpen();
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <p
        className={`sectionPara text-base mb-6 ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      >
        {t("suggestion_form_desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } capitalize focus:outline-none w-full text-sm border-b border-accent rounded-none ${
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
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
            <BiUser size={18} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } focus:outline-none w-full text-sm border-b border-accent ${
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
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
            <TfiEmail size={18} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-1 relative" dir="ltr">
          <PhoneInput
            international
            defaultCountry={countryCode}
            onChange={(value) => formik.setFieldValue("contact", value)}
            onBlur={formik.handleBlur}
            name="contact"
            value={formik.values.contact}
            className={`w-full text-sm border-b border-accent text-secondary ${
              formik.touched.contact && formik.errors.contact
                ? "border-b border-red-600"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } focus:outline-none w-full text-sm border-b border-accent ${
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
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
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
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } focus:outline-none w-full text-sm border-b border-accent ${
              formik.touched.date_time && formik.errors.date_time
                ? "border-b border-red-600"
                : ""
            }`}
            placeholderText={t("date_time_placeholder")}
          />
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
            <SlCalender size={18} className="text-[#7f7f7f]" />
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
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } focus:outline-none w-full text-sm border-b border-accent ${
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
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
            <FaRegUser size={18} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col border-[1px] border-accent rounded-md relative">
          <span
            className={`absolute ${
              locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
            } top-2 flex items-center text-gray-500`}
          >
            <HiBars3BottomLeft size={18} className="text-[#7f7f7f]" />
          </span>
          <textarea
            name="disputed_situation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.disputed_situation}
            placeholder={t("disputed_situation")}
            rows="8"
            cols="24"
            className={`placeholder:text-[#7f7f7f] placeholder:opacity-70 w-full outline-none px-10 py-2 rounded-md text-sm text-secondary ${
              formik.touched.disputed_situation &&
              formik.errors.disputed_situation
                ? "border-1 border-red-600"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col border-[1px] border-accent rounded-md relative">
          <span
            className={`absolute ${
              locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
            } top-2 flex items-center text-gray-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              color="#7f7f7f"
              fill="none"
            >
              <path
                d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <textarea
            name="disputed_settled"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.disputed_settled}
            placeholder={t("disputed_settled")}
            rows="8"
            cols="24"
            className={`placeholder:text-[#7f7f7f] placeholder:opacity-70 w-full outline-none px-10 py-2 rounded-md text-sm text-secondary ${
              formik.touched.disputed_settled && formik.errors.disputed_settled
                ? "border-1 border-red-600"
                : ""
            }`}
          />
        </div>
      </div>
      <div className="mt-6">
        <p
          className={`sectionPara text-sm text-[#7f7f7f] text-opacity-70 mb-5 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {t("choose_file_desc")}
        </p>
        <div className="flex items-center relative gap-3">
          <label className="flex items-center px-4 py-1 text-secondary bg-white border border-secondary rounded-full cursor-pointer hover:bg-secondary hover:text-white">
            <span>{t("choose_file")}</span>
            <input
              type="file"
              multiple
              name="files"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <span className="text-[#7f7f7f] text-opacity-70 text-sm">
            {fileNames}
          </span>
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
          className="form-checkbox rounded text-primary focus:ring-primary h-[15px] w-[15px]"
        />
        <label
          htmlFor="agreeToContact"
          className="text-[#7f7f7f] text-opacity-70 text-sm cursor-pointer"
        >
          {t("checkbox")}
        </label>
        {formik.touched.agreeToContact && formik.errors.agreeToContact ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.agreeToContact}
          </div>
        ) : null}
      </div>
      <div className="flex justify-center md:justify-end mt-6">
        <button
          onClick={() => formik.resetForm()}
          className="bg-transparent border-1 border-[#111111] hover:bg-[#111111] rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg group"
        >
          <div className="flex gap-1 items-center justify-center text-[#111111] group-hover:text-white">
            <span>{t("reset_btn")}</span>
          </div>
        </button>
        <button
          className={`bg-primary rounded-full cursor-pointer px-4 py-2 w-[150px] text-center shadow-lg ${
            locale === "ar" ? "mr-2" : "ml-2"
          }`}
        >
          <div className="flex gap-1 items-center justify-center text-white">
            {loading ? (
              <div className="spinner inline-block"></div>
            ) : (
              <span>{t("submit_btn")}</span>
            )}
          </div>
        </button>
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
    </form>
  );
};

export default ComplaintForm;
