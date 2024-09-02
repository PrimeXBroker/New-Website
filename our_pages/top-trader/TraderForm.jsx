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

function TraderForm() {
  const t = useTranslations("topTrader.traderForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  console.log(locale, "locale");

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      accountId: "",
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
      accountId: Yup.string().required(t("acc_number_required_error")),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const updatedValues = {
        email: values.email,
        first_name: values.first_name,
        accountId: values.accountId,
        last_name: values.last_name,
        language: locale,
      };
      try {
        const res = await axios.post(
          "https://primexbroker.com/api/register/trade-to-win",
          // "http://localhost:4002/api/register/trade-to-win",
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
            <input
              type="text"
              name="accountId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accountId}
              placeholder={t("acc_number")}
              className={`appearance-none border-b w-full py-2 px-3 text-accent placeholder:text-[#e5e7eb] focus:outline-none text-sm bg-secondary ${
                formik.touched.accountId && formik.errors.accountId
                  ? "border-b border-red-600"
                  : ""
              }`}
            />
          </div>
          <button className="bg-primary shadow-xl rounded-full font-semibold py-2 text-secondary w-[150px] mx-auto mt-5 mb-8">
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

export default TraderForm;
