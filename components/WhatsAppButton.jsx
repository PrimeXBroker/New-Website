"use client";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/971553941777";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-fab group fixed bottom-[96px] right-[22px] z-[9998] flex h-[56px] w-[56px] items-center justify-center"
    >
      <span className="wa-fab-ping pointer-events-none absolute inset-0 rounded-full bg-[#25D366]" />
      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#1FBE5B] group-hover:shadow-[0_8px_26px_rgba(37,211,102,0.6)]">
        <FaWhatsapp
          size={30}
          className="transition-transform duration-300 ease-out group-hover:rotate-[8deg]"
        />
      </span>
    </a>
  );
}
