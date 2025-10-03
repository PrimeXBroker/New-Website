"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import { phoneOptions } from "@/utils/data";
import axios from "axios";
import * as csc from "countrycitystatejson";
import { Spinner } from "@nextui-org/react";
import StaticViewDatePicker from "./StaticViewDatePicker";
import CustomSelectDropdown from "./CustomSelectDropdown";
import {
  MdOutlineContentCopy,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { LuCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
  { label: "Kurdish", value: "ku" },
  { label: "Español", value: "es" },
  { label: "Pashto", value: "ps" },
];

export default function SignUpStep({
  handleNext,
  setFormData,
  formData,
  setSelectedPhone,
  selectedPhone,
  sendEmail,
  setIsChecked,
  isChecked,
}) {
  const t = useTranslations("registration.signUpStep");
  const t1 = useTranslations("registration.personalInfoStep");
  const t2 = useTranslations("registration.createPassword");
  const t3 = useTranslations("contactUs.suggestionForm");

  const entityOptions = [
    { label: t3("lucia"), value: "lucia" },
    { label: t3("mauritius"), value: "mauritius" },
    { label: t3("south_africa"), value: "south_africa" },
  ];

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    country: "",
    city: "",
    language: "",
    password: "",
  });
  const [selectedEntity, setSelectedEntity] = useState("lucia");
  const [loading, setLoading] = useState(false);

  const handleEntityChange = (selectedOption) => {
    setSelectedEntity(selectedOption); // Update selected entity
  };

  // useEffect(() => {
  //   const countriesList = Country.getAllCountries().map((country) => ({
  //     label: country.name,
  //     code: `+${country.phonecode}`,
  //     isoCode: country.isoCode.toUpperCase(),
  //     flag: `https://flagcdn.com/w40/${country.isoCode.toLowerCase()}.png`,
  //   }));

  //   setCountries(countriesList);

  //   setSelectedPhone(phoneOptions[0] ?? countriesList[0]);

  //   axios
  //     .get("https://ipapi.co/country/")
  //     .then((res) => {
  //       const userCountryCode = res.data?.toUpperCase() || null;
  //       const userCountry = countriesList.find(
  //         (c) => c.isoCode === userCountryCode
  //       );
  //       if (userCountry) setSelectedPhone(userCountry);
  //     })
  //     .catch(() => {});
  // }, []);

  useEffect(() => {
    // Get all country short names (e.g., 'US', 'IN')
    const countriesData = csc.getCountries();

    const countriesList = countriesData.map((countryData) => {
      return {
        label: countryData?.name,
        isoCode: countryData?.shortName,
        code: `+${countryData?.phone || "1"}`, // fallback to +1
        flag: `https://flagcdn.com/w40/${countryData?.shortName?.toLowerCase()}.png`,
      };
    });

    setCountries(countriesList);

    // Set default phone option
    setSelectedPhone(phoneOptions[0] ?? countriesList[0]);

    // Auto-detect user country via IP
    axios
      .get("https://ipapi.co/country/")
      .then((res) => {
        const userCountryCode = res.data?.trim().toUpperCase();
        const detectedCountry = countriesList.find(
          (c) => c.isoCode === userCountryCode
        );
        if (detectedCountry) setSelectedPhone(detectedCountry);
      })
      .catch((err) => {
        console.warn("Could not detect country:", err);
      });
  }, []);

  useEffect(() => {
    if (!formData?.country?.isoCode) {
      setCities([]);
      return;
    }

    try {
      // Get all states for the selected country
      const states = csc.getStatesByShort(formData.country.isoCode);

      let cityList = [];

      if (Array.isArray(states)) {
        for (const stateName of states) {
          const stateCities = csc.getCities(
            formData.country.isoCode,
            stateName
          );
          if (Array.isArray(stateCities)) {
            cityList = cityList.concat(
              stateCities.map((city) => ({
                label: typeof city === "object" ? city.name : city,
                value: typeof city === "object" ? city.name : city,
              }))
            );
          }
        }
      } else {
        console.warn("No states found for", formData.country.isoCode);
      }

      const uniqueCities = Array.from(
        new Map(cityList.map((city) => [city.label, city])).values()
      );

      // // Sort alphabetically
      const sortedCities = uniqueCities.sort((a, b) =>
        a.label.localeCompare(b.label)
      );

      setCities(sortedCities);
      setFormData((prev) => ({ ...prev, city: "" }));
    } catch (err) {
      console.error("Error fetching cities:", err);
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  }, [formData?.country]);
  // useEffect(() => {
  //   if (!formData?.country) return;

  //   const cityList = City.getCitiesOfCountry(formData?.country?.isoCode).map(
  //     (city) => ({
  //       label: city.name,
  //       value: city.name,
  //     })
  //   );

  //   setCities(cityList);
  //   setFormData({ ...formData, city: "" });
  // }, [formData?.country]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const copyToClipboard = () => {
    if (formData?.password?.first) {
      navigator.clipboard.writeText(formData?.password?.first).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const generateRandomPassword = () => {
    const minLength = 10;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let password =
      lowercase[Math.floor(Math.random() * lowercase.length)] +
      uppercase[Math.floor(Math.random() * uppercase.length)] +
      numbers[Math.floor(Math.random() * numbers.length)];

    const allOptions = lowercase + uppercase + numbers;

    for (let i = password.length; i < minLength; i++) {
      password += allOptions[Math.floor(Math.random() * allOptions.length)];
    }

    const shuffledPassword = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    handleChange(shuffledPassword);
  };

  const handleChange = (pass) => {
    setFormData({
      ...formData,
      password: { first: pass, second: pass },
    });
    if (pass.trim() !== "") {
      setErrors({ ...errors, password: "" });
    }
  };

  const criteria = [
    {
      text: t2("password_criteria_1"),
      valid: /(?=.*[a-z])(?=.*[A-Z])/.test(formData?.password?.first),
    },
    {
      text: t2("password_criteria_2"),
      valid: /\d/.test(formData?.password?.first),
    },
    {
      text: t2("password_criteria_3"),
      valid: formData?.password?.first?.length >= 8,
    },
  ];

  useEffect(() => {
    setShowCriteria(formData?.password?.first?.length > 0);
  }, [formData?.password]);

  const handleInputChange = (field, value) => {
    if (field === "firstName" || field === "lastName") {
      if (!/^[A-Za-z]*$/.test(value)) {
        return;
      }
    }
    setFormData({ ...formData, [field]: value });
    if (value.trim() !== "") {
      setErrors((prevError) => ({ ...prevError, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newError = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      language: "",
      password: "",
    };

    if (!formData.firstName) {
      newError.firstName = "First Name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newError.firstName = "First Name must contain only alphabets";
    }

    if (!formData.lastName) {
      newError.lastName = "Last Name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newError.lastName = "Last Name must contain only alphabets";
    }

    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email";
    }
    if (!formData.phone) {
      newError.phone = "Phone Number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 9) {
      newError.phone = "Phone Number must be at least 9 digits";
    }
    if (!formData.phone) {
      newError.phone = "Phone Number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 9) {
      newError.phone = "Phone Number must be at least 9 digits";
    }
    if (!formData.birthDate) newError.birthDate = "Please Select DOB";
    if (!formData?.country) newError.country = "Please Select Country";
    if (!formData?.city) newError.city = "Please Select City";
    if (!formData?.language) newError.language = "Please Select Language";
    if (!formData?.password?.first) newError.password = "Password is required";

    setErrors(newError);

    // Check if there are any errors
    return Object.values(newError).every((val) => !val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // try {
      setLoading(true);

      const birthDateObj =
        formData.birthDate instanceof Date
          ? formData.birthDate
          : new Date(formData.birthDate);

      const data = {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        city: formData?.city,
        email: formData?.email,
        phone: `${selectedPhone?.code}${formData?.phone}`,
        country: formData?.country?.isoCode,
        fullName: `${formData?.firstName} ${formData?.lastName}`,
        birthDate: {
          year: birthDateObj.getFullYear(),
          month: birthDateObj.getMonth() + 1,
          day: birthDateObj.getDate(),
        },
        password: formData?.password,
      };

      setFormData({
        ...data,
        birthDate: formData.birthDate,
        country: formData?.country,
        phone: formData?.phone,
      });
      const config = {
        method: "put",
        url: "https://my.primexcapital.com/client-api/registration?version=1.0.0",
        data: data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      try {
        const response = await axios(config);
        console.log(response, "response");

        if (response?.statusText == "OK") {
          console.log("test");
          await sendEmail(e);
        }
      } catch (error) {
        const apiErrors = error?.response?.data?.errors.children;
        const firstName = apiErrors.firstName.errors?.join(", ") || "";
        const lastName = apiErrors.lastName.errors?.join(", ") || "";
        const phone = apiErrors.phone.errors?.join(", ") || "";
        const country = apiErrors.country.errors?.join(", ") || "";
        const city = apiErrors.city.errors?.join(", ") || "";
        const email = apiErrors.email.errors?.join(", ") || "";
        const birthDate = apiErrors.birthDate.errors?.join(", ") || "";

        if (
          firstName ||
          lastName ||
          email ||
          phone ||
          country ||
          city ||
          birthDate
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            firstName,
            lastName,
            email,
            phone,
            country,
            city,
            email,
            birthDate,
          }));
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:flex w-full justify-between sm:mb-3">
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("first_name_label")}
            <input
              type="text"
              placeholder={t("first_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </label>
          {errors?.firstName && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.firstName}
            </p>
          )}
        </div>
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("last_name_label")}
            <input
              type="text"
              placeholder={t("last_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </label>
          {errors?.lastName && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="sm:flex w-full justify-between sm:mb-3">
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("email_label")}
            <input
              type="email"
              placeholder={t("email_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </label>
          {errors?.email && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.email}
            </p>
          )}
        </div>
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("phone_number_label")}
            {selectedPhone && (
              <PhoneNumberInput
                value={formData.phone}
                handleInputChange={handleInputChange}
                setSelectedPhone={setSelectedPhone}
                selectedPhone={selectedPhone}
                countries={countries}
              />
            )}
          </label>
          {errors?.phone && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.phone}
            </p>
          )}
        </div>
      </div>

      <div className="sm:flex w-full justify-between sm:mb-3">
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t1("birthday_label")}
          </label>
          <StaticViewDatePicker
            selectedDate={formData?.birthDate}
            onChange={(date) => {
              setFormData({ ...formData, birthDate: date });
              setErrors((prev) => ({ ...prev, birthDate: "" }));
            }}
            placeholder={t1("birthday_placeholder")}
          />
          {errors?.birthDate && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.birthDate}
            </p>
          )}
        </div>
        <div className="w-full md:w-[49%]  mb-3 sm:mb-0">
          <CustomSelectDropdown
            label={t1("country_label")}
            options={countries}
            selected={formData?.country}
            onChange={(value) => {
              setFormData({ ...formData, country: value });
              setErrors((prev) => ({ ...prev, country: "" }));
            }}
            searchInput={true}
            flag={true}
          />
          {errors?.country && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.country}
            </p>
          )}
        </div>
      </div>
      <div className="md:flex w-full justify-between sm:mb-3">
        <div className="w-full md:w-[49%]">
          <CustomSelectDropdown
            label={t1("city_label")}
            options={cities}
            selected={formData?.city}
            onChange={(value) => {
              setFormData({ ...formData, city: value });
              setErrors((prev) => ({ ...prev, city: "" }));
            }}
            searchInput={true}
            flag={false}
          />
          {errors?.city && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.city}
            </p>
          )}
        </div>
        <div className="w-full md:w-[49%]">
          <CustomSelectDropdown
            label={t1("preferred_language_label")}
            options={languageOptions}
            selected={formData?.language}
            onChange={(value) => {
              setFormData({ ...formData, language: value });
              setErrors((prev) => ({ ...prev, language: "" }));
            }}
            searchInput={false}
            flag={false}
          />
          {errors?.language && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-2">
              {errors?.language}
            </p>
          )}
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full">
          <CustomSelectDropdown
            label={t3("select_entity")}
            options={entityOptions}
            selected={selectedEntity}
            onChange={handleEntityChange}
            searchInput={false}
            flag={false}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="relative w-full">
          <input
            id="passwordInput"
            type={passwordVisible ? "text" : "password"}
            placeholder={t2("password_label")}
            value={formData?.password?.first}
            onChange={(e) => handleChange(e.target.value)}
            className={`appearance-none mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
          />
          {errors?.password && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.password}
            </p>
          )}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute end-5 top-1/2 transform -translate-y-1/2 mt-1"
          >
            {passwordVisible ? (
              <MdOutlineVisibility className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineVisibilityOff className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={copyToClipboard}
            className={`flex items-center justify-center border-1 rounded-md sm:rounded-lg p-4 mt-1 md:mt-2.5 ${
              copied
                ? "border border-gc dark:border-gc-dark bg-gb dark:bg-gb-dark"
                : "border border-e2 dark:border-e2-dark bg-cc dark:bg-cc-dark"
            }`}
          >
            {copied ? (
              <LuCheck className="text-gc dark:text-gc-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineContentCopy className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={generateRandomPassword}
        className={`text-tm dark:text-tm-dark hover:text-pcp dark:hover:text-pcp-dark font-semibold text-sm sm:text-base ${
          !showCriteria
            ? "xs:mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[33px]"
            : ""
        }`}
      >
        {t2("random_password")}
      </button>
      {showCriteria && (
        <div className="flex flex-wrap gap-2 my-4 sm:my-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-2 py-1 rounded-sm ${
                item.valid
                  ? "text-gc dark:text-gc-dark bg-gb dark:bg-gb-dark"
                  : "text-rc dark:text-rc-dark bg-rb dark:bg-rb-dark"
              }`}
              style={{ width: "auto" }}
            >
              {item.valid ? (
                <LuCheck className="flex-shrink-0 me-1 text-xs sm:text-sm" />
              ) : (
                <RxCross2 className="flex-shrink-0 me-1 text-xs sm:text-sm" />
              )}
              <span className="text-xs sm:text-sm font-medium leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          className="terms-checkbox hidden"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          required
        />
        <label
          htmlFor="terms"
          className="terms-label flex items-start cursor-pointer"
        >
          <span className="terms-custom-checkbox w-7 h-4 sm:w-6 sm:h-5 me-2 sm:me-3 mt-1"></span>
          <span className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base">
            {t2("agreement")}
          </span>
        </label>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="flex justify-center items-center gap-3 bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-cb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
        >
          {loading ? (
            <>
              {t("continue_button")}{" "}
              <Spinner variant="spinner" color="default" size="sm" />
            </>
          ) : (
            t("continue_button")
          )}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
