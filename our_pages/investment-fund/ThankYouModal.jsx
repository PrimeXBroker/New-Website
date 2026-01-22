import React from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

function ThankYouModal({ isOpen }) {
  if (!isOpen) return null;
  const t = useTranslations("investmentFunds.successStories");

  return (
    <div className="col-span-12 flex flex-col items-center justify-between w-full h-[60vh] text-tm dark:text-tm-dark text-center">
      {/* Modal Container */}
      <div></div>
      <div className="relative w-full max-w-md mx-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-11 h-11 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold">{t("modal.form.successTitle")}</h2>
          <p className="font-light">{t("modal.form.successDesc")}</p>
        </div>
      </div>
      <div>
        <p className="font-light">{t("modal.form.successFooter")}</p>
      </div>
    </div>
  );
}

export default ThankYouModal;
