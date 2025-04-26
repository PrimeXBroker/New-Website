"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
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
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/slices/locationSlice";

function WebinarForm() {
  const t = useTranslations("academy.academyForm");
  const dispatch = useDispatch();
  const [upcoming, setUpcoming] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const countryCode = useSelector((state) => state.location.location);
  const locale = useLocale();

  useEffect(() => {
    const fetchLocation = async () => {
      if (countryCode) return;

      try {
        const response = await axios.get("https://ipapi.co/country/");
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

  const webinarTypes = [
    { id: 1, name: t("drop_field_1"), value: "fundamental" },
    { id: 2, name: t("drop_field_2"), value: "Technical" },
  ];

  const handleSelectChange = (selectedValue) => {
    formik.setFieldValue("webinarId", selectedValue);
  };

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
        Object.assign(values, {
          language: locale,
          country: !countryCode || countryCode != "" ? "AE" : countryCode,
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
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  return (
    <section className="container px-0">
      <div
        className={`bg-cc dark:bg-cc-dark md:w-[80%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-tm dark:text-tm-dark">
              {t("webinars_title1")}{" "}
              <span className="text-ts dark:text-ts-dark font-normal">
                {t("webinars_title2")}
              </span>
            </h2>
            <p className="text-xs text-ts dark:text-ts-dark">
              {t("webinars_desc")}
            </p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("first_name")}
                <input
                  type="text"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  placeholder={t("first_name")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.first_name && formik.errors.first_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("last_name")}
                <input
                  type="text"
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder={t("last_name")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.last_name && formik.errors.last_name
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("email")}
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder={t("email")}
                className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.email && formik.errors.email
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
            </label>
          </div>
          <div className="w-full ib-contact">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("phoneNumber")}
              <PhoneInput
                international
                defaultCountry={countryCode}
                onChange={(value) => formik.setFieldValue("phoneNumber", value)}
                onBlur={formik.handleBlur}
                name="phoneNumber"
                value={formik.values.phoneNumber}
                className={`ib-phone-input appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
                placeholder={t("phoneNumber")}
              />
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("webinar_cate")}
              <CustomSelect
                label={t("category")}
                options={upcoming}
                value={formik.values.webinarId}
                onChange={handleSelectChange}
              />
              {formik.errors.webinarId && formik.touched.webinarId && (
                <div className="text-rc dark:text-rc-dark text-xs">
                  {formik.errors.webinarId}
                </div>
              )}
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-ts dark:text-ts-dark mb-1">
              {t("condition")}
            </p>

            <button
              disabled={loading}
              className="transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group py-4 px-3"
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span> {t("form_btn")}</span>
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
                <p>{t("webinar_success_desc")}</p>
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

export default WebinarForm;
