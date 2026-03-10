"use client";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import React from "react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface ProductSectionProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  last_desc: string;
}

export default function ProductSection({
  tag,
  title,
  description,
  image,
  features,
  last_desc,
}: ProductSectionProps) {
  return (
    <section className="bg-[#fdfbf5] text-[#191919]">
      <div className="lg:flex lg:flex-row flex flex-col lg:gap-12 gap-10">
        {/* LEFT SIDE (Sticky) */}
        <div className=" ">
          <div className="sticky top-24 ">
            <p
              className={`${robotoMono.className} lg:text-md text-md mb-3 lg:mb-0  uppercase  text-[#191919]`}
            >
              {tag}
            </p>

            <h2
              className={`${syne.className} lg:w-100 lg:text-[56px] font-[500] text-[40px] leading-10  md:leading-15 uppercase`}
            >
              {title}
            </h2>

            <p className="text-[#191919]/90 lg:w-100 text-[22px] w-80  md:w-full lg:text-[22px] leading-relaxed font-satoshi">
              {description}
            </p>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="w-px bg-[#191919] border-[0.2px]" />

        {/* RIGHT SIDE */}
        <div className="lg:w-[65%]  space-y-10  ">
          <div className="rounded-2xl overflow-hidden md:h-80 lg:h-auto shadow-md rounded-4xl">
            <img
              src={image}
              alt={title}
              className="lg:w-full object-cover border border-[#191919]/20 rounded-4xl"
            />
          </div>
          <div className="flex flex-col font-[500]">
            <ul className="space-y-4 text-[#191919] font-black leading-relaxed text-xl">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 font-satoshi ">
                  <span className="  mt-2 h-1.5 w-1.5 bg-[#191919] rounded-full text-xl"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl">{last_desc}</p>
        </div>
      </div>

      {/* CUSTOM DIVIDER FORMAT */}
      <div className="w-full border  border-black/50 mb-15 mt-20 border-[0.2px]"></div>
    </section>
  );
}
