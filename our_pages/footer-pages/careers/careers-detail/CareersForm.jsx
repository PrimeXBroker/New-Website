"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
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
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/slices/locationSlice";

const FieldTypes = {
  TEXT: "text",
  DROPDOWN: "dropdown",
  NUMBER: "number",
  EMAIL: "email",
  TEXTAREA: "textarea",
};

function CareersForm({ jobTitle, formId, jobId }) {
  const t = useTranslations("careersPage.careersForm");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const countryCode = useSelector((state) => state.location.location);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [dynamicFields, setDynamicFields] = useState([]);
  const [isFormStructureLoaded, setIsFormStructureLoaded] = useState(false);
  const [isFormIdInvalid, setIsFormIdInvalid] = useState(false);

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
  }, [countryCode, dispatch]);

  const fetchJobForm = useCallback(async () => {
    if (!formId) {
      console.log("formId is null or empty, displaying error message.");
      setIsFormIdInvalid(true);
      setIsFormStructureLoaded(true);
      return;
    }

    setIsFormIdInvalid(false);
    try {
      const response = await axios.get(
        `https://primexbroker.com/api/get/form/structure/${formId}`
      );
      if (
        response.data.success &&
        response.data.data &&
        response.data.data.fields
      ) {
        setDynamicFields(response.data.data.fields);
        setIsFormStructureLoaded(true);
      } else {
        console.error(
          "Failed to fetch job form structure or structure is empty:",
          response.data
        );
        setIsFormStructureLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
      setIsFormStructureLoaded(true);
    }
  }, [formId]);

  useEffect(() => {
    fetchJobForm();
  }, [fetchJobForm]);

  const { initialValues, validationSchema } = useMemo(() => {
    let baseInitialValues = {
      resume: null,
    };
    let baseSchema = {
      resume: Yup.mixed().required(t("resume_required_error")),
    };
    dynamicFields.forEach((field) => {
      const fieldName = field.name.toLowerCase().replace(/\s/g, "_");
      baseInitialValues[fieldName] = "";
      let schema = Yup.string();
      if (field.required) {
        schema = schema.required(`${field.name} is required`);
      }
      if (field.type === FieldTypes.TEXT) {
        if (field.name.toLowerCase().includes("name")) {
          schema = schema.matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            `${field.name} can only contain letters and spaces`
          );
        }
      } else if (field.type === FieldTypes.DROPDOWN) {
      } else if (field.type === FieldTypes.NUMBER) {
        schema = Yup.number().typeError(`${field.name} must be a number`);
        if (field.required) {
          schema = schema.required(`${field.name} is required`);
        } else {
          schema = schema
            .notRequired()
            .nullable(true)
            .transform((value, originalValue) =>
              String(originalValue).trim() === "" ? null : value
            );
        }
      } else if (field.type === FieldTypes.EMAIL) {
        schema = schema.email(`Invalid ${field.name} format`);
      } else if (field.type === FieldTypes.TEXTAREA) {
      }

      baseSchema[fieldName] = schema;
    });
    return {
      initialValues: baseInitialValues,
      validationSchema: Yup.object(baseSchema),
    };
  }, [dynamicFields, t]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validate: () => ({}),
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLoading(true);
      const dynamicData = {};
      dynamicFields.forEach((field) => {
        const fieldName = field.name.toLowerCase().replace(/\s/g, "_");
        dynamicData[fieldName] = values[fieldName];
      });

      const submissionPayload = {
        ...dynamicData,
        resume: values.resume,
        job_title: jobTitle,
        job_id: jobId,
      };
      console.log("Submitting form with payload:", submissionPayload);
      try {
        const res = await axios.post(
          `https://primexbroker.com/api/add/candidate`,
          submissionPayload
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

  const renderInputField = (field) => {
    const fieldName = field.name.toLowerCase().replace(/\s/g, "_");
    const isError = formik.touched[fieldName] && formik.errors[fieldName];
    const baseClass = `appearance-none border-2 rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-base ${
      isError
        ? "border-rc dark:border-rc-dark"
        : "border-e1 dark:border-e1-dark"
    }`;
    const requiredAsterisk = field.required ? (
      <span className="text-rc dark:text-rc-dark ms-1 text-base">*</span>
    ) : null;
    const labelText = (
      <>
        {field.name}
        {requiredAsterisk}
      </>
    );
    const placeholderText = `Enter ${field.name}`;
    const errorText = isError ? formik.errors[fieldName] : null;
    if (
      field.type === FieldTypes.TEXT ||
      field.type === FieldTypes.EMAIL ||
      field.type === FieldTypes.NUMBER
    ) {
      let inputType = "text";
      if (field.type === FieldTypes.EMAIL) inputType = "email";
      if (field.type === FieldTypes.NUMBER) inputType = "number";
      return (
        <div key={field.id} className="w-full">
          <label className="text-xs text-ts dark:text-ts-dark">
            {labelText}
            <input
              type={inputType}
              name={fieldName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[fieldName]}
              placeholder={placeholderText}
              className={baseClass}
              {...(field.type === FieldTypes.NUMBER ? { step: "any" } : {})}
            />
            {errorText && (
              <div className="text-rc dark:text-rc-dark text-xs mt-1">
                {errorText}
              </div>
            )}
          </label>
        </div>
      );
    }
    if (field.type === FieldTypes.TEXTAREA) {
      return (
        <div key={field.id} className="w-full">
          <label className="text-xs text-ts dark:text-ts-dark">
            {labelText}
            <textarea
              name={fieldName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[fieldName]}
              placeholder={placeholderText}
              className={`${baseClass} min-h-[100px] resize-y`}
            />
            {errorText && (
              <div className="text-rc dark:text-rc-dark text-xs mt-1">
                {errorText}
              </div>
            )}
          </label>
        </div>
      );
    }
    if (field.type === FieldTypes.DROPDOWN) {
      return (
        <div key={field.id} className="w-full">
          <label className="text-xs text-ts dark:text-ts-dark">
            {labelText}
            <select
              className={`capitalize py-[16px] px-[12px] w-full text-base focus:outline-none border-2 rounded-[4px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark ${
                isError
                  ? "border-rc dark:border-rc-dark"
                  : "border-e1 dark:border-e1-dark"
              }`}
              name={fieldName}
              value={formik.values[fieldName]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" className="text-ts dark:text-ts-dark">
                {placeholderText}
              </option>
              {field.options &&
                field.options.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    className="text-p! dark:text-p-dark! bg-cc! dark:bg-cc-dark!"
                  >
                    {option.label}
                  </option>
                ))}
            </select>
            {errorText && (
              <div className="text-rc dark:text-rc-dark text-xs mt-1">
                {errorText}
              </div>
            )}
          </label>
        </div>
      );
    }
    return null;
  };

  const dynamicFieldPairs = useMemo(() => {
    const pairs = [];
    let i = 0;
    while (i < dynamicFields.length) {
      const currentField = dynamicFields[i];
      if (currentField.type === FieldTypes.TEXTAREA) {
        pairs.push([currentField, null]);
        i++;
      } else if (
        i + 1 < dynamicFields.length &&
        dynamicFields[i + 1].type !== FieldTypes.TEXTAREA
      ) {
        pairs.push([currentField, dynamicFields[i + 1]]);
        i += 2;
      } else {
        pairs.push([currentField, null]);
        i++;
      }
    }
    return pairs;
  }, [dynamicFields]);

  if (!isFormStructureLoaded) {
    return (
      <section className="container px-0 py-20">
        <div className="bg-cc dark:bg-cc-dark rounded-[12px] flex justify-center items-center pb-10">
          <div className="ellipsis">
            <span className="dot text-pcp dark:text-pcp-dark">.</span>
            <span className="dot text-pcp dark:text-pcp-dark">.</span>
            <span className="dot text-pcp dark:text-pcp-dark">.</span>
          </div>
        </div>
      </section>
    );
  }

  if (isFormIdInvalid) {
    return (
      <section className="container px-0 py-20">
        <div className="bg-cc dark:bg-cc-dark border-e1 dark:border-e1-dark border-3 lg:w-[100%] rounded-[12px] p-[40px] mx-auto text-tm dark:text-tm-dark text-center">
          <p className="text-lg font-medium">Application Form Not Available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container px-0 py-20">
      <div
        className={`bg-cc dark:bg-cc-dark lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-4"
        >
          <div className="w-full">
            <h2 className="text-[24px] font-semibold text-tm dark:text-tm-dark">
              Application
            </h2>
          </div>
          {dynamicFieldPairs.map((pair, index) => (
            <div key={index} className="md:flex w-full justify-between">
              <div
                className={`w-full ${
                  pair[1] ? "md:w-[48%]" : "md:w-full"
                } mb-3 md:mb-0`}
              >
                {pair[0] && renderInputField(pair[0])}
              </div>
              {pair[1] && (
                <div className="w-full md:w-[48%]">
                  {renderInputField(pair[1])}
                </div>
              )}
            </div>
          ))}
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              Upload your Resume
              <span className="text-rc dark:text-rc-dark ml-1 text-base">
                *
              </span>
              <div
                className={`border-dashed border-2 rounded-[4px] w-full py-[40px] px-[20px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none text-center cursor-pointer ${
                  formik.touched.resume && formik.errors.resume
                    ? "border-rc dark:border-rc-dark"
                    : "border-e2 dark:border-e2-dark"
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
                  className="text-tm dark:text-tm-dark text-lg font-medium"
                  type="button"
                >
                  {resumeName || "Upload Resume"}
                </button>

                <div className="text-ts dark:text-ts-dark text-sm mt-2">
                  Click here or drag file to upload
                </div>
                {formik.touched.resume && formik.errors.resume && (
                  <div className="text-rc dark:text-rc-dark text-xs mt-2">
                    Resume is required
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="w-full">
            <p className="text-xs text-ts dark:text-ts-dark mb-1">
              By submitting this form, you agree to be contacted by our team.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group py-4 px-3"
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <div className="spinner inline-block"></div>
                ) : (
                  <span>Submit</span>
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

export default CareersForm;
