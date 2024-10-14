"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useContext, useState } from "react";
import { LocationContext } from "@/context/location-context";
import axios from "axios";
import toast from "react-hot-toast";
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

function CompetitionForm() {
  const t = useTranslations("demoAccount.participateForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const locale = useLocale();

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
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("phone_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const updatedValues = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact: values.contact,
        country: values.country,
      };
      try {
        const res = await axios.post(updatedValues);
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
        className={`shadow-xl bg-secondary border-accent border w-full sm:w-[455px] lg:w-[445px] rounded-3xl mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <PiUserSquareThin className="mt-6" size={80} fill="#fff" />
          <div className="mb-1 w-[90%] md:w-[80%]">
            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder={t("first_name")}
              className={`appearance-none border-b w-full py-2 px-3 text-accent placeholder:text-[#e5e7eb] focus:outline-none text-sm bg-secondary ${
                formik.touched.first_name && formik.errors.first_name
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[90%] md:w-[80%]">
            <input
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder={t("last_name")}
              className={`appearance-none border-b w-full py-2 px-3 text-accent placeholder:text-[#e5e7eb] focus:outline-none text-sm bg-secondary  ${
                formik.touched.last_name && formik.errors.last_name
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[90%] md:w-[80%]">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={t("email")}
              className={`appearance-none border-b w-full py-2 px-3 text-accent placeholder:text-[#e5e7eb] focus:outline-none text-sm bg-secondary ${
                formik.touched.email && formik.errors.email
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="w-[90%] md:w-[80%]">
            <PhoneInput
              international
              defaultCountry={countryCode}
              onChange={(value) => formik.setFieldValue("contact", value)}
              onBlur={formik.handleBlur}
              name="contact"
              value={formik.values.contact}
              className={`w-[100%] competition-phone academy_phoneinput text-sm px-1 bg-transparent  ${
                formik.touched.contact && formik.errors.contact
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[90%] md:w-[80%]">
            <div className="flex flex-col p-1 relative">
              <div className="relative">
                <select
                  className={`bg-transparent capitalize py-2 px-3 w-full text-sm focus:outline-none border-b border-accent text-white ${
                    formik.touched.country && formik.errors.country
                      ? "border-b border-red-600"
                      : ""
                  }`}
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="text-white">
                    {t("country")}
                  </option>
                  {nationality.map((country, index) => {
                    return (
                      <option
                        key={index}
                        value={country.en_short_name}
                        className="text-black"
                      >
                        {country.en_short_name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <button className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] mx-auto mt-5 mb-8">
            <div className="flex gap-3 items-center justify-center">
              {loading && <div className="spinner inline-block "></div>}
              {t("submit_btn")}
            </div>
          </button>
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

export default CompetitionForm;
