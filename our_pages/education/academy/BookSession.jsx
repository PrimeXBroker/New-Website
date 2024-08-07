"use client"
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { LocationContext } from "@/context/location-context";
import axios from 'axios';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";

function BookSession() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { country: originCountry, ip: originIp } = useContext(LocationContext);
    const t = useTranslations("academy.academyForm");
    const [loading, setLoading] = useState(false);

    const webinarTypes = [
        { id: "12:00 PM - 03:00 PM ( GST + 3 Time )", name: "09:00 AM - 12:00 AM ( GST + 3 Time )", value: "12:00 PM - 03:00 PM ( GST + 3 Time )" },
        { id: "12:00 PM - 03:00 PM ( GST + 3 Time )", name: "12:00 PM - 03:00 PM ( GST + 3 Time )", value: "12:00 PM - 03:00 PM ( GST + 3 Time )" },
        { id: "03:00 PM - 05:00 PM ( GST + 3 Time )", name: "03:00 PM - 05:00 PM ( GST + 3 Time )", value: "03:00 PM - 05:00 PM ( GST + 3 Time )" },
    ];


    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            accountId: "",
            time: "",
            appointmentFor: "6638c57d544c48054fa68135"
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
                time: Yup.string().required(t("webinar_required_error")),
            accountId: Yup.number().required("required")
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
                // setLoading(true);
                // const response = await axios.post(
                //     `https://primexbroker.com/api/contact`,
                //     JSON.stringify(values)
                // );
                setLoading(true)

                const res = await axios.post("https://primexbroker.com/api/book-schedule", values) 
                if ( res.data.success ) {
                    formik.resetForm();
                    setLoading(false)
                    onOpen()
                }
                else {
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false)
            } 
        },
    });
    return (
        <section id="academy-form" className="pb-12 container bg-[#E4E5E6] ">
            <div className="shadow-xl bg-[#fff] border-accent border xl:w-[40%] xl:mx-auto lg:w-[40%] lg:mx-auto md:w-[50%] md:mx-auto sm:w-[90%] sm:mx-auto w-[90%] mx-auto rounded-2xl">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col justify-center items-center relative gap-4"
                >
                    <PiUserSquareThin className="opacity-50" size={80} />
                    <div className="mb-4 w-[80%]">
                        <input
                            type="text"
                            name="fullName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            placeholder={t("form_full_name")}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.fullName && formik.errors.fullName
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>
                    <div className="mb-4 w-[80%]">
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder={t("form_email")}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.email && formik.errors.email
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>
                    <div className="mb-4 w-[80%]">
                        <PhoneInput
                            onChange={(value) => formik.setFieldValue("phoneNumber", value)}
                            onBlur={formik.handleBlur}
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            defaultCountry={originCountry}
                            className={`w-[100%] academy_phoneinput ${formik.touched.phoneNumber && formik.errors.phoneNumber
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className="mb-4 w-[80%]">
                        <input
                            type="text"
                            name="accountId"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.accountId}
                            placeholder={"Account Number"}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.accountId && formik.errors.accountId
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className="mb-10 w-[80%]">
                        <select
                            className={`bg-white text-gray-400 w-full placeholder:text-gray-300 outline-none border-b border-b- capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] ${formik.touched.time && formik.errors.time
                                ? "border-b border-red-600"
                                : ""
                                }`}
                            name="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">{"Availaibilty"}</option>
                            {webinarTypes.map((query, el) => {
                                return (
                                    <option key={query.id} value={query.value}>
                                        {query.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <button 
                    className="bg-primary shadow-xl rounded-full font-semibold px-3 py-2 text-secondary w-[150px] absolute bottom-[-30px] mx-auto"
                    disabled={loading}
                    >
                        <div className="flex gap-3 items-center text-center px-6">
                          {loading && (
                            <div className="spinner inline-block"></div>
                          )}
                           {t("form_form_btn")}
                        </div>
                       
                    </button>
                </form>
            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success</ModalHeader>
              <ModalBody>
                <p>
                  Your request to schedule a free webinar has been sent successfully.
                </p>
                <p>Thank you for choosing PrimeX Capital</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
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
    )
}

export default BookSession