import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function CustomSelect({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || label);

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="bg-[#1d1d1d] text-[#c6c6c6] border-2 border-[#222222] rounded-[4px] py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        {isOpen ? (
          <BiChevronUp size={18} color="#ffffff" />
        ) : (
          <BiChevronDown size={18} color="#ffffff" />
        )}
      </div>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-[#1d1d1d] border-2 border-[#222222] rounded-[4px] z-10">
          {options.map((option) => (
            <li
              key={option.id}
              className="py-[16px] px-[12px] cursor-pointer hover:bg-[#ffffff] hover:text-[#111111] text-[#c6c6c6] "
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
