"use client";
import React, { useState } from "react";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations, useLocale } from "next-intl";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { parsePhoneNumber } from "libphonenumber-js";

const WeeklyWebinars = () => {
  const t = useTranslations("webinar.weeklyWebinars");
  const locale = useLocale();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
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
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = t("phone_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      const phoneNumber = parsePhoneNumber(values.contact);
      const countryName = phoneNumber?.country;
      const updatedValues = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact: values.contact,
        country: countryName,
        language: locale,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:4002/api/register/webinars`,
          updatedValues
        );
        if (response.data.success) {
          setModalMessage(
            "Thank you for registering for our webinar. We have successfully received your information."
          );
        }
      } catch (error) {
        setModalMessage(
          "An error occurred while submitting your request. Please try again later."
        );
        console.log(error);
      } finally {
        setLoading(false);
        formik.resetForm();
        onOpen();
      }
    },
  });
  const getInputBorderClass = (field) => {
    return formik.touched[field] && formik.errors[field]
      ? "border-red-500"
      : "";
  };
  return (
    <section className="py-12 container rounded-t-[7em] flex bg-accent my-12 shadow-xl">
      <div className="w-full flex flex-col md:flex-row ">
        <div className="flex flex-col md:w-[50%] items-center px-5 md:px-0 md:pl-[110px] md:pt-12">
          <div className="flex flex-row justify-center items-center gap-6">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/mic.webp"
              width="120"
              height="120"
              alt="mic Image"
              priority={false}
              className="w-[30%]"
            />
            <h1
              className="text-secondary md:text-[2.5rem] text-lg font-semibold"
              style={{ lineHeight: "45px" }}
            >
              {t("title1_1")} <br className="hidden md:block" />
              {t("title1_2")}
            </h1>
          </div>
          <p className="text-center font-light pt-12">
            {t("desc1_1")}
            <strong> {t("desc1_2")} </strong>
            {t("desc1_3")}
          </p>
        </div>

        <div className="md:w-[50%] flex flex-col pt-5 md:pt-16">
          <h1 className="text-secondary text-lg md:text-2xl text-center font-semibold pb-5">
            Sign Up Now!
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-[80%] md:w-[65%] mx-auto gap-1"
          >
            <Input
              startContent={<CiUser size={20} />}
              variant="underlined"
              label={
                <span
                  style={{
                    color:
                      formik.touched.first_name && formik.errors.first_name
                        ? "red"
                        : "inherit",
                  }}
                >
                  {formik.touched.first_name && formik.errors.first_name
                    ? formik.errors.first_name
                    : "First Name"}
                </span>
              }
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              className={getInputBorderClass("first_name")}
              status={
                formik.touched.first_name && formik.errors.first_name
                  ? "error"
                  : ""
              }
            />
            <Input
              startContent={<CiUser size={20} />}
              variant="underlined"
              label={
                <span
                  style={{
                    color:
                      formik.touched.last_name && formik.errors.last_name
                        ? "red"
                        : "inherit",
                  }}
                >
                  {formik.touched.last_name && formik.errors.last_name
                    ? formik.errors.last_name
                    : "Last Name"}
                </span>
              }
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              className={getInputBorderClass("last_name")}
              status={
                formik.touched.last_name && formik.errors.last_name
                  ? "error"
                  : ""
              }
            />
            <Input
              startContent={<AiOutlineMail size={20} />}
              variant="underlined"
              label={
                <span
                  style={{
                    color:
                      formik.touched.email && formik.errors.email
                        ? "red"
                        : "inherit",
                  }}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email Address"}
                </span>
              }
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={getInputBorderClass("email")}
              status={
                formik.touched.email && formik.errors.email ? "error" : ""
              }
            />
            <PhoneInput
              onChange={(value) => formik.setFieldValue("contact", value)}
              onBlur={formik.handleBlur}
              name="contact"
              value={formik.values.contact}
              defaultCountry="AE"
              className="w-[100%] webinar_input"
            />
            <button
              disabled={loading}
              className="mt-5 px-4 py-3 bg-primary rounded-full shadow-xl text-secondary w-[200px] mx-auto hover:scale-110 duration-300 transition-transform"
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span>Submit Now</span>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Response
              </ModalHeader>
              <ModalBody>
                <p>{modalMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default WeeklyWebinars;
