"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiCheck, FiAlertTriangle, FiShieldOff } from "react-icons/fi";
import { MdOutlineEmail, MdErrorOutline } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";
import { LuUserRoundX } from "react-icons/lu";

export default function RegistrationModal({
  isOpen,
  onClose,
  stateType,
  email,
  onSecondaryAction,
}) {
  const locale = useLocale();
  const t = useTranslations("signUpForm.modal");
  const resendT = useTranslations("registration.confirmEmailStep");
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (!isOpen) return;
    setTimer(59);
  }, [isOpen, stateType]);

  useEffect(() => {
    if (!isOpen || stateType !== "success" || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, stateType, timer]);

  if (!isOpen) return null;

  const isResendCounting = stateType === "success" && timer > 0;

  const handleSecondaryClick = async () => {
    if (isResendCounting) return;
    if (stateType === "success") setTimer(59);
    await onSecondaryAction?.();
  };

  const stateConfigs = {
    success: {
      iconBg: "bg-gb dark:bg-gb-dark text-gc dark:text-gc-dark",
      icon: <FiCheck className="w-8 h-8 text-gc dark:text-gc-dark" />,
      title: t("success.title"),
      titleColor: "text-gc dark:text-gc-dark",
      description: t("success.description"),
      cardIcon: (
        <MdOutlineEmail className="w-5 h-5 text-ts dark:text-ts-dark shrink-0" />
      ),
      cardTitle: email || t("fallback_email"),
      cardDesc: t("success.card_description"),
      primaryText: t("success.primary_button"),
      secondaryText: t("success.secondary_button"),
    },
    exists: {
      iconBg: "bg-pcp/10 dark:bg-pcp-dark/10 text-pcp dark:text-pcp-dark",
      icon: <LuUserRoundX className="w-8 h-8 text-pcp dark:text-pcp-dark" />,
      title: t("exists.title"),
      titleColor: "text-tm dark:text-tm-dark",
      description: t("exists.description"),
      cardIcon: (
        <MdOutlineEmail className="w-5 h-5 text-ts dark:text-ts-dark shrink-0" />
      ),
      cardTitle: email || t("fallback_email"),
      cardDesc: t("exists.card_description"),
      primaryText: t("exists.primary_button"),
      secondaryText: t("exists.secondary_button"),
    },
    server_error: {
      iconBg: "bg-rb dark:bg-rb-dark text-rc dark:text-rc-dark",
      icon: <MdErrorOutline className="w-8 h-8 text-rc dark:text-rc-dark" />,
      title: t("server_error.title"),
      titleColor: "text-rc dark:text-rc-dark",
      description: t("server_error.description"),
      cardIcon: (
        <FiShieldOff className="w-5 h-5 text-ts dark:text-ts-dark shrink-0" />
      ),
      cardTitle: t("server_error.card_title"),
      cardDesc: t("server_error.card_description"),
      primaryText: t("server_error.primary_button"),
      secondaryText: t("server_error.secondary_button"),
    },
    timeout: {
      iconBg: "bg-pcp/10 dark:bg-pcp-dark/10 text-pcp dark:text-pcp-dark",
      icon: <FiAlertTriangle className="w-8 h-8 text-pcp dark:text-pcp-dark" />,
      title: t("timeout.title"),
      titleColor: "text-pcp dark:text-pcp-dark",
      description: t("timeout.description"),
      cardIcon: (
        <MdOutlineEmail className="w-5 h-5 text-ts dark:text-ts-dark shrink-0" />
      ),
      cardTitle: t("timeout.card_title"),
      cardDesc: t("timeout.card_description"),
      primaryText: t("timeout.primary_button"),
      secondaryText: t("timeout.secondary_button"),
    },
  };

  const config = stateConfigs[stateType] || stateConfigs.success;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
      <div className="relative w-full max-w-xl bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-2xl p-6 md:p-8 text-tm dark:text-tm-dark">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg bg-transparent border border-e2 dark:border-e2-dark text-ts dark:text-ts-dark"
        >
          <IoClose className="w-5 h-5" />
        </button>
        <div className="flex justify-center mb-6">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${config.iconBg}`}
          >
            {config.icon}
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className={`text-2xl font-semibold mb-2 ${config.titleColor}`}>
            {config.title}
          </h3>
          <p className="text-sm text-ts dark:text-ts-dark  font-medium leading-relaxed">
            {config.description}
          </p>
        </div>
        <div className="bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-xl p-4 flex items-start gap-3.5 mb-6">
          <div className="mt-0.5">{config.cardIcon}</div>
          <div>
            <h4 className="text-sm text-tm dark:text-tm-dark mb-1">
              {config.cardTitle}
            </h4>
            <p className="text-xs font-medium text-ts dark:text-ts-dark leading-relaxed">
              {config.cardDesc}
            </p>
          </div>
        </div>
        {stateType !== "server_error" && stateType !== "timeout" && (
          <div className="space-y-3">
            <button
              onClick={handleSecondaryClick}
              disabled={isResendCounting}
              className="w-full py-4 border border-e2 dark:border-e2-dark text-tm dark:text-tm-dark bg-transparent text-base rounded-lg"
            >
              {isResendCounting
                ? `${resendT("timer_text")} 00:${timer.toString().padStart(2, "0")}`
                : config.secondaryText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
