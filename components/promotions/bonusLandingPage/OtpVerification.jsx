import { Button } from "@nextui-org/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const OtpVerification = ({
  setLoading,
  loading,
  onOpen,
  setIsVerified,
  bonusData,
  setTimer,
  timer,
}) => {
  const t = useTranslations("bonus_landing.form");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    if (value.length === 1 && index === inputsRef.current.length - 1) {
      e.target.blur();
    }

    if (value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        // `http://localhost:4002/api/bonus-landing-verification`,
        `https://primexbroker.com/api/bonus-landing-verification`,
        {
          email: bonusData?.email,
          fullName: bonusData?.fullName,
          otp: otp?.join(""),
        }
      );
      setLoading(false);

      console.log("Response", response);
      setLoading(false);
      toast.success("Verified successfully");
      setIsVerified(false);
      onOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post(
        // `http://localhost:4002/api/bonus-landing-page`,
        `https://primexbroker.com/api/bonus-landing-page`,
        // JSON.stringify(updatedValues)
        bonusData
      );
      toast.success("OTP sent to your mail");
      setTimer(300);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Enter OTP
      </h2>
      <form action={handleSubmit}>
        <div className="flex justify-center space-x-4">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
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
                {loading && <div className="spinner inline-block"></div>}{" "}
                {loading ? (
                  <span className="text-center">Sending...</span>
                ) : (
                  <span>{t("form_btn")}</span>
                )}
              </div>
            </Button>
          </div>
        </div>
      </form>
      <p className="text-center text-gray-500 mt-4">
        Didn't receive the code?{" "}
        <button onClick={sendOtp} disabled={timer > 0}>
          {timer > 0 ? `Resend OTP in ${formatTime(timer)}` : "Send OTP"}
        </button>
      </p>
    </div>
  );
};

export default OtpVerification;
