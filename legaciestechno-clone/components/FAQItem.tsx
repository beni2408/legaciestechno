"use client";
import { useState } from "react";
import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#191919]/20 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className={` ${syne.className}  text-2xl font-medium`}>
          {question}
        </h3>
        <span className="ml-6">
          {open ? (
            <div className="w-5 bg-black h-5 flex items-center justify-center border-2 border-[#191919] rounded-full font-mono pb-1">
              <h1 className="text-white">x</h1>
            </div>
          ) : (
            <div className="w-5 bg-black h-5 flex items-center justify-center border-2 border-[#191919] rounded-full font-bold">
              <h1 className="text-white">+</h1>
            </div>
          )}
        </span>
      </button>

      {open && (
        <p
          className={` ${syne.className} mt-4 text-[#191919] text-xl leading-relaxed`}
        >
          {answer}
        </p>
      )}
    </div>
  );
}
