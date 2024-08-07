"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
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

function WebinarForm() {
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("academy.academyForm");
  const [upcoming, setUpcoming] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

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
            name: web.agenda,
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
    <section id="academy-form" className="pb-12 container bg-[#E4E5E6] ">
      <div className="shadow-xl bg-[#fff] border-accent border w-[100%] mx-auto rounded-2xl">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <PiUserSquareThin className="opacity-50" size={80} />
          <div className="mb-4 w-[80%]">
            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder={t("first_name")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${
                formik.touched.full_name && formik.errors.full_name
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-4 w-[80%]">
            <input
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder={t("last_name")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${
                formik.touched.full_name && formik.errors.full_name
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-4 w-[80%]">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={t("email")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-4 w-[80%]">
            <PhoneInput
              onChange={(value) => formik.setFieldValue("phoneNumber", value)}
              onBlur={formik.handleBlur}
              name="phoneNumber"
              value={formik.values.phoneNumber}
              defaultCountry={originCountry}
              className={`w-[100%] academy_phoneinput ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <div className="mb-10 w-[80%]">
            <select
              className={`bg-white text-gray-400 w-full placeholder:text-gray-300 outline-none border-b border-b- capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] ${
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
          <button className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] absolute bottom-[-30px] mx-auto">
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

export default WebinarForm;
