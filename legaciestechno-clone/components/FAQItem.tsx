"use client";
import { useState } from "react";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#191919]/20 py-6 lg:py-8">
      {/* QUESTION */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start text-left gap-6"
      >
        <h3
          className={`${syne.className} text-lg md:text-xl lg:text-2xl font-medium`}
        >
          {question}
        </h3>

        {/* ICON */}
        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-lg">
          {open ? "x" : "+"}
        </div>
      </button>

      {/* ANSWER */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`${syne.className} text-[#191919] text-base md:text-lg lg:text-xl leading-relaxed`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
