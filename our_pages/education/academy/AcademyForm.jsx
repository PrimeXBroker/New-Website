"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Tab, Tabs } from "@nextui-org/react";
import { useContext, useState } from "react";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";
import { PiSignInFill, PiUserSquareThin } from "react-icons/pi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { LocationContext } from "@/context/location-context";

const webinarTypes = [
  { id: 1, name: "General Inquiry", value: "general" },
  { id: 2, name: "Account Funding", value: "account_funding" }  
];

const AcademyForm = () => {
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      contact: "",
      wtype: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "full name can only contain letters."
        )
        .required("full name is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required!"),
      wtype: Yup.string().required("webinar type is required!"),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.contact) {
        errors.contact = "phone is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://primexbroker.com/api/contact`,
          JSON.stringify(values)
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
    <section className="py-12 container">
      <div className="shadow-xl border-accent border w-[40%] mx-auto rounded-2xl">
        <Tabs
          className="justify-center w-full"
          classNames={{
            tabList: "w-full",
          }}
        >
          <Tab
            title={
              <span className="flex justify-center items-center gap-2">
                <PiSignInFill size={25} /> Signin{" "}
              </span>
            }
          >
            <form className="flex flex-col justify-center items-center">
              <PiUserSquareThin className="opacity-50" size={60} />
              <div className="mb-4">
                <input
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  placeholder={"Full name"}
                  className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={"email"}
                  className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <PhoneInput
                  onChange={(value) => formik.setFieldValue("contact", value)}
                  onBlur={formik.handleBlur}
                  name="contact"
                  value={formik.values.contact}
                  defaultCountry={originCountry}
                  className="w-[100%]"
                />
              </div>
              <div className="mb-4">
                <select
                  className={`bg-white text-secondary w-full placeholder:text-accent capitalize pt-[12px] pb-[0.5rem] px-4 rounded-[5px] ${
                    formik.touched.qtype && formik.errors.qtype
                      ? "border-2 border-red-600"
                      : ""
                  }`}
                  name="wtype"
                  value={formik.values.wtype}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{"Select webinar Category"}</option>
                  {webinarTypes.map((query, el) => {
                    return (
                      <option key={query.id} value={query.value}>
                        {query.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </Tab>
          <Tab
            title={
              <span className="flex justify-center items-center gap-2">
                <FaUserPlus size={25} /> Register{" "}
              </span>
            }
          >
            <form className="flex flex-col justify-center items-center">
              <PiUserSquareThin size={60} className="opacity-50" />
            </form>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default AcademyForm;
