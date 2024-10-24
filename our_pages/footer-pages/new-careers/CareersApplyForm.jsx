"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import nationality from "../../../public/assets/data/nationality.json";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function CareersApplyForm() {
  const t = useTranslations("careersPage.careersForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [jobs, setJobs] = useState([]);
  const locale = useLocale();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    formik.setFieldValue("job_title", option.name);
    setIsOpenDropdown(false);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `https://ipapi.co/json/?key=K77WYqZkYB204PVwWhbSidveUzBLTtcnvTgiE0rGtd0ww9jH6E`
        );
        if (response.data.country) {
          setCountryCode(response.data.country.toUpperCase());
        } else {
          console.error("Failed to fetch country code");
        }
      } catch (error) {
        console.error("Error fetching location", error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://primexbroker.com/api/get/jobs/category"
        );
        const fetchedJobs = response.data.data;
        const jobOptions = fetchedJobs.map((job) => ({
          id: job._id,
          name: job.title,
        }));
        setJobs(jobOptions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      country: "",
      current_salary: "",
      expected_salary: "",
      years_of_experience: "",
      job_title: "",
      resume: null,
      portfolio: "",
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
      resume: Yup.mixed().required(t("resume_required_error")),
      portfolio: Yup.mixed().required(t("portfolio_required_error")),
      current_salary: Yup.number().required(t("current_salary_required_error")),
      expected_salary: Yup.number().required(
        t("expected_salary_required_error")
      ),
      years_of_experience: Yup.number().required(
        t("experience_required_error")
      ),
      job_title: Yup.string().required(t("job_title_required_error")),
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
        name: `${values.first_name} ${values.last_name}`,
        email: values.email,
        contact: values.contact,
        country: values.country,
        current_salary: values.current_salary,
        expected_salary: values.expected_salary,
        years_of_experience: values.years_of_experience,
        job_title: values.job_title,
        resume: values.resume,
        portfolio: values.portfolio,
      };
      console.log("Submitting form with values:", updatedValues);
      try {
        const res = await axios.post(
          `https://primexbroker.com/api/add/candidate`,
          updatedValues
        );
        if (res.data.success) {
          setFormSubmitted(true);
          onOpen();
        }
      } catch (error) {
        console.error("Error submitting form", error);
      } finally {
        setLoading(false);
        formik.resetForm();
        setResumeName("");
      }
    },
  });

  const handleFileChange = async (file) => {
    if (file) {
      setResumeName(file.name);
      const _id = "1";
      const formData = new FormData();
      formData.append("action", "attachments");
      formData.append("_id", _id);
      formData.append("files[]", file);

      try {
        const imageSendRes = await axios.post(
          `https://primexbroker.com/api/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        formik.setFieldValue("resume", imageSendRes.data.result.file_path);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const handleButtonClick = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <section className="container px-0 py-20">
      <div
        className={`bg-[#111111] border-[#1d1d1d] border-3 lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              {t("title")}
            </h2>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("first_name_label")}
                <input
                  type="text"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  placeholder={t("first_name_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.first_name && formik.errors.first_name
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-[#c6c6c6]">
                {t("last_name_label")}
                <input
                  type="text"
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder={t("last_name_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.last_name && formik.errors.last_name
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("email_label")}
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={t("email_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border-b border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ib-contact">
              <label className="text-xs text-[#c6c6c6]">
                {t("contact_label")}
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  onChange={(value) => formik.setFieldValue("contact", value)}
                  onBlur={formik.handleBlur}
                  name="contact"
                  value={formik.values.contact}
                  className={`ib-phone-input appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.contact && formik.errors.contact
                      ? "border-b border-red-600"
                      : ""
                  }`}
                  placeholder={t("number")}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("current_salary_label")}
                <input
                  type="number"
                  name="current_salary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.current_salary}
                  placeholder={t("current_salary_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.current_salary &&
                    formik.errors.current_salary
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-[#c6c6c6]">
                {t("expected_salary_label")}
                <input
                  type="number"
                  name="expected_salary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.expected_salary}
                  placeholder={t("expected_salary_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.expected_salary &&
                    formik.errors.expected_salary
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
          </div>
          <div className="md:flex w-full justify-between">
            <div className="w-full md:w-[48%] mb-3 md:mb-0">
              <label className="text-xs text-[#c6c6c6]">
                {t("years_of_experience_label")}
                <input
                  type="number"
                  name="years_of_experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.years_of_experience}
                  placeholder={t("years_of_experience_placeholder")}
                  className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                    formik.touched.years_of_experience &&
                    formik.errors.years_of_experience
                      ? "border border-red-600"
                      : ""
                  }`}
                />
              </label>
            </div>
            <div className="w-full md:w-[48%] ">
              <label className="text-xs text-[#c6c6c6]">
                {t("country_label")}
                <select
                  className={`capitalize py-[16px] px-[12px] w-full text-base focus:outline-none border-2 border-[#222222] bg-[#1d1d1d]  text-[#c6c6c6] ${
                    formik.touched.country && formik.errors.country
                      ? "border border-red-600"
                      : ""
                  }`}
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" className="text-[#c6c6c6]">
                    {t("country_placeholder")}
                  </option>
                  {nationality.map((country, index) => {
                    return (
                      <option
                        key={index}
                        value={country.en_short_name}
                        className="text-black bg-white"
                      >
                        {country.en_short_name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>
          <div className="relative w-full">
            <label className="text-xs text-[#c6c6c6]">
              {t("select_job_label")}
              <div
                className="bg-[#1d1d1d] text-[#c6c6c6] border-2 border-[#222222] rounded-[4px] py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer text-base"
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
              >
                <span>{selectedOption || "Select a job"}</span>
                {isOpenDropdown ? (
                  <BiChevronUp size={18} color="#ffffff" />
                ) : (
                  <BiChevronDown size={18} color="#ffffff" />
                )}
              </div>
              {isOpenDropdown && (
                <ul className="absolute left-0 right-0 mt-2 bg-[#1d1d1d] border-2 border-[#222222] rounded-[4px] z-10 max-h-[200px] overflow-y-auto text-base">
                  {jobs.map((job) => (
                    <li
                      key={job.id}
                      className="py-[16px] px-[12px] cursor-pointer hover:bg-[#ffffff] hover:text-[#111111] text-[#c6c6c6] text-base"
                      onClick={() => handleOptionClick(job)}
                    >
                      {job.name}
                    </li>
                  ))}
                </ul>
              )}
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-[#c6c6c6]">
              {t("portfolio_label")}
              <input
                className={`appearance-none border-2 border-[#222222] rounded-[4px] w-full py-[16px] px-[12px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-base ${
                  formik.touched.portfolio && formik.errors.portfolio
                    ? "border border-red-600"
                    : ""
                }`}
                type="text"
                name="portfolio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.portfolio}
                placeholder={t("portfolio_placeholder")}
              />
            </label>
          </div>
          <div className="w-full">
            <label className="text-xs text-[#c6c6c6]">
              {t("resume_label")}
              <div
                className={`border-dashed border-2 border-[#333333] rounded-[12px] w-full py-[40px] px-[20px] text-[#c6c6c6] placeholder:text-[#c6c6c6] bg-[#1d1d1d] focus:outline-none text-center cursor-pointer ${
                  formik.touched.resume && formik.errors.resume
                    ? "border border-red-600"
                    : ""
                }`}
              >
                <input
                  id="resume"
                  type="file"
                  name="resume"
                  className="hiddenInput"
                  onChange={(event) => handleFileChange(event.target.files[0])}
                  style={{ display: "none" }}
                  accept=".pdf"
                />
                <button
                  onClick={() => handleButtonClick("resume")}
                  className="text-white text-lg font-medium"
                >
                  {resumeName || "Upload Resume"}
                </button>

                <div className="text-[#c6c6c6] text-sm mt-2">
                  Click here or drag file to upload
                </div>
              </div>
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-[#c6c6c6] mb-1">{t("condition")}</p>
            <button
              type="submit"
              disabled={loading}
              className="font-semibold py-[16px] px-[10px] text-[#111111] w-full custom-button"
              style={{ borderRadius: "5px" }}
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span>{t("submit_btn")}</span>
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
                <p>{t("success_desc")}</p>
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

export default CareersApplyForm;
