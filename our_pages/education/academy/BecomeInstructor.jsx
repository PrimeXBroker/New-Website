"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import { LocationContext } from "@/context/location-context";
import { Field } from "formik";
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

function BecomeInstructor() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("academy.academyForm");
  const locale = useLocale();

  const workedBefore = [
    { label: t("radio_option_1"), value: "Yes" },
    { label: t("radio_option_2"), value: "No" },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      number: "",
      experience: "",
      specialty: "",
      advantages: "",
      workedWithCompanies: "",
      doneWebinar: "",
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
      experience: Yup.number().required(t("experience_year_error")),
      specialty: Yup.string().required(t("speciality_error")),
      advantages: Yup.string().required(t("advantages_error")),
      workedWithCompanies: Yup.string().required(
        t("workedWithCompanies_error")
      ),
      doneWebinar: Yup.string().required(t("doneWebinar_error")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.number) {
        errors.number = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        console.log(values, "values");
        const res = await axios.post(
          "https://primexbroker.com/api/instructor",
          values
        );
        console.log(res);
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
    <section id="academy-form" className="container px-0">
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
              onChange={(value) => formik.setFieldValue("number", value)}
              onBlur={formik.handleBlur}
              name="number"
              value={formik.values.number}
              defaultCountry={originCountry}
              className={`w-[100%] academy_phoneinput text-sm px-3 ${
                formik.touched.number && formik.errors.number
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="mb-1 w-[80%]">
            <input
              type="number"
              name="experience"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.experience}
              placeholder={t("experience_year")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.experience && formik.errors.experience
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="mb-1 w-[80%]">
            <input
              type="text"
              name="specialty"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialty}
              placeholder={t("speciality")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.specialty && formik.errors.specialty
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="mb-1 w-[80%]">
            <textarea
              name="advantages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.advantages}
              rows="4"
              placeholder={t("advantages")}
              className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none text-sm ${
                formik.touched.advantages && formik.errors.advantages
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>

          <div className="w-[80%] appearance-none border-b rounded py-2 px-3 text-[#9CA3AF]">
            <label
              className={`block mb-2 text-sm ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("workedWithCompanies")}
            </label>
            {workedBefore.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`workedWithCompanies${option.value}`}
                  name="workedWithCompanies"
                  value={option.value}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.workedWithCompanies === option.value}
                  className={`${locale === "ar" ? "ml-2" : "mr-2"} text-sm`}
                />
                <label
                  htmlFor={`workedWithCompanies${option.value}`}
                  className="text-sm"
                >
                  {option.label}
                </label>
              </div>
            ))}
            {formik.touched.years_of_experience &&
            formik.errors.workedWithCompanies ? (
              <div className="text-red-600">
                {formik.errors.workedWithCompanies}
              </div>
            ) : null}
          </div>

          <div className="mb-10 w-[80%] appearance-none border-b rounded py-2 px-3 text-[#9CA3AF]">
            <label
              className={`block mb-2 text-sm ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("doneWebinar")}
            </label>
            {workedBefore.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`doneWebinar${option.value}`}
                  name="doneWebinar"
                  value={option.value}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.doneWebinar === option.value}
                  className={`${locale === "ar" ? "ml-2" : "mr-2"} text-sm`}
                />
                <label htmlFor={`webinar${option.value}`} className="text-sm">
                  {option.label}
                </label>
              </div>
            ))}
            {formik.touched.doneWebinar && formik.errors.doneWebinar ? (
              <div className="text-red-600">{formik.errors.doneWebinar}</div>
            ) : null}
          </div>

          <button className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] absolute bottom-[-20px] mx-auto">
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
                <p>{t("instructor_success_desc")}</p>
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

export default BecomeInstructor;
