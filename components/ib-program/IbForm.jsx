"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const IbForm = () => {
  const locale = useLocale();
  const t = useTranslations("ib.form");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");

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
        errors.contact = t("contact_required_error");
      }
      return errors;
    },
    onSubmit: async (values) => {
      const updatedValues = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact: values.contact,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `https://primexbroker.com/api/ib_form`,
          JSON.stringify(updatedValues)
        );
        console.log("Response", response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast("Thanks for contacting us our support will be in touch");
        formik.resetForm();
      }
    },
  });

  return (
    <section id="ib-form" className="py-20">
      <div className="container">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <div className="h-[500px] bg-no-repeat bg-cover bg-center sm:bg-inherit bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-form.webp)]"></div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 flex justify-center md:justify-end">
            <form
              onSubmit={formik.handleSubmit}
              className="bg-secondary h-[auto] px-8 py-10 rounded-3xl w-[394px]"
            >
              <h2 className="text-3xl mb-10 text-accent font-semibold text-center">
                {t("title")}
              </h2>
              <div className="grid grid-cols-12 gap-y-4">
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="text"
                      label={t("f_name")}
                      classNames={{
                        label: `${
                          formik.touched.first_name && formik.errors.first_name
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      name="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="text"
                      label={t("l_name")}
                      classNames={{
                        label: `${
                          formik.touched.last_name && formik.errors.last_name
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      name="last_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="email"
                      label={t("email")}
                      classNames={{
                        label: `${
                          formik.touched.email && formik.errors.email
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    {/* <Input
                      size="lg"
                      type="number"
                      label={t("contact")}
                      classNames={{
                        label: `${
                          formik.touched.contact && formik.errors.contact
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      name="contact"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contact}
                    /> */}
                    <PhoneInput
                      international
                      defaultCountry={countryCode}
                      onChange={(value) =>
                        formik.setFieldValue("contact", value)
                      }
                      onBlur={formik.handleBlur}
                      name="contact"
                      value={formik.values.contact}
                      className="w-full bg-white h-16 rounded-xl"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="text-center">
                    <Button
                      disabled={loading}
                      type="submit"
                      className="text-secondary font-semibold h-12 px-10"
                      radius="full"
                      size="lg"
                      color="primary"
                    >
                      <div className="flex gap-1 items-center">
                        {loading && (
                          <div className="spinner inline-block"></div>
                        )}{" "}
                        {loading ? (
                          <span className="text-center">Sending...</span>
                        ) : (
                          <span>{t("form_btn")}</span>
                        )}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IbForm;
