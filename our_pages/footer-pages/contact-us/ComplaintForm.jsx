"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import nationality from "../../../public/assets/data/nationality.json";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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

function ComplaintForm() {
  const dispatch = useDispatch();
  const t = useTranslations("contactUs.suggestionForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const countryCode = useSelector((state) => state.location.location);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    formik.setFieldValue("qtype", option.name);
    setIsOpenDropdown(false);
  };

  const questionTypes = [
    { id: 1, name: t("general_inquiry"), value: "general" },
    { id: 2, name: t("account_funding"), value: "account_funding" },
    { id: 3, name: t("withdrawal_query"), value: "withdrawal_query" },
    { id: 3, name: t("deposit_query"), value: "deposit_query" },
    { id: 4, name: t("partnerships_query"), value: "partnerships_query" },
    { id: 5, name: t("platform_query"), value: "platform_query" },
    { id: 6, name: t("trading_query"), value: "trading_query" },
    { id: 7, name: t("liquidity_query"), value: "liquidity_query" },
    { id: 8, name: t("competition_query"), value: "competition_query" },
  ];

  useEffect(() => {
    const fetchLocation = async () => {
      if (countryCode) return;
      try {
        const response = await axios.get(`https://ipapi.co/country/`);
        console.log(response, "response");

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
      message: Yup.string().required(t("question_required_error")),
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
        name: `${values.first_name} ${values.last_name}`,
        email: values.email,
        contact: values.contact,
        country: values.country,
        qtype: values.qtype,
        message: values.message,
      };
      try {
        const res = await axios.post(
          `https://primexbroker.com/api/complaints`,
          updatedValues
        );
        if (res.data.success) {
          formik.resetForm();
          setSelectedOption("");
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
      <div className={``}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full my-4">
            <h2 className="text-[24px] font-semibold text-[#ffffff] mb-1">
              {t("title")}
            </h2>
            <p className="text-xs text-[#c6c6c6]">{t("desc")}</p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("first_name_label")}
                <input
                  type="text"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  placeholder={t("first_name_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.first_name && formik.errors.first_name
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-[#c6c6c6]">
                {t("last_name_label")}
                <input
                  type="text"
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder={t("last_name_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.last_name && formik.errors.last_name
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("email_label")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border-b border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-[#c6c6c6]">
                {t("contact_label")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("contact", value)}
                  onBlur={formik.handleBlur}
                  name="contact"
                  value={formik.values.contact}
                  className={`ib-phone-input appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.contact && formik.errors.contact
                      ? "border-b border-red-600"
                      : ""
                  }`}
                  placeholder={t("number")}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("country_label")}
                <select
                  className={`capitalize py-[16px] px-[12px] w-full text-base focus:outline-none border-2 border-[#222222] bg-[#1d1d1d]  text-[#c6c6c6] ${
                    formik.touched.country && formik.errors.country
                      ? "border border-red-600"
                      : ""
                  }`}
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="text-[#c6c6c6]">
                    {t("country_placeholder")}
                  </option>
                  {nationality.map((country, index) => {
                    return (
                      <option
                        key={index}
                        value={country.en_short_name}
                        className="text-black bg-white"
                      >
                        {country.en_short_name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("query_category_label")}
                <div
                  className={`bg-[#1d1d1d] text-[#c6c6c6] border-2 border-[#222222] rounded-[4px] py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer text-base ${
                    formik.touched.qtype && formik.errors.qtype
                      ? "border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                  <span>
                    {selectedOption || t("query_category_placeholder")}
                  </span>
                  {isOpenDropdown ? (
                    <BiChevronUp size={18} color="#ffffff" />
                  ) : (
                    <BiChevronDown size={18} color="#ffffff" />
                  )}
                </div>
                {isOpenDropdown && (
                  <ul className="absolute left-0 right-0 mt-2 bg-[#1d1d1d] border-2 border-[#222222] rounded-[4px] z-10 text-base">
                    {questionTypes.map((option) => (
                      <li
                        key={option.id}
                        className="py-[16px] px-[12px] cursor-pointer hover:bg-[#ffffff] hover:text-[#111111] text-[#c6c6c6] text-base"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            </div>
          </div>
          <div className="w-full">
            <label className="text-xs text-[#c6c6c6]">
              {t("question_label")}
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows="4"
                placeholder={t("question_placeholder")}
                className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                  formik.touched.message && formik.errors.message
                    ? "border-b border-red-600"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-[#c6c6c6] mb-1">{t("condition")}</p>

            <button
              disabled={loading}
              className="font-semibold py-[16px] px-[10px] text-[#111111] w-full custom-button"
              style={{ borderRadius: "5px" }}
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
                {/* <p>Thank you for choosing PrimeX Capital</p> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close_btn")}
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

export default ComplaintForm;
