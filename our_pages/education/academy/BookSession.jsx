"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { LocationContext } from "@/context/location-context";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function BookSession() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("academy.academyForm");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
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

  const webinarTypes = [
    {
      id: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      name: "09:00 AM - 12:00 AM ( GST + 3 Time )",
      value: "12:00 PM - 03:00 PM ( GST + 3 Time )",
    },
    {
      id: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      name: "12:00 PM - 03:00 PM ( GST + 3 Time )",
      value: "12:00 PM - 03:00 PM ( GST + 3 Time )",
    },
    {
      id: "03:00 PM - 05:00 PM ( GST + 3 Time )",
      name: "03:00 PM - 05:00 PM ( GST + 3 Time )",
      value: "03:00 PM - 05:00 PM ( GST + 3 Time )",
    },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      accountId: "",
      time: "",
      appointmentFor: "6638c57d544c48054fa68135",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("full_name_validation_error")
        )
        .required(t("full_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      time: Yup.string().required(t("availability_error")),
      accountId: Yup.number().required(t("account_number_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // setLoading(true);
        // const response = await axios.post(
        //     `https://primexbroker.com/api/contact`,
        //     JSON.stringify(values)
        // );
        setLoading(true);

        const res = await axios.post(
          "https://primexbroker.com/api/book-schedule",
          values
        );
        if (res.data.success) {
          formik.resetForm();
          setLoading(false);
          onOpen();
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <section className="container px-0">
      <div
        className={`shadow-xl bg-[#fff] border-accent border sm:w-[74%] md:w-[64%] lg:w-[94%] ${
          locale === "ar"
            ? "mr-auto my-0 ml-auto lg:mr-auto lg:my-0 lg:ml-0"
            : "ml-auto my-0 mr-auto lg:ml-auto lg:my-0 lg:mr-0"
        } rounded-3xl`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <PiUserSquareThin className="opacity-50 mt-6" size={80} />
          <div className="mb-1 w-[80%]">
            <input
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              placeholder={t("full_name")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[80%]">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={t("email")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.email && formik.errors.email
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[80%]">
            <PhoneInput
              international
              defaultCountry={countryCode}
              onChange={(value) => formik.setFieldValue("phoneNumber", value)}
              onBlur={formik.handleBlur}
              name="phoneNumber"
              value={formik.values.phoneNumber}
              className={`w-[100%] academy_phoneinput px-1 ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="mb-1 w-[80%]">
            <input
              type="text"
              name="accountId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accountId}
              placeholder={t("account_number")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.accountId && formik.errors.accountId
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="mb-10 w-[80%]">
            <select
              className={`bg-white text-gray-400 w-full placeholder:text-gray-300 outline-none border-b border-b- capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] text-sm ${
                formik.touched.time && formik.errors.time
                  ? "border-b border-red-600"
                  : ""
              }`}
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">{t("availability")}</option>
              {webinarTypes.map((query, el) => {
                return (
                  <option key={query.id} value={query.value}>
                    {query.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] absolute bottom-[-20px] ml-auto my-0 mr-0"
            disabled={loading}
          >
            <div className="flex gap-3 items-center text-center justify-center">
              {loading && <div className="spinner inline-block"></div>}
              {t("form_btn")}
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
                <p>{t("session_success_desc1")}</p>
                <p>{t("session_success_desc2")}</p>
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

export default BookSession;
