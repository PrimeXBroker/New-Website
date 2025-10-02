"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import moment from "moment-timezone";

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
import DateTimePicker from "./DateTimePicker";

function BookSession() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const t = useTranslations("academy.academyForm");
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const countryCode = useSelector((state) => state.location.location);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState(tomorrow);

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
    {
      id: "1:00 PM - 2:00 PM ( GST + 3 Time )",
      name: "1:00 PM - 2:00 PM ( GST + 3 Time )",
      value: "1:00 PM - 2:00 PM ( GST + 3 Time )",
    },
    {
      id: "3:00 PM - 4:00 PM ( GST + 3 Time )",
      name: "3:00 PM - 4:00 PM ( GST + 3 Time )",
      value: "3:00 PM - 4:00 PM ( GST + 3 Time )",
    },
    {
      id: "5:00 PM - 6:00 PM ( GST + 3 Time )",
      name: "5:00 PM - 6:00 PM ( GST + 3 Time )",
      value: "5:00 PM - 6:00 PM ( GST + 3 Time )",
    },
  ];

  useEffect(() => {
    const selectedDay = moment(selectedDate).day();
    let slots = webinarTypes;
    if (selectedDay === 5) {
      slots = webinarTypes.filter(
        (slot) => slot.value !== "3:00 PM - 4:00 PM ( GST + 3 Time )"
      );
    }
    setAvailableSlots(slots);
  }, [selectedDate]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      accountId: "",
      time: "",
      appointmentFor: "6638c57d544c48054fa68135",
      askAbout: "",
      selectedDate: moment(selectedDate).format("YYYY-MM-DD"),
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
      askAbout: Yup.string().required(t("ask_about_error")),
      selectedDate: Yup.string().required(t("date_error")),
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
        setLoading(true);
        const res = await axios.post(
          "https://primexbroker.com/api/book-schedule",
          values
        );
        if (res.data.success) {
          formik.resetForm();
          formik.setFieldValue("time", "");
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
        className={`bg-cc dark:bg-cc-dark md:w-[80%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-tm dark:text-tm-dark">
              {t("session_title1")}{" "}
              <span className="text-ts dark:text-ts-dark font-normal">
                {t("session_title2")}
              </span>
            </h2>
            <p className="text-xs text-ts dark:text-ts-dark">
              {t("session_desc")}
            </p>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("full_name")}
                <input
                  type="text"
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  placeholder={t("full_name")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("account_number")}
                <input
                  type="text"
                  name="accountId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accountId}
                  placeholder={t("account_number")}
                  className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                    formik.touched.accountId && formik.errors.accountId
                      ? "border border-rc dark:border-rc-dark"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-ts dark:text-ts-dark">
                {t("phoneNumber")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) =>
                    formik.setFieldValue("phoneNumber", value)
                  }
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
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
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
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("select_date_label")}
            </label>
            <DateTimePicker
              selectedDate={selectedDate}
              onChange={(newDate) => {
                setSelectedDate(newDate);
                formik.setFieldValue(
                  "selectedDate",
                  moment(newDate).format("YYYY-MM-DD")
                );
              }}
            />
            {formik.errors.selectedDate && formik.touched.selectedDate && (
              <div className="text-rc dark:text-rc-dark text-xs">
                {formik.errors.selectedDate}
              </div>
            )}
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("availability_label")}
              <CustomSelect
                label={t("availability_label")}
                options={availableSlots}
                value={formik.values.time}
                onChange={(selectedValue) =>
                  formik.setFieldValue("time", selectedValue)
                }
              />
              {formik.errors.time && formik.touched.time && (
                <div className="text-rc dark:text-rc-dark text-xs mt-2">
                  {formik.errors.time}
                </div>
              )}
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("ask_about")}
              <textarea
                name="askAbout"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.askAbout}
                rows="4"
                placeholder={t("write_adv")}
                className={`appearance-none border border-e1 dark:border-e1-dark rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
                  formik.touched.askAbout && formik.errors.askAbout
                    ? "border border-rc dark:border-rc-dark"
                    : ""
                }`}
              />
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
                <p>{t("session_success_desc1")}</p>
                <p>{t("session_success_desc2")}</p>
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

export default BookSession;
