"use client";
import Link from "next/link";

import { Syne } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import React from "react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ServiceSectionProps {
  icon?: React.ReactNode;
  title: string;
  bullets?: string[];
  buttonText?: string;
  children: React.ReactNode;
}

export default function ServiceSection({
  icon,
  title,
  bullets,
  buttonText,
  children,
}: ServiceSectionProps) {
  return (
    <section className="bg-[#fdfbf5] text-[#191919]">
      <div className="flex lg:flex-row flex-col">
        {/* LEFT SIDE (Sticky) */}
        <div className="w-[30%] pr-12">
          <div className="sticky top-24 space-y-8 ">
            {icon && <div className="text-6xl">{icon}</div>}

            <h3
              className={`${syne.className} lg:text-5xl text-3xl w-80  font-[500] leading-snug lg:w-100  `}
            >
              {title}
            </h3>

            {bullets && (
              <ul
                className={`${robotoMono.className}   w-100 list-none pl-0 lg:space-y-3 lg:text-md uppercase text-[#191919]`}
              >
                {bullets.map((item, index) => (
                  <li className="mb-5 lg:mb-0" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {buttonText && (
              <Link
                href="/contact"
                className={`${robotoMono.className} group relative inline-flex items-center justify-center px-3 py-2 bg-[#191919] w-40 text-center text-[#fdfbf5] text-sm tracking-widest rounded-lg overflow-hidden`}
              >
                <span className="relative h-5 overflow-hidden">
                  {/* Top text */}
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    {buttonText}
                  </span>

                  {/* Bottom text */}
                  <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
                    {buttonText}
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="  mt-10 lg:hidden w-full  border-[#191919]   border-[0.2px] "></div>

        {/* VERTICAL DIVIDER */}
        <div className=" lg:mt-15 lg:w-px lg:ml-16 bg-[#191919]" />

        {/* RIGHT SIDE */}
        <div className="lg:w-[70%] mt-10 lg:pl-12 lg:py-16 lg:space-y-12">
          {children}
        </div>
      </div>
      <div className="w-full border border-[#191919]/50 mb-10 border-[0.2px] mt-15"></div>
    </section>
  );
}
