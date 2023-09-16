"use client";

import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
type Props = { question: string; answer: string };

let PricingFAQItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border-x-[1.5px] border-accent w-4/6 text-text mx-auto ${
        !isOpen ? "h-12" : "h-32"
      } px-2 transition-all duration-500 overflow-hidden`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center mb-4 h-12">
        <div>{question}</div>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
          <BsChevronDown />
        </div>
      </div>

      <div
        className={`py-1 ${
          isOpen ? "opacity-80" : "opacity-0"
        } transition-opacity duration-500 text-text`}
      >
        {answer}
      </div>
    </div>
  );
};

export default PricingFAQItem;
