"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import { LocationContext } from "@/context/location-context";
import { Field } from 'formik';
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

function BecomeInstructor() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const { country: originCountry, ip: originIp } = useContext(LocationContext);
    const t = useTranslations("academy.academyForm");


    const workedBefore = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
    ]

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            number: "",
            experience: "",
            specialty: "",
            advantages: "",
            workedWithCompanies: "",
            doneWebinar: "",


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
            experience: Yup.number().required("required"),
            specialty: Yup.string().required(t("webinar_required_error")),
            advantages: Yup.string().required("required"),
            workedWithCompanies: Yup.string().required("required"),
            doneWebinar: Yup.string().required("required"),
        }),
        validate: (values) => {
            const errors = {};
            if (!values.number) {
                errors.number = t("contact_required_error");
            }
            return errors;
        },
        onSubmit: async (values) => {
            setLoading(true)
            try {
                console.log(values, "values");
                const res = await axios.post("https://primexbroker.com/api/instructor", values)
                console.log(res);
                if (res.data.success) {
                    formik.resetForm();
                    setLoading(false)
                    onOpen()
                }
                else {
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                console.log(error);
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
                            placeholder={"Full Name"}
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
                            onChange={(value) => formik.setFieldValue("number", value)}
                            onBlur={formik.handleBlur}
                            name="number"
                            value={formik.values.number}
                            defaultCountry={originCountry}
                            className={`w-[100%] academy_phoneinput ${formik.touched.number && formik.errors.number
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className="mb-4 w-[80%]">
                        <input
                            type="number"
                            name="experience"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                            placeholder={"Years of experience"}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.experience && formik.errors.experience
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className="mb-4 w-[80%]">
                        <input
                            type="text"
                            name="specialty"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.specialty}
                            placeholder={"Speciality"}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.specialty && formik.errors.specialty
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className="mb-4 w-[80%]">
                        <textarea
                            name="advantages"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.advantages}
                            rows='4'
                            placeholder={"Please write any other advantage you have (such as: if you have a Telegram channel or social media pages)"}
                            className={`appearance-none border-b rounded w-full py-2 px-3 text-secondary focus:outline-none ${formik.touched.advantages && formik.errors.advantages
                                ? "border-b border-red-600"
                                : ""
                                }`}
                        />
                    </div>

                    <div className=" w-[80%] appearance-none border-b rounded w-full py-2 px-3 text-[#9CA3AF] text-lg">
                        <label className="block  mb-2">{"Have you ever worked with companies before?"}</label>
                        {workedBefore.map((option) => (
                            <div key={option.value} className="flex items-center mb-2 ml-8">
                                <input
                                    type="radio"
                                    id={`workedWithCompanies${option.value}`}
                                    name="workedWithCompanies"
                                    value={option.value}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.workedWithCompanies === option.value}
                                    className="mr-2"
                                />
                                <label htmlFor={`workedWithCompanies${option.value}`}>{option.label}</label>
                            </div>
                        ))}
                        {formik.touched.years_of_experience && formik.errors.workedWithCompanies ? (
                            <div className="text-red-600">{formik.errors.workedWithCompanies}</div>
                        ) : null}
                    </div>

                    <div className="mb-4 w-[80%] appearance-none border-b rounded w-full py-2 px-3 text-[#9CA3AF] text-lg ">
                        <label className="block text-start  mb-2  px-7">{"Have you ever done a webinar?"}</label>
                        {workedBefore.map((option) => (
                            <div key={option.value} className="flex items-center mb-2 ml-8">
                                <input
                                    type="radio"
                                    id={`doneWebinar${option.value}`}
                                    name="doneWebinar"
                                    value={option.value}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.doneWebinar === option.value}
                                    className="mr-2"
                                />
                                <label htmlFor={`webinar${option.value}`}>{option.label}</label>
                            </div>
                        ))}
                        {formik.touched.doneWebinar && formik.errors.doneWebinar ? (
                            <div className="text-red-600">{formik.errors.doneWebinar}</div>
                        ) : null}
                    </div>



                    <button className="bg-primary shadow-xl rounded-full font-semibold px-3 py-2 text-secondary w-[150px] absolute bottom-[-30px] mx-auto">
                    <div className="flex gap-3 items-center text-center px-5">
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
                                    Thanks for your interest in joining PrimeX Capital. Our team will carefully review your application and reach out to you.
                                </p>
                                {/* <p>Thank you for choosing PrimeX Capital</p> */}
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

export default BecomeInstructor