"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import nationality from "../../public/assets/data/nationality.json";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function CopyProgramForm() {
  const t = useTranslations("copyProgram.copyProgramForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://ipapi.co/json/?key=K77WYqZkYB204PVwWhbSidveUzBLTtcnvTgiE0rGtd0ww9jH6E`
        );
        if (response.data.country) {
          setCountryCode(response.data.country.toUpperCase());
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
      full_name: "",
      country: "",
      email: "",
      contact: "",
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
      country: Yup.string().required(t("country_required_error")),
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
        full_name: values.full_name,
        country: values.country,
        email: values.email,
        contact: values.contact,
      };
      try {
        const res = await axios.post(
          `http://localhost:4002/api/copy-program`,
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
        className={`bg-[#111111] border-[#1d1d1d] border-3 md:w-[74%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              {t("title")}
            </h2>
            <p className="text-xs text-[#c6c6c6]">{t("desc")}</p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("full_name")}
                <input
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  placeholder={t("full_name")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
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

export default CopyProgramForm;
