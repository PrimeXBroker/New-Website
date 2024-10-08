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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function WeeklyWebinarForm() {
  //   const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("academy.academyForm");
  const [upcoming, setUpcoming] = useState([]);
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

  const webinarTypes = [
    { id: 1, name: t("drop_field_1"), value: "fundamental" },
    { id: 2, name: t("drop_field_2"), value: "Technical" },
  ];

  console.log(upcoming, "upcoming");

  const fetchUpcomingWebinars = async () => {
    const res = await axios.get(
      "https://primexbroker.com/api/upcoming-webinars"
    );
    if (res.data.success) {
      setUpcoming(
        res.data.data.map((web, i) => {
          return {
            id: web._id,
            name: locale === "ar" ? web.agendaAr : web.agenda,
            value: web.id,
          };
        })
      );
    }
  };

  useEffect(() => {
    fetchUpcomingWebinars();
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      webinarId: "",
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
      webinarId: Yup.string().required(t("webinar_required_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // setLoading(true);
        Object.assign(values, {
          language: locale,
          country: originCountry,
          source: "website academy",
        });

        const res = await axios.post(
          "https://primexbroker.com/api/zoom/register/participant",
          values
        );
        if (res.data.success) {
          formik.resetForm();
          setLoading(false);
          onOpen();
        } else {
          setLoading(false);
        }
        // console.log("Response", response);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });
  return (
    <section className="container px-0">
      <div
        className={`shadow-xl bg-[#fff] border-accent border sm:w-[74%] md:w-[64%] lg:w-[94%] rounded-3xl ${
          locale === "ar"
            ? "mr-auto my-0 ml-auto lg:mr-auto lg:my-0 lg:ml-0"
            : "ml-auto my-0 mr-auto lg:ml-auto lg:my-0 lg:mr-0"
        }`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <PiUserSquareThin className="opacity-50 mt-6" size={80} />
          <div className="mb-1 w-[80%]">
            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder={t("first_name")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.full_name && formik.errors.full_name
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-1 w-[80%]">
            <input
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder={t("last_name")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.full_name && formik.errors.full_name
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
              className={`w-[100%] academy_phoneinput text-sm px-1 ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-10 w-[80%]">
            <select
              className={`bg-white text-gray-400 w-full text-sm placeholder:text-gray-300 outline-none border-b border-b- capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] ${
                formik.touched.webinarId && formik.errors.webinarId
                  ? "border-b border-red-600"
                  : ""
              }`}
              name="webinarId"
              value={formik.values.webinarId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">{t("category")}</option>
              {upcoming?.map((query, el) => {
                return (
                  <option key={query.id} value={query.value}>
                    {query.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] absolute bottom-[-20px] mx-auto">
            <div className="flex gap-3 items-center justify-center">
              {loading && <div className="spinner inline-block "></div>}
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
                <p>{t("webinar_success_desc")}</p>
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

export default WeeklyWebinarForm;
