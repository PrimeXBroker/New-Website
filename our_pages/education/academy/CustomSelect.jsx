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
        className="bg-e1 dark:bg-e1-dark border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark rounded-[4px] py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        {isOpen ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
      </div>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-e1 dark:bg-e1-dark rounded-[4px] z-10">
          {options.map((option) => (
            <li
              key={option.id}
              className="py-[16px] px-[12px] cursor-pointer hover:bg-tm dark:hover:bg-tm-dark hover:text-p dark:hover:text-p-dark text-ts dark:text-ts-dark"
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
