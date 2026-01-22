"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import "react-phone-number-input/style.css";
import axios from "axios";
import nationality from "../../public/assets/data/nationality.json";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/slices/locationSlice";
import { Star } from "lucide-react";

function RatingForm({ setIsSuccess }) {
  const t = useTranslations("investmentFunds.successStories");
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
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

  const validationSchema = Yup.object({
    full_name: Yup.string().required(t("modal.form.full_name_required_error")),
    nationality: Yup.string().required(
      t("modal.form.nationality_required_error")
    ),
    review: Yup.string()
      .min(10, t("modal.form.review_min_length_error", { min: 10 }))
      .max(500, t("modal.form.review_max_length_error", { max: 500 }))
      .required(t("modal.form.review_required_error")),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      nationality: "",
      review: "",
      rating: 5,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const updatedValues = {
        ...values,
        rating: rating,
        country: countryCode || "",
      };
      console.log(updatedValues, "updatedValues");

      try {
        const res = await axios.post(
          "https://primexbroker.com/api/rating",
          updatedValues
        );
        if (res.data.success) {
          formik.resetForm();
          setRating(0);
          setLoading(false);
          setIsSuccess(true);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  // Display validation errors helper
  const displayError = (field) => {
    return formik.touched[field] && formik.errors[field] ? (
      <div className="text-rc dark:text-rc-dark text-xs mt-1">
        {formik.errors[field]}
      </div>
    ) : null;
  };

  return (
    <section className="">
      <div
        className={`bg-cc dark:bg-cc-dark md:w-[80%] lg:w-[100%] rounded-[12px] p-6 ms:p-[40px] mx-auto`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center relative gap-2"
        >
          <div className="w-full">
            <h2 className="text-[20px] font-semibold text-tm dark:text-tm-dark">
              {t("modal.form.title")}
            </h2>
            <p className="text-ts dark:text-ts-dark text-xs mx-auto lg:mx-0 font-medium">
              {t("modal.form.description")}
            </p>
          </div>

          {/* Full Name Field */}
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("modal.form.full_name_label")}
              <input
                type="text"
                name="full_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
                placeholder={t("modal.form.full_name_placeholder")}
                className={`appearance-none border-2 rounded-[4px] w-full py-[10px] px-2.5 text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none ${
                  formik.touched.full_name && formik.errors.full_name
                    ? "border-2 border-rc dark:border-rc-dark"
                    : "border-e1 dark:border-e1-dark"
                }`}
              />
            </label>
            {displayError("full_name")}
          </div>

          {/* Rating Field */}
          <div className="w-full">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("modal.form.rating_label")}
            </label>
            <div className="flex items-center justify-between mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`focus:outline-none h-14 w-14 border-2 rounded-lg flex justify-center items-center transition-all duration-200 hover:scale-105 ${
                    star <= rating
                      ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                      : "border-e1 dark:border-e1-dark bg-e1 dark:bg-e1-dark"
                  }`}
                  onClick={() => {
                    setRating(star);
                    formik.setFieldValue("rating", star);
                  }}
                >
                  <Star
                    size={28}
                    className={`${
                      star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Nationality Field */}
          <div className="w-full mb-3 md:mb-0">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("modal.form.nationality_label")}
              <select
                className={`capitalize py-[10px] px-2.5 w-full focus:outline-none rounded-[4px] border-2 text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark ${
                  formik.touched.nationality && formik.errors.nationality
                    ? "border-2 border-rc dark:border-rc-dark"
                    : "border-e1 dark:border-e1-dark"
                }`}
                name="nationality"
                value={formik.values.nationality}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" className="text-ts dark:text-ts-dark">
                  {t("modal.form.nationality_placeholder")}
                </option>
                {nationality.map((nation, index) => {
                  return (
                    <option
                      key={index}
                      value={nation.en_short_name}
                      className="text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark"
                    >
                      {nation.en_short_name}
                    </option>
                  );
                })}
              </select>
            </label>
            {displayError("nationality")}
          </div>

          {/* Review Field */}
          <div className="w-full mb-3">
            <label className="text-xs text-ts dark:text-ts-dark">
              {t("modal.form.review_label")}
              <textarea
                name="review"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.review}
                rows="2"
                placeholder={t("modal.form.write_review")}
                className={`appearance-none border-2 rounded-[4px] w-full py-[16px] px-[12px] text-ts dark:text-ts-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-e1 dark:bg-e1-dark focus:outline-none resize-none ${
                  formik.touched.review && formik.errors.review
                    ? "border-2 border-rc dark:border-rc-dark"
                    : "border-e1 dark:border-e1-dark"
                }`}
              />
            </label>
            <div className="flex justify-between">{displayError("review")}</div>
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              disabled={loading || !formik.isValid || formik.isSubmitting}
              className={`transition-colors duration-300 ease-in-out rounded-lg font-bold w-full flex items-center justify-center gap-3 group py-3 px-3 ${
                loading || !formik.isValid
                  ? "bg-gray-400 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-pcp dark:bg-pcp-dark hover:bg-pcp/90 dark:hover:bg-pcp-dark/90"
              } text-nb dark:text-nb-dark`}
            >
              <div className="flex gap-1 items-center justify-center">
                {loading ? (
                  <>
                    <div className="spinner inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t("modal.form.submitting")}</span>
                  </>
                ) : (
                  <span>{t("modal.form.submit_btn")}</span>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RatingForm;
