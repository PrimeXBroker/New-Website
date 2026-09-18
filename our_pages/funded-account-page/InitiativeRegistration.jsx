"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { FiUploadCloud } from "react-icons/fi";

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

const InitiativeRegistration = () => {
  const t = useTranslations("fundedAccountPage.initiativeRegistration");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const countryCode = useSelector((state) => state.location.location);

  useEffect(() => {
    const fetchLocation = async () => {
      if (countryCode) return;

      try {
        const response = await axios.get(`https://ipapi.co/country/`);
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
      full_name: "",
      email: "",
      contact: "",
      trading_history: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          t("full_name_validation_error"),
        )
        .required(t("full_name_required_error")),
      email: Yup.string()
        .email(t("email_validation_error"))
        .required(t("email_required_error")),
      trading_history: Yup.string().required(
        t("trading_history_required_error"),
      ),
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
        name: values.full_name,
        email: values.email,
        contact: values.contact,
        message: values.trading_history,
      };
      try {
        const res = await axios.post(``, updatedValues);
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

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      formik.setFieldValue("trading_history", file);
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-pcp/[0.0784] dark:bg-pcp-dark/[0.0784] mb-5">
            <span className="w-2 h-2 rounded-full bg-pcp dark:bg-pcp-dark inline-block"></span>
            <span className="text-pcp dark:text-pcp-dark text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("title")}
          </h2>
        </div>
        <div className="bg-cc dark:bg-cc-dark w-full md:w-[80%] lg:w-[50%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center items-center relative gap-4"
          >
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("full_name_label")}
                <input
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  placeholder={t("full_name_placeholder")}
                  className={`appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("email_label")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email_placeholder")}
                  className={`appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full mb-3 ib-contact">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("contact_label")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("contact", value)}
                  onBlur={formik.handleBlur}
                  name="contact"
                  value={formik.values.contact}
                  className={`ib-phone-input appearance-none mt-1 border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.contact && formik.errors.contact
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                  placeholder={t("contact_placeholder")}
                />
              </label>
            </div>
            <div className="w-full mb-3">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("trading_history_label")}

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className={`relative mt-1 border-[2px] border-dashed border-pcp/[0.302] dark:border-pcp-dark/[0.302] rounded-[4px] p-6 text-center cursor-pointer transition-all duration-200 bg-e1 dark:bg-e1-dark ${
                    formik.touched.trading_history &&
                    formik.errors.trading_history
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                >
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "trading_history",
                        event.currentTarget.files[0],
                      );
                    }}
                    onBlur={formik.handleBlur}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1 text-pcp dark:text-pcp-dark">
                      <FiUploadCloud className="w-8 h-8" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-tm dark:text-tm-dark mb-1">
                      {formik.values.trading_history
                        ? formik.values.trading_history.name
                        : t("upload_title")}
                    </span>
                    <span className="text-xs sm:text-sm text-ts dark:text-ts-dark font-medium">
                      {t("upload_subtitle")}
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div className="w-full">
              <button
                disabled={loading}
                className="transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group py-4 px-3"
              >
                <div className="flex gap-1 items-center justify-center">
                  {loading ? (
                    <div className="spinner inline-block"></div>
                  ) : (
                    <span>{t("apply_btn")}</span>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
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
};

export default InitiativeRegistration;
