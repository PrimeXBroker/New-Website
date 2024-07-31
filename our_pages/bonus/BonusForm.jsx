"use client";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const BonusForm = () => {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations("bonus.form");
  const formik = useFormik({
    initialValues: {
      name: "",
      requestedAmount: "",
      email: "",
      accountId: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "name can only contain letters."
        )
        .required("full name is required!"),
      email: Yup.string()
        .email("provide valid email")
        .required("email is required"),
      accountId: Yup.string().required("account id required!"),
      requestedAmount: Yup.string().required("deposit amount is required!"),
      terms: Yup.bool().oneOf(
        [true],
        "Please agree to the terms and conditions to proceed."
      ),
    }),
    onSubmit: async (values) => {
      const updatedValues = {
        name: values.name,
        requestedAmount: values.requestedAmount,
        email: values.email,
        accountId: values.accountId,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `https://primexbroker.com/api/create/bonus/request`,
          // JSON.stringify(updatedValues)
          updatedValues
        );
        console.log("Response", response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast.success("Submitted Successfully");
        formik.resetForm();
      }
    },
  });
  return (
    <section className="container my-20">
      <div className="bg-secondary p-10 rounded-3xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-8">
            <h1 className="sectionHeading  text-accent font-semibold text-center">
              <span className="font-normal">{t("title1")}</span>
              {t("title2")}
            </h1>
          </div>
          <div className="col-span-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-12 gap-y-4">
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      classNames={{
                        label: `${
                          formik.touched.name && formik.errors.name
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      size="lg"
                      type="text"
                      label={t("name")}
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      classNames={{
                        label: `${
                          formik.touched.requestedAmount &&
                          formik.errors.requestedAmount
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      size="lg"
                      type="number"
                      label={t("profit_number")}
                      name="requestedAmount"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.requestedAmount}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      classNames={{
                        label: `${
                          formik.touched.email && formik.errors.email
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      size="lg"
                      type="email"
                      label={t("email")}
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      classNames={{
                        label: `${
                          formik.touched.accountId && formik.errors.accountId
                            ? "text-danger"
                            : "#000"
                        }`,
                      }}
                      size="lg"
                      type="number"
                      label={t("account_number")}
                      name="accountId"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.accountId}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Checkbox
                      name="terms"
                      id="terms"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value="checked"
                    >
                      <span
                        className={`${
                          formik.touched.terms && formik.errors.terms
                            ? "text-danger"
                            : "text-white"
                        }`}
                      >
                        {t("condition1")}
                      </span>
                      <Link
                        href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/20%25_deposit_bonus.pdf"
                        target="_blank"
                        className="text-primary"
                      >
                        {t("condition2")}
                      </Link>
                    </Checkbox>
                  </div>
                </div>
                <div className="col-span-12 mt-3">
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
                          <span>Submit</span>
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

export default BonusForm;
