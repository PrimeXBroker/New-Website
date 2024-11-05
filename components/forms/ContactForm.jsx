"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import nationality from "../../public/assets/data/nationality.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import { BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { BiCategoryAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
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

const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations("contact.contactForm");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const countryCode = useSelector((state) => state.location.location);

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

  const questionTypes = [
    { id: 1, name: t("general_inquiry"), value: "general" },
    { id: 2, name: t("account_funding"), value: "account_funding" },
    { id: 3, name: t("withdrawal_query"), value: "withdrawal_query" },
    { id: 3, name: t("deposit_query"), value: "deposit_query" },
  ];

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
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        formik.resetForm();
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
        {t("complaints_form_desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } capitalize w-full text-sm focus:outline-none border-b border-accent ${
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
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 capitalize py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } w-full text-sm focus:outline-none border-b border-accent ${
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
          <span
            className={`absolute ${
              locale === "ar" ? "right-3" : "left-3"
            } top-1/2 transform -translate-y-1/2 text-gray-500`}
          >
            <BiUser size={18} className="text-[#7f7f7f]" />
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <input
            className={`bg-white text-secondary placeholder:text-[#7f7f7f] placeholder:opacity-70 py-2 ${
              locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
            } w-full text-sm focus:outline-none border-b border-accent ${
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
        <div className="flex flex-col p-1 relative" dir="ltr">
          <PhoneInput
            international
            defaultCountry={countryCode}
            onChange={(value) => formik.setFieldValue("contact", value)}
            onBlur={formik.handleBlur}
            name="contact"
            value={formik.values.contact}
            className={`w-full text-sm text-secondary border-b border-accent ${
              formik.touched.contact && formik.errors.contact
                ? "border-b border-red-600"
                : ""
            }`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="flex flex-col p-1 relative">
          <div className="relative">
            <span
              className={`absolute inset-y-0 ${
                locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
              } flex items-center text-gray-500`}
            >
              <TfiWorld size={18} className="text-[#7f7f7f]" />
              <i className="fas fa-globe"></i>
            </span>
            <select
              className={`bg-white  ${
                formik.values.country
                  ? "text-secondary"
                  : "text-[#7f7f7f] text-opacity-70"
              } capitalize py-2 ${
                locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
              } w-full text-sm focus:outline-none border-b border-accent ${
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
            <span
              className={`absolute inset-y-0 ${
                locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
              } flex items-center text-gray-500`}
            >
              <BiCategoryAlt size={18} className="text-[#7f7f7f]" />
              <i className="fas fa-globe"></i>
            </span>
            <select
              className={`bg-white ${
                formik.values.qtype
                  ? "text-secondary"
                  : "text-[#7f7f7f] text-opacity-70"
              } capitalize py-2 ${
                locale === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
              } w-full text-sm focus:outline-none border-b border-accent ${
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
        <span
          className={`absolute ${
            locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
          } top-2 flex items-center text-gray-500`}
        >
          <FiMessageSquare size={18} className="text-[#7f7f7f]" />
        </span>
        <textarea
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder={t("message")}
          rows="8"
          cols="24"
          className={`placeholder:text-[#7f7f7f] placeholder:opacity-70 w-full outline-none px-10 py-2 rounded-md text-sm ${
            formik.touched.message && formik.errors.message
              ? "border-1 border-red-600"
              : ""
          }`}
        />
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
          type="submit"
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

export default ContactForm;
